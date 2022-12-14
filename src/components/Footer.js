import { Typography, Box, Container } from "@mui/material"
import Logo from "./icons/logo"



export function Footer(){
    return(
        <div className="py-16 bg-primary-blue-400 text-white px-8 md:px-20 text-sm mt-10">
            <Container className="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-around">
                <Box className="space-y-5">
                    <Logo />
                    <Typography gutterBottom component='div'>
                        <Typography component='h4' className="text-xs">Nigeria Office:</Typography>
                        <Typography className="font-extralight text-xs">
                            38 Opebi Road, Ikeja, Lagos State, <br /> 
                            Nigeria. Nigeria: +234 902 239 6389
                        </Typography>
                    </Typography>
                    <Typography gutterBottom component='div'>
                        <Typography component='h4' className="text-xs">United Kingdom Office: </Typography>
                        <Typography className="font-extralight text-xs">
                            Longside Lane, Longside House, <br /> 
                            Bradford, United Kingdom. UK: +44 7754 601138
                        </Typography>
                    </Typography>
                    <Typography gutterBottom component='div'>
                        <Typography component='h4' className="text-xs">Contact Email:</Typography>
                        <Typography className="font-extralight text-xs">
                            contact@contentionary.com.
                        </Typography>
                    </Typography>
                </Box>

                <Box component='ul' className="space-y-4">
                    <Typography component='li' gutterBottom className="text-xsm">RESOURCES</Typography>
                    <Box component="li" className="font-extralight text-xs">Developers Tools</Box>
                    <Box component="li" className="font-extralight text-xs">Guides & FAQs</Box>
                    <Box component="li" className="font-extralight text-xs">Blog Post</Box>
                    <Box component="li" className="font-extralight text-xs">Help Centre</Box>
                    <Box component="li" className="font-extralight text-xs">Customer Reviews</Box>
                </Box>

                <Box component='ul' className="space-y-4">
                    <Typography component='li' gutterBottom className="text-xsm">COMPANY</Typography>
                    <Box component="li" className="font-extralight text-xs">About Us</Box>
                    <Box component="li" className="font-extralight text-xs">Partners</Box>
                    <Box component="li" className="font-extralight text-xs">Careers</Box>
                    <Box component="li" className="font-extralight text-xs">Investors</Box>
                    <Box component="li" className="font-extralight text-xs">Contact Us</Box>
                </Box>
            </Container>
            <p className="text-center font-extralight text-xs mt-12">?? 2022 Contentionary. All rights reserved </p>
        </div>
    )
}

export default Footer