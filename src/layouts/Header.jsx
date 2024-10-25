import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

function Header({ user, selectedUsers, setUser, setSelectedUsers }) {

  const history = useHistory();

  const itsComingHome = () => {
    history.push('/home')
  }

  const navToLogin = () => {
    setUser(null)
    setSelectedUsers([])
    history.push('/')
  }

  console.log(selectedUsers)

  return (
    <div className='flex justify-between bg-gray-600 text-white py-8 px-4'>
      <p>{user}</p>
      <div className='flex gap-12'>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={itsComingHome}>Home</button>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick = {navToLogin}>Logout</button>
      </div>
      <p>{selectedUsers.length}</p>
    </div>
  )
}

export default Header
