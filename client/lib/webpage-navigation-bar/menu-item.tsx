"use client";

import Link from "next/link";
import { DesktopDropdownMenu, MobileDropdownMenu } from "./dropdown-menu";
import { useState, useEffect, useRef } from "react";

export function DesktopMenuItem({
  items,
  depth,
}: {
  items: any;
  depth: number;
}) {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  let ref = useRef<any>();

  useEffect(() => {
    const handler = (event: any): void => {
      if (dropdownMenu && ref.current && !ref.current.contains(event.target)) {
        setDropdownMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdownMenu]);

  const onMouseEnter = () => {
    setDropdownMenu(true);
  };

  const onMouseLeave = () => {
    setDropdownMenu(false);
  };

  const toggleDropdownMenu = () => {
    setDropdownMenu((prev) => !prev);
  };

  const closeDropdownMenu = () => {
    dropdownMenu && setDropdownMenu(false);
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdownMenu}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdownMenu ? "true" : "false"}
            onClick={() => toggleDropdownMenu()}
          >
            <Link href={items.url}>{items.title}</Link>
            {depth > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <DesktopDropdownMenu
            depth={depth}
            submenus={items.submenu}
            dropdown={dropdownMenu}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdownMenu ? "true" : "false"}
          >
            {items.title}
            {depth > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <DesktopDropdownMenu
            depth={depth}
            submenus={items.submenu}
            dropdown={dropdownMenu}
          />
        </>
      ) : (
        <Link href={items.url}>{items.title}</Link>
      )}
    </li>
  );
}

export function MobileMenuItem({
  items,
  depth,
  showMenu,
  setShowMenu,
}: {
  items: any;
  depth: number;
  showMenu?: any;
  setShowMenu?: any;
}) {
  const [dropdown, setDropdown] = useState(false);

  const closeDropdown = () => {
    dropdown && setDropdown(false);
    showMenu && setShowMenu(false);
  };

  const toggleDropdown = (e: any) => {
    e.stopPropagation();
    setDropdown((prev) => !prev);
  };

  return (
    <li className="menu-items" onClick={closeDropdown}>
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
          >
            <Link href={items.url} onClick={closeDropdown}>
              {items.title}
            </Link>
            <div onClick={(e) => toggleDropdown(e)}>
              {dropdown ? (
                <span className="arrow-close" />
              ) : (
                <span className="arrow" />
              )}
            </div>
          </button>
          <MobileDropdownMenu
            depth={depth}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
          >
            {items.title}{" "}
            <div onClick={(e) => toggleDropdown(e)}>
              {dropdown ? (
                <span className="arrow-close" />
              ) : (
                <span className="arrow" />
              )}
            </div>
          </button>
          <MobileDropdownMenu
            depth={depth}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link href={items.url}>{items.title}</Link>
      )}
    </li>
  );
}
