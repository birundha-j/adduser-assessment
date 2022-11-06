import Pic1 from "./images/pic1.jpeg";
import Pic2 from "./images/pic2.jpeg";
import Pic3 from "./images/pic3.jpeg";
import Pic4 from "./images/pic4.jpeg";
import Pic5 from "./images/pic5.jpeg";

export const getImage = (data) => {
  switch (data) {
    case "Pic1":
      return Pic1;
    case "Pic2":
      return Pic2;
    case "Pic3":
      return Pic3;
    case "Pic4":
      return Pic4;
    case "Pic5":
      return Pic5;
    default:
      return Pic1;
  }
};
