import { MdOutlineDashboard, MdOutlineLocalOffer, MdTv } from "react-icons/md";
import { LiaHandHoldingHeartSolid, LiaProductHunt } from "react-icons/lia";
import { VscPreview, VscRequestChanges } from "react-icons/vsc";
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
import {
  PiComputerTowerLight,
  PiUsersFourThin,
  PiWatchThin,
} from "react-icons/pi";
import {
  CiCoins1,
  CiCreditCard1,
  CiHeadphones,
  CiMobile1,
  CiSettings,
} from "react-icons/ci";

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
  {
    id: 1,
    title: "Cool & secure",
    des: "Select the best phone, with hight security and cool design",
    image: "/features/iphone.jpg",
    link: "/",
  },
  {
    id: 2,
    title: "Look Gentle & awesome",
    des: "Best brand show your favorites, you could have better,self confidence",
    image: "/features/watchGentle.jpg",
    link: "/",
  },
  {
    id: 3,
    title: "Modern & realistic sound",
    des: "Apple offer you the best and cool airpod in any where you can use that",
    image: "/features/airPodPro.jpg",
    link: "/",
  },
];

export const mobileBrands = [
  {
    id: 1,
    title: "iPhone",
    des: "Apple offer you the best phone in any kind of people , it has cover all thing you need",
    image: "/features/iphoneBrand.jpg",
    link: "/",
  },
  {
    id: 2,
    title: "Samsung",
    des: "Samsung is so different from other phones, it has so many kind with different price and different models",
    image: "/features/samsungBrand.jpg",
    link: "/",
  },
  {
    id: 3,
    title: "Xiaomi",
    des: "Xiaomi is one of the new phones that enter in markets, it has import day by day not as good as samsung and apples",
    image: "/features/xiamiBrand.jpg",
    link: "/",
  },
  {
    id: 4,
    title: "honor",
    des: "Honor like xiami has less market but if the people want to cheap and easy phone they could buy it",
    image: "/features/honorBrand.jpg",
    link: "/",
  },
  {
    id: 5,
    title: "Poco",
    des: "Poco are growing so fast, if they go the same way they could have all markets in futures",
    image: "/features/pocoBrand.jpg",
    link: "/",
  },
];

export const laptopsBrand = [
  {
    id: 1,
    title: "Acer",
    des: "Collection of best from acer laptops",
    image: "/features/acer.jpg",
    link: "/",
  },
  {
    id: 2,
    title: "Sureface",
    des: "Best of the colest laptop from microsoft",
    image: "/features/surface.jpg",
    link: "/",
  },
  {
    id: 3,
    title: "MacBook",
    des: "I think no one can ingore macbook is so cool and prefession",
    image: "/features/macbook.jpg",
    link: "/",
  },
  {
    id: 4,
    title: "Dell",
    des: "Dell has alot of user, so everyone know that this is the best",
    image: "/features/dell.jpg",
    link: "/",
  },
  {
    id: 5,
    title: "Hp",
    des: "hp notebooks are so cool and have alot of fun for using",
    image: "/features/hp.jpg",
    link: "/",
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
