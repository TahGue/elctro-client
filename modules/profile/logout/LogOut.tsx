import React from 'react'

function LogOut() {
    const logout = () => { 
        localStorage.removeItem("token")
    } 
  return (
      <div>
          <h3>
              Log Out
          </h3>
          <button onClick={logout} >LogOut</button>
    </div>
  )
}

export default LogOut