import { MdLocationOn } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

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