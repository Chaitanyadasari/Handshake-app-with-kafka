import React from "react";
import { Link, withRouter } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.js";
import usericon from "../images/dp.jpg";
import "../CSS/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";



const companyNavbar = () => {
  
  return (
       
    <div
      className="ui inverted menu"
      
      style={{ paddingTop: "10px", paddingBottom: "10px" , marginTop:'0px',background:'#1569e0'}}
    >
      {/* <div className="ui pointing secondary menu" style={{paddingTop: '10px', paddingBottom: '10px'}}> */}
      <div className="item">
        <h1>HandShake</h1>
      </div>
      <div className="item">
        <div
          className="ui icon input"
          style={{ marginLeft: "10px", width: "350px" }}
        >
          <input type="text" placeholder="Search" />
          <i aria-hidden="true" className="search icon"></i>
        </div>
      </div>
      <div className="right menu">
        <Link to="/company/postjob" className="item">
          Add Job
        </Link>
        <Link to="/company/postevent" className="item">
         Add Events
        </Link>
        <Link  to="/company/viewjob" className="item">
          View Job
        </Link>
        <Link to="/company/post" className="item">
          My Events
        </Link>
        <a
          href="https://www.sjsu.edu/careercenter/"
          target="_blank"
          className="item"
        >
          Career Center
        </a>

        <a className="item">
          <div class="btn-group dropleft">
            <button
              type="button"
              class="btn dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img class="ui avatar image" src={usericon}></img>
            </button>

            <div class="dropdown-menu">
              <a class="dropdown-item" href="/company/companyProfile">
                Profile
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="/">
                Logout
              </a>
            </div>
          </div>
        </a>
      </div>
      {/* </div> */}
    </div>
  );
};

export default companyNavbar;
