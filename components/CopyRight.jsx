import React from "react";
import Link from "next/link";
const CopyRight = () => {
  return (
    <div>
      <div class="flex items-center justify-center">
        <div class="py-1 text-sm text-gray-700">
          Made with &nbsp;&nbsp;
          <Link class="font-semibold text-gray-700" href="#" target="_blank">
            Tailwind CSS &nbsp;&nbsp;
          </Link>
          by
          <Link href="#" class="font-semibold text-gray-700" target="_blank">
            &nbsp; Pranav Yemul
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
