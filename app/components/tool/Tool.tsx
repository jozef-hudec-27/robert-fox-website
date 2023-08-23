function Tool({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center rounded-[16px] gap-[12px] px-[32px] py-[16px] border border-black-10 shadow-xl">
      <span className="" aria-hidden>
        {icon}
      </span>

      <p className="font-black-100 font-bold">{name}</p>
    </div>
  )
}

export default Tool
