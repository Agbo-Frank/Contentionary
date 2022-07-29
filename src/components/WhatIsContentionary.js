import { Container, Typography, Box, Button, Card, } from '@mui/material';
import instructor from '../asset/instructor.png'
import creator from '../asset/creator.png'
import Slider from 'react-slick';
import { useState } from 'react';

export function WhatIsContentionary(){
    let [index, setIndex] = useState(0)
    
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        afterChange: (i) => setIndex(i)
    };
    return(
        <>
            <Box className="mx-auto px-3 w-full md:w-9/12 lg:w-7/12" sx={{width: 750}}>
                <Typography className="text-primary-orange font-semibold text-base" component="h1" align='center' gutterBottom>
                    <Typography component='span' className="text-primary-blue-200 font-semibold text-base">What is</Typography> Contentionary?
                </Typography>
                <Typography className='font-light text-sm md:text-sm' align='center' sx={{color: '#696984'}}>
                    Contentionary is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; 
                    grade results and provide students with feedback all in one place.
                </Typography>
            </Box>

            <Container className="hidden md:flex justify-between w-11/12 lg:w-9/12 space-x-3 lg:space-x-9 my-8">
                <Card className="relative w-1/2 rounded-2xl" sx={{height: 280}}>
                    <img src={instructor} alt='instructor' className="w-full h-full object-cover"/>
                    <Box component="div" className="absolute bg-black/40 w-full h-full inset-0 grid place-items-center">
                    <Box>
                        <Typography gutterBottom align="center" className="text-white font-semibold text-base">FOR INSTRUCTORS</Typography>
                        <Button variant="outlined" color="white" className="py-2 mx-auto">Start a class today</Button>
                    </Box>
                    </Box>
                </Card>
                <Card sx={{height: 280}} className="relative w-1/2 rounded-2xl">
                    <img src={creator} alt='creator' className="w-full h-full object-cover"/>
                    <Box component="div" className="absolute bg-black/40 w-full h-full inset-0 grid place-items-center">
                        <Box>
                            <Typography gutterBottom align="center" className="text-white font-semibold text-base">FOR CREATORS</Typography>
                            <Button variant="outlined" color="white" className="py-2 mx-auto">Start a session today</Button>
                        </Box>
                    </Box>
                </Card>
            </Container>

            <div className='md:hidden w-full my-7'>
                <Slider {...settings}>
                    <div className='w-full h-fit md:w-10/12 border'>
                        <Card className="relative w-full h-auto rounded-2xl">
                            <img src={creator} alt='creator' className="w-full h-full object-cover"/>
                            <Box component="div" className="absolute bg-black/40 w-full h-full inset-0 grid place-items-center">
                            <div>
                                <Typography gutterBottom align="center" className="text-white font-semibold text-base">FOR CREATORS</Typography>
                                <Button variant="outlined" color="white" className="py-2">Start a session today</Button>
                            </div>
                            </Box>
                        </Card>
                    </div>
                    <div className='h-fit w-full md:w-10/12 border'>
                        <Card sx={{height: 280}} className="relative w-full h-auto rounded-2xl">
                            <img src={creator} alt='creator' className="w-full h-full object-cover"/>
                            <Box component="div" className="absolute bg-black/40 w-full h-full inset-0 grid place-items-center">
                            <div>
                                <Typography gutterBottom align="center" className="text-white font-semibold text-base">FOR CREATORS</Typography>
                                <Button variant="outlined" color="white" className="py-2">Start a session today</Button>
                            </div>
                            </Box>
                        </Card>
                    </div>
                </Slider>

                <div className='flex space-x-2 justify-center my-3'>
                    {
                        [1, 2].map((v, i) => (
                            <div className={`${index === i && 'bg-secondary-200/50'} p-0.5 rounded-full`}>
                                <div className='w-2 h-2 bg-secondary-200 rounded-full'></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default WhatIsContentionary