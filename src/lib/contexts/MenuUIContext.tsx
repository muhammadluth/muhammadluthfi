"use client";
import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  useMemo,
} from "react";
import { MenuUIContextProps } from "@/lib/types/menu";

interface MenuUIProviderProps {
  children: ReactNode;
}

const MenuUIContext = createContext<MenuUIContextProps | null>(
  {} as MenuUIContextProps
);

export const useMenuUIContext = () => {
  const context = useContext(MenuUIContext) as MenuUIContextProps;
  if (context === undefined) {
    throw new Error("expected context value to be set");
  }
  return context;
};

export const MenuUIConsumer = MenuUIContext.Consumer;

export function MenuUIProvider({ children }: Readonly<MenuUIProviderProps>) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const value: MenuUIContextProps = useMemo(() => {
    return {
      openMenu: openMenu,
      setOpenMenu: setOpenMenu,
    };
  }, [openMenu, setOpenMenu]);

  return (
    <MenuUIContext.Provider value={value}>{children}</MenuUIContext.Provider>
  );
}
