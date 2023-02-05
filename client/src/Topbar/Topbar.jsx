import "./Topbar.css";
//import SearchIcon from '@mui/icons-material/Search';
import { Search, WhatsApp } from "@mui/icons-material";
import { Button } from "@mui/material";
//import { Link } from "react-router-dom";
//import { useContext } from "react";

import { useState } from "react";
import Home from "../Home/Home";
const Topbar = () => {
  const [isHomePage,setHomePage] = useState(<Home/>);
  return (
    
    <div className="topbarContainer">
      <div className="topbarLeft">
       
          <span className="logo">ChatApp</span>
        
      </div>
     
      <div className="topbarRight">
      {isHomePage && (
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
         { /*<span className="topbarLink">Timeline</span>*/}
        
        </div>)}
        <div className="topbarIcons">
          
          <div className="topbarIconItem">
            <WhatsApp />
            <span className="topbarIconBadge">2</span>
          </div>
         
        </div>
        </div>
    </div>
  )
}

export default Topbar