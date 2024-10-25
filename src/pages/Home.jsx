import React from 'react'
import UserList from '../components/UserList'

function Home({userList}) {
  return (
    <div>
     <UserList userList={userList} />
    </div>
  )
}

export default Home
