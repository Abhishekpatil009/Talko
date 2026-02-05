import './ChatList.css'
import UserInfo from './userinfo/UserInfo'
import List from './list/List'

const ChatList = ({ visibility }) => {
  return (
    <div className='ChatList' style={{ display: visibility }}>
      <UserInfo />
      <List />
    </div>
  )
}

export default ChatList
