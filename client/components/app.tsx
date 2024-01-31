"use client";

import { useReducer, createContext, Dispatch, useContext } from "react";
import DevBuildTeamWatermark from "@/lib/thedev-build-watermark";
import TopNavigationSection from "@/components/top-navigation-section";
import BottomNavigationSection from "@/components/bottom-navigation-section";
import Link from "next/link";

type Action = { type: string; payload: Record<string, any> };

type AppStore = {
  dispatch: Dispatch<Action>;
  visibleAppNavigationDrawer: string | null;
};

const initAppStore = {
  dispatch: (action: Action) => undefined,
  visibleAppNavigationDrawer: "top-navigation",
} as const;

const storeContext = createContext<AppStore>(initAppStore);

const reducer = (store: AppStore, action: Action) => {
  if (action.type === "drawer/display") {
    const { drawer, show } = action.payload as {
      drawer: string;
      show: boolean;
    };

    const updatedStore = { ...store };
    updatedStore.visibleAppNavigationDrawer = show ? drawer : null;
    return updatedStore;
  }

  return store;
};

export default function App({ children }: { children: React.ReactNode }) {
  const [store, dispatch] = useReducer(reducer, initAppStore);
  return (
    <storeContext.Provider value={{ ...store, dispatch }}>
      <header>
        {/* <section className="bg-white py-2 border-b border-b-zinc-100 text-xs">
          <div className="xl:container px-4 lg:px-10 flex items-center">
            <button className=" text-black font-semibold uppercase">Shop</button>
            <button className=" text-black font-semibold uppercase">English</button>
          </div>
        </section> */}
        <TopNavigationSection />
      </header>
      {children}
      <footer>
        <BottomNavigationSection />
        <DevBuildTeamWatermark />
      </footer>
    </storeContext.Provider>
  );
}

export function useAppStore() {
  return useContext(storeContext);
}
