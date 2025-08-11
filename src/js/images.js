// favicon
import favicon from "../assets/images/favicon.png";

const link = document.createElement("link");
link.rel = "icon";
link.type = "image/png";
link.href = favicon;
document.head.appendChild(link);
// favicon end

// germanSection
import german from "../assets/images/german.png";

const germanImage = document.querySelector(".germanImage");
if (germanImage) {
  germanImage.src = german;
}
// germanSection end

// startEducation
import gif_1 from "../assets/images/gif1.gif";
import gif_2 from "../assets/images/gif2.gif";
import gif_3 from "../assets/images/gif3.gif";
import gif_4 from "../assets/images/gif4.gif";
import gif_5 from "../assets/images/gif5.gif";

const gifs = [gif_1, gif_2, gif_3, gif_4, gif_5];

const gifElements = document.querySelectorAll("img.gif");

gifElements.forEach((img, index) => {
  if (gifs[index]) {
    img.src = gifs[index];
  }
});
// startEducation end

// signUpForTheCourse
import instagram from "../assets/images/instagram.png";
import youtube from "../assets/images/youtube.png";

const icons = [instagram, youtube];

const socialLinkIcons = document.querySelectorAll("img.socialLink");

socialLinkIcons.forEach((img, index) => {
  if (icons[index]) {
    img.src = icons[index];
  }
});
// signUpForTheCourse end
