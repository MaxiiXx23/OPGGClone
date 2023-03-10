import IconNA from '../assets/iconsServers/icon-na.svg'
import IconEUW from '../assets/iconsServers/icon-euw.svg'
import IconEUNE from '../assets/iconsServers/icon-eune.svg'
import IconOCE from '../assets/iconsServers/icon-oce.svg'
import IconKR from '../assets/iconsServers/icon-kr.svg'
import IconJP from '../assets/iconsServers/icon-jp.svg'
import IconBR from '../assets/iconsServers/icon-br.svg'
import IconLAS from '../assets/iconsServers/icon-las.svg'
import IconLAN from '../assets/iconsServers/icon-lan.svg'
import IconRU from '../assets/iconsServers/icon-ru.svg'
import IconTR from '../assets/iconsServers/icon-tr.svg'
import IconSI from '../assets/iconsServers/icon-si.svg'
import IconPH from '../assets/iconsServers/icon-ph.svg'
import IconTA from '../assets/iconsServers/icon-ta.svg'
import IconVI from '../assets/iconsServers/icon-vi.svg'
import IconTH from '../assets/iconsServers/icon-th.svg'

interface IRegion {
  id: string
  region: string
  img: string
}

export const regions: IRegion[] = [
  {
    id: 'c1046475-c5f4-4bd8-ae2e-44bf062b63c8',
    region: 'North America',
    img: IconNA,
  },
  {
    id: '740e867b-e02f-4c9f-a275-549d68db0e04',
    region: 'Europe West',
    img: IconEUW,
  },
  {
    id: '83204d4e-68e6-4f63-9dca-4aa97d062e12',
    region: 'Europe Nordic & East',
    img: IconEUNE,
  },
  {
    id: '90d60287-25cc-4bb5-adea-a7333c583584',
    region: 'Oceania',
    img: IconOCE,
  },
  {
    id: '6427bdf8-031b-4082-8dc1-8791de3984f3',
    region: 'Korea',
    img: IconKR,
  },
  {
    id: 'af97e44d-248c-49d6-bfa0-da54a82a111a',
    region: 'Japan',
    img: IconJP,
  },
  {
    id: '24ee2664-223e-4322-aa3c-7d14f843743b',
    region: 'Brazil',
    img: IconBR,
  },
  {
    id: 'ad3d938f-89c7-43d2-84e2-c862d46980d1',
    region: 'LAS',
    img: IconLAS,
  },
  {
    id: '734a617d-83ee-4fc5-b079-6cb79a232d9b',
    region: 'LAN',
    img: IconLAN,
  },
  {
    id: '0ff9f1be-9e61-4afa-b292-d6ee5d3c768b',
    region: 'Russia',
    img: IconRU,
  },
  {
    id: 'a8a08ae1-192a-4ea2-b473-7b16ebaf7d4a',
    region: 'Türkiye',
    img: IconTR,
  },
  {
    id: '1bc82faf-98dd-4410-a564-61ef93aa7178',
    region: 'Singapore',
    img: IconSI,
  },
  {
    id: 'efb6eb93-8800-4fc5-8c84-faca45617a95',
    region: 'Philippines',
    img: IconPH,
  },
  {
    id: '4b728587-2153-44de-92ad-24b5741b510f',
    region: 'Taiwan',
    img: IconTA,
  },
  {
    id: '6e976bbd-d272-4642-a706-1c4146ba96d8',
    region: 'Vietnam',
    img: IconVI,
  },
  {
    id: '75e0a4e2-4b1b-449e-9613-106ef5d329ab',
    region: 'Thailand',
    img: IconTH,
  },
]
