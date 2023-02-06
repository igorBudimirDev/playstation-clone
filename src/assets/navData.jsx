import { IoLogoGameControllerA } from "react-icons/io";
import { FiHardDrive } from "react-icons/fi";
import { FiPlay } from "react-icons/fi";
import { FiPaperclip } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import PS5Logo from "../assets/ps5_logo.png";
import PS4Logo from "../assets/ps4_logo.png";
import PSVRLogo from "../assets/ps_vr_logo.png";
import PSVR2Logo from "../assets/ps_vr2_logo.png";
import PSPlus from "../assets/ps_plus_logo.png";
import PSBuy from "../assets/ps_buy_logo.png";
import PS4Pro from "../assets/ps4_pro_logo.png";
import PSStars from "../assets/ps_stars_logo.png";
import PSBlog from "../assets/ps_blog.png";
import PSCalendar from "../assets/ps_calendar.png";

export const navData = [
  // {
  //   name: "Games",
  //   id: 1,
  //   icon_name: IoLogoGameControllerA,
  //   active: false,
  //   subChildren: [
  //     {
  //       name: "PS5",
  //       imgURL: PS5Logo,
  //     },
  //     {
  //       name: "PS4",
  //       imgURL: PS4Logo,
  //     },
  //     {
  //       name: "PS VR",
  //       imgURL: PSVRLogo,
  //     },
  //     {
  //       name: "PS Plus",
  //       imgURL: PSPlus,
  //     },
  //     {
  //       name: "Buy Games",
  //       imgURL: PSBuy,
  //     },
  //   ],
  //   additionalChildren: ["PlayStation Indies", "PS4 games on PS5", "Free to Play", "PS games on PC", "Deals & offers"],
  // },
  // {
  //   name: "Hardware",
  //   id: 2,
  //   icon_name: FiHardDrive,
  //   active: false,
  //   subChildren: [
  //     {
  //       name: "PS5",
  //       imgURL: PS5Logo,
  //     },
  //     {
  //       name: "PS4",
  //       imgURL: PS4Logo,
  //     },
  //     {
  //       name: "PS4 Pro",
  //       imgURL: PS4Pro,
  //     },
  //     {
  //       name: "PS VR2",
  //       imgURL: PSVR2Logo,
  //     },
  //   ],
  //   additionalChildren: [
  //     "DualSense wireless controller",
  //     "DUALSHOCK 4 wireless controller",
  //     "PS5 & PS4 accessories",
  //     "PlayStation VR",
  //   ],
  // },
  // {
  //   name: "Services",
  //   id: 3,
  //   icon_name: FiPlay,
  //   active: false,
  //   subChildren: [
  //     {
  //       name: "PS Plus",
  //       imgURL: PSPlus,
  //     },
  //     {
  //       name: "PS Stars",
  //       imgURL: PSStars,
  //     },
  //   ],
  //   additionalChildren: ["PS5 entertainment", "PS4 entertainment"],
  // },
  // {
  //   name: "News",
  //   id: 4,
  //   icon_name: FiPaperclip,
  //   active: false,
  //   subChildren: [
  //     {
  //       name: "PS Blog",
  //       imgURL: PSBlog,
  //     },
  //     {
  //       name: "This month",
  //       imgURL: PSCalendar,
  //     },
  //   ],
  //   additionalChildren: ["Competition Center", "Accessibility", "Privacy & Safety"],
  // },
  {
    name: "Shop",
    id: 5,
    icon_name: FiShoppingBag,
    active: false,
    subChildren: [
      {
        name: "Hardware",
        imgURL: PS4Pro,
        link: "/shop"
      },
      {
        name: "Digital Services",
        imgURL: PSBuy,
        link: "/shop"
      },
    ],
    additionalChildren: ["Buy a PS5", "New releases", "Latest discounts", "Buy a gift card", "Subscribe to PS Plus"],
  },
];
