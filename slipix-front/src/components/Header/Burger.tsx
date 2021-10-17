import { useState } from 'react'
import styled from 'styled-components'

import Menu from '@containers/Header/Menu'

const StyledBurger = styled.div`
  width: 2.5rem;
  height: 2rem;
  position: fixed;
  top:20px;
  right: 20px;
  display: flex;
  z-index: 99;
  display: none;

  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 99;
  }

  div {
    width: 2.5rem;
    height: .25rem;
    background-color: ${({ open }: any): string => (open ? '#ccc' : 'black')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all .3s linear;

    &:nth-child(1) {
      transform: ${({ open }: any): string => (open ? 'rotate(37deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }: any) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }: any) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }: any) => (open ? 'rotate(-37deg)' : 'rotate(0)')};
    }
  }
`

const Burger = (): React.ReactElement => {
  const [open, setOpen] = useState(false)
  return (
    <>
      {/* @ts-ignore */}
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Menu open={open} setOpen={setOpen} />
    </>
  )
}

export default Burger
