# Room - Furniture Store

This is a frontend mentor [challenge](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq) exercise to build a website for a furniture store called "Room".

| Website   | https://room-furniture-store.vercel.app/                   |
| --------- | ---------------------------------------------------------- |
| Storybook | https://64945e9e9cc33b0504112779-wfgbyalohx.chromatic.com/ |

![desktop-preview](https://github.com/puyanwei/room-furniture-store/assets/14803518/37fc1735-a2d9-4337-acbf-0bb94e979039)
![mobile-design](https://github.com/puyanwei/room-furniture-store/assets/14803518/c2c3d17e-106f-452a-8b88-3ef905d14b27)

There didn't seem to be any tablet designs so that breakpoint was improvised.

### Tech

- Next.js and React with Typescript (Next 13 App folder)
- Tailwind for styling
- Storybook for component library
- Deployment of Storybook with Chromatic
- Deployed with Vercel

### Installation

```
git clone https://github.com/puyanwei/room-furniture-store.git
cd room-furniture-store
yarn install
yarn dev
```

### Points of Interest

I wanted to get familiar with Next 13's new app folder implementation so I decided to use this tech stack to learn it. Overall it seems quite straight forward as long as you follow the documentation. The harder parts are making sure that there is a separation for server and client components. One cannot just be using React hooks whereever they want anymore.

- **RootLayout/Layout files are server only!** - This means that you cannot use React hooks inside there and I also had a lot of trouble trying to pass down props to its children (in another project). So it seems there are limitations to what you can apply to all pages, which seems to have been done deliberately so that there is a clear separation of server and client components. However, it doesn't seem clear how things might work if you need some stateful calculation such as a Navbar component where it is highlighting which page it is on. You cannot grab the current url in the server, so how can this be done?

- **Reponsive Images** - On smaller screen sizes, the images in the hero section are more square, and larger ones are rectangular. In `(site)/page.tsx` you can see a duplicataion of the `HomeHero` component. This is because I had issues trying to get a screen width to work using a custom React hook. Even though it is specified that page is a client component using `use client` keyword, it stil brought up server errors of trying to find the window. So in the end I used tailwind to responsively hide the appropriate images accordingly.

- **Typescript Inferrance off an Array** - This snippet off `(site)/page.tsx` makes Typescript throw an error if the `ImageNumber` type does not match the number of elements in the `furnitureInfo` array. This is great as if a developer needs to add more items to the array it gives good feedback to update all the appropriate places.

```
type IndexesAsStringOfUnions = Exclude<keyof typeof furnitureInfo, keyof Array<any>>
type ConvertToNumber<T> = T extends `${infer T extends number}` ? T : never
export type ImageNumber = ConvertToNumber<IndexesAsStringOfUnions>
// Infers numbers by the number of elements in the furnitureInfo array
```
