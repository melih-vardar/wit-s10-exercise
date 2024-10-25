import { useEffect, useState } from 'react'
import './App.css'
import Header from './layouts/Header'
import Navigator from './layouts/Navigator'
import axios from 'axios';


function App() {
  const [user, setUser] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios
    .get('https://reqres.in/api/users')
    .then(response => setUserList(response.data.data))
  }, [])

  return (
    <>
    <Header user={user} setUser={setUser} selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers} />
    <Navigator setUser={setUser} userList={userList} setSelectedUsers={setSelectedUsers} selectedUsers={selectedUsers} />
    </>
  )
}

export default App
