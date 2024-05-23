import * as React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { menus } from "./data.header";
import { cn } from "@/lib/utils";
import Image from "next/image";


const Navbar: React.FC = () => {
    return (
        <nav className="header__nav py-2">
            <ul className="flex items-center">
            {menus.map((menuItem, index) => (
                <li key={menuItem.id ?? index} className="flex-grow">
                    { menuItem.title }
                </li>
            ))}
            </ul>
        </nav>
    );
};

export default Navbar;
