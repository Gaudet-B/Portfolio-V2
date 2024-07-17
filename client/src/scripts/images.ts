//
import draft1 from '../assets/draft/login-1.PNG'
import draft3 from '../assets/draft/user-dashboard-2.PNG'
import draft4 from '../assets/draft/advanced-options-1.PNG'
import draft5 from '../assets/draft/advanced-options-2.PNG'
import draft6 from '../assets/draft/recommendations-1.PNG'
import draft7 from '../assets/draft/recommendations-2.PNG'
//
import draftRedesign1 from '../assets/draft/v2_dashboard_01.png'
import draftRedesign2 from '../assets/draft/v2_dashboard_darkmode.png'
import draftRedesign3 from '../assets/draft/v2_team_info_01.png'
import draftRedesign4 from '../assets/draft/v2_sidebar_01.png'
import draftRedesign5 from '../assets/draft/v2_league_settings_01.png'
import draftRedesign6 from '../assets/draft/v2_custom_ranks_01.png'
import draftRedesign7 from '../assets/draft/v2_edit_ranks_modal_01.png'
import draftRedesign8 from '../assets/draft/v2_recommendations_01.png'

//
import pizza1 from '../assets/pizza/shop_1.PNG'
import pizza2 from '../assets/pizza/pizza_modal_1.PNG'
import pizza3 from '../assets/pizza/pizza_modal_2.PNG'
import pizza4 from '../assets/pizza/pizza_modal_3.PNG'
import pizza5 from '../assets/pizza/shopping_cart_1.PNG'
import pizza6 from '../assets/pizza/checkout_1.PNG'
import pizza7 from '../assets/pizza/payment_1.PNG'

// import myth1 from '../assets/myth/myth_1.PNG'

//
import portfolio1 from '../assets/portfolio/portfolio_1.PNG'
import portfolio2 from '../assets/portfolio/content_management_1.PNG'

//
import chat1 from '../assets/chata/register_1.PNG'
import chat2 from '../assets/chata/login_1.PNG'
import chat3 from '../assets/chata/main_1.PNG'
// import chat4 from '../assets/chata/convo_1.PNG'
import chat5 from '../assets/chata/convo_2.PNG'
import chat6 from '../assets/chata/convo_3.PNG'
import chat7 from '../assets/chata/logout.PNG'

//
import estimatica1 from '../assets/estimatica/before_01.PNG'
import estimatica2 from '../assets/estimatica/after_02.PNG'

//
import projectsIcon from '../assets/icons/projects-icon.png'
import emailIcon from '../assets/icons/email-icon.png'
import resumeIcon from '../assets/icons/resume-icon.png'
import linkedInIcon from '../assets/LinkedIn.jpg'
import githubIcon from '../assets/GitHub.jpg'
import logo from '../assets/icons/BG_logo_icon_short_light.png'
import burger from '../assets/icons/burger-menu-vector.png'
// client\src\assets\icons\BG_logo_icon_short_light.png

/** @TODO rename all these '.PNG' files to '.png' */
//
import draftHero from '../assets/draft/hero_02.PNG'
import pizzaHero from '../assets/pizza/hero_01.PNG'
import chataHero from '../assets/chata/sample_hero_1.png'
import portfolioHero from '../assets/portfolio/hero_02.PNG'
import estimaticaHero from '../assets/estimatica/hero_01.PNG'
import vapyrHero from '../assets/vapyr/hero_01.PNG'
import borderHero from '../assets/border/hero_02.PNG'
import borderHeroSm from '../assets/border/hero_01.PNG'
import epochitHero from '../assets/epochit/hero_02.PNG'

//
const draftImages = [draft1, draft3, draft4, draft5, draft6, draft7] as string[]
const draftRedesign = [
  draftRedesign1,
  draftRedesign2,
  draftRedesign3,
  draftRedesign4,
  draftRedesign5,
  draftRedesign6,
  draftRedesign7,
  draftRedesign8,
]
const pizzaImages = [
  pizza1,
  pizza2,
  pizza3,
  pizza4,
  pizza5,
  pizza6,
  pizza7,
] as string[]
const portfolioImages = [portfolio1, portfolio2] as string[]
const chatImages = [chat1, chat2, chat3, chat5, chat6, chat7] as string[]
const vapyrImages = [] as string[]
const estimaticaImages = [estimatica2, estimatica1] as string[]
const epochImages = [] as string[]
const borderImages = [] as string[]

//
const projects = [
  [draftImages, draftRedesign],
  pizzaImages,
  portfolioImages,
  chatImages,
  vapyrImages,
  estimaticaImages,
  epochImages,
  borderImages,
]

//
const icons = {
  projects: projectsIcon,
  email: emailIcon,
  resume: resumeIcon,
  linkedIn: linkedInIcon,
  github: githubIcon,
  logo: logo,
  burger: burger,
}

//
const heros = {
  draft: draftHero as string,
  pizza: pizzaHero as string,
  portfolio: portfolioHero as string,
  chat: chataHero,
  vapyr: vapyrHero as string,
  estimatica: estimaticaHero as string,
  epoch: epochitHero as string,
  border: borderHero as string,
  borderSm: borderHeroSm as string,
}

const getImages = () => {
  const object = {
    projects,
    icons,
    heros,
  }
  return object
}

export type Images = {
  projects: typeof projects
  icons: typeof icons
  heros: typeof heros
}

export default getImages
