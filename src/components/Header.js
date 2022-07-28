import { Avatar, Button, Container, IconButton } from "@mui/material"
import { Box } from "@mui/system"
import Logo from "./icons/logo"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";


export function Header() {
    let [toggle, setToggle] = useState(false)
    return(
        <>
            <div className="relative flex flex-row-reverse lg:flex-row lg:px-3 items-center lg:space-x-4 justify-between w-full">
                <Logo />

                <Box className={`${toggle ? 'block' : 'hidden'} bg-white w-full lg:w-auto lg:bg-transparent absolute lg:relative top-0 left-0 z-50 lg:z-0 py-5 lg:py-1 lg:flex items-center space-y-1 lg:space-y-0 lg:space-x-4 justify-between`}>
                    
                    <Button className="block lg:font-light">Home</Button>
                    <Button className="block lg:font-light">Careers</Button>
                    <Button className="block lg:font-light">Blogs</Button>
                    <Button className="block lg:font-light">About us</Button>
                    <Button className="block lg:font-light">Marketplace</Button>

                    <Button variant="contained" className=" block lg:font-light bg-white text-black">Login</Button>
                    <Button variant="contained" className="block bg-white text-black lg:text-white lg:bg-primary-orange ">Create Account</Button>

                    <Avatar className="bg-primary-orange absolute top-0 right-4 w-8 h-8 lg:hidden" onClick={() => setToggle(false)}>
                        <CloseIcon className="text-lg" sx={{color: 'white'}}/>
                    </Avatar>
                </Box>
                <IconButton className="m-0 lg:hidden" onClick={() => setToggle(true)}>
                    <MenuIcon sx={{color: 'black'}}/>
                </IconButton>
            </div>
            {/* <div className={`${toggle ? 'block' : 'hidden'} absolute top-0 left-0 w-screen h-screen bg-black z-20`}></div> */}
        </>
    )
}

export default Header