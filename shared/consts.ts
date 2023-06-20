import { FurnitureInfo, NavbarLinks } from "./types"

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

export const furnitureInfo = [
  {
    src: "/assets/mobile-image-hero-1.jpg",
    alt: "white chair and wooden desk",
    heading: "Discover innovative ways to decorate",
    text: `We provide unmatched quality, comfort, and style for property owners across the country. Our
    experts combine form and function in bringing your vision to life. Create a room in your own
    style with our collection and make your property a reflection of you and what you love.`,
  },
  {
    src: "/assets/mobile-image-hero-2.jpg",
    alt: "3 multicolored plastic chairs",
    heading: "We are available all across the globe",
    text: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`,
  },
  {
    src: "/assets/mobile-image-hero-3.jpg",
    alt: "a black metal chair",
    heading: "Manufactured with the best materials",
    text: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`,
  },
] as const satisfies readonly FurnitureInfo[]
