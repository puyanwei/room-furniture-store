import { Icon } from "@/components/1-atoms/Icons"
import { Arrow } from "@/components/1-atoms/Icons/Arrow"
import { Component } from "@/shared/types"
import Link from "next/link"

interface ShopButtonProps extends Component {}

export function ShopButton({ className }: ShopButtonProps) {
  return (
    <div className={`hover:text-neutral-400 ${className}`}>
      <Link className="uppercase flex sm:justify-center text-sm tracking-[1em]" href="/shop">
        Shop now
        <Icon className="pl-6" icon={<Arrow className="fill-current" />} />
      </Link>
    </div>
  )
}
