"use client"

import Image from "next/image"
import { AngleLeft } from "@/components/1-atoms/Icons/AngleLeft"
import { AngleRight } from "@/components/1-atoms/Icons/AngleRight"
import { Icon } from "@/components/1-atoms/Icons"
import { Component } from "@/shared/types"

interface HomeHeroProps extends Component {
  src: string
  alt: string
  handleBackButton: () => void
  handleNextButton: () => void
}

export function HomeHero({ src, alt, handleBackButton, handleNextButton }: HomeHeroProps) {
  const buttonStyles = "p-4 bg-black hover:bg-neutral-700"
  return (
    <div className="relative w-full shrink-0 h-80">
      <Image
        className="absolute inset-0 object-cover object-center w-full h-full"
        src={src}
        alt={alt}
        key={alt}
        height={360}
        width={375}
      />
      <div className="absolute bottom-0 right-0">
        <button className={buttonStyles} onClick={handleBackButton}>
          <Icon className="scale-50" icon={<AngleLeft />} />
        </button>
        <button className={buttonStyles} onClick={handleNextButton}>
          <Icon className="scale-50" icon={<AngleRight />} />
        </button>
      </div>
    </div>
  )
}
