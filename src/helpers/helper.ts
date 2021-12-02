import { AppTitleType } from 'types/Types'

const appTitle = [
  { pathname: '/home', title: 'Введение' },
  { pathname: '/login', title: 'Aутентификация' },
  { pathname: '/network/search/vk', title: 'Поиск - Vk' },
  { pathname: '/network/search/telegram', title: 'Поиск - Telegram' },
  { pathname: '/network/search/discord', title: 'Поиск - Discord' },
  { pathname: '/network/search/instagram', title: 'Поиск - Instagram' },
  { pathname: '/network/formalization/vk', title: 'Оформление - Vk' },
] as AppTitleType[]

export const setTitleHelper = (pathname: string) => {
  const defaultTitle = {
    title: 'Страница не найдена',
  }

  const { title } =
    (appTitle.find((t) => t.pathname === pathname) as AppTitleType) ||
    defaultTitle

  return title
}

export const searchNetworkData = [
  {
    link: '/network/search/vk',
    socialNetwork: 'Vk',
  },
  {
    link: '/network/search/telegram',
    socialNetwork: 'Telegram',
  },
  {
    link: '/network/search/discord',
    socialNetwork: 'Discord',
  },
  {
    link: '/network/search/instagram',
    socialNetwork: 'Instagram',
  },
]

export const formalizationNetworkData = [
  {
    link: '/network/formalization/vk',
    socialNetwork: 'Vk',
  },
]

export const wargamingProject = [
  {
    href: 'https://wargaming.com/ru/games/world-of-tanks',
    projectName: 'World of Tanks',
  },
  {
    href: 'https://wargaming.com/ru/games/world-of-warships',
    projectName: 'World of Warships',
  },
  {
    href: 'https://wargaming.com/ru/games/wows-blitz',
    projectName: 'World of Warships Blitz',
  },
  {
    href: 'https://wargaming.com/ru/games/world-of-warplanes',
    projectName: 'World of Warplanes',
  },
  {
    href: 'https://wargaming.com/ru/games/world-of-tanks-blitz',
    projectName: 'World of Tanks Blitz',
  },
  {
    href: 'https://wargaming.com/ru/games/world-of-tanks-console',
    projectName: 'World of Tanks (Xbox/PS5)',
  },
  {
    href: 'https://wargaming.com/ru/games/master-of-orion',
    projectName: 'Master of Orion',
  },
]

export const myContacts = [
  {
    href: 'https://t.me/web_front_dev',
    socialNetwork: 'Telegram',
  },
  {
    href: 'https://vk.com/id315800614',
    socialNetwork: 'Vk',
  },
  {
    href: 'http://www.facebook.com/profile.php?id=100014898465280',
    socialNetwork: 'Facebook',
  },
]

export const tableData = [
  {
    0: 'продаю, куплю, обмен, обменяю, раздача, прокачка, буст, магазин(премиум), shop',
    1: 'продам, продажа, продается | покупаю, скупаю, купля, закупка | отдам, дам, отдача, раздам, раздаю, розыгрыш | поднятие статистики | маркет, рынок, аукцион',
    2: 'ак, акк, акаунт, аккаунт | код, премиум/бонус-коды | читы | золото, голда',
    3: 'wot, world of tanks, ворлд оф танкс',
  },
]
