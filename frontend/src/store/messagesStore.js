import { create } from "zustand";
import { userAuthStore } from "./userAuthStore";

const BASE_URL = process.env.REACT_APP_API_URL;

export const messageStore = create((set, get) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,
  isMessageSending: false,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const response = await fetch(`${BASE_URL}/api/message/users`, {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        set({ users: data });
      } else {
        set({ users: [] });
      }
    } catch (error) {
      console.log("Error in Fetching Users");
      set({ users: [] });
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getMessages: async () => {
    const { selectedUser } = get();
    if (!selectedUser) return;

    set({ isMessagesLoading: true });
    try {
      const response = await fetch(
        `${BASE_URL}/api/message/${selectedUser._id}`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (response.ok) {
        const data = await response.json();
        set({ messages: data });
      } else {
        set({ messages: [] });
      }
    } catch (error) {
      set({ messages: [] });
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  setSelectedUser: (selectedUser) => {
    set({ selectedUser });
  },

  sendMessage: async (messageData) => {
    const { selectedUser } = get();
    if (!selectedUser) return;

    set({ isMessageSending: true });
    try {
      await fetch(
        `${BASE_URL}/api/message/send/${selectedUser._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(messageData),
          credentials: "include",
        }
      );
    } catch (error) {
      console.log("error at sending message", error);
    } finally {
      set({ isMessageSending: false });
    }
  },

  deleteChat: async () => {
    const { selectedUser } = get();
    if (!selectedUser) return;

    try {
      const response = await fetch(
        `${BASE_URL}/api/message/deletemessages/${selectedUser._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (response.ok) {
        get().getMessages();
        console.log("Chat deleted successfully");
      } else {
        console.error("Failed to delete chat");
      }
    } catch (error) {
      console.error("Error while deleting chat:", error);
    }
  },

  subscribeToMessages: () => {
    const { selectedUser } = get();
    if (!selectedUser) return;

    const socket = userAuthStore.getState().socket;
    if (!socket) return;

    socket.on("newMessage", (newMessage) => {
      set({ messages: [...get().messages, newMessage] });
    });
  },

  unSubscribeFromMessages: () => {
    const socket = userAuthStore.getState().socket;
    if (!socket) return;

    socket.off("newMessage");
  },
}));
