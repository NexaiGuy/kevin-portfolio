import Link from "next/link";
import { Button } from "./ui/button";

//
import Nav from "./Nav";



const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20">
        <div className="container mx-auto">
            {}
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                Kevin<span className="text-accent">.</span>
              </h1>
            </Link>
            {/* desktop nav */}
            <Nav />
        </div>
    </header>
  );
};

export default Header