import headerTempalate from "../templates/header.hbs";
import "../styles/header.scss";
import logoPath from "../assets/images/logo.png";

const header = document.querySelector('.header_js');
header.innerHTML = headerTempalate({logo: logoPath});
