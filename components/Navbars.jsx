"use client";

import { Button, Navbar } from "flowbite-react";

export const NavbarComponent = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={"/images.png"} className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Pranav Yemul
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#Home">Home</Navbar.Link>
        <Navbar.Link href="#Project">Project</Navbar.Link>
        <Navbar.Link href="#Experience">Experience</Navbar.Link>
        <Navbar.Link href="#Skills">Skills</Navbar.Link>
        <Navbar.Link href="#contactus">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
