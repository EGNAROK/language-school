import welcomeContainerTemplate from '../templates/welcome.hbs'
import '../styles/welcome.scss';
import mainImg from '../assets/images/art.png';
import starGif from '../assets/images/star.gif';

const welcome = document.querySelector('.welcome_js')
welcome.innerHTML = welcomeContainerTemplate({mainImg: mainImg, gif: starGif})