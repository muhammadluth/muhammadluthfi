import { ReactNode, Dispatch, SetStateAction } from 'react';

export type MenuUIContextProps = {
    openMenu: boolean
    setOpenMenu: Dispatch<SetStateAction<boolean>>
}

export type MenuItemProps = {
    id: number
    name: string;
    link: string;
    icon: JSX.Element;
    isShow?: boolean;
    isExternal: boolean;
    onClick?: () => void;
    className?: string;
    children?: ReactNode;
    eventName?: string;
    hideIcon?: boolean;
    type?: string;
};
