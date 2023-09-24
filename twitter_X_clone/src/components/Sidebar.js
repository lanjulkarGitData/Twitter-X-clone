import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaRegBell,
  FaRegEnvelope,
  FaRegBookmark,
  FaClipboardList,
  FaUserAlt,
  FaMehBlank,
  FaBorderNone,
} from "react-icons/fa";
const Sidebar = () => {
  
  const notify = () => toast.success("Wow so easy!",{
    position:'top-center',
    autoClose:40000,
    closeOnClick: true,
    pauseOnHover: true,
    
  });
  
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="">
            <FaTwitter className="icons logo" />
          </a>
        </li>
        <li>
          <a href="">
            <FaHome className="icons logo" />
            Home
          </a>
        </li>
        <li>
          <a href="">
            <FaHashtag className="icons" /> Explore
          </a>
        </li>
        <li>
          
          <a href="" onClick={notify}>
            <FaRegBell className="icons" /> Notifications
          </a>
          
        </li>
        <ToastContainer/>
        <li>
          <a href="">
            <FaRegEnvelope className="icons" /> Messages
          </a>
        </li>
        <li>
          <a href="">
            <FaRegBookmark className="icons" /> Bookmarks
          </a>
        </li>
        <li>
          <a href="">
            <FaClipboardList className="icons" /> Lists
          </a>
        </li>
        <li>
          <a href="">
            <FaUserAlt className="icons" /> Profile
          </a>
        </li>
        <li>
          <a href="">
            <FaMehBlank className="icons" /> More
          </a>
        </li>
        <div className="sidebar__Btn">
          <a href="">Profile</a>
        </div>
        
      </ul>
    </div>
  );
};

export default Sidebar;