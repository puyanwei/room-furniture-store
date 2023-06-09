const meta = {
  title: "Atoms/Colors",
}

export default meta

export const Colors = {
  render: () => (
    <div className="p-2 space-y-4">
      <h1 className="text-6xl">Brand Colors</h1>
      <h2>Room Gray</h2>
      <div className="w-12 h-12 rounded-md bg-room-gray border-[1px] border-white" />
      <h2>Room Dark Gray</h2>
      <div className="w-12 h-12 border-[1px] border-white rounded-md bg-room-darkgray" />
    </div>
  ),
}
