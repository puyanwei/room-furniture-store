import { Images, NavbarLinks } from "./types"

export const navbarLinks: readonly NavbarLinks[] = [
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
] as const

export const homepageHeroImages: readonly Images[] = [
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
] as const
