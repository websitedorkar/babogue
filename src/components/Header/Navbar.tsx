import * as React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Baby_1 from './img/baby-1.png';
import Baby_2 from './img/baby-2.png';
import Baby_3 from './img/baby-3.png';
import Baby_4 from './img/baby-4.png';
import Baby_5 from './img/baby-5.png';

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
            <NavigationMenuList className="justify-between">
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-5 p-6 md:w-[400px] lg:w-[1250px] lg:grid-cols-2">
                            {/* Single */}
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="border border-border p-4 rounded-[16px] grid gap-4 items-center grid-cols-[130px_1fr]"
                                        href="/nav"
                                    >
                                        <div>
                                            <div className='w-[130px] h-[130px] min-[130px] border-[#C1DED5] rounded-full flex items-center justify-center p-[6px] mx-auto border-dashed border-2'>
                                                <Image src={Baby_1} className='inline-block' alt={'hello'} />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-3xl leading-6 font-bold text-dark mb-3">0-6 Months</h3>
                                            <div className="text-xs leading-7">The 0-6 Months Sleep Series gives you 6 months access to our Newborn and 4-6 Months Sleep Series courses.</div>
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            {/* Single */}
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="border border-border p-4 rounded-[16px] grid gap-4 items-center grid-cols-[130px_1fr]"
                                        href="/nav"
                                    >
                                        <div>
                                            <div className='w-[130px] h-[130px] min-[130px] border-[#C1DED5] rounded-full flex items-center justify-center p-[6px] mx-auto border-dashed border-2'>
                                                <Image src={Baby_1} className='inline-block' alt={'hello'} />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-3xl leading-6 font-bold text-dark mb-3">0-6 Months</h3>
                                            <div className="text-xs leading-7">The 0-6 Months Sleep Series gives you 6 months access to our Newborn and 4-6 Months Sleep Series courses.</div>
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            {/* Single */}
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="border border-border p-4 rounded-[16px] grid gap-4 items-center grid-cols-[130px_1fr]"
                                        href="/nav"
                                    >
                                        <div>
                                            <div className='w-[130px] h-[130px] min-[130px] border-[#C1DED5] rounded-full flex items-center justify-center p-[6px] mx-auto border-dashed border-2'>
                                                <Image src={Baby_1} className='inline-block' alt={'hello'} />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-3xl leading-6 font-bold text-dark mb-3">0-6 Months</h3>
                                            <div className="text-xs leading-7">The 0-6 Months Sleep Series gives you 6 months access to our Newborn and 4-6 Months Sleep Series courses.</div>
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            {/* Single */}
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="border border-border p-4 rounded-[16px] grid gap-4 items-center grid-cols-[130px_1fr]"
                                        href="/nav"
                                    >
                                        <div>
                                            <div className='w-[130px] h-[130px] min-[130px] border-[#C1DED5] rounded-full flex items-center justify-center p-[6px] mx-auto border-dashed border-2'>
                                                <Image src={Baby_1} className='inline-block' alt={'hello'} />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-3xl leading-6 font-bold text-dark mb-3">0-6 Months</h3>
                                            <div className="text-xs leading-7">The 0-6 Months Sleep Series gives you 6 months access to our Newborn and 4-6 Months Sleep Series courses.</div>
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            {/* Single */}
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="border border-border p-4 rounded-[16px] grid gap-4 items-center grid-cols-[130px_1fr]"
                                        href="/nav"
                                    >
                                        <div>
                                            <div className='w-[130px] h-[130px] min-[130px] border-[#C1DED5] rounded-full flex items-center justify-center p-[6px] mx-auto border-dashed border-2'>
                                                <Image src={Baby_1} className='inline-block' alt={'hello'} />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-3xl leading-6 font-bold text-dark mb-3">0-6 Months</h3>
                                            <div className="text-xs leading-7">The 0-6 Months Sleep Series gives you 6 months access to our Newborn and 4-6 Months Sleep Series courses.</div>
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>One To One</NavigationMenuTrigger>
                    <NavigationMenuContent>

                        <ul className="grid gap-5 p-6 md:w-[400px] lg:w-[1250px] lg:grid-cols-2">
                            {/* Single */}
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="border border-border p-4 rounded-[16px] grid gap-4 items-center grid-cols-[130px_1fr]"
                                        href="/nav"
                                    >
                                        <div>
                                            <div className='w-[130px] h-[130px] min-[130px] border-[#C1DED5] rounded-full flex items-center justify-center p-[6px] mx-auto border-dashed border-2'>
                                                <Image src={Baby_1} className='inline-block' alt={'hello'} />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-3xl leading-6 font-bold text-dark mb-3">0-6 Months</h3>
                                            <div className="text-xs leading-7">The 0-6 Months Sleep Series gives you 6 months access to our Newborn and 4-6 Months Sleep Series courses.</div>
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            {/* Single */}
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="border border-border p-4 rounded-[16px] grid gap-4 items-center grid-cols-[130px_1fr]"
                                        href="/nav"
                                    >
                                        <div>
                                            <div className='w-[130px] h-[130px] min-[130px] border-[#C1DED5] rounded-full flex items-center justify-center p-[6px] mx-auto border-dashed border-2'>
                                                <Image src={Baby_1} className='inline-block' alt={'hello'} />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-3xl leading-6 font-bold text-dark mb-3">0-6 Months</h3>
                                            <div className="text-xs leading-7">The 0-6 Months Sleep Series gives you 6 months access to our Newborn and 4-6 Months Sleep Series courses.</div>
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            {/* Single */}
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="border border-border p-4 rounded-[16px] grid gap-4 items-center grid-cols-[130px_1fr]"
                                        href="/nav"
                                    >
                                        <div>
                                            <div className='w-[130px] h-[130px] min-[130px] border-[#C1DED5] rounded-full flex items-center justify-center p-[6px] mx-auto border-dashed border-2'>
                                                <Image src={Baby_1} className='inline-block' alt={'hello'} />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-3xl leading-6 font-bold text-dark mb-3">0-6 Months</h3>
                                            <div className="text-xs leading-7">The 0-6 Months Sleep Series gives you 6 months access to our Newborn and 4-6 Months Sleep Series courses.</div>
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            {/* Single */}
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="border border-border p-4 rounded-[16px] grid gap-4 items-center grid-cols-[130px_1fr]"
                                        href="/nav"
                                    >
                                        <div>
                                            <div className='w-[130px] h-[130px] min-[130px] border-[#C1DED5] rounded-full flex items-center justify-center p-[6px] mx-auto border-dashed border-2'>
                                                <Image src={Baby_1} className='inline-block' alt={'hello'} />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-3xl leading-6 font-bold text-dark mb-3">0-6 Months</h3>
                                            <div className="text-xs leading-7">The 0-6 Months Sleep Series gives you 6 months access to our Newborn and 4-6 Months Sleep Series courses.</div>
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            {/* Single */}
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="border border-border p-4 rounded-[16px] grid gap-4 items-center grid-cols-[130px_1fr]"
                                        href="/nav"
                                    >
                                        <div>
                                            <div className='w-[130px] h-[130px] min-[130px] border-[#C1DED5] rounded-full flex items-center justify-center p-[6px] mx-auto border-dashed border-2'>
                                                <Image src={Baby_1} className='inline-block' alt={'hello'} />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-3xl leading-6 font-bold text-dark mb-3">0-6 Months</h3>
                                            <div className="text-xs leading-7">The 0-6 Months Sleep Series gives you 6 months access to our Newborn and 4-6 Months Sleep Series courses.</div>
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationLink href="/">Partnerships</NavigationLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationLink href="/reviews">Reviews</NavigationLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationLink href="/blog">Blog</NavigationLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationLink href="/about-us">About Us</NavigationLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationLink href="/contact-us">Contact Us</NavigationLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

const ListItem: React.ForwardRefExoticComponent<React.ComponentPropsWithoutRef<"a">> = React.forwardRef(
    ({ className, title, children, ...props }) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
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
