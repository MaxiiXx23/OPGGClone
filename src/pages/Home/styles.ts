import styled from 'styled-components'
import * as Select from '@radix-ui/react-select'
import * as Tabs from '@radix-ui/react-tabs'
import Lottie from 'lottie-react'

export const ContainerHome = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme['blue-500']};
`
export const ContentHome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: 3rem;
  width: 80%;
`
export const ContainerImg = styled.div`
  margin-top: 3rem;
  width: 33rem;
  img {
    width: 100%;
  }
`
export const ContainerMainInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  width: 81%;
  height: 25rem;
`
export const WrapperForm = styled.form`
  display: flex;
  flex-wrap: nowrap;
  background-color: ${({ theme }) => theme.white};
  width: 80%;
  height: 3.6rem;
  border-radius: 50px;
  border: 0;
`
export const WrapperSelect = styled.div`
  margin-left: 1rem;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  width: 30%;
  height: 80%;
  border-radius: 50px;
`
export const TitleSelect = styled.strong`
  margin-top: 0.5rem;
  width: 80%;
  color: ${({ theme }) => theme['slate-700']};
  font-size: ${({ theme }) => theme.fontSize.md};
`
export const SelectTrigger = styled(Select.Trigger)`
  padding-block: 10px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  height: 2rem;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme['gray-400']};
  cursor: pointer;
  transition: 0.5s;
  font-size: 1.2rem;
  &:hover {
    background-color: ${({ theme }) => theme['gray-300']};
  }
   {
    font-size: 1rem;
  }
`
export const SelectContent = styled(Select.Content)`
  overflow: hidden;
  width: 15rem;
  background: ${({ theme }) => theme.white};
  font-size: 0.5rem;
`
export const SelectItem = styled(Select.Item)`
  font-size: 1rem;
  line-height: 1;
  color: ${({ theme }) => theme['gray-700']};
  border-bottom: 2px solid ${({ theme }) => theme['gray-200']};
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0.5rem 1rem;
  position: relative;
  user-select: none;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme['gray-300']};
  }
`
export const SelectViewport = styled(Select.Viewport)`
  padding: 1px;
`
export const WrapperInput = styled.div`
  width: 55%;
`
export const InputSearch = styled.input`
  width: 100%;
  height: 2rem;

  ::placeholder {
    color: ${({ theme }) => theme['gray-400']};
  }
`
export const TabsRoot = styled(Tabs.Root)`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme['gray-200']};
`
export const TabsList = styled(Tabs.List)`
  display: flex;
`
export const TabsTrigger = styled(Tabs.Trigger)`
  font-family: inherit;
  background-color: white;
  padding: 0 20px;
  height: 2.5rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  background: ${({ theme }) => theme['gray-200']};
  &:first-child {
    border-top-left-radius: 6px;
  }
  &:last-child {
    border-top-right-radius: 6px;
  }
  &[data-state='active'] {
    background-color: ${({ theme }) => theme['gray-300']};
    transition: background-color 0.8s;
  }
`

export const TabsContent = styled(Tabs.Content)`
  width: 100%;
  height: 100%;
  min-height: 10rem;
`
export const ContentEmpty = styled.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Animation = styled(Lottie)`
  width: 4rem;
  display: flex;
`
export const TextDescription = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme['gray-400']};
`
export const ButtonSearch = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 0;
  background-color: transparent;
  width: 13%;
  height: 100%;
  font-size: 2rem;
  color: ${({ theme }) => theme['blue-500']};
  font-weight: bold;
  cursor: pointer;
  border: 0;
  img {
    width: 60%;
  }
  &:hover {
    background-color: ${({ theme }) => theme['gray-200']};
  }
`
