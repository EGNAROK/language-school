import mainScreenContainerTemplate from '../templates/mainScreen.hbs'
import '../scss/mainScreen.scss';

const mainScreen = document.querySelector('.mainScreen_js')
mainScreen.innerHTML = mainScreenContainerTemplate()