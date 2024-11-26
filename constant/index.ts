import { MdOutlineDashboard } from "react-icons/md";
import { PiUsersFourThin } from "react-icons/pi";
import { LiaProductHunt } from "react-icons/lia";
import { VscRequestChanges } from "react-icons/vsc";
import { CiSettings } from "react-icons/ci";
import { MdOutlineStorefront } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiHeadsetLight } from "react-icons/pi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { FaUsersViewfinder } from "react-icons/fa6";

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
    linkTo: "/airpods",
    description:
      "We proudly have free shipping over the country, in fast possible fase way",
    image: "/assets/AirPods/airpods_3rd_gen__dhy5bknhvtqq_large.jpg",
  },
  {
    id: 2,
    linkTo: "/accessories",

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
