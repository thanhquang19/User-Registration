import React from 'react'

export default function UserProfile(props) {

  const handleSignOut = (e) => {
    e.preventDefault();
    props.signOut();
  }
  return (
    <div>
      <h2>User Profile</h2>
      <h3>{props.currentUser.authentication.username}</h3>
      <h3>{props.currentUser.email}</h3>
      <button className='btn' id='signout-btn' onClick={handleSignOut}>sign-out</button>
      <button className='btn' id='changePass-btn'>change password</button>
    </div> 
    // at least add sign-out button to this page
  )
}
