import './Background.css'
import Video1 from '../../assets/video1.mp4';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';


const Background = ({playStatus, heroCount}) => {
 if (playStatus) {
    return(
        <video className='background-video ' autoPlay loop muted>
            <source src={Video1} type="video/mp4" />
        </video>
    )
 } else if(heroCount === 0) {
    return (
       <img src={image1} alt="Background" className='background fade-in' />
    )
 } else if(heroCount === 1) {
    return (
       <img src={image2} alt="Background" className='background fade-in' />
    )
 } else if(heroCount === 2) {
    return (
        <img src={image3} alt="Background" className='background fade-in' />
    )
 }
};

export default Background;