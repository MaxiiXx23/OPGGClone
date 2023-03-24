import { useState } from 'react'
import * as Select from '@radix-ui/react-select'

import { FaWindows } from 'react-icons/fa'
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
  ContainerCommercial,
  ButtonDownload,
  ContentCommercial,
  ContainerMainInfos,
} from './styles'
import { ContainerInfosDesktop } from './components/ContainerInfosDesktop'
import { ContainerInfosEsports } from './components/ContainerInfosEsports'

import Star from '../../assets/animations/star.json'
import Attention from '../../assets/animations/attention.json'
import Imghome from '../../assets/imagesStatics/xayah.webp'
import IconButton from '../../assets/imagesStatics/iconButton.svg'
import TipSpace from '../../assets/imagesStatics/tipspace.jpg'

// Images Infos

import RecommendationsPNG from '../../assets/imagesStatics/opggDesktop/recommendations.png'
import ChampionsPNG from '../../assets/imagesStatics/opggDesktop/champions.png'
import MetasPNG from '../../assets/imagesStatics/opggDesktop/metas.png'
import BetterConveniencePNG from '../../assets/imagesStatics/opggDesktop/BetterConvenience.png'

import { regions } from '../../database/regions'
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
                      {regions.map((region) => {
                        return (
                          <SelectItem key={region.id} value={region.region}>
                            <img
                              src={region.img}
                              alt={region.region}
                              loading="lazy"
                            />
                            <Select.ItemText>{region.region}</Select.ItemText>
                          </SelectItem>
                        )
                      })}
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
      <ContainerCommercial>
        <ButtonDownload
          to="https://op.gg/desktop/?utm_source=opgg&utm_medium=button&utm_campaign=global"
          target="_blank"
        >
          <FaWindows size={21} />
          Download Now
        </ButtonDownload>
        <ContentCommercial>
          <img src={TipSpace} alt="" />
        </ContentCommercial>
      </ContainerCommercial>
      {/* ContainerMain Op.gg and Tournament */}

      <ContainerMainInfos>
        {/* Container Desktop */}
        <ContainerInfosDesktop />
        <ContainerInfosEsports />
      </ContainerMainInfos>
    </ContainerHome>
  )
}
