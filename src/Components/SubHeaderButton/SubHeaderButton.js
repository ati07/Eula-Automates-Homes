import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link } from "react-router-dom";
import "./SubHeaderButton.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    display: "none",
    marginRight: theme.spacing(2),
    backgroundColor: "#9d9b86",
    color: "#000",
  },
  button: {
    height: 50,
    // textDecoration: 'none',
    "&:hover": {
      backgroundColor: "#9d9b86",
      // textDecoration: 'none'
    },
    "&:hover&$paper": {
      display: "block",
    },
  },
  a: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function SubHeaderButton({ Name, subName,link }) {
  // return focus to the button when we transitioned from !open -> open
 
  return (
    <div class="dropdown">
      <Link to={link} style={{textDecorection:'none'}}>
      <button class="dropbtn" >
      
        {Name}{subName?<ArrowDropDownIcon/>:''}
        
        </button>
      </Link>
      <div class="dropdown-content">
        {subName?subName['Title'].map((item,i)=>(
          <Link to={subName['link'][i]} >{item}</Link>
        )):''}
        
        {/* <a href="#">Link 2</a>
        <a href="#">Link 3</a> */}
      </div>
    </div>
  );
}
