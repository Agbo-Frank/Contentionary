import './App.css';
import { Footer, News, Hero, Companies, Integrations, Features, AllInOne, WhatIsContentionary} from './components';
import { Container, Typography, Box, Link, } from '@mui/material';
import teacher from './asset/confident-teacher.png'
import teacher2 from './asset/teacher2.png'
import teacher3 from './asset/teacher3.png'
import teacher4 from './asset/teacher4.png'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className='relative'>
    <Hero />
    <Companies />
    <AllInOne />
    <WhatIsContentionary />

    <Container className="flex flex-col space-y-8 md:flex-row md:space-y-0 justify-between items-stretch my-10 md:space-x-10">
      <Box className="w-full md:w-1/2 md:pt-9 flex flex-col relative">
        <Box sx={{bgcolor: '#F3AC50'}} className="absolute top-5 -left-5 w-14 h-14 -z-10 rounded-full"></Box>
        <Box sx={{bgcolor: '#F3AC50'}} className="absolute top-1/2 right-0 h-5 w-5 -z-10 rounded-full"></Box>
        <Typography className="text-primary-orange text-base" gutterBottom>
          <Typography component="span" className="text-primary-blue-200 text-base font-medium">Everything you can do in a physical classroom,</Typography> you can do with Contentionary
        </Typography>

        <Typography className="text-secondary-200 font-light text-sm leading-8" component="p" gutterBottom>
          Contentionary’s school management software helps traditional and 
          online schools manage scheduling, attendance, payments and virtual classrooms 
          all in one secure cloud-based system.
        </Typography>

        <Link className="text-secondary-200 font-light mt-4">Learn more</Link>
      </Box>
      <Box className="relative p-3 w-full h-fit md:w-1/2 rounded-2xl grid place-items-center">
        <div className="block w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 aspect-square rounded-lg bg-primary-blue absolute top-0 left-0"></div>
        <Box sx={{bgcolor: '#F3AC50'}} className="rounded-lg aspect-square w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 absolute bottom-0 right-0"></Box>
        <img src={teacher} alt='teacher' className="w-full h-auto md:h-10/12 object-cover rounded-lg z-50"/>
      </Box>
    </Container>
    <Features />
    <Integrations />
    <News />
    <Footer />
  </div>
  );
}

export default App;
