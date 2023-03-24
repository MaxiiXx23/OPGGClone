import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const ContainerDesktop = styled.div`
  width: 100%;
  height: 29.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;

  border: 0;
  border-radius: 4px;

  background: #fff;
`

export const HeaderInfo = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  strong {
    padding: 1.25rem 1rem;
    font-size: ${({ theme }) => theme.fontSize.sb};
    color: ${({ theme }) => theme['slate-700']};
  }
`

export const ContentInfo = styled.ul`
  width: 100%;
  height: 100%;
  padding: 0rem 2rem 1rem 2rem;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 12.5rem 12.5rem;
  row-gap: 1rem;
  column-gap: 1.5rem;

  list-style-type: none;
`

export const CardInfo = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  img {
    width: 100%;
    height: 7.75rem;
    border: 0;
    border-radius: 4px;
  }
`
export const TitleCard = styled.strong`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.sb};
  color: ${({ theme }) => theme['slate-700']};
`

export const WrapperNavCard = styled(NavLink)`
  cursor: pointer;
  height: 90%;
  text-decoration: none;
`
