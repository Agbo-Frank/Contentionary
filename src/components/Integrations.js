import { Container, Typography, Box, Button, Avatar, Rating } from '@mui/material';
import dropbox from '../asset/dropbox.png'
import googledrive from '../asset/googledrive.png'
import onedrive from '../asset/onedrive.png'
import team from '../asset/team.png'
import student2 from '../asset/student2.png'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Slider from 'react-slick';
import { useState, useRef } from 'react';
import { Slide } from 'react-reveal';

export function Integrations(){
    let [index, setIndex] = useState(0)
    let slide = useRef()

    const settings = {
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        afterChange: (i) => setIndex(i)
    };
    return(
        <>
            <Container className='flex flex-col space-y-10 md:space-y-0 md:flex-row justify-between mt-12 mb-20 md:my-16'>
                <Box className='w-full md:w-5/12 space-y-2'>
                    <Box className='flex justify-around h-52'>
                        <img src={onedrive} alt="onedrive" className='self-start w-48 h-auto object-contain'/>
                        <img src={dropbox} alt="dropbox" className='self-end w-32 h-auto object-contain'/>
                    </Box>
                    <Box className='flex justify-around h-52'>
                        <img src={googledrive} alt="googledrive" className='self-start w-32 h-auto object-contain'/>
                        <img src={team} alt="team" className='self-end w-36 h-auto object-contain'/>
                    </Box>
                </Box>
                <Box className='w-full md:w-6/12 space-y-3 md:space-y-7'>
                    <Box className='flex w-full md:w-5/12 items-center space-x-4 md:mb-5'>
                        <Box className='border-t border-primary-blue-300 w-4/12'></Box>
                        <p className='font-light tracking-[.30em] text-xs text-primary-blue-300'>INTEGRATIONS</p>
                    </Box>
                    <Typography className="text-primary-blue-200 text-lg md:leading-10 font-medium" gutterBottom>
                        200+ educational tools and platform <Typography component="span" className="text-primary-orange text-lg font-medium">integrations</Typography>
                    </Typography>
                    <Typography className="text-secondary-200 font-light text-sm leading-6" component="p">
                        Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, 
                        student information systems (SIS), and education platforms.
                    </Typography>
                    <Button color="primary" variant="outlined" className='py-2 my-2 md:my-4'>See All Integrations</Button>
                </Box>
            </Container>

            <Container className='flex flex-col space-y-10 md:space-y-0 md:flex-row justify-between mt-12 md:mt-20'>
                <Box className='w-full md:w-5/12 space-y-3 md:space-y-7 '>
                    <Box className='flex w-full md:w-5/12 items-center space-x-4 mb-5'>
                        <Box className='border-t border-primary-blue-300 w-4/12'></Box>
                        <p className='font-light tracking-[.30em] text-xs text-primary-blue-300'>TESTIMONIAL</p>
                    </Box>
                    <Typography className="text-primary-blue-200 text-xl md:leading-10" gutterBottom>What They Say?</Typography>
                    <Box>
                        <Typography className="text-secondary-200 font-light text-sm leading-6" component="p" gutterBottom>
                            Contentionary has got more than 100k positive ratings from our users around the world. 
                        </Typography>
                        <Typography className="text-secondary-200 font-light text-sm leading-6" component="p" gutterBottom>
                            Some of the students and teachers were greatly helped by the Contentionary. 
                        </Typography>
                        <Typography className="text-secondary-200 font-light text-sm leading-6" component="p" gutterBottom>
                            Are you too? Please give your assessment
                        </Typography>
                    </Box>
                    <Button color="primary" variant="outlined" className='py-2 my-4'>See All Integrations</Button>
                </Box>

                <Box className='w-full md:w-6/12 space-y-2'>
                    <Slider {...settings} ref={slide}>
                        <Box>
                            <Box className='w-full rounded-2xl relative'>
                                <Box className='w-full sm:w-80 relative'>
                                    <img src={student2} alt="student" className='w-full h-auto object-cover rounded-2xl'/>
                                    <Avatar sx={{bgcolor: '#ffffff'}} className="absolute top-1/2 right-0 md:-right-5 shadow-md z-50" onClick={() => {
                                        slide.current.slickGoTo(1, true)
                                    }}>
                                        <KeyboardArrowRightIcon sx={{color: '#1EA4CE'}}/>
                                    </Avatar>
                                </Box>
                                
                                <Box className='bg-white border-l-8 px-7 py-5 rounded-lg shadow-xl absolute top-3/4 left-9 w-full z-40' sx={{borderColor: '#F67766', maxWidth: 430}}>
                                    <Typography className="font-light border-l px-4 text-xs" gutterBottom sx={{color: '#5F5F7E'}}>
                                        "Thank you so much for your help. It's exactly what I've been looking for. 
                                        You won't regret it. It really saves me time and effort. 
                                        Contentionary is exactly what our business has been lacking."
                                    </Typography>
                                    <Box className='flex justify-between items-center space-y-3 px-7'>
                                        <p className='text-xs' style={{color: '#5F5F7E', fontSize: 11}}>Gloria Rose</p>
                                        <Box className="flex flex-col space-y-1 items-center">
                                            <Rating name="reating" defaultValue={5} readOnly size="small"/>
                                            <small style={{fontSize: 9, color: '#80819A'}}>12 reviews at Yelp</small>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box className='pb-20'>
                            <Box className='w-full rounded-2xl relative'>
                                <Box className='w-full sm:w-80 relative'>
                                    <img src={student2} alt="student" className='w-full h-auto object-cover rounded-2xl'/>
                                    <Avatar sx={{bgcolor: '#ffffff'}} className="absolute top-1/2 right-0 md:-right-5 shadow-md z-50" onClick={() => {
                                        slide.current.slickGoTo(1, true)
                                    }}>
                                        <KeyboardArrowRightIcon sx={{color: '#1EA4CE'}}/>
                                    </Avatar>
                                </Box>
                                
                                <Box className='bg-white border-l-8 px-7 py-5 rounded-lg shadow-xl absolute top-3/4 left-9 w-full z-40' sx={{borderColor: '#F67766', maxWidth: 430}}>
                                    <Typography className="font-light border-l px-4 text-xs" gutterBottom sx={{color: '#5F5F7E'}}>
                                        "Thank you so much for your help. It's exactly what I've been looking for. 
                                        You won't regret it. It really saves me time and effort. 
                                        Contentionary is exactly what our business has been lacking."
                                    </Typography>
                                    <Box className='flex justify-between items-center space-y-3 px-7'>
                                        <p className='text-xs' style={{color: '#5F5F7E', fontSize: 11}}>Gloria Rose</p>
                                        <Box className="flex flex-col space-y-1 items-center">
                                            <Rating name="reating" defaultValue={5} readOnly size="small"/>
                                            <small style={{fontSize: 9, color: '#80819A'}}>12 reviews at Yelp</small>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Slider>
                </Box>
            </Container>
        </>
    )
}

export default Integrations