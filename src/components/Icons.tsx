import { MdLocationOn } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoCall, IoMenu } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGears } from "react-icons/fa6";
import { FaAngleDown, FaAngleUp, FaCheck, FaStar, FaArrowRight, FaUser } from "react-icons/fa";

export const UserIcon = ({color, size, style}:ICON_PROP) => {
  return <FaUser color={color} size={size} className={style} />
}

export const GearIcon = ({color, size, style}:ICON_PROP) => {
  return <FaGears color={color} size={size} className={style} />
}

export const ArrowRightIcon = ({color, size, style}:ICON_PROP) => {
  return <FaArrowRight color={color} size={size} className={style} />
}

export const StarIcon = ({color, size, style}:ICON_PROP) => {
  return <FaStar color={color} size={size} className={style} />
}

export const CheckIcon = ({color, size, style}:ICON_PROP) => {
  return <FaCheck color={color} size={size} className={style} />
}

export const AngleDownIcon = ({color, size, style}:ICON_PROP) => {
  return <FaAngleDown color={color} size={size} className={style} />
}

export const AngleUpIcon = ({color, size, style}:ICON_PROP) => {
  return <FaAngleUp color={color} size={size} className={style} />
}

export const MenuIcon = ({color, size, style}:ICON_PROP) => {
  return <IoMenu color={color} size={size} className={style} />
}

export const MapIcon = ({color, size, style}:ICON_PROP) => {
  return <MdLocationOn color={color} size={size} className={style} />
}

export const CallIcon = ({color, size, style}:ICON_PROP) => {
  return <IoCall color={color} size={size} className={style} />
}

export const MailIcon = ({color, size, style}:ICON_PROP) => {
  return <IoMdMail color={color} size={size} className={style} />
}

export const FacebookIcon = ({color, size, style}:ICON_PROP) => {
  return <FaFacebookF color={color} size={size} className={style} />
}

export const TwitterIcon = ({color, size, style}:ICON_PROP) => {
  return <FaTwitter color={color} size={size} className={style} />
}

export const InstagramIcon = ({color, size, style}:ICON_PROP) => {
  return <FaInstagram color={color} size={size} className={style} />
}

export const LinkedinIcon = ({color, size, style}:ICON_PROP) => {
  return <FaLinkedinIn color={color} size={size} className={style} />
}