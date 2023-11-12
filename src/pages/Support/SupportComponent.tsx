interface SupportComponentProps {
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
}

const SupportComponent = ({ title, icon, children }: SupportComponentProps) => {
  return (
    <div>
      <h2 className="text-gold mb-1rem h3">
        {title}
        {icon}
      </h2>
      {children}
    </div>
  )
}

export default SupportComponent
