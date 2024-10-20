import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavbarIcons from "./NavbarIcons";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative ">
      {/* Mobile Navbar  */}
      <div className="flex items-center justify-between h-full md:hidden ">
        <Link href={"/"}>
          <div className="text-2xl tracking-wide">AuraDeals</div>
        </Link>
        <Menu />
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full ">
        {/* Left side */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-8">
          <Link href={"/"} className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={24} height={24} />
            <div className="text-2xl tracking-wide">AuraDeals</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">Homepage</Link>
            <Link href="/list">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/dashboard">Dashboard</Link>
          </div>
        </div>
        {/* Right side */}
        <div className="w-2/3  xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavbarIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
