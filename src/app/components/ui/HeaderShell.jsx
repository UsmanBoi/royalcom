"use client";
import { useEffect, useState } from "react";

// You can't directly import HeaderContent because it's async
export default function HeaderShell({ children }) {
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollUp(currentY < lastScrollY || currentY < 140);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        scrollUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {children}
    </div>
  );
}
