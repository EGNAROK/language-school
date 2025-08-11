import spanishSectionTemplate from '../templates/spanishSection.hbs'
import '../styles/spanishSection.scss'
import spanish from '../assets/images/spanish.png';

const spanishSection = document.querySelector('.spanishSection_js')
spanishSection.innerHTML = spanishSectionTemplate({image: spanish})