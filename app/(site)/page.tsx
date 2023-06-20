"use client"

import { CallToActionSection } from "@/components/3-compositions/CallToActionSection"
import { DescriptionSection } from "@/components/3-compositions/DescriptionSection"
import { HomeHero } from "@/components/3-compositions/HomeHero"
import { furnitureInfo } from "@/shared/consts"
import { useState } from "react"

type IndexesAsStringOfUnions = Exclude<keyof typeof furnitureInfo, keyof Array<any>>
type ConvertToNumber<T> = T extends `${infer T extends number}` ? T : never
export type ImageNumber = ConvertToNumber<IndexesAsStringOfUnions>
// Infers numbers by the number of elements in the furnitureInfo array

export default function Home() {
  const [index, setIndex] = useState<ImageNumber>(0)
  const { heading, text, src, alt } = furnitureInfo[index]

  function handleBackButton() {
    console.log("back button")
    if (index === 0) return
    setIndex((prevIndex) => (prevIndex - 1) as ImageNumber)
  }

  function handleNextButton() {
    console.log("next button")
    const lastElementOfArray = furnitureInfo.length - 1
    if (index === lastElementOfArray) return
    setIndex((prevIndex) => (prevIndex + 1) as ImageNumber)
  }

  return (
    <>
      <HomeHero
        src={src}
        alt={alt}
        handleBackButton={handleBackButton}
        handleNextButton={handleNextButton}
      />
      <CallToActionSection heading={heading} text={text} />
      <DescriptionSection />
    </>
  )
}
