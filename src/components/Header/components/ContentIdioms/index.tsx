import * as Menubar from '@radix-ui/react-menubar'
import { Content } from './styles'

import { optionsIdiom } from '../../../../database/optionsIdiom'

export function ContentIdioms() {
  return (
    <Menubar.Portal>
      <Content>
        {optionsIdiom.map((option) => {
          return <Menubar.Item key={option.id}>{option.idiom}</Menubar.Item>
        })}
      </Content>
    </Menubar.Portal>
  )
}
