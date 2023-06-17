import { Images, NavbarLinks } from "./types"

export const navbarLinks = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "shop",
    href: "/shop",
  },
  {
    name: "about",
    href: "/about",
  },
  {
    name: "contact",
    href: "/contact",
  },
] as const satisfies readonly NavbarLinks[]

export const homepageHeroImages = [
  {
    src: "/assets/mobile-image-hero-1.jpg",
    alt: "white chair and wooden desk",
  },
  {
    src: "/assets/mobile-image-hero-2.jpg",
    alt: "3 multicolored plastic chairs",
  },
  {
    src: "/assets/mobile-image-hero-3.jpg",
    alt: "a black metal chair",
  },
] as const satisfies readonly Images[]
