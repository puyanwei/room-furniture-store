import { useRef, useState } from "react"
import Image from "next/image"

type ImageNumber = 1 | 2 | 3

const images = [
  {
    src: "./assets/desktop-image-hero-1.jpg",
    alt: "white chair and wooden desk",
  },
  {
    src: "./assets/desktop-image-hero-2.jpg",
    alt: "3 multicolored plastic chairs",
  },
  {
    src: "./assets/desktop-image-hero-3.jpg",
    alt: "a black metal chair",
  },
]

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
    <div>
      {images.map(({ src, alt }, index) => {
        const imageVisibility = selectedImage === index + 1 ? "" : "hidden"
        return (
          <Image
            className={`object-contain ${imageVisibility}`}
            src={src}
            alt={alt}
            height={100}
            width={100}
            key={index}
          />
        )
      })}
      <button className="p-2 bg-green-300 rounded" onClick={handleBackButton}>{`<`}</button>
      <button className="p-2 bg-green-300 rounded" onClick={handleNextButton}>{`>`}</button>
    </div>
  )
}
