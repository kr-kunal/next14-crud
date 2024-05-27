import React from "react";
import { FaRegEdit } from "react-icons/fa";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";

const TaskList = () => {
  return (
    <div className="px-5 py-3 my-4 border-slate-100 border-[1px] rounded-md shadow-xl">
      <div className="flex justify-between mb-3">
        <div className="text-2xl font-semibold">Title</div>
        <div className="flex items-center gap-2">
          <Link href={"/editTask/123"}>
            <FaRegEdit className="text-blue-500 text-[22px]" />
          </Link>
          <RemoveBtn />
        </div>
      </div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta atque
        accusantium aliquam totam suscipit provident magnam explicabo
        reprehenderit itaque accusamus voluptate soluta laudantium non, odio nam
        sunt deserunt voluptas nostrum eius placeat repellendus! Odit excepturi
        quisquam eligendi dicta? Explicabo, maxime.
      </div>
    </div>
  );
};

export default TaskList;
