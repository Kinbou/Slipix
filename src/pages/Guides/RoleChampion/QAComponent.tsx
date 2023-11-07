interface QAComponentProps {
  question: string
  answer: string
}

const QAComponent = ({ question, answer }: QAComponentProps) => {
  return (
    <div className="flex items-start mb-1em w-100%">
      <i className="fas fa-arrow-alt-circle-right text-gold pt-0.2em" />
      <div className="text-left ml-.5em">
        <p className="text-gold text-1.1rem">{question}</p>
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default QAComponent
