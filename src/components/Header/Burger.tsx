import styled from 'styled-components';
import cx from 'classnames';

const StyledBurger = styled.div`
  width: 2.5rem;
  height: 2rem;
  position: fixed;
  top:20px;
  right: 20px;
  z-index: 99;

  cursor: pointer;

  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2.5rem;
    height: .25rem;
    background-color: ${({ open }: { open: boolean }): string => (open ? '#ccc' : 'black')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all .3s linear;

    &:nth-child(1) {
      transform: ${({ open }: { open: boolean }): string => (open ? 'rotate(37deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }: { open: boolean }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }: { open: boolean }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }: { open: boolean }) => (open ? 'rotate(-37deg)' : 'rotate(0)')};
    }
  }
`;

const Burger = ({ handleClick, open }: any) => {
	return (
		<>
			{/* <StyledBurger open={open} onClick={handleClick}>
				<div />
				<div />
				<div />
			</StyledBurger>  */}
			<div className={cx('fixed top-20px right-20px')} onClick={handleClick}>
				<div className='rotate-0 bg-black w-2.5rem h-0.25rem rounded-lg' />
				<div className='translate-x-0 bg-black w-2.5rem h-0.25rem rounded-lg' />
				<div className='rotate-0 bg-black w-2.5rem h-0.25rem rounded-lg' />
			</div> 
		</>
	);
};

export default Burger;
