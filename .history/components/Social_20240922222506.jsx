import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa'

const socials = [
    {icon: <FaGithub />, path: ""},
    {icon: <FaLinkedinIn />, path: ""},
    {icon: <FaYoutube />, path: ""},
    {icon: <FaTwitter />, path: ""},
];

const Social = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socia}
  </div>;
};

export default Social;