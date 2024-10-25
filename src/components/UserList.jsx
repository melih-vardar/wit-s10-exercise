import React from 'react'
import User from './User'
import { Link } from 'react-router-dom/cjs/react-router-dom'

function UserList({ userList }) {
    console.log(userList)
  return (
    <div className='flex flex-wrap justify-center items-center gap-24 mt-48'>
      {userList && userList.map((user) => 
    <User key={user.id} user={user}/>
    )}
    </div>
  )
}

export default UserList
