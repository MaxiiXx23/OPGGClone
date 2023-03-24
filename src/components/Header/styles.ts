import styled from 'styled-components'

import * as Menubar from '@radix-ui/react-menubar'
import { NavLink } from 'react-router-dom'

export const ContainerNav = styled(Menubar.Root)`
  top: 0;
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme['blue-500']};
`

export const ContainerImageLogoNavSelected = styled.div`
  width: 22%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    height: 1.3rem;
  }
`

export const WrapperNavActived = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  img {
    width: 1.8rem;
    height: 1.8rem;
    padding: 0px;
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: 1.6;
    color: ${({ theme }) => theme['gray-100']};
  }
`

export const NavList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;

  background-color: ${({ theme }) => theme['slate-900']};

  list-style-type: none;
`

export const NavOption = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

interface INavLinkOptionProps {
  variantPadding?: boolean
}

export const WrapperNavLink = styled.div<INavLinkOptionProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ variantPadding }) => (variantPadding ? '0rem' : '0.25rem')}
    0.5rem;
  border: 0;
  border-radius: 4px;
  &:hover {
    background-color: ${({ theme }) => theme['slate-800']};
  }
  &:first-child {
    margin-left: 10px;
  }
`

export const NavLinkOption = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  color: ${({ theme }) => theme['gray-300']};

  text-decoration: none;
`

export const TextNavOption = styled.span`
  display: inline;
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.6;
  color: ${({ theme }) => theme['gray-300']};
`

export const NavOptionModeIdiom = styled.div`
  padding-right: 1.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.75rem;
  background-color: ${({ theme }) => theme['slate-900']};
`

export const ButtonMode = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;

  color: ${({ theme }) => theme['gray-100']};
`

export const WrapperIconEarth = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme['gray-100']};
`

export const BtnIdiom = styled(Menubar.Trigger)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.25rem;

  background: transparent;

  color: ${({ theme }) => theme['gray-300']};
`

export const BtnLogIn = styled.button`
  width: 4.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border: 0;
  border-radius: 4px;

  background: ${({ theme }) => theme['blue-500']};

  color: ${({ theme }) => theme['gray-100']};
  cursor: pointer;
`
// Nav secundary

export const ContainerNavSecundary = styled.nav`
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme['blue-500']};
`

export const NavListSecundary = styled.ul`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 1rem 8.25rem 0 8.25rem;
  list-style-type: none;
`
