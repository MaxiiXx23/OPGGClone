import {
  ContainerFooter,
  ContentFooter,
  WrapperImg,
  WrapperList,
  TitleList,
  List,
  ItemList,
  OptionItem,
  OptionItemStrong,
  TextFooter,
  ContainerBottom,
  ContainerMidias,
} from './styles'

import Logo from '../../assets/imagesStatics/opgglogo.svg'
import Facebook from '../../assets/icons/icon-logo-facebook.svg'
import Instagram from '../../assets/icons/icon-logo-instagram.svg'
import Twitter from '../../assets/icons/icon-logo-twitter.svg'
import Overwolf from '../../assets//icons/icon-logo-overwolf.svg'

export function Footer() {
  return (
    <ContainerFooter>
      <ContentFooter>
        <WrapperImg>
          <img src={Logo} alt="" />
        </WrapperImg>
        <WrapperList>
          <TitleList>OP.GG</TitleList>
          <List>
            <ItemList>
              <OptionItem to="/">About OP.GG</OptionItem>
            </ItemList>
            <ItemList>
              <OptionItem to="/">Company</OptionItem>
            </ItemList>
            <ItemList>
              <OptionItem to="/">Blog</OptionItem>
            </ItemList>
            <ItemList>
              <OptionItem to="/">Logo History</OptionItem>
            </ItemList>
          </List>
        </WrapperList>
        <WrapperList>
          <TitleList>Products</TitleList>
          <List>
            <ItemList>
              <OptionItem to="/">League Of Legends</OptionItem>
            </ItemList>
            <ItemList>
              <OptionItem to="/">Desktop</OptionItem>
            </ItemList>
            <ItemList>
              <OptionItem to="/">Valorant</OptionItem>
            </ItemList>
            <ItemList>
              <OptionItem to="/">PUBG</OptionItem>
            </ItemList>
            <ItemList>
              <OptionItem to="/">OVERWATCH</OptionItem>
            </ItemList>
            <ItemList>
              <OptionItem to="/">Eternal Return</OptionItem>
            </ItemList>
            <ItemList>
              <OptionItem to="/">Esports</OptionItem>
            </ItemList>
            <ItemList>
              <OptionItem to="/">Esports</OptionItem>
            </ItemList>
            <ItemList>
              <OptionItem to="/">Talk</OptionItem>
            </ItemList>
            <ItemList>
              <OptionItem to="/">Duo</OptionItem>
            </ItemList>
          </List>
        </WrapperList>
        <WrapperList>
          <TitleList>Apps</TitleList>
          <List>
            <ItemList>
              <OptionItem to="/">OP.GG Android App</OptionItem>
            </ItemList>
            <ItemList>
              <OptionItem to="/">OP.GG iOS App</OptionItem>
            </ItemList>
            <ItemList>
              <OptionItem to="/">IFI.GG Android App</OptionItem>
            </ItemList>
            <ItemList>
              <OptionItem to="/">IFI.GG iOS App</OptionItem>
            </ItemList>
          </List>
        </WrapperList>
        <WrapperList>
          <TitleList>Resources</TitleList>
          <List>
            <ItemList>
              <OptionItemStrong to="/">Privacy Policy</OptionItemStrong>
            </ItemList>
            <ItemList>
              <OptionItem to="/">Terms of Use</OptionItem>
            </ItemList>
            <ItemList>
              <OptionItem to="/">Help</OptionItem>
            </ItemList>
            <ItemList>
              <OptionItem to="/">Feedback</OptionItem>
            </ItemList>
          </List>
        </WrapperList>
        <WrapperList>
          <TitleList>More</TitleList>
          <List>
            <ItemList>
              <OptionItem to="/">Business</OptionItem>
            </ItemList>
            <ItemList>
              <OptionItem to="/">Advertise</OptionItem>
            </ItemList>
          </List>
        </WrapperList>
      </ContentFooter>
      <hr />
      <ContainerBottom>
        <TextFooter>
          © 2012-2023 OP.GG. OP.GG isn’t endorsed by Riot Games and doesn’t
          reflect the views or opinions of Riot Games or anyone officially
          involved in producing or managing League of Legends. League of Legends
          and Riot Games are trademarks or registered trademarks of Riot Games,
          Inc. League of Legends © Riot Games, Inc.
        </TextFooter>
        <ContainerMidias>
          <img src={Twitter} alt="" />
          <img src={Instagram} alt="" />
          <img src={Facebook} alt="" />
          <img src={Overwolf} alt="" />
        </ContainerMidias>
      </ContainerBottom>
    </ContainerFooter>
  )
}
