import { ReactNode, Dispatch, SetStateAction } from 'react';

export type MenuUIContextProps = {
    openMenu: boolean
    setOpenMenu: Dispatch<SetStateAction<boolean>>
}

export type MenuItem = {
    id: number
    name: string;
    link: string;
    icon: JSX.Element;
    isShow?: boolean;
    isExternal: boolean;
    className?: string;
    children?: ReactNode;
    eventName?: string;
    hideIcon?: boolean;
    type?: string;
    onClick?: () => void;
};
