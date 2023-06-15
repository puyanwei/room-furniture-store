import { Navbar } from "@/components/2-molecules/Navbar"
import { navbarLinks } from "@/shared/consts"

export default async function Home() {
  return (
    <div className="grid h-screen bg-black">
      <Navbar data={navbarLinks} />
      <main>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat obcaecati perspiciatis et
        odit impedit assumenda optio iste molestias blanditiis veniam ipsam in autem eum nostrum
        quis magni quos, expedita molestiae.
      </main>
    </div>
  )
}
