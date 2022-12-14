import { Container, Typography, Box, Button, Link } from '@mui/material';
import Slider from 'react-slick';
import news1 from '../asset/news1.png'
import news2 from '../asset/news2.png'
import news3 from '../asset/news3.png'
import news4 from '../asset/news4.png'
import { useRef, useState } from 'react';

export function News(){
    let [index, setIndex] = useState(0)
    let slide = useRef()
    
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
            <Container className='py-10 space-y-4 my-4'>
                <Box>
                    <Typography className="text-primary-blue-200 text-base font-medium md:leading-10" component="h2" gutterBottom align="center">
                        Lastest News and Resources
                    </Typography>

                    <Typography className="text-secondary-200 font-light md:leading-6 text-sm" component="p" gutterBottom align="center">
                        See the developments that have occurred to Contentionary in the world
                    </Typography>
                </Box>
                <Box className='hidden md:flex flex-col space-y-8 lg:space-y-0 lg:flex-row justify-between'>
                    <Box className='w-full lg:w-5/12'>
                        <img src={news1} alt="news" className='w-full h-auto rounded-md object-cover'/>
                        <Button variant="contained" className="my-6">NEWS</Button>
                        <Typography gutterBottom color="secondry" classNanme="text-sm">
                            Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
                        </Typography>
                        <Typography gutterBottom className="text-secondary-200 font-light text-xsm">
                            Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
                        </Typography>
                        <Link sx={{color: '#696984'}} className="font-light">Read more</Link>
                    </Box>
                    <Box className='w-full lg:w-6/12 flex space-y-6 flex-col justify-between' component='ul'>
                        <Box component='li' className='flex justify-between space-x-5'>
                            <Box className='relative w-4/12 h-fit rounded-lg overflow-hidden'>
                                <img src={news2} alt="news image" className='w-full h-auto object-cover'/>
                                <Button color="primary" variant='contained' size='small' sx={{fontSize: 9}} className='absolute bottom-2 right-2 text-xsm'>PRESS RELEASE</Button>
                            </Box>
                            <Box className='w-8/12'>
                                <Typography gutterBottom className='text-sm'>
                                    Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand
                                </Typography>

                                <Typography gutterBottom className="text-secondary-200 font-light text-xsm">
                                    Class Technologies Inc., the company that created Class,...
                                </Typography>
                            </Box>
                        </Box>

                        <Box component="li" className='flex justify-between space-x-5'>
                            <Box className='relative w-4/12 h-fit rounded-lg overflow-hidden'>
                                <img src={news3} alt="news image" className='w-full h-auto object-cover'/>
                                <Button color="primary" variant='contained' size='small' className='absolute bottom-2 right-2 text-xsm'>NEWS</Button>
                            </Box>
                            <Box className='w-8/12'>
                                <Typography gutterBottom className='text-sm'>
                                    Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand
                                </Typography>

                                <Typography gutterBottom className="text-secondary-200 font-light text-xsm">
                                    Class Technologies Inc., the company that created Class,...
                                </Typography>
                            </Box>
                        </Box>

                        <Box component="li" className='flex justify-between space-x-5'>
                            <Box className='relative w-4/12 h-fit rounded-lg overflow-hidden'>
                                <img src={news4} alt="news image" className='w-full h-auto object-cover'/>
                                <Button color="primary" variant='contained' size='small' className='absolute bottom-2 right-2 text-xsm'>NEWS</Button>
                            </Box>
                            <Box className='w-8/12'>
                                <Typography gutterBottom className='text-sm'>
                                    Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand
                                </Typography>

                                <Typography gutterBottom className="text-secondary-200 font-light text-xsm">
                                    Class Technologies Inc., the company that created Class,...
                                </Typography>
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Container>

            <Box className='block md:hidden mb-10'>
                <Slider {...settings} ref={slide}>
                    <Box>
                        <Box className='flex flex-col justify-between space-y-5 px-5'>
                            <Box className='relative w-10/12 mx-auto h-fit rounded-lg overflow-hidden'>
                                <img src={news2} alt="news image" className='w-full h-auto object-cover'/>
                                <Button color="primary" variant='contained' size='small' sx={{fontSize: 9}} className='absolute bottom-2 right-2 text-xsm'>PRESS RELEASE</Button>
                            </Box>
                            <Box className='w-full'>
                                <Typography gutterBottom className='text-sm'>
                                    Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand
                                </Typography>

                                <Typography gutterBottom className="text-secondary-200 font-light text-xs">
                                    Class Technologies Inc., the company that created Class,...
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box>
                        <Box className='flex flex-col justify-between space-y-5 px-5'>
                            <Box className='relative w-10/12 mx-auto h-fit rounded-lg overflow-hidden'>
                                <img src={news3} alt="news image" className='w-full h-auto object-cover'/>
                                <Button color="primary" variant='contained' size='small' sx={{fontSize: 9}} className='absolute bottom-2 right-2 text-xsm'>NEWS</Button>
                            </Box>
                            <Box className='w-full'>
                                <Typography gutterBottom className='text-sm'>
                                    Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand
                                </Typography>

                                <Typography gutterBottom className="text-secondary-200 font-light text-xs">
                                    Class Technologies Inc., the company that created Class,...
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box>
                        <Box className='flex flex-col justify-between space-y-5 px-5'>
                            <Box className='relative w-10/12 mx-auto h-fit rounded-lg overflow-hidden'>
                                <img src={news4} alt="news image" className='w-full h-auto object-cover'/>
                                <Button color="primary" variant='contained' size='small' sx={{fontSize: 9}} className='absolute bottom-2 right-2 text-xsm'>NEWS</Button>
                            </Box>
                            <Box className='w-full'>
                                <Typography gutterBottom className='text-sm'>
                                    Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand
                                </Typography>

                                <Typography gutterBottom className="text-secondary-200 font-light text-xs">
                                    Class Technologies Inc., the company that created Class,...
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box>
                        <Box className='flex flex-col justify-between space-y-5 px-5'>
                            <Box className='relative w-9/12 mx-auto h-fit rounded-lg overflow-hidden'>
                                <img src={news1} alt="news image" className='w-full h-auto object-cover'/>
                                <Button color="primary" variant='contained' size='small' sx={{fontSize: 9}} className='absolute bottom-2 right-2 text-xsm'>NEWS</Button>
                            </Box>
                            <Box className='w-full'>
                                <Typography gutterBottom className='text-sm'>
                                    Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand
                                </Typography>

                                <Typography gutterBottom className="text-secondary-200 font-light text-xs">
                                    Class Technologies Inc., the company that created Class,...
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Slider>

                <Box className='flex space-x-2 justify-center my-3'>
                    {
                        [1, 2, 3, 4].map((v, i) => (
                            <Box 
                            className={`${index === i && 'bg-secondary-200/50'} p-0.5 rounded-full cursor-pointer`}
                            onClick={() => slide.current.slickGoTo(i)}>
                                <Box className='w-2 h-2 bg-secondary-200 rounded-full'></Box>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </>
    )
}

export default News