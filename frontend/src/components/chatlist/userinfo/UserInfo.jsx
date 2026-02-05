import './userinfo.css'
import { userAuthStore } from '../../../store/userAuthStore'

const UserInfo = () => {
  const { authUser } = userAuthStore()

  return (
    <div className='userinfo'>
      <div className="user">
        <a href="./updateprofile">
          <img src={authUser.profilePic} alt="" />
        </a>
        <p>{authUser.fullName}</p>
        <img id="im" src="./images/info-2-64.png" alt="info" />
      </div>
    </div>
  )
}

export default UserInfo
