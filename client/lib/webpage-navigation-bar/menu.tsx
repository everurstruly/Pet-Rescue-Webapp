"use client";

import React, { useEffect, useRef, useState } from "react";
import { DesktopMenuItem, MobileMenuItem } from "./menu-item";

export function DesktopMenu({ menuItems }: { menuItems: any[] }) {
  const depth = 0;
  return (
    <section className="desktop-nav">
      <ul className="menus">
        {menuItems.map((menu, index) => {
          return <DesktopMenuItem items={menu} key={index} depth={depth} />;
        })}
      </ul>
    </section>
  );
}

export function MobileMenu({ menuItems }: { menuItems: any[] }) {
  
  const depth = 0;
  const [showMenu, setShowMenu] = useState(false);
  let ref = useRef<any>();

  useEffect(() => {
    const handler = (event: any) => {
      if (showMenu && ref.current && !ref.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [showMenu]);

  return (
    <section className="mobile-nav">
      <button
        className="mobile-nav__menu-button"
        type="button"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        Menu
      </button>

      {showMenu && (
        <ul className="menus" ref={ref}>
          {menuItems.map((menu, index) => {
            return (
              <MobileMenuItem
                items={menu}
                key={index}
                depth={depth}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
}
