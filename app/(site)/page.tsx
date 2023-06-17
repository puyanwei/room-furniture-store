import { CallToActionSection } from "@/components/3-compositions/CallToActionSection"
import { HomeHero } from "@/components/3-compositions/HomeHero"
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

function FurnitureImage({ className }: Component) {
  return <div className={className}></div>
}
function DescriptionSection({ className }: Component) {
  return <div className={className}></div>
}
