function Skill({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-1 gap-[16px] sm:gap-[24px] min-w-[256px]">
      <span className="text-xl text-secondary">{icon}</span>

      <h5>{title}</h5>

      <p>{description}</p>
    </div>
  )
}

export default Skill
