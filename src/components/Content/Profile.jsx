import React from 'react'
import "./index.scss"
import profile from "../../assets/profile.png"

const Profile = () => {
  return (
    <div className='profile'>
        <div>
          <img src={profile} alt="" />
        </div>
    </div>
  )
}

export default Profile