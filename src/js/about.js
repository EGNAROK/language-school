import aboutTemplate from '../templates/about.hbs';
import '../scss/about.scss';

const about = document.querySelector('.aboutUs_js');
about.innerHTML = aboutTemplate()