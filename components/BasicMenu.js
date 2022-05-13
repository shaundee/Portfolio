import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { VscMenu } from 'react-icons/vsc'
import { useState, useRef, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { projectsState } from '../atoms/elementRefAtoms'
import projects from '../lib/scrollTo'
function BasicMenu(props, ref) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  useEffect(() => {}, [])
  return (
    <div className="md:hidden ">
      <Button
        className=" "
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <VscMenu className="   h-12 w-12 p-2" />
      </Button>
      <Menu
        className="menu"
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
         <MenuItem onClick={() => {
            window.scrollTo({
              top: ref?.[4].current,
              behavior: 'smooth',
            });
            handleClose();
          }}>Home</MenuItem>

        <MenuItem
           onClick={() => {
            window.scrollTo({
              top: ref?.[0].current.offset=860,
              behavior: 'smooth',
            });
            
            handleClose();
          }}
        >
          Projects
        </MenuItem>
        <MenuItem
        onClick={() => {
          window.scrollTo({



            top: ref?.[1].current.offset=2380,
            behavior: 'smooth',
          });

          
          handleClose();
        }}
        >
          Abour Me
        </MenuItem>
        <MenuItem onClick={() => {
            window.scrollTo({
              top: ref?.[2].current.offseTop=2920,
              behavior: 'smooth',
            });
            handleClose();
          }}
          >Work</MenuItem>
        <MenuItem onClick={() => {
            window.scrollTo({
              top: ref?.[3].current.offsetTop,
              behavior: 'smooth',
            });
            handleClose();
          }}>Contact</MenuItem>
       
      </Menu>
    </div>
  )
}
export default React.forwardRef(BasicMenu)
