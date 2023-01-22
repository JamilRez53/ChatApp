import "./Topbar.css";
//import SearchIcon from '@mui/icons-material/Search';
import { Search, WhatsApp } from "@mui/icons-material";
//import { Link } from "react-router-dom";
//import { useContext } from "react";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
       
          <span className="logo">ChatApp</span>
        
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for Users"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
         { /*<span className="topbarLink">Timeline</span>*/}
        </div>
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