// FilmData.jsx
import GreenlessGif from "../../Video/Gifs/Greenless.gif";
import GreenlessImg from "../../Video/Thumbnail/Greenless.png";
import FiveMoreMinutesGif from "../../Video/Gifs/FiveMoreMinutes.gif";
import FiveMoreMinutesImg from "../../Video/Thumbnail/FiveMoreMinutes.png";
import ItWasALeafThatFellGif from "../../Video/Gifs/ItWasALeafThatFell.gif";
import ItWasALeafThatFellImg from "../../Video/Thumbnail/ItWasALeafThatFell.png";
import DownBadGif from "../../Video/Gifs/DownBad.gif";
import DownBadImg from "../../Video/Thumbnail/DownBad.png";
import theBoxGif from "../../Video/Gifs/theBox.gif";
import theBoxImg from "../../Video/Thumbnail/theBox.png";
import BirdsEyeViewGif from "../../Video/Gifs/BirdsEyeView.gif";
import BirdsEyeViewImg from "../../Video/Thumbnail/BirdsEyeView.png";
import PhenomenaGif from "../../Video/Gifs/Phenomena.gif";
import PhenomenaImg from "../../Video/Thumbnail/Phenomena.png";
import FilmNetGif from "../../Video/Gifs/FilmNet.gif";
import FilmNetImg from "../../Video/Thumbnail/FilmNet.png";
import ThisPortfolioGif from "../../Video/Gifs/ThisPortfolio.gif";
import ThisPortfolioImg from "../../Video/Thumbnail/ThisPortfolio.png";

const today = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

let filmsData = [
  {
    title: "Scenes From Greenless",
    date: "06-22-2021",
    vidUrl: "https://vimeo.com/600195237",
    workType: "Personal",
    info: "Shots from a feature film that was never finished due to complications. The script was feature length, and the experience on set the days we shoot has been invaluable",
    skinny: true,
    gif: GreenlessGif,
    img: GreenlessImg,
    url: "Greenless",
    shown: false,
  },
  {
    title: "Five More Minutes",
    date: "01-13-2024",
    vidUrl: "https://youtu.be/3X8v7vGkaFk",
    workType: "Personal",
    info: "Running late, a young couple’s time together ticks away",
    skinny: true,
    gif: FiveMoreMinutesGif,
    img: FiveMoreMinutesImg,
    url: "FiveMoreMinutes",
    shown: true,
  },
  {
    title: "It Was A Leaf That Fell",
    date: "01-13-2024",
    vidUrl: "https://youtu.be/NvxT2eRbnmk",
    workType: "Personal",
    info: "In the aftermath of losing his camera, Luis struggles to control his life – as his eager roommate Paul hosts a party",
    skinny: true,
    gif: ItWasALeafThatFellGif,
    img: ItWasALeafThatFellImg,
    url: "ItWasALeafThatFell",
    shown: true,
  },
  {
    title: "Down Bad",
    date: "11-19-2022",
    vidUrl: "https://youtu.be/Lbuir8qeE4Y",
    workType: "Personal",
    info: "A circular vision, a 'concept for a film' from our protagonist Luis in 'It Was A Leaf That Fell'. A mock-up project to get my brain into writing mode.",
    skinny: true,
    gif: DownBadGif,
    img: DownBadImg,
    url: "DownBad",
    shown: true,
  },
  {
    title: "The Box",
    date: "11-25-2019",
    vidUrl: "https://youtu.be/3ugDOpY_3aE",
    workType: "University Project",
    info: "A man finds a box, taking him out from his mundane existence. Animated by hand and through laser cutouts. Directed the collaboration with peers in a Studio Animation course at the University Of Pittsburgh",
    skinny: false,
    gif: theBoxGif,
    img: theBoxImg,
    url: "TheBox",
    shown: true,
  },
  {
    title: "Birds Eye View",
    date: "01-27-2020",
    vidUrl: "https://youtu.be/MNFEKT5vSvo",
    workType: "Personal",
    info: "Under the metallic rhythm of Tame Impala's 'Powerlines' and the synthetic ambiance of London streets, the intention of camera and those looking through them are examined -- while those in front of the lens either neglect, avoid, or embrace the filmic gaze",
    skinny: false,
    gif: BirdsEyeViewGif,
    img: BirdsEyeViewImg,
    url: "BirdsEyeView",
    shown: true,
  },
  {
    title: "Phenomena",
    date: "05-31-2020",
    vidUrl: "https://youtu.be/uVNm_LsNVBw",
    workType: "Personal",
    info: "A meditation on film, language, and human nature. Graphic design by Daniel Arnabar",
    skinny: false,
    gif: PhenomenaGif,
    img: PhenomenaImg,
    url: "Phenomena",
    shown: true,
  },
  {
    title: "FilmNet",
    date: "04-27-2022",
    vidUrl: "https://youtu.be/d5ZHovQE2lA",
    workType: "CompSci Capstone",
    info: "A webapp focused on creating a film society. Built with React and Flask. I worked on networking the graphs on the front-end, managing the film states, concepts, and general user interface",
    skinny: false,
    gif: FilmNetGif,
    img: FilmNetImg,
    url: "FilmNet",
    shown: false,
  },
  {
    title: "This Portfolio",
    date: today,
    vidUrl: "https://youtu.be/ELhRPzP8GW4",
    workType: "CompSci Personal",
    info: "A self-reference as to how I hand-coded this website using React and CSS rather than using Wix, WordPress, Squarespace, or other web-building software. Here, I use a JavaScript intersection observer to translate the opacity of the cards based on their position",
    skinny: false,
    gif: ThisPortfolioGif,
    img: ThisPortfolioImg,
    url: "ThisPortfolio",
    shown: false,
  },
];

// Dynamically assign a unique key to each film
filmsData = filmsData
  .filter((film) => film.shown)
  .map((film, index) => ({ ...film, key: index + 1 }));

export default filmsData;
