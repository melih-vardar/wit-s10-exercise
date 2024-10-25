import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom'

function UserDetail({ userList, setSelectedUsers, selectedUsers }) {

  const {id} = useParams();
  const foundUserById = userList.find((user) => user.id === Number(id))
  const {email, avatar, first_name, last_name} = foundUserById

  const handleHire = (user) => {
    setSelectedUsers([...selectedUsers, user])
  }

  return (
    <div className ='flex flex-col items-center mt-32'>
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className = "flex flex-col items-center py-10 px-4 gap-1">
      <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={avatar} />
      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{first_name} {last_name}</h5>
      <span class="text-sm text-gray-500 dark:text-gray-400">{email}</span>
      <button onClick={() => handleHire(foundUserById)} className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Select User</button>
    </div>
    </div>
    </div>
  )
}

export default UserDetail