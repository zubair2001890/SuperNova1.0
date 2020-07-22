import { getAccountUrl } from '../helpers/createPaths'

export default {
  login: '/login',
  logout: '/logout',
  error404: '/not-found',
  home: '/',
  explore: '/explore',
  faq: '/faq',
  mission: '/ourmission',
  terms: '/termsandconditions',
  model: '/ourmodel',
  contact: '/contactus',
  team: '/ourteam',
  informationPageX: '/topicx',
  account: getAccountUrl(''),
  myProjects: getAccountUrl('my-projects'),
  profile: getAccountUrl('profile'),
  activity: getAccountUrl('activity'),
}
