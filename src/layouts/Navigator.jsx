import React from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import UserDetail from '../pages/UserDetail'

function Navigator({ setUser, userList, setSelectedUsers, selectedUsers }) {
    return (
        <>
        <Switch>
          <Route path="/home">
          <Home userList={userList}/>
          </Route>
          <Route exact path="/">
          <Login setUser={setUser}/>
          </Route>
          <Route path="/user/detail/:id">
          <UserDetail userList={userList} setSelectedUsers={setSelectedUsers} selectedUsers={selectedUsers}/>
          </Route>
          </Switch>
        </>
      )
    }
    

export default Navigator
