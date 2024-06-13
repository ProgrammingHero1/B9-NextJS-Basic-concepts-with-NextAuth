"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const links = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Meals",
      path: "/meals",
    },
    {
      title: "Gallery",
      path: "/gallery",
    },
 
  ];

  const handler = () => {
    router.push("/login");
  };

  if (pathName.includes("dashboard"))
    return <div className="bg-blue-400">Dashboard Layout</div>;
  return (
    <nav className="bg-blue-500 px-6 py-4 flex justify-between items-center">
      <h6 className="text-3xl">
      <Link href={'/'}>Next <span className="text-orange-300">Meal</span></Link>
      </h6>
      <ul className="flex justify-between items-center space-x-4">
        {links?.map((link) => (
          <Link
            className={`${pathName === link.path && "text-cyan-300"}`}
            key={link.path}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </ul>
      <button onClick={handler} className="bg-white text-orange-400 p-4">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
