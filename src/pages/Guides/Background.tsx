import { PropsWithChildren } from 'react'
import cx from 'classnames'

type BackgroundProps = PropsWithChildren<{
  title?: string
  iconName?: string
  color?: string
}>

const Background = ({
  children,
  title,
  iconName,
  color = 'gold',
}: BackgroundProps) => {
  return (
    <div className="bg-bgGuide rounded-md lg:p-2em p-1rem flex flex-col items-center text-center my-1em lg:w-80% w-95%">
      <div className={`text-${color} flex items-center mb-2em`}>
        {iconName && (
          <i className={cx(`${iconName} lg-text-2.3rem text-1.3rem mr-.5em`)} />
        )}
        {title && <h2 className="h2">{title}</h2>}
        {iconName && (
          <i
            className={cx(`${iconName} lg-text-2.3rem text-1.3rem ml-.5rem`)}
          />
        )}
      </div>
      {children}
    </div>
  )
}

export default Background
