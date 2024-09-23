"use client";

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ic';

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'services',
    path: '/services',
  }
  {
    name: 'resume',
    path: '/resume',
  }
  {
    name: 'work',
    path: '/work',
  }
  {
    name: 'contact',
    path: '/contact',
  }
]
 
const MobileNav = () => {
  const pathname = usePathename();
  return <Sheet>
    <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
    </SheetTrigger>
    <SheetContent className="flex flex-col">
        {/*  */}
        <div></div>
    </SheetContent>
  </Sheet>;
};

export default MobileNav