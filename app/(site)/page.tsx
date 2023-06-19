import { CallToActionSection } from "@/components/3-compositions/CallToActionSection"
import { DescriptionSection } from "@/components/3-compositions/DescriptionSection"
import { HomeHero } from "@/components/3-compositions/HomeHero"
import { Component } from "@/shared/types"

export default async function Home() {
  return (
    <>
      <HomeHero />
      <CallToActionSection />
      <DescriptionSection />
    </>
  )
}
