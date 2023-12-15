"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Image from "next/image";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  // check scroll position
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar bg-slate-900 transition-all ${
        scrollPosition > 200 ? "bg-opacity-100" : "bg-opacity-30"
      }`}
    >
      <div className="container">
        <div className="logo rounded-xl">
          <Image src="/images/logo.png" alt="logo" width={150} height={150} />
        </div>
        <div
          className="menu-icon"
          onClick={() => {
            setShowNavbar(!showNavbar);
            const bodyEl = document.querySelector(".main-content");
            if (!showNavbar) {
              bodyEl?.classList.add("blur");
            } else {
              bodyEl?.classList.remove("blur");
            }
          }}
        >
          <div className={`burger ${showNavbar && "burger-active"}`}>
            <div className="strip burger-strip-5">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className={`nav-elements ${showNavbar && "active"}`}>
          <ul className="text-center gap-4">
            <li className="mr-0">
              <Link href="/" className="text-teal-300">
                Home
              </Link>
            </li>
            <li className="mr-0">
              <Link href="#party-host">Party Host</Link>
            </li>
            <li className="mr-0">
              <Link href="#upcoming-events">Upcoming Events</Link>
            </li>
            <li className="mr-0">
              <Link href="/about">About</Link>
            </li>
            <li className="mr-0">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
