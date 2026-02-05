import toast from "react-hot-toast";
import { create } from "zustand";
import { io } from "socket.io-client";

const BASE_URL = process.env.REACT_APP_API_URL;

export const userAuthStore = create((set, get) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  onlineUsers: [],
  socket: null,

  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/auth/check`, {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        set({ authUser: data });
        get().connectSocket();
      } else {
        set({ authUser: null });
      }
    } catch {
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signUp: async (formData) => {
    toast.dismiss();
    try {
      set({ isSigningUp: true });

      const response = await fetch(`${BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        set({ authUser: data });
        toast.success("Signed up successfully");
        get().connectSocket();
      } else {
        toast.error(data.message);
        set({ authUser: null });
      }
    } catch {
      toast.error("Connection error");
      set({ authUser: null });
    } finally {
      set({ isSigningUp: false });
    }
  },

  logIn: async (formData) => {
    toast.dismiss();
    try {
      set({ isLoggingIn: true });

      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        set({ authUser: data });
        toast.success("Logged in successfully");
        get().connectSocket();
      } else {
        toast.error("Invalid credentials");
        set({ authUser: null });
      }
    } catch {
      toast.error("Failed to connect");
      set({ authUser: null });
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logOut: async () => {
    try {
      await fetch(`${BASE_URL}/api/auth/logOut`, {
        method: "GET",
        credentials: "include",
      });

      set({ authUser: null });
      get().disconnectSocket();
      toast.success("Logged out successfully");
    } catch {
      toast.error("Failed to connect");
    }
  },

  uploadProfilePic: async (selectedImage) => {
    try {
      set({ isUpdatingProfile: true });

      const response = await fetch(`${BASE_URL}/api/auth/updateprofile`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selectedImage),
        credentials: "include",
      });

      response.ok
        ? toast.success("Profile updated successfully")
        : toast.error("Error updating profile");
    } catch {
      toast.error("Failed to connect");
    } finally {
      set({ isUpdatingProfile: false });
    }
  },

  connectSocket: () => {
    const { authUser } = get();
    if (!authUser || get().socket?.connected) return;

    const socket = io(BASE_URL, {
      query: { userId: authUser._id },
      withCredentials: true,
    });

    set({ socket });

    socket.on("getOnlineUsers", (userIds) => {
      set({ onlineUsers: userIds });
    });
  },

  disconnectSocket: () => {
    if (get().socket?.connected) {
      get().socket.disconnect();
    }
  },
}));
