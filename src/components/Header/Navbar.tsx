import * as React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { menus } from "./data.header";

import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const NavigationLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = href === pathname;

    return (
        <NavigationMenuLink asChild active={isActive}>
            <Link href={href} className={`NavigationMenuLink px-5 py-1 rounded-full font-semibold inline-block hover:bg-primary hover:text-white transition-all duration-200 ${isActive ? 'bg-primary text-white' : ''}`}>{children}</Link>
        </NavigationMenuLink>
    );
};

const Navbar: React.FC = () => {
    return (
        <NavigationMenu className="py-4">
            {menus &&
                <NavigationMenuList className="justify-between">
                    {menus.map(menuItem => (
                        <NavigationMenuItem key={menuItem.id}>
                            {menuItem.submenu ?
                                <>
                                    {menuItem.title && <NavigationMenuTrigger>{menuItem.title}</NavigationMenuTrigger>}
                                    <NavigationMenuContent>
                                        <ul className="grid gap-5 p-6 md:w-[400px] lg:w-[1250px] lg:grid-cols-2">
                                            {menuItem.submenu.map((sub, i) => (
                                                <li key={i}>
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            className="border border-border p-4 rounded-[16px] grid gap-4 items-center grid-cols-[130px_1fr]"
                                                            href={menuItem.slug}
                                                        >
                                                            <div>
                                                                {sub.thumbnail && <div className='w-[130px] h-[130px] min-[130px] border-[#C1DED5] rounded-full flex items-center justify-center p-[6px] mx-auto border-dashed border-2'>
                                                                    <Image src={sub.thumbnail} className='inline-block' alt={sub.title ?? ' title'} />
                                                                </div>}
                                                            </div>
                                                            <div>
                                                                {sub.thumbnail && <h3 className="text-3xl leading-6 font-bold text-dark mb-3">{sub.title}</h3>}
                                                                {sub.description && <div className="text-xs leading-7">{sub.description}</div>}
                                                            </div>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </>
                                :
                                <NavigationLink href={menuItem.slug}>{menuItem.title}</NavigationLink>
                            }
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>}
        </NavigationMenu>
    );
};

const ListItem: React.ForwardRefExoticComponent<React.ComponentPropsWithoutRef<"a">> = React.forwardRef(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref as React.LegacyRef<HTMLAnchorElement>} // Explicitly define the type for ref
                        className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            className
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {children}
                        </p>
                    </a>
                </NavigationMenuLink>
            </li>
        );
    }
);
ListItem.displayName = "ListItem";

export default Navbar;
