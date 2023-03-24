import styled from 'styled-components'
const ContainerInfosBase = styled.div`
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
    font-size: ${({ theme }) => theme.fontSize.sb};
  }
`

export const ContainerDesktop = styled(ContainerInfosBase)``
export const ContainerComp = styled(ContainerInfosBase)`
  display: grid;
  align-items: flex-start;
  grid-template-areas:
    'header header'
    'standing schedule'
    'table game'
    'table game';
  grid-template-rows: 5rem 1fr 8fr;
  grid-template-columns: 1fr 1fr;
`
export const HeaderComp = styled.div`
  grid-area: header;
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme['gray-250']};
  img {
    height: 100%;
  }
`
export const WrapperComp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  a {
    margin-left: 1rem;
    display: flex;
    text-decoration: none;
    align-items: center;
    color: ${({ theme }) => theme['gray-500']};
    font-size: ${({ theme }) => theme.fontSize.sb};
    font-weight: bold;
  }
  img {
    height: 1rem;
  }
`

export const HeaderGamesBase = styled.div`
  padding: 0.7rem;
  display: flex;
  height: 3rem;

  p {
    font-weight: bold;
  }
`
export const HeaderStanding = styled(HeaderGamesBase)``
export const HeaderSchedule = styled(HeaderGamesBase)`
  border-left: 1px solid ${({ theme }) => theme['gray-250']};
`

export const ContentComp = styled.div`
  height: 100%;
  border-top: 1px solid ${({ theme }) => theme['gray-250']};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:last-child {
    width: 100%;
    border-left: 1px solid ${({ theme }) => theme['gray-250']};
    justify-content: center;
  }
`
export const ContentPlayer = styled.div`
  flex-grow: 1;
  padding-inline: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme['gray-250']};
  transition: 800ms;
  cursor: pointer;
  &:last-child {
    border-bottom: 0px;
    margin-bottom: 0.1rem;
  }
  &:hover {
    transform: scale(1.05);
    background: ${({ theme }) => theme['gray-250']};
  }
`
export const ImgPlayer = styled.div`
  width: 20%;
  height: 100%;
  margin-left: 0.8rem;
  display: flex;
  align-items: flex-end;
  img {
    height: 2.5rem;
  }
`
export const InfoPlayer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 0.1rem;
  div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    span {
      font-size: ${({ theme }) => theme.fontSize.sb};
    }
  }
`
export const ImgTeam = styled.div`
  img {
    height: 1.5rem;
  }
`
export const ImgLane = styled.div`
  img {
    height: 1.5rem;
  }
`

export const ContentMatch = styled.div`
  gap: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70%;
  &:first-child {
    border-bottom: 1px solid ${({ theme }) => theme['gray-250']};
  }
`
export const WrapperTeam = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  strong {
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme['gray-900']};
  }
  img {
    width: 60%;
  }
`
export const WrapperDate = styled(WrapperTeam)`
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  a {
    padding: 0.4rem 1rem;
    border: 1px solid ${({ theme }) => theme['gray-250']};
    border-radius: 5px;
    font-size: ${({ theme }) => theme.fontSize.md};
    text-decoration: none;
    color: ${({ theme }) => theme['gray-900']};
    transition: 500ms;

    &:hover {
      background: ${({ theme }) => theme['gray-300']};
    }
  }
`
export const TextDate = styled.p`
  color: ${({ theme }) => theme['gray-400']};
  font-size: ${({ theme }) => theme.fontSize.sb};
  font-weight: none;
`
export const TextHour = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sb};
`
