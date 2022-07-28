import { GoogleLogo, NetflixLogo, AirbnbLogo, AmazonLogo, FacebookLogo, GrabLogo} from "./icons"
import { Container } from '@mui/material';
import Slider from 'react-slick';

export function Companies(){
    return(
        <Container className='my-8 md:my-14'>
            <p className='text-center my-3 md:my-5 text-xs md:text-sm' style={{color: '#696984'}}>Trusted by 5,000+ Companies Worldwide</p>
            <div className="w-full whitespace-nowrap overflow-x-auto items-center space-x-3">
                <GoogleLogo />
                <NetflixLogo />
                <AirbnbLogo />
                <AmazonLogo />
                <FacebookLogo />
                <GrabLogo />
            </div>
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