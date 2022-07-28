import profileImg from '../asset/Ellipse.png'
import { Container, Typography, Box, Button, Avatar, Badge, } from '@mui/material';
import { Header } from './';
import landingImg from '../asset/landingImg.png'
import { CalendarMonth, CheckCircle, Email } from '@mui/icons-material';
import Fade from 'react-reveal/Fade'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export function Hero(){
    return(
        <div className="hero">
            <Header />
            <Container className='flex items-center space-x-8'>
                <Box className='flex flex-col my-10 lg:my-0 space-y-4 lg:space-y-8 pr-10'>
                    <Typography color='secondary'  className='font-semibold text-2xl'>
                        <Typography color='primary' className='font-semibold text-2xl' component="span">Create</Typography> your Online Academy in minutes
                    </Typography>
                    <Typography sx={{
                        color: '#464646',
                    }} className='text-xs md:text-sm font-light'>
                        Share, sell, engage, support and impact your audience/students 
                        using several Apps in Contentionary
                    </Typography>
                    <Box className='flex space-x-4 items-center'>
                        <Button variant='contained' className='py-2 lg:py-3'>Join for free</Button>
                        <div className="flex space-x-2 items-center">
                            <Avatar className='bg-white'>
                                <PlayArrowIcon sx={{color: '#23BDEE'}}/>
                            </Avatar>
                            <p className='text-xsm font-light'>Watch how it works</p>
                        </div>
                    </Box>
                </Box>

                <Box className="relative hidden lg:flex w-8/12 justify-center">
                    <Fade right>
                        <div className='bg-primary-purple self-start absolute bottom-3/4 right-1/4 translate-x-10 rounded-lg p-1.5'>
                            <CalendarMonth className='text-white'/>
                        </div>
                    </Fade>
                    <Fade left>
                        <div className='flex bg-white/80 backdrop-blur-sm  absolute top-1/4 -left-6 rounded-xl py-3 px-4 pr-9 space-x-3'>
                            <div className='bg-primary-blue self-start rounded-lg p-1.5'>
                            <CalendarMonth className='text-white'/>
                            </div>
                            <div>
                            <p className='text-secondary-100 font-medium text-sm'>250K</p>
                            <p className='text-secondary-100 text-xs font-light'>Assisted Support</p>
                            </div>
                        </div>
                    </Fade>
                    
                    <Fade right>
                        <div className='flex bg-white/80 backdrop-blur-sm  absolute top-2/4 -right-12 rounded-xl py-5 pl-4 pr-3 space-x-3'>
                            <div className='bg-primary-orange self-start rounded-lg p-1.5'>
                                <Email className='text-white'/>
                            </div>
                            <div>
                                <p className='text-secondary-100 font-medium text-sm'>Congratulations</p>
                                <p className='text-secondary-100 text-xs font-light'>Your admission completed</p>
                            </div>
                            <CheckCircle sx={{color: '#4EE381', fontSize: 16}} className="absolute top-3 right-3"/>
                        </div>
                    </Fade>

                    <Fade left>
                        <div className='flex bg-white/80 backdrop-blur-sm  absolute top-3/4 -translate-y-14 -left-6 rounded-xl py-3 px-4 pr-9 space-x-3'>
                            <Badge color="success" variant="dot" overlap='circular' anchorOrigin={{vertical: 'bottom',horizontal: 'right'}} className="h-fit">
                            <Avatar src={profileImg}/>
                            </Badge>
                            <div>
                            <p className='text-secondary-100 font-medium text-sm'>User Experience Class</p>
                            <p className='text-secondary-100 text-xs font-light'>Today at 12.00 PM</p>
                            <Button variant='contained' className='text-white bg-primary-purple my-3'>Join Now</Button>
                            </div>
                        </div>
                    </Fade>
                    <div className=''><img src={landingImg} alt='landing image' style={{width: 400}}/></div>
                </Box>
            </Container>
        </div>
    )
}

export default Hero