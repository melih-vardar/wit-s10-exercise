import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

function User({ user }) {

    const history = useHistory();

    const handleSeeDetails = (id) => {
        history.push(`/user/detail/${id}`)
    }

  return (
    <div className ='flex flex-col items-center'>
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className = "flex flex-col items-center py-10 px-4 gap-1">
      <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user.avatar} />
      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.first_name}</h5>
      <button onClick={() => handleSeeDetails(user.id)} className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">See Details</button>
    </div>
    </div>
    </div>
  )
}

export default User

