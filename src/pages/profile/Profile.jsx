import React from 'react'
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import './Profile.css';

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
      <Sidebar />
      <div className="profileRight">
          <div className="profileRightTop">
              <div className="profileCover">
              <img src="assets/person/cover.jpeg" alt="" className="profileCoverImg" />
              <img src="assets/person/s1.jpg" alt="" className="profileUserImg" />
              </div>
              <div className="profileInfo">
                  <h4 className='profileInfoName'>Sanjai Kirren</h4>
                  <span className="profileInfoDesc">A Normal Guy</span>
              </div>
          </div>
          <div className="profileRightBottom">
      <Feed />
      <Rightbar profile/>
      </div>
      </div> 
      </div>
    </>
  )
}
