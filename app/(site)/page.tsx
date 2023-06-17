import { HomeHero } from "@/components/3-compositions/HomeHero/HomeHero"
import { Component } from "@/shared/types"

export default async function Home() {
  return (
    <>
      <HomeHero />
      <CallToActionSection />
      <FurnitureImage />
      <DescriptionSection />
    </>
  )
}

function CallToActionSection({ className }: Component) {
  return <div className={className}></div>
}
function FurnitureImage({ className }: Component) {
  return <div className={className}></div>
}
function DescriptionSection({ className }: Component) {
  return <div className={className}></div>
}
