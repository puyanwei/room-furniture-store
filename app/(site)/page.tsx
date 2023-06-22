"use client"

import { useState } from "react"
import { CallToActionSection } from "@/components/3-compositions/CallToActionSection"
import { DescriptionSection } from "@/components/3-compositions/DescriptionSection"
import { furnitureInfo } from "@/shared/consts"
import { HomeHero } from "@/components/3-compositions/HomeHero"

type IndexesAsStringOfUnions = Exclude<keyof typeof furnitureInfo, keyof Array<any>>
type ConvertToNumber<T> = T extends `${infer T extends number}` ? T : never
export type ImageNumber = ConvertToNumber<IndexesAsStringOfUnions>
// Infers numbers by the number of elements in the furnitureInfo array

export default function Home() {
  const [index, setIndex] = useState<ImageNumber>(0)
  const {
    heading,
    text,
    alt,
    src: { large, small },
  } = furnitureInfo[index]

  function handleBackButton() {
    if (index === 0) return
    setIndex((prevIndex) => (prevIndex - 1) as ImageNumber)
  }

  function handleNextButton() {
    const lastElementOfArray = furnitureInfo.length - 1
    if (index === lastElementOfArray) return
    setIndex((prevIndex) => (prevIndex + 1) as ImageNumber)
  }

  return (
    <>
      <HomeHero
        className="sm:hidden"
        src={small}
        alt={alt}
        width={375}
        height={360}
        handleBackButton={handleBackButton}
        handleNextButton={handleNextButton}
      />
      <HomeHero
        className="hidden sm:block"
        src={large}
        alt={alt}
        width={840}
        height={534}
        handleBackButton={handleBackButton}
        handleNextButton={handleNextButton}
      />
      <CallToActionSection heading={heading} text={text} />
      <DescriptionSection />
    </>
  )
}
