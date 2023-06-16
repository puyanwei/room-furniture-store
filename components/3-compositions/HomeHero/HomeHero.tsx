import { useState } from "react"
import Image from "next/image"
import { homepageHeroImages } from "@/shared/consts"

type ImageNumber = 1 | 2 | 3

export function HomeHero() {
  const [selectedImage, setSelectedImage] = useState<ImageNumber>(1)

  function handleBackButton() {
    if (selectedImage === 1) return
    setSelectedImage((selectedImage - 1) as ImageNumber)
  }

  function handleNextButton() {
    if (selectedImage === 3) return
    setSelectedImage((selectedImage + 1) as ImageNumber)
  }
  return (
    <div className="relative h-screen overflow-hidden">
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
        <button className="p-2 bg-green-300 rounded" onClick={handleBackButton}>{`<`}</button>
        <button className="p-2 bg-green-300 rounded" onClick={handleNextButton}>{`>`}</button>
      </div>
    </div>
  )
}
