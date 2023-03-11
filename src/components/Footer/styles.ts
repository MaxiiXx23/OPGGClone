import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const ContainerFooter = styled.footer`
  width: 100%;
  height: 25rem;
  padding-block: 5rem 2rem;
  background: ${({ theme }) => theme['blue-500']};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  hr {
    width: 80%;
  }
`
export const ContentFooter = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
`
export const WrapperImg = styled.div`
  display: flex;
  align-items:flex-start;
  flex-grow: 1;
  img {
    width: 8rem;
    h
  }
`
export const WrapperList = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`
export const TitleList = styled.strong`
  color: ${({ theme }) => theme['gray-100']};
  font-size: ${({ theme }) => theme.fontSize.sb};
`
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-top: 1.5rem;
  width: 100%;
`
export const ItemList = styled.li`
  width: 100%;
  list-style: none;
`
const OptionItemBase = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme['gray-100']};
`
export const OptionItem = styled(OptionItemBase)``
export const OptionItemStrong = styled(OptionItemBase)`
  font-weight: bold;
`
export const ContainerBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
`
export const TextFooter = styled.p`
  text-align: justify;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme['gray-100']};
  margin-top: 2rem;
  padding-right: 0.5rem;
`
export const ContainerMidias = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  width: 12%;
  margin-top: 1rem;

  img {
    width: 2rem;
  }
  &:first-child {
    margin-left: 0.5rem;
  }
`
