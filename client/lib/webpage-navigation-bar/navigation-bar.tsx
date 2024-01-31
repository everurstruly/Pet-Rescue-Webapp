"use client";

import Link from "next/link";
import { DesktopMenu, MobileMenu } from "./menu";
import "./styles.css";

export default function TheNavigationBar({ menuItems }: { menuItems: any[] }) {
  return (
    <nav className="nav-area">
      <Link href="/" className="logo">
        BrandLogo
      </Link>
      <DesktopMenu menuItems={menuItems} />
      <MobileMenu menuItems={menuItems} />
    </nav>
  );
}
