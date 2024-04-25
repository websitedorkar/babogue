import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  " group inline-flex h-10 w-max items-center justify-center rounded-full bg-white px-5 py-1 text-base font-semibold transition-colors hover:bg-primary hover:text-white focus:bg-primary focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary data-[active]:text-white data-[state=open]:bg-primary data-[state=open]:text-white dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50 dark:data-[active]:bg-neutral-800/50 dark:data-[state=open]:bg-neutral-800/50"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group relative before:content-[''] before:absolute before:w-0 before:h-0 before:top-[100px] data-[active]:before:top-[88px] data-[state=open]:before:top-[88px] data-[state=open]:before:opacity-100 before:start-1/2 before:-translate-x-1/2 before:opacity-0 before:border-b-[10px] before:transition-all before:ease-in before:duration-50 before:border-b-white before:border-x-[12px] before:border-x-transparent before:border-solid", className)}
    {...props}
  >
    {children}{""}
    <svg
    className="ml-[4px] mt-[2px] relative transition duration-200 group-data-[state=open]:rotate-180"
    width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.72353 8.00629C6.66098 7.93899 6.60821 7.86319 6.56675 7.78119L0.893775 1.68147C0.724133 1.49368 0.630035 1.24955 0.630035 0.996482C0.630035 0.743412 0.724133 0.499465 0.893775 0.311673C0.974124 0.222125 1.07256 0.150445 1.18242 0.101414C1.29229 0.0523832 1.4112 0.0270538 1.53151 0.0270538C1.65182 0.0270538 1.77074 0.0523832 1.8806 0.101414C1.99047 0.150445 2.08854 0.222125 2.16888 0.311673L4.56965 2.89083L7.3913 5.92384L11.4317 1.57872L12.6104 0.311673C12.6908 0.222229 12.7888 0.15056 12.8987 0.101597C13.0086 0.0526344 13.1275 0.0274201 13.2478 0.0274201C13.3681 0.0274201 13.487 0.0526344 13.5969 0.101597C13.7067 0.15056 13.8051 0.222229 13.8855 0.311673C14.0552 0.499465 14.1493 0.743412 14.1493 0.996482C14.1493 1.24955 14.0552 1.49368 13.8855 1.68147L8.21256 7.78119C8.17116 7.86322 8.11839 7.93903 8.05578 8.00629C7.97201 8.09851 7.86925 8.17164 7.75468 8.22058C7.6401 8.26951 7.51658 8.29324 7.39204 8.28999H7.36493C7.24417 8.28994 7.12482 8.26464 7.01437 8.21582C6.90393 8.16699 6.80483 8.09557 6.72353 8.00629Z" fill="currentColor"/>
      </svg>

    {/* <ChevronDown
      className="relative top-[1px] ml-1 h-6 w-6 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    /> */}
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-start mt-11")}>
    <div className="overflow-hidden p-2">
      <NavigationMenuPrimitive.Viewport
        className={cn(
          "origin-top-center relative shadow-[0px_0px_10px_0px_rgba(0,0,0,0.075)] mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full rounded-[16px] border-none bg-white text-dark data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)] dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 overflow-visible",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-neutral-200 shadow-md dark:bg-neutral-800" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
