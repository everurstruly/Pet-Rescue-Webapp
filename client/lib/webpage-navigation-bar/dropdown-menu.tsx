"use client";

import { DesktopMenuItem, MobileMenuItem } from "./menu-item";

export function DesktopDropdownMenu({
  submenus,
  dropdown,
  depth,
}: {
  submenus: any;
  dropdown: any;
  depth: number;
}) {
  depth = depth + 1;
  const dropdownClass = depth > 1 ? "dropdown-submenu" : "";

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu: any, index: number) => (
        <DesktopMenuItem items={submenu} key={index} depth={depth} />
      ))}
    </ul>
  );
}

export function MobileDropdownMenu({
  submenus,
  dropdown,
  depth,
}: {
  submenus: any;
  dropdown: any;
  depth: number;
}) {
  depth = depth + 1;
  const dropdownClass = depth > 1 ? "dropdown-submenu" : "";

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu: any, index: number) => (
        <MobileMenuItem items={submenu} key={index} depth={depth} />
      ))}
    </ul>
  );
}
