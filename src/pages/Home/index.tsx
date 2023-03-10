import { useState } from 'react'
import * as Select from '@radix-ui/react-select'

import { RiArrowDownSFill } from 'react-icons/ri'
import {
  ContainerHome,
  ContentHome,
  ContainerImg,
  ContainerMainInput,
  WrapperForm,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectViewport,
  WrapperSelect,
  TitleSelect,
  WrapperInput,
  InputSearch,
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
  ContentEmpty,
  Animation,
  TextDescription,
  ButtonSearch,
} from './styles'

import Star from '../../assets/animations/star.json'
import Attention from '../../assets/animations/attention.json'
import Imghome from '../../assets/imagesStatics/xayah.webp'
import IconButton from '../../assets/imagesStatics/iconButton.svg'
interface IArray {
  name: string
}
export function Home() {
  const [array, useArray] = useState<IArray[]>([])

  return (
    <ContainerHome>
      <ContentHome>
        <ContainerImg>
          <img src={Imghome} alt="" />
        </ContainerImg>
        <ContainerMainInput>
          <WrapperForm>
            <WrapperSelect>
              <TitleSelect>Region</TitleSelect>
              <Select.Root>
                <SelectTrigger aria-label="Region">
                  <Select.Value placeholder="Region..." />
                  <Select.Icon>
                    <RiArrowDownSFill size={20} />
                  </Select.Icon>
                </SelectTrigger>
                <Select.Portal>
                  <SelectContent>
                    <SelectViewport>
                      <Select.Group>
                        <SelectItem value="BR">
                          <Select.ItemText>Brasil</Select.ItemText>
                        </SelectItem>
                        <SelectItem value="NA">
                          <Select.ItemText>Brasil</Select.ItemText>
                        </SelectItem>
                        <SelectItem value="EU">
                          <Select.ItemText>Brasil</Select.ItemText>
                        </SelectItem>
                        <SelectItem value="AS">
                          <Select.ItemText>Brasil</Select.ItemText>
                        </SelectItem>
                        <SelectItem value="KU">
                          <Select.ItemText>Brasil</Select.ItemText>
                        </SelectItem>
                      </Select.Group>
                    </SelectViewport>
                  </SelectContent>
                </Select.Portal>
              </Select.Root>
            </WrapperSelect>
            <WrapperInput>
              <TitleSelect>Search</TitleSelect>
              <InputSearch placeholder="Name1, Name2, ..."></InputSearch>
              <TabsRoot defaultValue="tab1">
                <TabsList className="TabsList" aria-label="Manage your account">
                  <TabsTrigger value="tab1">Recent Search</TabsTrigger>
                  <TabsTrigger value="tab2">Favorites</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                  {array.length === 0 ? (
                    <ContentEmpty>
                      <Animation
                        animationData={Attention}
                        loop={true}
                        className="animation"
                      />
                      <TextDescription>
                        There is no summoner you seen recently.
                      </TextDescription>
                    </ContentEmpty>
                  ) : (
                    <div>Olá</div>
                  )}
                </TabsContent>
                <TabsContent value="tab2">
                  {array.length === 0 ? (
                    <ContentEmpty>
                      <Animation
                        animationData={Star}
                        loop={true}
                        className="animation"
                      />
                      <TextDescription>
                        Add your Bookmark favorite summoner for easy updates on
                        the latest stats.
                      </TextDescription>
                    </ContentEmpty>
                  ) : (
                    <div>Olá</div>
                  )}
                </TabsContent>
              </TabsRoot>
            </WrapperInput>
            <ButtonSearch>
              <img src={IconButton} alt="" />
            </ButtonSearch>
          </WrapperForm>
        </ContainerMainInput>
      </ContentHome>
    </ContainerHome>
  )
}
