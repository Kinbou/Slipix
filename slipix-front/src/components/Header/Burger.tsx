import { useState } from 'react';
import styled from 'styled-components';

import Menu from '@components/Header/Menu';

const StyledBurger = styled.div`
  width: 2.5rem;
  height: 2rem;
  position: fixed;
  top:20px;
  right: 20px;
  z-index: 99;
  display: ${({ open }: {open: boolean}) => open ? 'flex' : 'none'};

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

const Burger = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<StyledBurger open={open} onClick={() => setOpen(!open)}>
				<div />
				<div />
				<div />
			</StyledBurger>
			<Menu open={open} setOpen={setOpen} />
		</>
	);
};

export default Burger;
