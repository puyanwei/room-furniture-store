"use client"

import Image from "next/image"
import { AngleLeft } from "@/components/1-atoms/Icons/AngleLeft"
import { AngleRight } from "@/components/1-atoms/Icons/AngleRight"
import { Icon } from "@/components/1-atoms/Icons"
import { homepageHeroImages } from "@/shared/consts"
import { useState } from "react"

type ImageNumber = 1 | 2 | 3

export function HomeHero() {
  const [selectedImage, setSelectedImage] = useState<ImageNumber>(1)

  function handleBackButton() {
    if (selectedImage === 1) return
    setSelectedImage((selectedImage - 1) as ImageNumber)
  }

  function handleNextButton() {
    const lastElementOfArray = homepageHeroImages.length
    if (selectedImage === lastElementOfArray) return
    setSelectedImage((selectedImage + 1) as ImageNumber)
  }

  const buttonStyles = "p-6 bg-black hover:bg-neutral-700"
  return (
    <div className="relative flex flex-col overflow-hidden h-2/5">
      {homepageHeroImages.map(({ src, alt }, index) => {
        const imageVisibility = selectedImage === index + 1 ? "" : "hidden"
        return (
          <Image
            className={`absolute inset-0 w-full h-full object-cover ${imageVisibility}`}
            src={src}
            alt={alt}
            key={index}
            fill
          />
        )
      })}
      <div className="absolute bottom-0 right-0">
        <button className={buttonStyles} onClick={handleBackButton}>
          <Icon className="scale-75" icon={<AngleLeft />} />
        </button>
        <button className={buttonStyles} onClick={handleNextButton}>
          <Icon className="scale-75" icon={<AngleRight />} />
        </button>
      </div>
    </div>
  )
}
