import { ReactNode } from 'react';

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
