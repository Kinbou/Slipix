import cx from 'classnames'

interface BurgerProps {
  handleClick: () => void
  open: boolean
}

const Burger = ({ handleClick, open }: BurgerProps) => {
  return (
    <div
      className={
        'fixed top-20px right-20px flex justify-around flex-col flex-nowrap cursor-pointer h-35px z-10'
      }
      onClick={handleClick}
    >
      <div
        className={cx(
          'rotate-0 bg-black w-2.5rem h-0.25rem rounded-lg origin-left transition-all duration-300',
          {
            ['rotate-37 bg-white']: open,
          },
        )}
      />
      <div
        className={cx(
          'translate-x-0 bg-black w-2.5rem h-0.25rem rounded-lg transition-all duration-300',
          {
            ['opacity-0']: open,
          },
        )}
      />
      <div
        className={cx(
          '-rotate-0 bg-black w-2.5rem h-0.25rem rounded-lg origin-left transition-all duration-300',
          {
            ['-rotate-37 bg-white']: open,
          },
        )}
      />
    </div>
  )
}

export default Burger
