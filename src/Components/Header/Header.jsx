import React, { useState } from 'react'
import './Header.css'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { SiGooglegemini } from "react-icons/si";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";

export default function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className='header text-light d-flex align-items-center '>
            <div className="left-header-part p-2  w-25 text-light">
            <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='text-light'
        

       
      >
        <h4 style={{textTransform:"lowercase"}}>Gemini </h4> &nbsp;&nbsp;&nbsp;<IoMdArrowDropdown />
      </Button>
      <Menu 
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
           
        }}
        className='main-menu'
        sx={{
            '& .MuiPaper-root': {
              width: '300px', 
            },
        }} 
      >
        <MenuItem onClick={handleClose} >
        <div className="dropdown-item d-flex align-items-center">
            <div >
            <SiGooglegemini   className='dropdown-icon '/> &nbsp; &nbsp;
            </div>
            <div className="dropdown-detail">
                Gemini <br />
                with 1.5 flesh
            </div>
        </div>
        </MenuItem>
      </Menu>
            </div>
            <div className="right-header-part w-75 d-flex justify-content-end ">
                <div className="header-right-part-detail d-flex mx-5 align-items-center">
                    <div className="advantage-gemini">
                         <Button variant="outlined" className='text-light' style={{textTransform:"lowercase"}}>Try Gemini Advantaced</Button>
                    </div>
                    <div className="multipule-icon">
                        <Button veriant="text"  className='text-light'>
                    <CgMenuGridR className='icon-container'/>
                    </Button>
                    </div>
                    <div className="profile">
                        <img src="/public/user-icon.webp"  srcset="" />
                    </div>
                </div>
            </div>
    </div>
  )
}
