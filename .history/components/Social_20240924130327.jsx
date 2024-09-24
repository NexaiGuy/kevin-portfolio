import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const socials = [
    { icon: <FaGithub />, path: "https://github.com/NexaiGuy" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/kev-b-4aaa39315/" },
    { icon: <FaTwitter />, path: "https://x.com/Nex_AI_Official" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <a
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Social;



