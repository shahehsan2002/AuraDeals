import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative ">
      {/* Mobile Navbar  */}
      <div className="flex items-center justify-between h-full " >
        <Link href={"/"}>
        <div className="text-2xl tracking-wide" >AuraDeals</div>
        </Link>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
