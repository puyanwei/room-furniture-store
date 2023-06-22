import Image from "next/image"
import { AngleLeft } from "@/components/1-atoms/Icons/AngleLeft"
import { AngleRight } from "@/components/1-atoms/Icons/AngleRight"
import { Icon } from "@/components/1-atoms/Icons"
import { Component, ComponentWithChildren } from "@/shared/types"

interface HomeHeroProps extends Component {
  src: string
  alt: string
  height: number
  width: number
  handleBackButton: () => void
  handleNextButton: () => void
}

export function HomeHero({
  className,
  src,
  alt,
  height,
  width,
  handleBackButton,
  handleNextButton,
}: HomeHeroProps) {
  const buttonStyles = "p-4 bg-black hover:bg-neutral-700"
  return (
    <div className={`relative w-full shrink-0 h-80 ${className}`}>
      <Image
        className="absolute inset-0 object-cover object-center w-full h-full"
        src={src}
        alt={alt}
        key={alt}
        height={height}
        width={width}
        priority
      />
      <ButtonGroup className="absolute bottom-0 right-0">
        <button className={buttonStyles} onClick={handleBackButton}>
          <Icon className="scale-50" icon={<AngleLeft />} />
        </button>
        <button className={buttonStyles} onClick={handleNextButton}>
          <Icon className="scale-50" icon={<AngleRight />} />
        </button>
      </ButtonGroup>
    </div>
  )
}

function ButtonGroup({ children, className }: ComponentWithChildren) {
  return <div className={className}>{children}</div>
}
