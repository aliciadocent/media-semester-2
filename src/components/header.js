"use client";

import { useEffect } from "react";
import "flowbite";

export default function GettingStarted() {
  useEffect(() => {
    import("flowbite");
  }, []);

  return (
    <header className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://fhict.fontys.nl"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Semester 2 ICT & Media Design
          </span>
        </a>
      </div>
    </header>
  );
}
