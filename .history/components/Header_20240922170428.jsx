import Link from "next/link";

// components
import Nav from "./Nav";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20">
        <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                Kevin<span className="text-accent">.</span>
              </h1>
            </Link>

            {/* desktop nav & hire me button */}
            <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href="/contact">
            <Button>Hire me</Button></Link>
            </div>

            {/* mobile nav */}
            <div className="xl:hidden">
                <
            </div>
        </div>
    </header>
  );
};

export default Header;