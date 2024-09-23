"use client";

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ic';

const links = [
  {
    name: 'home'
  }
]
 
const MobileNav = () => {
  return (
    <nav>MobileNav</nav>
  )
}

export default MobileNav