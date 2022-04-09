import React from 'react';
import './Rightbar.css';
import { Users } from '../../dummyData';
import Online from '../Online/Online';

export default function Rightbar({profile}) {


  const HomeRightbar = () =>{
    return (
      <>
        <div className="birthdayContainer">
            <img className='birthdayImg' src="./assets/gift.png" alt="" />
            <span className="birthdayText">
              <b>Sanjai</b> and <b>2 other friends</b> have birthday today.
            </span>
          </div>
          <img src="./assets/ad.png" alt="" className="rightbarAd" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="RightbarFriendList">
            {Users.map(u=> <Online key={u.id} user={u} />)}
          </ul>
      </>
    )
  }

  const ProfileRightbar = () =>{
    return (
      <>
        <h4 className='rightbarTitle'>User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">City:</span>
            <span className="rightbarInfovalue">Chennai</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">Country:</span>
            <span className="rightbarInfovalue">India</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">Relationship:</span>
            <span className="rightbarInfovalue">Single</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User Following</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="./assets/person/s1.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Sanjai Kirren</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./assets/person/s1.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Sanjai Kirren</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./assets/person/s1.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Sanjai Kirren</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./assets/person/s1.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Sanjai Kirren</span>
          </div>
        </div>

      </>
    )
  }

  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
          {profile ? <ProfileRightbar /> : <HomeRightbar />}
        </div>
    </div>
  )
}
