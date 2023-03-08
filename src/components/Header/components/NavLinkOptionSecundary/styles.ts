import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

interface IWrapperOptionSecundaryProps {
  isActive: boolean
}

export const WrapperOptionSecundary = styled.li<IWrapperOptionSecundaryProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  border-bottom: 2px solid;
  border-bottom-color: ${({ theme, isActive }) =>
    isActive ? theme.white : 'transparent'};
  opacity: ${({ theme, isActive }) => (isActive ? 1 : 0.4)};
  transition: 0.2s;
  &:hover {
    border-bottom-color: ${({ theme }) => theme.white};
    opacity: 1;
  }
`

export const Text = styled.span<IWrapperOptionSecundaryProps>`
  color: ${({ theme }) => theme.white};
`

export const NavLinkOption = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`
