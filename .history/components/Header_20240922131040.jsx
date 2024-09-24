import Link from "next/link";
import { Button } from "./ui/button";


const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20">
        <div className="container mx-auto">
            {}
            <Link href="/">
              <h1 className="text-4xl">
                Kevin <span>.</span>
              </h1>
            </Link>
        </div>
    </header>
  );
};

export default Header