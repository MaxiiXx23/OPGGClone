import {
  ContainerComp,
  HeaderComp,
  WrapperComp,
  ContentComp,
  HeaderStanding,
  HeaderSchedule,
  ContentMatch,
  WrapperTeam,
  WrapperDate,
  TextDate,
  TextHour,
  ContentPlayer,
  ImgPlayer,
  ImgTeam,
  ImgLane,
  InfoPlayer,
} from './styles'

// Images Containter Comp

import IconCBLOL from '../../../../assets/imagesStatics/cblol.svg'
import IconEsports from '../../../../assets/iconsHeader/logo-esports-black.svg'
import LogoLLL from '../../../../assets/logoTeams/LLL.webp'
import LogoLOS from '../../../../assets/logoTeams/LOS.webp'
import LogoPNG from '../../../../assets/logoTeams/PNG.webp'
import LogoLBR from '../../../../assets/logoTeams/LBR.webp'
import LogoRED from '../../../../assets/logoTeams/RED.webp'
import LogoITZ from '../../../../assets/logoTeams/ITZ.webp'

// Images Players
import Netuno from '../../../../assets/imgsPlayers/netuno.webp'
import Cariok from '../../../../assets/imgsPlayers/cariok.webp'
import Titan from '../../../../assets/imgsPlayers/titan.webp'
import Wizer from '../../../../assets/imgsPlayers/wizer.webp'
import Aegis from '../../../../assets/imgsPlayers/aegis.webp'
import Nosferus from '../../../../assets/imgsPlayers/nosferus.webp'

// Images Lanes

import Jungle from '../../../../assets/imgLane/jungle.svg'
import Top from '../../../../assets/imgLane/top.svg'
import Mid from '../../../../assets/imgLane/mid.svg'
import Bot from '../../../../assets/imgLane/bot.svg'

export function ContainerInfosEsports() {
  return (
    <ContainerComp>
      <HeaderComp>
        <WrapperComp>
          <a href="https://esports.op.gg/?hl=en_US">
            <img src={IconEsports} alt="Button E-sports" />
          </a>
          <a href="https://esports.op.gg/leagues/CBLOL/2023/Split%201?hl=en_US">
            CBLOL 2023 Split 1
          </a>
        </WrapperComp>
        <img src={IconCBLOL} alt="" />
      </HeaderComp>
      <HeaderStanding>
        <p>Standing</p>
      </HeaderStanding>
      <HeaderSchedule>
        <p>Schedule</p>
      </HeaderSchedule>
      <ContentComp>
        <ContentPlayer>
          <i>1</i>

          <ImgPlayer>
            <img src={Netuno} alt="" />
          </ImgPlayer>
          <InfoPlayer>
            <div>
              <ImgTeam>
                <img src={LogoLOS} alt="" />
              </ImgTeam>
              <ImgLane>
                <img src={Bot} alt="" />
              </ImgLane>
              <span>Netuno</span>
            </div>
            <p>5</p>
          </InfoPlayer>
        </ContentPlayer>
        <ContentPlayer>
          <i>2</i>
          <ImgPlayer>
            <img src={Cariok} alt="" />
          </ImgPlayer>
          <InfoPlayer>
            <div>
              <ImgTeam>
                <img src={LogoPNG} alt="" />
              </ImgTeam>
              <ImgLane>
                <img src={Jungle} alt="" />
              </ImgLane>
              <span>CarioK</span>
            </div>
            <p>4</p>
          </InfoPlayer>
        </ContentPlayer>
        <ContentPlayer>
          <i>2</i>
          <ImgPlayer>
            <img src={Titan} alt="" />
          </ImgPlayer>
          <InfoPlayer>
            <div>
              <ImgTeam>
                <img src={LogoRED} alt="" />
              </ImgTeam>
              <ImgLane>
                <img src={Bot} alt="" />
              </ImgLane>
              <span>TitaN</span>
            </div>
            <p>4</p>
          </InfoPlayer>
        </ContentPlayer>
        <ContentPlayer>
          <i>2</i>
          <ImgPlayer>
            <img src={Wizer} alt="" />
          </ImgPlayer>
          <InfoPlayer>
            <div>
              <ImgTeam>
                <img src={LogoPNG} alt="" />
              </ImgTeam>
              <ImgLane>
                <img src={Top} alt="" />
              </ImgLane>
              <span>Wizer</span>
            </div>
            <p>4</p>
          </InfoPlayer>
        </ContentPlayer>
        <ContentPlayer>
          <i>2</i>
          <ImgPlayer>
            <img src={Aegis} alt="" />
          </ImgPlayer>
          <InfoPlayer>
            <div>
              <ImgTeam>
                <img src={LogoRED} alt="" />
              </ImgTeam>
              <ImgLane>
                <img src={Jungle} alt="" />
              </ImgLane>
              <span>Aegis</span>
            </div>
            <p>4</p>
          </InfoPlayer>
        </ContentPlayer>
        <ContentPlayer>
          <i>6</i>
          <ImgPlayer>
            <img src={Nosferus} alt="" />
          </ImgPlayer>
          <InfoPlayer>
            <div>
              <ImgTeam>
                <img src={LogoITZ} alt="" />
              </ImgTeam>
              <ImgLane>
                <img src={Mid} alt="" />
              </ImgLane>
              <span>NOsFerus</span>
            </div>
            <p>3</p>
          </InfoPlayer>
        </ContentPlayer>
      </ContentComp>
      <ContentComp>
        <ContentMatch>
          <WrapperTeam>
            <img src={LogoLLL} alt="" />
            <strong>LLL</strong>
          </WrapperTeam>
          <WrapperDate>
            <a href="https://esports.op.gg/matches/20593?hl=en_US">Preview</a>
            <div>
              <TextDate>3.18 Sat</TextDate>
              <TextHour>13:00</TextHour>
            </div>
          </WrapperDate>
          <WrapperTeam>
            <img src={LogoLOS} alt="" />
            <strong>LOS</strong>
          </WrapperTeam>
        </ContentMatch>

        <ContentMatch>
          <WrapperTeam>
            <img src={LogoPNG} alt="" />
            <strong>PNG</strong>
          </WrapperTeam>
          <WrapperDate>
            <a href="https://esports.op.gg/matches/20593?hl=en_US">Preview</a>
            <div>
              <TextDate>3.18 Sat</TextDate>
              <TextHour>14:00</TextHour>
            </div>
          </WrapperDate>
          <WrapperTeam>
            <img src={LogoLBR} alt="" />
            <strong>LBR</strong>
          </WrapperTeam>
        </ContentMatch>
      </ContentComp>
    </ContainerComp>
  )
}
