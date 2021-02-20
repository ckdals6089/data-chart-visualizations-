import React from 'react';
import { IoGlobeOutline } from 'react-icons/io5';
import { AiOutlinePushpin } from 'react-icons/ai';

const Header = () => {
  return (
    <div className="header">
      <h4>PERFORMANCE MANAGEMENT</h4>
      <div>
        <span>
          <IoGlobeOutline size={30} />
          Diagnostic Tool
          <AiOutlinePushpin className="pin" size={30} />
        </span>
      </div>
    </div>
  );
};

export default Header;
