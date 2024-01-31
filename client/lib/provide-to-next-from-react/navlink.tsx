"use client";

import classNames from "classnames";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink(
  props: Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    LinkProps & {
      children?: React.ReactNode;
    } & React.RefAttributes<HTMLAnchorElement> & {
      applyActiveClassName: (defaultClassName: string) => string;
    }
) {
  const { href, applyActiveClassName, className } = props;
  const pathname = usePathname();
  const isActive =
    (href !== "/" && pathname.startsWith(href.toString())) ||
    pathname === href.toString();

  const classnames = classNames(
    {
      [applyActiveClassName("font-inherit !text-blue-700")]: isActive,
    },
    className
  );

  return (
    <Link {...props} className={classnames}>
      {props.children}
    </Link>
  );
}
