"use client";

import clsx from "clsx";
import Link from "next/link";
import { useAppStore } from "@/components/app";
import { useEffect, useState } from "react";
import { BiChevronDown, BiMenu, BiUserCircle, BiXCircle } from "react-icons/bi";

export const drawer = "top-navigation";

const navigationMenuData = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Find a Pet",
    url: "/pets",
  },
  {
    title: "Supportive Programs",
    url: "/assist",
    menu: [
      {
        title: "Donations",
        url: "",
      },
      {
        title: " Adoption Counseling Sessions",
        url: "counselling",
      },
      {
        title: "Volunteering Opportunitites",
        url: "volunteer",
        menu: [
          {
            title: "Adoption Coordinator",
            url: "",
          },
          {
            title: "Social Media Management",
            url: "",
          },
          {
            title: "Transport Drivers",
            url: "",
          },
          {
            title: "Administrative Support",
            url: "",
          },
        ],
      },
    ],
  },
  {
    title: "Guides and Articles",
    url: "/blog",
    menu: [
      {
        title: "Real-World Love stories",
        url: "",
        menu: [
          {
            title: "Connecting hearts and strengthening ties __ref(PetRescue)",
            url: "",
          },
          {
            title: "Man vs Dog: The Battle of the Couch __ref(PetRescue)",
            url: "",
          },
          {
            title: "Do dreams come true __ref(PetRescue)",
            url: "",
          },
          {
            title: "Adventure Cat: Meet Juniper __ref(PetRescue)",
            url: "",
          },
        ],
      },
      {
        title: " Pet Adoption Resources",
        url: "articles",
        menu: [
          {
            title:
              "Tips for multi-pet households __ref(PetRescue.com homepage)",
            url: "",
          },
          {
            title:
              "A Guide to adopting a pet during covid-19 lockdown __ref(PetRescue)",
            url: "",
          },
          {
            title:
              "Sending Adoption applications: What you need to know __ref(PetRescue)",
            url: "",
          },
          {
            title:
              "Why you may not have heard back about your application __ref(PetRescue)",
            url: "",
          },
          {
            title:
              "Recommended qualifications for force-free dog trainers __ref(PetRescue)",
            url: "",
          },
        ],
      },
      {
        title: "Pet Care and Support",
        url: "/care",
        menu: [
          {
            title: "How will I know when its time __ref(PetRescue)",
            url: "",
          },
          {
            title: "The Guide to adopting a dog or cat __ref(PetRescue)",
            url: "",
          },
          {
            title: "How will I know when its time __ref(PetRescue)",
            url: "",
          },
          {
            title:
              "Recommended qualifications for force-free dog trainers __ref(PetRescue)",
            url: "",
          },
          {
            title:
              "Finding the right dog trainer: A positive training Guide __ref(PetRescue)",
            url: "",
          },
        ],
      },
    ],
  },
  {
    title: "Help Centre",
    url: "",
    menu: [
      {
        title: "Who are we?",
        menu: [
          {
            title: "",
            writing: `Hi`,
          },
        ],
      },
      {
        title: "Sponsor Development Team",
        menu: [
          {
            // behaviour
            title: "",
            outcome: "dev->sponsor->methods",
          },
        ],
      },
    ],
  },
];

const declaredString = (value: any) => {
  return typeof value === "string" && value !== undefined ? true : false;
};

type NavMenuListItem = {
  title: string;
  url?: string;
  menu?: Array<
    | NavMenuListItem & {
        writing?: string;
        outcome?: string;
      }
  >;
};

type NavMenuListItemProps = NavMenuListItem & {
  id: number;
  menuListBelongingTo: {
    depth: number;
    toggleParentMenuList?: (...args: any[]) => any;
    handleClickItem: any;
    handleClickItemSwitch: any;
    shouldOpenItemMenu: (id: number) => boolean;
  };
};

function NavMenuListItem({
  id,
  title,
  url,
  menu,
  menuListBelongingTo,
}: NavMenuListItemProps) {
  const { depth, handleClickItem, handleClickItemSwitch, shouldOpenItemMenu } =
    menuListBelongingTo;

  const toggleParentMenuList = (show: boolean) => {
    handleClickItem(id, show);
  };

  const itemClassName = clsx(
    "flex px-5 py-2 text-amber-950 cursor-pointer hover:lg:text-amber-800 font-semibold",
    { "lg:px-3 lg:py-6": depth === 0 },
    {
      "lg:py-2 lg:px-4": depth > 0,
    }
  );

  return (
    <li
      key={id}
      className="xl:relative.. cursor-pointer"
      onMouseOver={() => handleClickItemSwitch(id, true)}
      onMouseLeave={() => handleClickItem(id, false)}
    >
      {!menu && declaredString(url) && (
        <Link
          href={url as string}
          onClick={() => handleClickItem(id, false)}
          className={itemClassName}
        >
          {title}
        </Link>
      )}
      {menu && !declaredString(url) && (
        <button
          onClick={() => handleClickItemSwitch(id)}
          className={itemClassName}
        >
          {title}
        </button>
      )}
      {menu && declaredString(url) && (
        <div className="flex gap-x-4 lg:gap-x-0">
          <Link href={url as string} onClick={() => handleClickItem(id)} className={clsx(itemClassName, "lg:pe-2")}>
            {title}
          </Link>
          <button
            onClick={() => handleClickItemSwitch(id)}
            className="px-2 lg:px-0 font-medium text-lg"
          >
            <BiChevronDown />
          </button>
        </div>
      )}
      {menu && (
        <NavMenuList
          depth={depth + 1}
          toggleParentMenuList={toggleParentMenuList}
          items={menu}
          listClassName="ms-3"
          containerClassName={clsx({
            block: shouldOpenItemMenu(id),
            hidden: !shouldOpenItemMenu(id),
          })}
        />
      )}
    </li>
  );
}

function NavMenuList({
  items,
  depth = 0,
  toggleParentMenuList,
  listClassName,
  containerClassName,
}: {
  depth?: number;
  toggleParentMenuList?: (...args: any[]) => any;
  items: Exclude<NavMenuListItem["menu"], undefined>;
  listClassName?: string;
  containerClassName?: string;
}) {
  const appStore = useAppStore();
  const [activeItemMenu, setActiveItemMenu] = useState<{
    id: number;
    open: boolean;
  }>();

  const handleClickItemSwitch = (id: number, show?: boolean) => {
    setActiveItemMenu((currActiveSubMenu) => {
      if (currActiveSubMenu === undefined || currActiveSubMenu.id !== id) {
        return { id, open: show ? show : true };
      }
      return {
        id,
        open: show ? show : !currActiveSubMenu.open,
      };
    });
  };

  const handleClickItem = (id: number, show?: boolean) => {
    handleClickItemSwitch(id, show);
    if (depth > 0) {
      toggleParentMenuList && toggleParentMenuList(false);
    }
    appStore.dispatch({
      type: "drawer/display",
      payload: { drawer, show: false },
    });
  };

  const shouldOpenItemMenu = (id: number) => {
    if (!activeItemMenu) return false;
    return activeItemMenu.id === id && activeItemMenu.open;
  };

  return (
    <div
      data-alias="container"
      className={clsx(
        { "lg:container lg:mx-auto": true },
        {
          "lg:absolute lg:top-full lg:left-0 lg:right-0 lg:w-full pt-1":
            depth == 1,
        },
        {
          "lg:static": depth > 1,
        },
        containerClassName
      )}
    >
      <ul
        className={clsx(
          "lg:rounded-lg lg:bg-amber-50",
          { "lg:justify-center": depth == 0 },
          { "py-2": depth > 0 },
          { shadow: depth == 1 },
          listClassName
        )}
      >
        {items.map((item, index) => {
          return (
            <NavMenuListItem
              key={index}
              id={index}
              {...item}
              menuListBelongingTo={{
                depth,
                toggleParentMenuList,
                handleClickItem,
                handleClickItemSwitch,
                shouldOpenItemMenu,
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}

function BrandLogo() {
  return (
    <div className="me-auto flex items-end gap-x-1 text-base min-[260px]:text-lg sm:text-xl pe-3 xl:text-2xl font-semibold mb-[1%]">
      {/*NB: mb-[1%] is a magic number, affects alignment position messed ukp by the articial logo-text alignment*/}
      <button className="relative inline-block px-1 rotate-6 before:absolute before:top-0 before:inset-0 before:border-2 before:-rotate-6 before:border-gray-900 before:border-y-amber-600 bg-black text-amber-950 xl:text-[85%]">
        !D
      </button>{" "}
      <span className="text-amber-800 leading-[1.2rem] hidden min-[460px]:inline-block">
        PetRescueRadar
      </span>
    </div>
  );
}

export default function TopNavigationSection() {
  const appStore = useAppStore();
  const menuOpen = appStore.visibleAppNavigationDrawer === drawer;

  const openMenu = () => {
    return appStore.dispatch({
      type: "drawer/display",
      payload: { drawer, show: true },
    });
  };

  const closeMenu = () => {
    return appStore.dispatch({
      type: "drawer/display",
      payload: { drawer, show: false },
    });
  };

  return (
    <nav className="bg-amber-50 border-b border-b-amber-100">
      <div className="flex items-center mx-auto gap-x-2 xl:container px-4 lg:px-10 lg:gap-x-2 lg:relative">
        <BrandLogo />

        <div
          className={clsx(
            `bg-black z-[100] fixed inset-0 lg:!hidden bg-opacity-0 pointer-events-none transition-all duration-300`,
            {
              "bg-opacity-60 pointer-events-auto": menuOpen,
            }
          )}
          onClick={closeMenu}
        ></div>
        <div
          className={clsx(
            `fixed z-[100] rounded-xl m-[auto] h-[calc(100vh_-_2.5rem)] w-[calc(100vw_-_2.5rem)] inset-0 sm:w-[80%] bg-amber-50 shadow-lg transition-all duration-300`,
            {
              "lg:!static lg:z-0 lg:h-auto lg:w-full lg:m-0 inset-[unset] lg:bg-transparent lg:shadow-none":
                true,
            },
            {
              "opacity-0 translate-y-4 pointer-events-none": !menuOpen,
            },
            {
              "translate-y-0 opacity-100 pointer-events-auto": menuOpen,
            },
            {
              "lg:transform-none lg:opacity-100 lg:pointer-events-auto": true,
            }
          )}
        >
          <header className="flex lg:hidden">
            <button className="ms-auto p-3 text-amber-800" onClick={closeMenu}>
              <BiXCircle className="text-4xl" />
            </button>
          </header>
          <NavMenuList
            items={navigationMenuData}
            listClassName="font-medium lg:flex lg:gap-x-4"
            containerClassName="w-full justify-stretch xl:justify-center"
          />
        </div>

        <div>
          <button className="grid place-content-center xl:hidden ps-4 py-3.5 h-full">
            <BiUserCircle className="text-3xl text-amber-800" />
          </button>
          <div className="hidden xl:flex items-center gap-x-2 min-[384px]:gap-x-2 xl:capitalize">
            <Link
              href="/sign/in"
              className="rounded-full inline-flex items-center font-medium bg-amber-800 text-amber-950 leading-none py-2 px-4 min-[360px]:px-6 min-[280px]:py-3 min-[340px]:text-sm xl:text-base xl:whitespace-nowrap sm:py-2 xl:px-5 xl:py-2 xl:font-medium shadow shadow-amber-400"
            >
              Sign in
            </Link>
            <Link
              href="/sign/up"
              className="rounded-full inline-flex items-center leading-none text-xs py-2 px-4 min-[360px]:px-6 min-[280px]:py-3 min-[340px]:text-sm xl:whitespace-nowrap sm:py-2 xl:px-4 xl:py-2 text-amber-800 xl:font-medium shadow shadow-amber-400"
            >
              Sign up
            </Link>
          </div>
        </div>

        <button
          className="ps-4 py-3.5 h-full lg:hidden flex items-center gap-x-1 font-semibold text-amber-800 text-lg"
          onClick={openMenu}
        >
          <BiMenu className="text-4xl  text-amber-800" />
          {/* w-6 h-6 min-[280px]:h-7 min-[280px]:w-7 */}
        </button>
      </div>
    </nav>
  );
}
