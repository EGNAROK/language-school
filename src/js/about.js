import aboutTemplate from '../templates/about.hbs';
import '../styles/about.scss';
import globe from '../assets/images/globe_icon.png';
import book from '../assets/images/book_icon.png';
import glass from '../assets/images/magnifying-glass-icon.png';

const about = document.querySelector('.aboutUs_js');
about.innerHTML = aboutTemplate({firstIcon: globe, secondIcon: book, thirdIcon: glass})