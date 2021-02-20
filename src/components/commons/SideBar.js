import React from 'react';
import { FaGem, FaHeart } from 'react-icons/fa';

const SideBar = () => (
  <div className="sidenav">
    <div>
      <FaGem size={25} className="sidenav_icon" />
      <FaHeart size={25} className="sidenav_icon" />
      <FaGem size={25} className="sidenav_icon" />
      <FaHeart size={25} className="sidenav_icon" />
      <FaGem size={25} className="sidenav_icon" />
    </div>
  </div>
);

export default SideBar;
