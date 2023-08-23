import { Skill } from '@/app/interfaces'

function SkillCard({ skill }: { skill: Skill }) {
  const { title, description, icon } = skill

  return (
    <div className="flex flex-col flex-1 gap-[16px] sm:gap-[24px] min-w-[256px]">
      <span className="text-xl text-secondary" aria-hidden>{icon}</span>

      <h5>{title}</h5>

      <p>{description}</p>
    </div>
  )
}

export default SkillCard
