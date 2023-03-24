import RecommendationsPNG from '../../../../assets/imagesStatics/opggDesktop/recommendations.png'
import ChampionsPNG from '../../../../assets/imagesStatics/opggDesktop/champions.png'
import MetasPNG from '../../../../assets/imagesStatics/opggDesktop/metas.png'
import BetterConveniencePNG from '../../../../assets/imagesStatics/opggDesktop/BetterConvenience.png'

import {
  ContainerDesktop,
  HeaderInfo,
  ContentInfo,
  CardInfo,
  TitleCard,
  WrapperNavCard,
} from './styles'

export function ContainerInfosDesktop() {
  return (
    <ContainerDesktop>
      <HeaderInfo>
        <strong>Experience the fast speed of OP.GG for Desktop!</strong>
      </HeaderInfo>
      <ContentInfo>
        <WrapperNavCard
          to="https://op.gg/desktop/?utm_source=opgg&utm_medium=button&utm_campaign=global"
          target="_blank"
        >
          <CardInfo>
            <TitleCard>Real-time Auto Rune Setting</TitleCard>
            <img
              src={RecommendationsPNG}
              alt=""
              title="Rune Real-Time"
              loading="lazy"
            />
          </CardInfo>
        </WrapperNavCard>
        <WrapperNavCard
          to="https://op.gg/desktop/?utm_source=opgg&utm_medium=button&utm_campaign=global"
          target="_blank"
        >
          <CardInfo>
            <TitleCard>OP Champions, Team Comps, and More</TitleCard>
            <img
              src={ChampionsPNG}
              alt=""
              title="Rank Champions and more"
              loading="lazy"
            />
          </CardInfo>
        </WrapperNavCard>
        <WrapperNavCard
          to="https://op.gg/desktop/?utm_source=opgg&utm_medium=button&utm_campaign=global"
          target="_blank"
        >
          <CardInfo>
            <TitleCard>Latest Meta and OP.GG Recommendations</TitleCard>
            <img
              src={MetasPNG}
              alt=""
              title="Meta and Recommendations"
              loading="lazy"
            />
          </CardInfo>
        </WrapperNavCard>
        <WrapperNavCard
          to="https://op.gg/desktop/?utm_source=opgg&utm_medium=button&utm_campaign=global"
          target="_blank"
        >
          <CardInfo>
            <TitleCard>
              Enhanced Overlay Features for Better Convenience
            </TitleCard>
            <img
              src={BetterConveniencePNG}
              alt=""
              title="Overlay Features"
              loading="lazy"
            />
          </CardInfo>
        </WrapperNavCard>
      </ContentInfo>
    </ContainerDesktop>
  )
}
