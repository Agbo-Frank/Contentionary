import { Container, Typography, Box, Button, Avatar, Paper, Card, Link, } from '@mui/material';
import banner1 from '../asset/banner1.png'
import banner2 from '../asset/banner2.png'
import banner3 from '../asset/banner3.png'
import banner4 from '../asset/banner4.png'
import { CopyIcon, MenuIcon } from './icons'
import student from '../asset/student.png'
import GroupsIcon from '@mui/icons-material/Groups';
import Slider from 'react-slick';
import { useState } from 'react';

export function Features(){
    let [index, setIndex] = useState(0)
    
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        afterChange: (i) => setIndex(i)
    };
    return(
        <div className='space-y-8'>
            <Box className="mx-auto">
                <Typography className="text-primary-orange font-semibold text-base" component="h1" align='center' gutterBottom>
                    <Typography component='span' className="text-primary-blue-200 font-semibold text-base">Our</Typography> Features
                </Typography>
                <Typography className='font-light text-xs md:text-sm' align='center' sx={{color: '#696984'}}>
                    This very extraordinary feature, can make learning activities more efficient
                </Typography>
            </Box>

            <div className='hidden md:block'>
                <Container className="flex flex-col-reverse md:flex-row justify-between items-center mb-10 lg:mb-0 md:space-y-0 md:space-x-6">
                    <div className="w-full md:w-7/12 my-8 md:my-0">
                        <img src={banner2} alt="student" className='w-full h-auto object-cover' />
                    </div>
                    <Box className="w-full md:w-5/12 leading-10">
                        <Typography className="text-primary-blue-200 text-base font-semibold lg:leading-10" gutterBottom>
                            A <Typography component="span" className="text-primary-orange text-base font-semibold ">user interface</Typography> designed for the classroom
                        </Typography>
                    
                        <Box component="ul" className='space-y-5'>
                            <li className='flex justify-between space-x-6 items-center'>
                                <Avatar sx={{bgcolor: '#ffffff'}} className="w-8 h-8 md:w-11 md:h-11 shadow-md">
                                    <MenuIcon />
                                </Avatar>
                                <Typography className="text-secondary-200 font-light leading-6 text-sm" component="p">
                                    Teachers don’t get lost in the grid view and have a dedicated Podium space.
                                </Typography>
                            </li>

                            <li className='flex justify-between space-x-6 items-center'>
                                <Avatar sx={{bgcolor: '#ffffff'}} className="shadow-md">
                                    <CopyIcon />
                                </Avatar>
                                <Typography className="text-secondary-200 font-light leading-6 text-sm" component="p">
                                    TA’s and presenters can be moved to the front of the class.
                                </Typography>
                            </li>

                            <li className='flex justify-between space-x-6 items-center'>
                                <Avatar sx={{bgcolor: '#ffffff'}} className="shadow-md">
                                    <GroupsIcon color='secondary'/>
                                </Avatar>
                                <Typography className="text-secondary-200 font-light leading-6 text-sm" component="p">
                                    Teachers can easily see all students and class data at one time.
                                </Typography>
                            </li>
                            
                        </Box>
                    </Box>
                </Container>

                <Container className="flex flex-col-reverse md:flex-row mb-10 lg:mb-0 justify-between items-center">
                    <Box className="w-full md:w-5/12 leading-10">
                        <Typography className="text-primary-blue-200 text-base font-semibold lg:leading-10" gutterBottom>
                            <Typography component="span" className="text-primary-orange text-base font-semibold ">Tools</Typography> For Teachers And Learners
                        </Typography>
                        <Typography className="text-secondary-200 font-light leading-6" component="p">
                            Class has a dynamic set of teaching tools built to be deployed and used during class.
                            Teachers can handout assignments in real-time for students to complete and submit.
                        </Typography>
                    </Box>
                    <div className="w-full md:w-5/12 my-8 md:my-0">
                        <img src={student} alt="student" />
                    </div>
                </Container>

                <Container className="flex flex-col-reverse md:flex-row mb-10 lg:mb-0 justify-between items-center">
                    <div className="w-full md:w-5/12 my-8 md:my-0">
                        <img src={banner3} alt="student" />
                    </div>
                    <Box className="w-full md:w-5/12 leading-10 pr-10">
                        <Typography className="text-primary-blue-200 text-base font-semibold lg:w-3/4 lg:leading-10" gutterBottom>
                            Assessments, <Typography component="span" className="text-primary-orange text-base font-semibold ">Quizzes</Typography>, Tests
                        </Typography>
                        <Typography className="text-secondary-200 font-light leading-6" component="p">
                            Easily launch live assignments, quizzes, and tests.
                            Student results are automatically entered in the online gradebook.
                        </Typography>
                    </Box>
                </Container>

                <Container className="flex flex-col-reverse md:flex-row mb-10 lg:mb-0 justify-between items-center">
                    <Box className="w-full md:w-5/12 leading-10">
                        <Typography className="text-primary-blue-200 text-base font-semibold lg:w-3/4 lg:leading-10" gutterBottom>
                            <Typography component="span" className="text-primary-orange text-base font-semibold ">Class Management</Typography>Tools for Educators
                        </Typography>
                        <Typography className="text-secondary-200 font-light leading-6" component="p">
                            Class provides tools to help run and manage the class such as Class Roster, Attendance, 
                            and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
                        </Typography>
                    </Box>
                    <div className="w-full md:w-6/12 my-8 md:my-0">
                        <img src={banner4} alt="student" />
                    </div>
                </Container>

                <Container className="flex flex-col-reverse md:flex-row mb-10 lg:mb-0 justify-between items-center">
                    <div className="w-full md:w-6/12 my-8 md:my-0">
                        <img src={banner1} alt="student" />
                    </div>
                    <Box className="w-full md:w-5/12 leading-10">
                        <Typography className="text-primary-blue-200 text-base font-semibold lg:w-3/4 lg:leading-10" gutterBottom>
                            <Typography component="span" className="text-primary-orange text-base font-semibold ">One-on-One</Typography> Discussions
                        </Typography>
                        <Typography className="text-secondary-200 font-light leading-6" component="p">
                            Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
                        </Typography>
                    </Box>
                </Container>

                <Button color="primary" variant="outlined" className='block py-2 mx-auto my-4'>See more features</Button>
            </div>


            <div className='md:hidden'>
                <Slider {...settings}>
                    <div>
                        <Container className="flex flex-col-reverse md:flex-row justify-between items-center md:space-y-0 md:space-x-6">
                            <div className="w-full md:w-7/12 my-8 md:my-0">
                                <img src={banner2} alt="student" className='w-full h-auto object-cover' />
                            </div>
                            <Box className="w-full md:w-5/12 leading-10">
                                <Typography className="text-primary-blue-200 text-base font-semibold md:leading-10" gutterBottom>
                                    A <Typography component="span" className="text-primary-orange text-base font-semibold ">user interface</Typography> designed for the classroom
                                </Typography>
                            
                                <Box component="ul" className='space-y-5'>
                                    <li className='flex justify-between space-x-6 items-center'>
                                        <Avatar sx={{bgcolor: '#ffffff'}} className="w-8 h-8 md:w-11 md:h-11 shadow-md">
                                            <MenuIcon />
                                        </Avatar>
                                        <Typography className="text-secondary-200 font-light leading-6 text-sm" component="p">
                                            Teachers don’t get lost in the grid view and have a dedicated Podium space.
                                        </Typography>
                                    </li>

                                    <li className='flex justify-between space-x-6 items-center'>
                                        <Avatar sx={{bgcolor: '#ffffff'}} className="shadow-md">
                                            <CopyIcon />
                                        </Avatar>
                                        <Typography className="text-secondary-200 font-light leading-6 text-sm" component="p">
                                            TA’s and presenters can be moved to the front of the class.
                                        </Typography>
                                    </li>

                                    <li className='flex justify-between space-x-6 items-center'>
                                        <Avatar sx={{bgcolor: '#ffffff'}} className="shadow-md">
                                            <GroupsIcon color='secondary'/>
                                        </Avatar>
                                        <Typography className="text-secondary-200 font-light leading-6 text-sm" component="p">
                                            Teachers can easily see all students and class data at one time.
                                        </Typography>
                                    </li>
                                    
                                </Box>
                            </Box>
                        </Container>
                    </div>

                    <div>
                        <Container className="flex flex-col-reverse md:flex-row justify-between items-center">
                            <Box className="w-full md:w-5/12 leading-10">
                                <Typography className="text-primary-blue-200 text-base font-semibold md:leading-10" gutterBottom>
                                    <Typography component="span" className="text-primary-orange text-base font-semibold ">Tools</Typography> For Teachers And Learners
                                </Typography>
                                <Typography className="text-secondary-200 font-light leading-6" component="p">
                                    Class has a dynamic set of teaching tools built to be deployed and used during class.
                                    Teachers can handout assignments in real-time for students to complete and submit.
                                </Typography>
                            </Box>
                            <div className="w-full md:w-5/12 my-8 md:my-0">
                                <img src={student} alt="student" />
                            </div>
                        </Container>
                    </div>

                    <div>
                        <Container className="flex flex-col-reverse md:flex-row justify-between items-center">
                            <div className="w-full md:w-5/12 my-8 md:my-0">
                                <img src={banner3} alt="student" />
                            </div>
                            <Box className="w-full md:w-5/12 leading-10 pr-10">
                                <Typography className="text-primary-blue-200 text-base font-semibold md:leading-10" gutterBottom>
                                    Assessments, <Typography component="span" className="text-primary-orange text-base font-semibold ">Quizzes</Typography>, Tests
                                </Typography>
                                <Typography className="text-secondary-200 font-light leading-6" component="p">
                                    Easily launch live assignments, quizzes, and tests.
                                    Student results are automatically entered in the online gradebook.
                                </Typography>
                            </Box>
                        </Container>
                    </div>

                    <div>
                        <Container className="flex flex-col-reverse md:flex-row justify-between items-center">
                            <Box className="w-full md:w-5/12 leading-10">
                                <Typography className="text-primary-blue-200 text-base font-semibold md:leading-10" gutterBottom>
                                    <Typography component="span" className="text-primary-orange text-base font-semibold ">Class Management</Typography>Tools for Educators
                                </Typography>
                                <Typography className="text-secondary-200 font-light leading-6" component="p">
                                    Class provides tools to help run and manage the class such as Class Roster, Attendance, 
                                    and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
                                </Typography>
                            </Box>
                            <div className="w-full md:w-6/12 my-8 md:my-0">
                                <img src={banner4} alt="student" />
                            </div>
                        </Container>
                    </div>

                    <div>
                        <Container className="flex flex-col-reverse md:flex-row justify-between items-center">
                            <div className="w-full md:w-6/12 my-8 md:my-0">
                                <img src={banner1} alt="student" />
                            </div>
                            <Box className="w-full md:w-5/12 leading-10">
                                <Typography className="text-primary-blue-200 text-base font-semibold md:leading-10" gutterBottom>
                                    <Typography component="span" className="text-primary-orange text-base font-semibold ">One-on-One</Typography> Discussions
                                </Typography>
                                <Typography className="text-secondary-200 font-light leading-6" component="p">
                                    Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
                                </Typography>
                            </Box>
                        </Container>
                    </div>
                </Slider>

                <div className='flex space-x-2 justify-center my-2'>
                    {
                        [1, 2, 3].map((v, i) => (
                            <div className={`${index === i && 'bg-secondary-200/50'} p-0.5 rounded-full`}>
                                <div className='w-2 h-2 bg-secondary-200 rounded-full'></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Features










{/* <Container>
      <Box className="w-7/12 relative">
        <Box className="border relative rounded-3xl" sx={{height: 450}}>
          <Box className="absolute left-14 -top-16 w-32 h-32 rounded-full -z-20" sx={{bgcolor: '#33EFA0'}}></Box>
          <Box sx={{bgcolor: 'rgba(234, 234, 234, 0.6)'}} className="w-full backdrop-blur-3xl rounded-t-3xl">
            <div className="flex space-x-2 items-center py-3 px-6">
              <Box sx={{bgcolor: '#EE6767'}} className="w-3 aspect-square rounded-full"></Box>
              <Box sx={{bgcolor: '#F6C566'}} className="w-3 aspect-square rounded-full"></Box>
              <Box sx={{bgcolor: '#5BEB7B'}} className="w-3 aspect-square rounded-full"></Box>
            </div>
          </Box>
          <div className="w-full bg-white/60 backdrop-blur h-32 py-10 px-7">
            <div>
              <div className="relative w-52 rounded-xl overflow-hidden">
                <Box sx={{bgcolor: 'rgba(201, 211, 231, 0.4)'}} className="absolute left-2 bottom-2 rounded-lg py-1 px-2 scale-75 -translate-x-5 translate-y-1  flex space-x-1 justify-around items-center backdrop-blur-md">
                  <SignalCellularAltIcon className="text-xs text-white"/>
                  <Typography sx={{fontSize: 10, bgcolor: '#3793FF'}} className="text-white rounded-lg px-2 py-1">Instructor</Typography>
                  <Typography className="text-white" sx={{fontSize: 10}}>Eveny Howard</Typography>
                </Box>
                <img src={teacher2} alt="teacher" className="w-full h-auto"/>
              </div>
              <div>
                <Button variant="contained" color="secondary">Present</Button>
                <Button variant="contained">Call</Button>
              </div>
            </div>
          </div>
        </Box>
      </Box>
      <Box classNamew='w-5/12 h-full border'></Box>
    </Container> */}