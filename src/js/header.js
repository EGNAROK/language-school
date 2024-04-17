import headerTempalate from '../templates/header.hbs';
import '../scss/header.scss';

const header = document.querySelector('.header_js');
header.innerHTML = headerTempalate()