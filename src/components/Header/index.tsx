import { useState } from 'react'

import * as Menubar from '@radix-ui/react-menubar'

import { FiSun, FiMoon } from 'react-icons/fi'
import { GiEarthAfricaEurope } from 'react-icons/gi'
import { RiArrowDownSFill } from 'react-icons/ri'

import OPGGLogo from '../../assets/imagesStatics/opgglogo.svg'
import NavOPGGIcon from '../../assets/iconsHeader/img-navi-opggsquare.svg'
import NavLolIcon from '../../assets/iconsHeader/img-navi-lol-white.svg'
import NavValorantIcon from '../../assets/iconsHeader/img-navi-valorant-white.svg'
import NavPUBGIcon from '../../assets/iconsHeader/img-navi-pubg-gray.svg'
import NavOverwatchIcon from '../../assets/iconsHeader/img-navi-overwatch-gray.svg'
import NavEternalIcon from '../../assets/iconsHeader/img-navi-bs.svg'
import NavEsportsIcon from '../../assets/iconsHeader/img-navi-esports.svg'
import NavTalkIcon from '../../assets/iconsHeader/img-navi-talk-white.svg'
import NavDuoIcon from '../../assets/iconsHeader/img-navi-duo-gray.svg'

import { NavLinkOptionSecundary } from './components/NavLinkOptionSecundary'

import {
  ContainerImageLogoNavSelected,
  WrapperNavActived,
  ContainerNav,
  NavList,
  NavOption,
  NavLinkOption,
  TextNavOption,
  ButtonMode,
  WrapperIconEarth,
  NavOptionModeIdiom,
  BtnIdiom,
  BtnLogIn,
  WrapperNavLink,
  ContainerNavSecundary,
  NavListSecundary,
} from './styles'

import { ContentIdioms } from './components/ContentIdioms'
import { optionsPage } from '../../shared/optionsPage'

export function Header() {
  // passar para um context
  const [pageSelected, setPageSelected] = useState(optionsPage.Home)

  function changePage(pageCurrent: optionsPage) {
    setPageSelected(pageCurrent)
  }

  return (
    <>
      <ContainerNav>
        {/* Container Img */}
        <ContainerImageLogoNavSelected>
          <img src={OPGGLogo} alt="OP.GG-Logo" />
          <WrapperNavActived>
            <img src={NavLolIcon} alt="League of Legends Icon" />
            <span>League Of Legends</span>
          </WrapperNavActived>
        </ContainerImageLogoNavSelected>
        {/* Container List Nav */}
        <NavList>
          <NavOption>
            <WrapperNavLink>
              <NavLinkOption to="/">
                <img src={NavOPGGIcon} alt="OP.GG Icon" />
                <TextNavOption>Desktop</TextNavOption>
              </NavLinkOption>
            </WrapperNavLink>
          </NavOption>
          <NavOption>
            <WrapperNavLink>
              <NavLinkOption to="/">
                <img src={NavValorantIcon} alt="Valorant Icon" />
                <TextNavOption>Valorant</TextNavOption>
              </NavLinkOption>
            </WrapperNavLink>
          </NavOption>
          <NavOption>
            <WrapperNavLink variantPadding>
              <NavLinkOption to="/">
                <img src={NavPUBGIcon} alt="PUBG Icon" />
                <TextNavOption>PUBG</TextNavOption>
              </NavLinkOption>
            </WrapperNavLink>
          </NavOption>
          <NavOption>
            <WrapperNavLink variantPadding>
              <NavLinkOption to="/">
                <img src={NavOverwatchIcon} alt="OVERWATCH Icon" />
                <TextNavOption>OVERWATCH2</TextNavOption>
              </NavLinkOption>
            </WrapperNavLink>
          </NavOption>
          <NavOption>
            <WrapperNavLink>
              <NavLinkOption to="/">
                <img src={NavEternalIcon} alt="Eternal Return Icon" />
                <TextNavOption>Eternal Return</TextNavOption>
              </NavLinkOption>
            </WrapperNavLink>
          </NavOption>
          <NavOption>
            <WrapperNavLink>
              <NavLinkOption to="/">
                <img src={NavEsportsIcon} alt="Esports Icon" />
                <TextNavOption>Esports</TextNavOption>
              </NavLinkOption>
            </WrapperNavLink>
          </NavOption>
          <NavOption>
            <WrapperNavLink variantPadding>
              <NavLinkOption to="/">
                <img src={NavTalkIcon} alt="Talk Icon" />
                <TextNavOption>TALK</TextNavOption>
              </NavLinkOption>
            </WrapperNavLink>
          </NavOption>
          <NavOption>
            <WrapperNavLink>
              <NavLinkOption to="/">
                <img src={NavDuoIcon} alt="Duo Icon" />
                <TextNavOption>Duo</TextNavOption>
              </NavLinkOption>
            </WrapperNavLink>
          </NavOption>
        </NavList>
        <NavOptionModeIdiom>
          <ButtonMode>
            <FiSun size={18} />
          </ButtonMode>
          <WrapperIconEarth>
            <GiEarthAfricaEurope />
          </WrapperIconEarth>
          <Menubar.Menu>
            <BtnIdiom>
              English <RiArrowDownSFill size={16} />
            </BtnIdiom>
            <ContentIdioms />
          </Menubar.Menu>
          <NavOption>
            <BtnLogIn>Log In</BtnLogIn>
          </NavOption>
        </NavOptionModeIdiom>

        {/* Container Mode and Language */}
      </ContainerNav>

      {/* Container Nav LOL */}
      <ContainerNavSecundary>
        <NavListSecundary>
          <NavLinkOptionSecundary
            page={optionsPage.Home}
            pageSelected={pageSelected}
            changePage={changePage}
          />
          <NavLinkOptionSecundary
            page={optionsPage.Champions}
            pageSelected={pageSelected}
            changePage={changePage}
          />
          <NavLinkOptionSecundary
            page={optionsPage.GameMode}
            pageSelected={pageSelected}
            changePage={changePage}
          />
          <NavLinkOptionSecundary
            page={optionsPage.Stats}
            pageSelected={pageSelected}
            changePage={changePage}
          />
          <NavLinkOptionSecundary
            page={optionsPage.Leaderboards}
            pageSelected={pageSelected}
            changePage={changePage}
          />
          <NavLinkOptionSecundary
            page={optionsPage.ProMatches}
            pageSelected={pageSelected}
            changePage={changePage}
          />
        </NavListSecundary>
      </ContainerNavSecundary>
    </>
  )
}
