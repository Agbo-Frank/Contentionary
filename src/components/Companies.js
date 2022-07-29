import { GoogleLogo, NetflixLogo, AirbnbLogo, AmazonLogo, FacebookLogo, GrabLogo} from "./icons"
import { Container, Box } from '@mui/material';
import Slider from 'react-slick';

export function Companies(){
    return(
        <Container className='my-8 md:my-14'>
            <p className='text-center my-3 md:my-5 text-xsm md:text-sm' style={{color: '#696984'}}>Trusted by 5,000+ Companies Worldwide</p>
            <Box className="w-full whitespace-nowrap overflow-x-auto items-center space-x-4 lg:space-x-8 lg:flex lg:justify-center scrollbar-hidden">
                <GoogleLogo />
                <NetflixLogo />
                <AirbnbLogo />
                <AmazonLogo />
                <FacebookLogo />
                <GrabLogo />
            </Box>
        </Container>
    )
}

export default Companies


{/* <Slider {...settings}>
    <div clas><GoogleLogo /></div>
    <div><NetflixLogo /></div>
    <div><AirbnbLogo /></div>
    <div><AmazonLogo /></div>
    <div><FacebookLogo /></div>
    <div><GrabLogo /></div>
</Slider>  */}