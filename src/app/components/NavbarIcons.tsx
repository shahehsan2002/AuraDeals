"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";

const NavbarIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();

  //   TEMPORARY LOGIC TO CHECK IF USER IS LOGGED IN OR NOT
  const isLoggedIn = false;
  const handleProfile = () => {
    if (isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };
  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt="profile"
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 ">
          <Link href="/profile">Profile</Link>
          <div className="cursor-pointer mt-2">Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt="notification"
        width={24}
        height={24}
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer"
      onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <Image
          src="/cart.png"
          alt="cart"
          width={24}
          height={24}
          className="cursor-pointer"
          
        />
        <div className="absolute -top-4 -right-2 bg-aura w-6 h-6 rounded-full flex items-center justify-center text-white " >
           2 
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavbarIcons;
