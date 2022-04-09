import React from 'react';
import './Sidebar.css';
import {Bookmark, Event, Group, HelpOutline, RssFeed, School, WorkOutline} from '@mui/icons-material'
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { Users } from '../../dummyData';
import Closefriend from '../closefriends/Closefriend';

export default function Sidebar() {
    return(
        <div className='sidebar'>
           <div className="sidebarWrapper">
               <ul className="sidebarList">
                   <li className="sidebarListItem">
                       <RssFeed className='sidebarIcon'/>
                       <span className="sidebarListItemText">Feed</span>
                   </li>
                   <li className="sidebarListItem">
                       <ChatIcon className='sidebarIcon'/>
                       <span className="sidebarListItemText">Chats</span>
                   </li>
                   <li className="sidebarListItem">
                       <VideoLibraryIcon className='sidebarIcon'/>
                       <span className="sidebarListItemText">Videos</span>
                   </li>
                   <li className="sidebarListItem">
                       <Group className='sidebarIcon'/>
                       <span className="sidebarListItemText">Groups</span>
                   </li>
                   <li className="sidebarListItem">
                       <Bookmark className='sidebarIcon'/>
                       <span className="sidebarListItemText">Bookmarks</span>
                   </li>
                   <li className="sidebarListItem">
                       <HelpOutline className='sidebarIcon'/>
                       <span className="sidebarListItemText">Questions</span>
                   </li>
                   <li className="sidebarListItem">
                       <WorkOutline className='sidebarIcon'/>
                       <span className="sidebarListItemText">Jobs</span>
                   </li>
                   <li className="sidebarListItem">
                       <Event className='sidebarIcon'/>
                       <span className="sidebarListItemText">Events</span>
                   </li>
                   <li className="sidebarListItem">
                       <School className='sidebarIcon'/>
                       <span className="sidebarListItemText">Courses</span>
                   </li>
               </ul>
               <button className='sidebarButton'>Show More</button>
               <hr className='sidebarHr' />
                <ul className="sidebarFriendList">
                {Users.map(u=> <Closefriend key={u.id} user={u} />)}
                </ul>
           </div>
        </div>
    )
}