import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { VscMenu } from 'react-icons/vsc'
import { useState, useRef, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { projectsState } from '../atoms/elementRefAtoms'
import { MdClose } from 'react-icons/md'
import {motion} from 'framer-motion'

const menuIconVariants = {
  init: {
    opacity: 0,
    y:-40,
  
  },
  visible: {
    opacity: 1,
    y:0,
  

    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 7,
      stiffness: 70,
      duration:2,
      
    },
  },
}

function BasicMenu(props, ref) {
  const [anchorEl, setAnchorEl] = useState(null)
  const [isClicked, setIsClicked] = useState(false)
  const [x] = useRef()
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
   

    setIsClicked(true)
    console.log(isClicked)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  useEffect(() => {}, [])
  return (
    <div className="md:hidden ">
    <motion.div variants={menuIconVariants}
    initial="init"
    animate="visible">
        <Button className='  '
       id="basic-button"
             aria-controls={open ? 'basic-menu' : undefined}
             aria-haspopup="true"
             aria-expanded={open ? 'true' : undefined}
             onClick={handleClick}
      
      >
        <VscMenu 
          className=  {`${open === true ? 'translate-x-40 ease-in duration-300 ':'-translate-x-0 ease-in duration-300  '}  absolute h-8 w-8 -top-0 translate-y-2/4 text-emerald-300`}/>
       <MdClose 
         className={` ${open === true? 'translate-y-0 ease-in-out duration-300 ':
       ' ease-in-out duration-300 -translate-y-40 '}  h-8 w-8 absolute top-4 translate-y-0 text-emerald-300`} />
      </Button>
      </motion.div>
    
      <Menu
        className={`menu `}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      
      >
        
        <MenuItem
          onClick={() => {
            window.scrollTo({
              top: ref?.[4].current,
              behavior: 'smooth',
            })
            handleClose()
          }}
        >
          Home
        </MenuItem>

        <MenuItem
          onClick={() => {
            window.scrollTo({
              top: ref?.[0].current.offset=762,
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
              top: ref?.[1].current.offsetTop,
              behavior: 'smooth',
            })

            handleClose()
          }}
        >
          Abour Me
        </MenuItem>
        <MenuItem
          onClick={() => {
            window.scrollTo({
              top: ref?.[2].current.offsetTop,
              behavior: 'smooth',
            })
            handleClose()
          }}
        >
          Work
        </MenuItem>
        <MenuItem
          onClick={() => {
            window.scrollTo({
              top: ref?.[3].current.offsetTop,
              behavior: 'smooth',
            })
            handleClose()
          }}
        >
          Contact
        </MenuItem>
      </Menu>
    </div>
  )
}
export default React.forwardRef(BasicMenu)
