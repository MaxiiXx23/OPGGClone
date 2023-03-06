import styled from 'styled-components'

import * as Menubar from '@radix-ui/react-menubar'

export const Content = styled(Menubar.Content)`
  line-height: 1.6rem;
  margin-right: 4rem;
  margin-top: 0.5rem;
  overflow-y: auto;
  max-height: 200px;
  min-width: 5rem;
  background-color: white;
  border-radius: 6px;
  padding: 5px;
  padding-left: 1rem;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: #b3b3b3;
  }
`
