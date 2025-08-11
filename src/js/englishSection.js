import englishSectionTemplate from '../templates/englishSection.hbs'
import '../styles/englishSection.scss'
import english from '../assets/images/english.png'

const englishSection = document.querySelector('.englishSection_js')
englishSection.innerHTML = englishSectionTemplate({image: english})