import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai"
import {
  FaDiscord,
  FaEye,
  FaRegListAlt,
  FaSlack,
  FaSkype,
  FaTelegram,
  FaRegUser,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa"
import { FiSend } from "react-icons/fi"
import { MdComputer, MdDashboard } from "react-icons/md"
import {
  SiFigma,
  SiWebdriverio,
  SiWeb3Dotjs,
  SiChatbot,
  SiNextdotjs,
  SiNodedotjs,
  SiWordpress,
  SiGamedeveloper,
} from "react-icons/si"
import About from "./components/aboutPage/About"
import Blogs from "./components/blogsPage/Blogs"
import DevBlogs from "./components/blogsPage/DevBlogs"
import Contact from "./components/contactPage/Contact"
import GuestBook from "./components/guestbookPage/GuestBook"
import Resume from "./components/resumePage/Resume"
import Stats from "./components/statistics/Stats"
import Works from "./components/worksPage/Works"
import {
  ClientData,
  MenuData,
  ServiceData,
  SocialMedia,
  StatisticsData,
  TestimonialData,
} from "./types"

export const menus: MenuData[] = [
  {
    id: 1,
    label: "about",
    Icon: FaRegUser,
    Component: About,
  },
  {
    id: 2,
    label: "resume",
    Icon: FaRegListAlt,
    Component: Resume,
  },
  {
    id: 3,
    label: "works",
    Icon: FaEye,
    Component: Works,
  },
  // {
  //   id: 4,
  //   label: "blog",
  //   Icon: FaRegNewspaper,
  //   Component: DevBlogs,
  // },
  {
    id: 5,
    label: "stats",
    Icon: MdDashboard,
    Component: Stats,
  },
  {
    id: 6,
    label: "contact",
    Icon: FiSend,
    Component: Contact,
  },
  {
    id: 7,
    label: "guest book",
    Icon: MdComputer,
    Component: GuestBook,
  },
]

export const socialMediaIcons: SocialMedia[] = [
  {
    label: 'Telegram',
    Icon: FaTelegram,
    
  },
  {
    label: 'Github',
    Icon: FaGithub,
    
  },
  {
    label: 'Whatsapp',
    Icon: FaWhatsapp,
  },
  {
    label: 'Skype',
    Icon: FaSkype,
    
  },
  {
    label: 'Discord',
    Icon: FaDiscord,
  },
  {
    label: 'Slack',
    Icon: FaSlack
  }
]

export const services: ServiceData[] = [
  {
    id: 1,
    title: "Front-end",
    Icon: SiNextdotjs,
    description:
      "Modern and mobile-ready website that will help you reach all of your marketing.",
  },
  {
    id: 2,
    title: "Back-end",
    Icon: SiNodedotjs,
    description:
      "Back-end with a NoSQL DB and API written in a standard express router or tRPC.",
  },
  {
    id: 3,
    title: "UI/UX design",
    Icon: SiFigma,
    description:
      "Modern user Interface trends with a highly professional and unique design.",
  },
  {
    id: 4,
    title: "Web3.0 Integration",
    Icon: SiWeb3Dotjs,
    description:
      "Web3.0 Integration with NFT, Solidity, etc.",
  },
  {
    id: 5,
    title: "ChatGPT Integration",
    Icon: SiChatbot,
    description:
      "ChatGPT and Natural Language Processing using LangChain",
  },
  {
    id: 6,
    title: "Web Scrapping",
    Icon: SiWebdriverio,
    description:
      "Python BeautifulSoup4 and Selenium with Puppeteer",
  },
  {
    id:7,
    title:'CMS Development',
    Icon: SiWordpress,
    description: 'Content Management System using Wordpress, WIX'
  },
  {
    id: 8,
    title:'Game Development',
    Icon: SiGamedeveloper,
    description:'Anime, NFT Games using Three.js and Unity'
  }
]

export const clients: ClientData[] = [
  {
    id: 1,
    linkLocation: "https://www.linkedin.com/",
    imgLocation: "/images/lin.png",
  },
  {
    id: 2,
    linkLocation: "https://www.freelancer.com/",
    imgLocation: "/images/freelancer.png",
  },
  {
    id: 3,
    linkLocation: "https://www.upwork.com/",
    imgLocation: "/images/upwork.png",
  },
  {
    id: 4,
    linkLocation: "https://www.envato.com/",
    imgLocation: "/images/envato.png",
  },
]

export const quoteData: TestimonialData = {
  id: "quote",
  quote:
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  userName: "Martin Fowler",
  userProfession: "Software Developer",
  userImage: { url: "/images/martin.jpg" },
}

export const statisticsData: StatisticsData[] = [
  {
    title: "stack",
    info: "MERN",
  },
  {
    title: "projects",
    info: "70+",
  },
  {
    title: "clients",
    info: "20+",
  },
]
