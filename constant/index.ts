import { MdOutlineDashboard, MdOutlineLocalOffer, MdTv } from "react-icons/md";
import { LiaHandHoldingHeartSolid, LiaProductHunt } from "react-icons/lia";
import { VscPreview, VscRequestChanges } from "react-icons/vsc";
import { MdOutlineStorefront } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiHeadsetLight } from "react-icons/pi";
import { RiGamepadLine, RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { FaUsersViewfinder, FaWhatsapp } from "react-icons/fa6";
import { HiOutlineCube } from "react-icons/hi2";
import { BiStar } from "react-icons/bi";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { BsLaptop } from "react-icons/bs";
import { GiJewelCrown } from "react-icons/gi";
import { GoGift } from "react-icons/go";
import { CiHeadphones, CiMobile1, CiSettings } from "react-icons/ci";
import { RiBloggerLine } from "react-icons/ri";
import {
  PiComputerTowerLight,
  PiUsersFourThin,
  PiWatchThin,
} from "react-icons/pi";

export const searchContaineDate = [
  {
    id: 1,
    title: "visting an Am store FAQ",
    link: "/smart-phone",
    category: "smartphone",
  },
  {
    id: 2,
    title: "airPod & handsfree",
    category: "handsfree,headphone",
    link: "/earphone-headphones",
  },
  {
    id: 3,
    title: "laptops & tablets ...",
    link: "/laptops-tablets",
    category: "laptop,tablet,ipad ...",
  },
  { id: 4, title: "watches", category: "watches", link: "/watches" },
  {
    id: 5,
    title: "networks & connectivities",
    link: "/network-connectivity",
    category: "networks & connectivities",
  },
  {
    id: 6,
    title: "Gift",
    link: "/gifts",
    category: "gifts",
  },
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
    title: "phones",
    icon: CiMobile1,
    image: "/features/menu/iphone_14.png",
    category: "smartphone",
    link: "/",
    subMenu: [
      {
        id: 44,
        title: "all phones",
        Link: "/smart-phone",
      },
      {
        id: 2,
        title: "mobile accessories",
        Link: "/phone-accessories",
        category: "phone accessories",
      },
      { id: 3, title: "mobile materials", Link: "/" },
    ],
  },
  {
    id: 5,
    title: "laptop, tablet, ipad",
    image: "/features/menu/ipad.png",
    link: "/laptops-tablets",
    category: "laptop,tablet,ipad ...",
    icon: BsLaptop,
    subMenu: [
      { id: 49, title: "laptop,tablet,ipad ...", Link: "laptops-tablets" },
      { id: 6, title: "labtop", Link: "/" },
      { id: 7, title: "tablet", Link: "/" },
      { id: 8, title: "laptop accessories", Link: "/" },
    ],
  },
  {
    id: 9,
    title: "earphone & headphones",
    category: "handsfree,headphone",
    link: "/earphone-headphones",
    icon: CiHeadphones,
    image: "/features/menu/headphone.png",
    subMenu: [
      { id: 50, title: "all", Link: "/earphone-headphones" },
      { id: 10, title: "handsfree", Link: "/" },
      { id: 11, title: "headphone", Link: "/" },
    ],
  },

  {
    id: 15,
    title: "watches",
    category: "watches",
    link: "/watches",
    icon: PiWatchThin,
    image: "/features/menu/watch.png",
    subMenu: [
      { id: 52, title: "all watches", Link: "/watches" },
      { id: 53, title: "clocks", Link: "/clocks" },
      { id: 16, title: "smart watches", Link: "/watches" },
      { id: 17, title: "watches accessories", Link: "/" },
    ],
  },
  {
    id: 18,
    title: "computer",
    icon: PiComputerTowerLight,
    image: "/features/menu/imac.png",
    category: "computer",
    link: "/computer",
    subMenu: [
      { id: 19, title: "computer", Link: "/computer" },
      { id: 18, title: "monitor", Link: "/" },
      { id: 190, title: "computer accessories", Link: "/" },
    ],
  },
  {
    id: 20,
    title: "networks & connectivity",
    icon: PiComputerTowerLight,
    image: "/features/menu/router.png",
    link: "/network-connectivity",
    category: "networks & connectivities",
    subMenu: [
      {
        id: 51,
        title: "network & connectivity",
        Link: "/network-connectivity",
      },
      { id: 21, title: "networks accessories", Link: "/" },
      { id: 22, title: "modem & others", Link: "/" },
      { id: 23, title: "cctv", Link: "/" },
    ],
  },
  {
    id: 24,
    title: "Household applliances",
    icon: CgSmartHomeRefrigerator,
    image: "/features/menu/refgi.png",
    link: "/household-applliance",
    category: "home appliance",
    subMenu: [
      { id: 54, title: "all applliance", Link: "/household-applliance" },
      { id: 25, title: "refrigerator", Link: "/" },
      { id: 26, title: "cooking", Link: "/" },
      { id: 27, title: "tailor accessories", Link: "/" },
      { id: 28, title: "decoresion", Link: "/" },
      { id: 29, title: "multi media", Link: "/" },
    ],
  },
  {
    id: 30,
    title: "audio",
    category: "audio",
    icon: MdTv,
    link: "/audio",
    image: "/features/menu/speaker.png",
    subMenu: [
      { id: 301, title: "all", Link: "/audio" },
      { id: 302, title: "tv", Link: "/" },
      { id: 31, title: "speeker", Link: "/" },
      { id: 33, title: "camera", Link: "/" },
      { id: 34, title: "autio assistant", Link: "/" },
    ],
  },
  {
    id: 320,
    title: "video",
    category: "video",
    icon: MdTv,
    link: "/video-audio",
    image: "/features/menu/speaker.png",
    subMenu: [
      { id: 55, title: "all video", Link: "/video" },
      { id: 32, title: "tv", Link: "/" },
      { id: 31, title: "speeker", Link: "/" },
      { id: 33, title: "camera", Link: "/" },
      { id: 34, title: "autio assistant", Link: "/" },
    ],
  },
  {
    id: 35,
    title: "gaming",
    category: "gaming",
    icon: RiGamepadLine,
    link: "/gaming",
    image: "/features/menu/game.png",
    subMenu: [
      { id: 56, title: "all gaming", Link: "/gaming" },
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
    link: "/jewlary",
    category: "jeweleries",
    icon: GiJewelCrown,
    image: "/features/menu/jewllery.png",
    subMenu: [
      { id: 57, title: "all jewelaries", Link: "/jewlary" },
      { id: 42, title: "coin", Link: "/" },
      { id: 43, title: "gold", Link: "/" },
      { id: 44, title: "watch", Link: "/" },
    ],
  },
  {
    id: 45,
    title: "beauty",
    link: "/beauty",
    category: "beauty",
    icon: LiaHandHoldingHeartSolid,
    image: "/features/menu/beauty.png",
    subMenu: [
      { id: 58, title: "beauty and health care", Link: "/beauty" },
      { id: 48, title: "personal", Link: "/" },
      { id: 47, title: "health-accessories", Link: "/" },
    ],
  },
];

export const bottomMenu = [
  { id: 1, title: "offer", icon: MdOutlineLocalOffer, link: "/tech-store-off" },
  { id: 2, title: "giftcard", icon: GoGift, link: "/gift-card" },
  { id: 5, title: "blogs", icon: RiBloggerLine, link: "/blog" },
  { id: 6, title: "contact Us", icon: FaWhatsapp, link: "/contact" },
];

export const homeBanners = [
  {
    id: 1,
    src: "/features/phone.jpg",
    link: "best-phones",
    title: "Choose your phone ",
    category: "phone",
  },
  {
    id: 2,
    category: "handsfree",
    src: "/features/soundBanner.jpg",
    link: "best-sound-effects",
    title: "best speaker, heade phone, handefree...",
  },
  {
    id: 3,
    src: "/features/beauty.jpg",
    category: "beauty",
    link: "health-beauty-care",
    title: "Beauty care",
  },
  {
    id: 4,
    src: "/features/watch.jpg",
    category: "watch",
    link: "best-watch",
    title: "smart watches",
  },
];

export const specialProduct = [
  {
    id: 1,
    title: "Cool & secure",
    des: "Select the best phone, with hight security and cool design",
    image: "/features/iphone.jpg",
    link: "/smart-phone",
    category: "smartphone",
  },
  {
    id: 2,
    title: "Look Gentle & awesome",
    des: "Best brand show your favorites, you could have better,self confidence",
    image: "/features/watchGentle.jpg",
    link: "/watches",
    category: "watches",
  },
  {
    id: 3,
    title: "Modern & realistic sound",
    des: "Apple offer you the best and cool airpod in any where you can use that",
    image: "/features/airPodPro.jpg",
    link: "/earphone-headphones",
    category: "smartphone",
  },
];

export const mobileBrands = [
  {
    id: 1,
    title: "iPhone",
    des: "Apple offer you the best phone in any kind of people , it has cover all thing you need",
    image: "/features/iphoneBrand.jpg",
    link: "/iphone",
  },
  {
    id: 2,
    title: "Samsung",
    des: "Samsung is so different from other phones, it has so many kind with different price and different models",
    image: "/features/samsungBrand.jpg",
    link: "/samung",
  },
  {
    id: 3,
    title: "Xiaomi",
    des: "Xiaomi is one of the new phones that enter in markets, it has import day by day not as good as samsung and apples",
    image: "/features/xiamiBrand.jpg",
    link: "/xiami",
  },
  {
    id: 4,
    title: "honor",
    des: "Honor like xiami has less market but if the people want to cheap and easy phone they could buy it",
    image: "/features/honorBrand.jpg",
    link: "/honor",
  },
  {
    id: 5,
    title: "Poco",
    des: "Poco are growing so fast, if they go the same way they could have all markets in futures",
    image: "/features/pocoBrand.jpg",
    link: "/poco",
  },
];

export const laptopsBrand = [
  {
    id: 1,
    title: "Acer",
    des: "Collection of best from acer laptops",
    image: "/features/acer.jpg",
    link: "/laptops/acer-brands",
  },
  {
    id: 2,
    title: "Sureface",
    des: "Best of the colest laptop from microsoft",
    image: "/features/surface.jpg",
    link: "/laptops/surface",
  },
  {
    id: 3,
    title: "MacBook",
    des: "I think no one can ingore macbook is so cool and prefession",
    image: "/features/macbook.jpg",
    link: "/laptops/features",
  },
  {
    id: 4,
    title: "Dell",
    des: "Dell has alot of user, so everyone know that this is the best",
    image: "/features/dell.jpg",
    link: "/laptops/dell-brand",
  },
  {
    id: 5,
    title: "Hp",
    des: "hp notebooks are so cool and have alot of fun for using",
    image: "/features/hp.jpg",
    link: "/laptops/hp-brand",
  },
];

export const handsFreeBrand = [
  {
    id: 1,
    title: "Airpods",
    des: "Best of airpods brand now available in out store",
    image: "/features/airpodBrand.jpg",
    link: "/",
  },
  {
    id: 2,
    title: "AirBuds",
    des: "Samsung AirBuds brand now available in out store",
    image: "/features/galaxybudsBrand.jpg",
    link: "/",
  },
  {
    id: 3,
    title: "Beat",
    des: "Beat are now available in out store",
    image: "/features/beatBrand.jpg",
    link: "/",
  },
  {
    id: 4,
    title: "Free Buds",
    des: "Free Buds are cheap and less than other",
    image: "/features/freebudBrand.jpg",
    link: "/",
  },
  {
    id: 5,
    title: "Xiami",
    des: "Xiami are like there phons are good as you want",
    image: "/features/redmiBrand.jpg",
    link: "/",
  },
];

export const homeApplliance = [
  {
    id: 1,
    title: "Rice cooker",
    des: "You could choose your favorite",
    image: "/features/applliance/rice-cooker.jpg",
    link: "/",
  },
  {
    id: 2,
    title: "Iron",
    des: "Choose any kind of iron",
    image: "/features/applliance/iron.jpg",
    link: "/",
  },
  {
    id: 3,
    title: "Tea maker",
    des: "Enjoy you tea drinking with our tea maker",
    image: "/features/applliance/tea-maker.jpg",
    link: "/",
  },
  {
    id: 4,
    title: "Cooler",
    des: "In hot weather of summer be cold like winter",
    image: "/features/applliance/cooler.jpg",
    link: "/",
  },
  {
    id: 5,
    title: "Juicer",
    des: "Test the really tast of fruits juice",
    image: "/features/applliance/juicer.jpg",
    link: "/",
  },
  {
    id: 6,
    title: "Electric heater",
    des: "For your winter and chrismis season",
    image: "/features/applliance/electric-heater.jpg",
    link: "/",
  },
  {
    id: 7,
    title: "Washing machine",
    des: "Clean your clothes no one will know it's new or washed",
    image: "/features/applliance/washing-machine.jpg",
    link: "/",
  },

  {
    id: 9,
    title: "Hair Dryer",
    des: "Find out more hair dryer in this section",
    image: "/features/applliance/hair-dryer.jpg",
    link: "/",
  },
  {
    id: 10,
    title: "Dishwasher",
    des: "not need anymore wash the dishes by you hands",
    image: "/features/applliance/dishwasher.jpg",
    link: "/",
  },
  {
    id: 19,
    title: "Meat Grinder",
    des: "This is usefull product for your your dially using",
    image: "/features/applliance/meat-grinder.jpg",
    link: "/",
  },
  {
    id: 11,
    title: "Coffee maker",
    des: "Find your favorite coffee maker in this section",
    image: "/features/applliance/coffee-maker.jpg",
    link: "/",
  },
  {
    id: 12,
    title: "Refrigerator",
    des: "one of the most and important applliance for home and kitchen",
    image: "/features/applliance/refrigerator.jpg",
    link: "/",
  },
];
