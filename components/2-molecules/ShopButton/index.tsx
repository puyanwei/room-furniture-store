import { Icon } from "@/components/1-atoms/Icons"
import { Arrow } from "@/components/1-atoms/Icons/Arrow"
import { Component } from "@/shared/types"
import Link from "next/link"

interface ShopButtonProps extends Component {}

export function ShopButton({ className }: ShopButtonProps) {
  return (
    <div className={className}>
      <Link className="flex items-center text-sm tracking-[1em]" href="/shop">
        SHOP NOW <Icon className="pl-6" icon={<Arrow />} />
      </Link>
    </div>
  )
}
