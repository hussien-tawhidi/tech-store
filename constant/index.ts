import { MdOutlineDashboard, MdOutlineLocalOffer, MdTv } from "react-icons/md";
import {
  PiComputerTowerLight,
  PiUsersFourThin,
  PiWatchThin,
} from "react-icons/pi";
import { LiaHandHoldingHeartSolid, LiaProductHunt } from "react-icons/lia";
import { VscPreview, VscRequestChanges } from "react-icons/vsc";
import {
  CiCoins1,
  CiCreditCard1,
  CiHeadphones,
  CiMobile1,
  CiSettings,
} from "react-icons/ci";
import { MdOutlineStorefront } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiHeadsetLight } from "react-icons/pi";
import { RiGamepadLine, RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { FaUsersViewfinder } from "react-icons/fa6";
import { HiOutlineCube } from "react-icons/hi2";
import { BiStar } from "react-icons/bi";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { BsLaptop } from "react-icons/bs";
import { GiJewelCrown } from "react-icons/gi";
import { GoGift } from "react-icons/go";

export const headerData = [
  { id: 2, title: "laptops", linkTo: "/laptops" },
  { id: 3, title: "Iphone", linkTo: "/iphone" },
  { id: 4, title: "Samsung", linkTo: "/samsung" },
  { id: 5, title: "Microsoft", linkTo: "/microsoft" },
  { id: 6, title: "Huawei", linkTo: "/huawei" },
  { id: 7, title: "Airpod", linkTo: "/airpods" },
  { id: 8, title: "Watch", linkTo: "/watch" },
  { id: 9, title: "Accessories", linkTo: "/accessories" },
  { id: 10, title: "Support", linkTo: "/support" },
];

export const searchContaineDate = [
  { id: 1, title: "visting an Am store FAQ", linkTo: "/" },
  { id: 2, title: "airPod", linkTo: "/" },
  { id: 3, title: "Iphone", linkTo: "/" },
  { id: 4, title: "HeadPhone", linkTo: "/" },
  { id: 5, title: "Samsung", linkTo: "/" },
  { id: 6, title: "Gift", linkTo: "/" },
];

export const adminSideBarMenu = [
  { id: 1, title: "Dashboard", linkTo: "/dashboard", Icon: MdOutlineDashboard },

  { id: 2, title: "Users", linkTo: "/dashboard/users", Icon: PiUsersFourThin },
  {
    id: 3,
    title: "Products",
    linkTo: "/dashboard/products",
    Icon: LiaProductHunt,
  },
  {
    id: 4,
    title: "Orders",
    linkTo: "/dashboard/orders",
    Icon: VscRequestChanges,
  },
  { id: 5, title: "Setting", linkTo: "/dashboard/settings", Icon: CiSettings },
  {
    id: 6,
    title: "Store",
    linkTo: "/",
    Icon: MdOutlineStorefront,
  },
];

export const homeFeatures = [
  {
    id: 1,
    title: "free shipping",
    description: "from 3 products",
    icon: LiaShippingFastSolid,
  },
  {
    id: 2,
    title: "24/7",
    description: "Online support",
    icon: PiHeadsetLight,
  },
  {
    id: 3,
    title: "Customer 99%",
    description: "customer Feedback",
    icon: FaUsersViewfinder,
  },
  {
    id: 4,
    title: "10 Days",
    description: "For free return",
    icon: TbTruckReturn,
  },
  {
    id: 5,
    title: "Payment",
    description: "Secure payment",
    icon: RiSecurePaymentLine,
  },
];

export const homeTopCollection = [
  {
    id: 1,
    title: "HeadePone & AirPods",
    linkTo: "/",
    description:
      "We proudly have free shipping over the country, in fast possible fase way",
    image: "/assets/AirPods/airpods_3rd_gen__dhy5bknhvtqq_large.jpg",
  },
  {
    id: 2,
    linkTo: "/",
    title: "Mobile & Accessories",
    description:
      "You can contact 24 hours of service, and have information about your oreders",
    image: "/assets/IPhone/ios16.jpg",
  },
];

export const homeTopCategory = [
  {
    id: 1,
    title: "labtop",
    image: "/assets/mac/mac/photo2.jpg",
    linkTo: "/labtops",
  },
  {
    id: 2,
    title: "phone",
    image: "/assets/mac/.jpg",
    linkTo: "/labtops",
  },
];

export const userMenuData = [
  { id: 6, title: "Profile", icon: LuUserRound, link: "profile" },
  { id: 1, title: "Points", icon: BiStar, link: "points" },
  { id: 2, title: "Orders", icon: HiOutlineCube, link: "orders" },
  { id: 3, title: "WhisLists", icon: IoIosHeartEmpty, link: "wish-lists" },
  { id: 4, title: "Products Reviews", icon: VscPreview, link: "reviews" },
  {
    id: 5,
    title: "Delivered addresses",
    icon: IoLocationOutline,
    link: "delivered-addresses",
  },
];

export const mainMenu = [
  {
    id: 1,
    title: "Mobile",
    icon: CiMobile1,
    image: "/features/menu/iphone_14.png",
    subMenu: [
      { id: 2, title: "mobile accessories", Link: "/" },
      { id: 3, title: "mobile materials", Link: "/" },
      { id: 4, title: "smart phone", Link: "/" },
      { id: 44, title: "phone", Link: "/" },
    ],
  },
  {
    id: 5,
    title: "labtop & tablet",
    image: "/features/menu/ipad.png",
    icon: BsLaptop,
    subMenu: [
      { id: 6, title: "labtop", Link: "/" },
      { id: 7, title: "tablet", Link: "/" },
      { id: 8, title: "laptop accessories", Link: "/" },
    ],
  },
  {
    id: 9,
    title: "earphone & headphones",
    icon: CiHeadphones,
    image: "/features/menu/headphone.png",
    subMenu: [
      { id: 10, title: "handsfree", Link: "/" },
      { id: 11, title: "headphone", Link: "/" },
    ],
  },

  {
    id: 15,
    title: "watches",
    icon: PiWatchThin,
    image: "/features/menu/watch.png",
    subMenu: [
      { id: 16, title: "smart watches", Link: "/" },
      { id: 17, title: "watches accessories", Link: "/" },
    ],
  },
  {
    id: 18,
    title: "computer",
    icon: PiComputerTowerLight,
    image: "/features/menu/imac.png",
    subMenu: [
      { id: 19, title: "computer", Link: "/" },
      { id: 18, title: "monitor", Link: "/" },
      { id: 190, title: "computer accessories", Link: "/" },
    ],
  },
  {
    id: 20,
    title: "networks & connectivity",
    icon: PiComputerTowerLight,
    image: "/features/menu/router.png",
    subMenu: [
      { id: 21, title: "networks accessories", Link: "/" },
      { id: 22, title: "modem & others", Link: "/" },
      { id: 23, title: "cctv", Link: "/" },
    ],
  },
  {
    id: 24,
    title: "Household appliances",
    icon: CgSmartHomeRefrigerator,
    image: "/features/menu/refgi.png",
    subMenu: [
      { id: 25, title: "refrigerator", Link: "/" },
      { id: 26, title: "cooking", Link: "/" },
      { id: 27, title: "tailor accessories", Link: "/" },
      { id: 28, title: "decoresion", Link: "/" },
      { id: 29, title: "multi media", Link: "/" },
    ],
  },
  {
    id: 30,
    title: "video & audio",
    icon: MdTv,
    image: "/features/menu/speaker.png",
    subMenu: [
      { id: 32, title: "tv", Link: "/" },
      { id: 31, title: "speeker", Link: "/" },
      { id: 33, title: "camera", Link: "/" },
      { id: 34, title: "autio assistant", Link: "/" },
    ],
  },
  {
    id: 35,
    title: "gaming",
    icon: RiGamepadLine,
    image: "/features/menu/game.png",
    subMenu: [
      { id: 36, title: "gaming console", Link: "/" },
      { id: 37, title: "gaming handle", Link: "/" },
      { id: 38, title: "game", Link: "/game" },
      { id: 39, title: "gaming accessories", Link: "/" },
      { id: 40, title: "gaming system", Link: "/" },
    ],
  },
  {
    id: 41,
    title: "jewlary",
    icon: GiJewelCrown,
    image: "/features/menu/jewllery.png",
    subMenu: [
      { id: 42, title: "coin", Link: "/" },
      { id: 43, title: "gold", Link: "/" },
      { id: 44, title: "watch", Link: "/" },
    ],
  },
  {
    id: 45,
    title: "beauty",
    icon: LiaHandHoldingHeartSolid,
    image: "/features/menu/beauty.png",
    subMenu: [
      { id: 48, title: "personal", Link: "/" },
      { id: 47, title: "health-accessories", Link: "/" },
    ],
  },
];

export const bottomMenu = [
  { id: 1, title: "offer", icon: MdOutlineLocalOffer },
  { id: 2, title: "giftcard", icon: GoGift },
  { id: 4, title: "payment ins.", icon: CiCreditCard1 },
  { id: 5, title: "golden off", icon: CiCoins1 },
];

export const homeBanners = [
  { id: 1, src: "/features/phone.jpg" },
  { id: 2, src: "/features/soundBanner.jpg" },
  { id: 3, src: "/features/beauty.jpg" },
  { id: 4, src: "/features/watch.jpg" },
];

export const specialProduct = [
  { id: 1, image: "/features/iphone.jpg", link: "/" },
  { id: 2, image: "/features/watchGentle.jpg", link: "/" },
  { id: 3, image: "/features/airPodPro.jpg", link: "/" },
];

export const mobileBrands = [
  { id: 1, image: "/features/iphoneBrand.jpg", link: "/" },
  { id: 2, image: "/features/samsungBrand.jpg", link: "/" },
  { id: 3, image: "/features/xiamiBrand.jpg", link: "/" },
  { id: 4, image: "/features/honorBrand.jpg", link: "/" },
  { id: 5, image: "/features/pocoBrand.jpg", link: "/" },
];
