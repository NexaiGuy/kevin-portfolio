"use client";

import Link from "next/link";


const links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'services',
        path: '/services',
    },
    {
        name: 'resume',
        path: '/resume',
    },
    {
        name: 'work',
        path: '/work',
    },
    {
        name: 'contact',
        path: '/contact',
    },
]

const Nav = () => {
  const pathname = P();
  console.log(pathname);
  return (
  <nav className="flex gap-8">
    {links.map((link, index)=> {
      return (
        <Link href={link.path} key={index} className={``}>
          {link.name}
        </Link>
      );
    })}
  </nav>
  );
};

export default Nav