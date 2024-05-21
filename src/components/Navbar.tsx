import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-600 py-3.5 px-5 my-3">
      <Link className="text-white text-xl font-semibold" href={"/"}>
        CRUD APP
      </Link>
      <Link className="bg-gray-200 p-1 px-2 rounded-md" href={"/"}>
        Add Topic
      </Link>
    </nav>
  );
};

export default Navbar;
