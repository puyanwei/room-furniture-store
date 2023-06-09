const meta = {
  title: "Atoms/Colors",
}

export default meta

export const Colors = {
  render: () => (
    <div className="p-2 space-y-4">
      <h1>Space Black (#0b0d17)</h1>
      <div className="w-12 h-12 rounded-md bg-slate-200 border-[1px] border-white" />
      <h1>Space Light Blue (#d0d6f9)</h1>
      <div className="w-12 h-12 bg-blue-500 rounded-md" />
      <h1>Space White (#ffffff)</h1>
      <div className="w-12 h-12 bg-red-800 rounded-md" />
    </div>
  ),
}
