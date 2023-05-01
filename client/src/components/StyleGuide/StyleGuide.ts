import anonymousProNormal from '../../assets/fonts/AnonymousPro-Regular.ttf'

interface StyleGuide {
  colors: {
    [key: string]: string
  }
  fonts: {
    [key: string]: {
      [key: string]: string | number
    }
  }

  // COPILOT SUGGESTIONS
  // fontSizes: {},
  // fontWeights: {},
  // lineHeights: {},
  // letterSpacings: {},
  // sizes: {},
  // borders: {},
  // radii: {},
  // shadows: {},
  // zIndices: {},
  // breakpoints: {},
  // space: {},
  // transitions: {},
  // buttons: {},
  // text: {},
  // links: {},
  // forms: {},
  // alerts: {},
  // badges: {},
  // cards: {},
  // containers: {},
  // images: {},
  // lists: {},
  // messages: {},
  // navs: {},
  // tables: {},
  // tabs: {},
  // styles: {},
  // layout: {},
  // variants: {},
  // textStyles: {},
  // buttons: {},
}

const styleGuide: StyleGuide = {
  colors: {
    BackgroundGray: '#f5f5f549', // 0.287 opacity rgba(245, 245, 245, 0.287)
    Black: '#000000', // -> standard black
    GhostGray: '#f5f5f57e', // .493 opacity rgba(245, 245, 245, 0.493)
    GreenShadow: '#00f0114d', // 0.3 opacity rgba(0, 240, 17, 0.3)
    LabelGreen: '#00f011cc', // 0.8 opacity rgba(0, 240, 17, 0.8)
    MatrixGreen: '#00DA19B3', // -> main green
    MatteGray: '#262626', // -> main gray
    GrayShadow: '#f5f5f51a', // 0.1 opacity rgba(245, 245, 245, 0.1)
    SpaceBlack: '#191919', // -> custom black
    White: '#FFFFFF', // -> standard white
    WhiteSmoke: '#F5F5F5', // -> standard white smoke
  },
  fonts: {
    families: {
      AnonymousPro: anonymousProNormal,
    },
    sizes: {
      extraSmall: '10pt',
      small: '12pt',
      medium: '16pt',
      large: '24pt',
      extraLarge: '32pt',
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
}

export default styleGuide
