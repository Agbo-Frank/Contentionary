import { Container, Typography, Box, Avatar, Paper } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import { CalendarMonth } from '@mui/icons-material';
import Slider from 'react-slick';
import { useState } from 'react';

export function AllInOne(){
    let [index, setIndex] = useState(0)
    
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
        <div>
            <Box className="mx-auto px-3 w-full md:w-9/12 lg:w-7/12">
                <Typography className="text-primary-orange font-semibold text-base" component="h1" align='center' gutterBottom>
                    <Typography component='span' className="text-primary-blue-200 font-semibold text-base">All-In-One</Typography> Cloud Software.
                </Typography>
                <Typography className='font-light text-sm' align='center' sx={{color: '#696984'}}>
                    Contentionary is one powerful online software suite that combines all the tools needed to run a successful school or office.
                </Typography>
            </Box>

            <Container className='hidden md:grid grid-cols-3 w-full lg:w-10/12 my-24 gap-3 lg:gap-6'>
                <Paper className="px-4 lg:px-7 py-8 relative rounded-2xl shadow-lg border">
                    <Avatar className="bg-primary-purple absolute left-1/2 -translate-x-1/2 -top-7 w-14 h-14">
                        <CalendarMonth fontSize='large'/>
                    </Avatar>
                    <Typography align='center' gutterBottom className="text-primary-blue-200 font-medium text-base mt-9">Online Billing, Invoicing, & Contracts</Typography>
                    <Typography align="center" className="font-light text-sm">
                        Simple and secure control of your organization’s financial 
                        and legal transactions. Send customized invoices and contracts
                    </Typography>
                </Paper>

                <Paper className="px-4 lg:px-7 py-8 relative rounded-2xl shadow-lg">
                    <Avatar className="bg-primary-orange absolute left-1/2 -translate-x-1/2 -top-7 w-14 h-14">
                        <CalendarMonth fontSize='large'/>
                    </Avatar>
                    <Typography align="center" gutterBottom className="text-primary-blue-200 font-medium text-base mt-9">Easy Scheduling & Attendance Tracking</Typography>
                    <Typography align="center" className="font-light text-sm">
                        Schedule and reserve classrooms at one campus or multiple 
                        campuses. Keep detailed records of student attendance
                    </Typography>
                </Paper>
                <Paper className="px-4 lg:px-7 py-8 relative rounded-2xl shadow-lg">
                    <Avatar className="bg-primary-blue absolute left-1/2 -translate-x-1/2 -top-7 w-14 h-14">
                        <GroupsIcon fontSize='large'/>
                    </Avatar>
                    <Typography align="center" gutterBottom className="text-primary-blue-200 font-medium text-base mt-9">Customer Tracking</Typography>
                    <Typography align="center" className="font-light text-sm">
                        Automate and track emails to individuals or groups. 
                        Contentionary’s built-in system helps organize your 
                        organization 
                    </Typography>
                </Paper>
            </Container>

            <div className='md:hidden w-full my-7'>
                <Slider {...settings}>
                    <div className='h-fit w-full md:w-10/12 pt-14 pb-5'>
                        <Paper className="px-6 py-8 lg:p-8 relative rounded-2xl shadow-xl w-full md:w-10/12">
                            <Avatar className="bg-primary-purple absolute left-1/2 -translate-x-1/2 -top-8 w-20 md:w-14 h-20 md:h-14">
                                <CalendarMonth className='text-5xl'/>
                            </Avatar>
                            <Typography align='center' gutterBottom className="text-primary-blue-200 font-medium text-lg mt-14 md:mt-12 lg:mt-9">Online Billing, Invoicing, & Contracts</Typography>
                            <Typography align="center" className="font-light">
                                Simple and secure control of your organization’s financial 
                                and legal transactions. Send customized invoices and contracts
                            </Typography>
                        </Paper>
                    </div>
                    <div className='h-fit w-full md:w-10/12 pt-14 pb-5'>
                        <Paper className="px-6 py-8 lg:p-8 relative rounded-2xl shadow-xl w-full md:w-10/12">
                            <Avatar className="bg-primary-orange absolute left-1/2 -translate-x-1/2 -top-8 w-20 md:w-14 h-20 md:h-14">
                                <CalendarMonth className='text-5xl'/>
                            </Avatar>
                            <Typography align='center' gutterBottom className="text-primary-blue-200 font-medium text-lg mt-9">Easy Scheduling & Attendance Tracking</Typography>
                            <Typography align="center" className="font-light">
                                Schedule and reserve classrooms at one campus or multiple 
                                campuses. Keep detailed records of student attendance
                            </Typography>
                        </Paper>
                    </div>
                    <div className='h-fit pt-14 w-full md:w-10/12 pb-5'>
                        <Paper className="px-6 py-8 lg:p-8 relative rounded-2xl shadow-xl w-full md:w-10/12">
                            <Avatar className="bg-primary-blue absolute left-1/2 -translate-x-1/2 -top-8 w-20 md:w-14 h-20 md:h-14">
                                <GroupsIcon className='text-5xl'/>
                            </Avatar>
                            <Typography align='center' gutterBottom className="text-primary-blue-200 font-medium text-lg mt-9">Customer Tracking</Typography>
                            <Typography align="center" className="font-light">
                                Automate and track emails to individuals or groups. 
                                Contentionary’s built-in system helps organize your 
                                organization 
                            </Typography>
                        </Paper>
                    </div>
                </Slider>
                <div className='flex space-x-2 justify-center my-3'>
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

export default AllInOne