"use client";

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import { usePathname } from "next/navigation";
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
  }
]
 
const MobileNav = () => {
  const pathname = usePathename();
  return <Sheet>
    <SheetTrigger className="flex justify-center items-center">
        <CiMenuFri className="text-[32px] text-accent" />
    </SheetTrigger>
    <SheetContent className="flex flex-col">
        {/* logo */}
        <div>logo</div>
    </SheetContent>
  </Sheet>;
};

export default MobileNav