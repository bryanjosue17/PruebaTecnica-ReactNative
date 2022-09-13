import Responsive from 'react-native-lightweight-responsive';

export const COLORS = {
  black: '#000000',
  white: '#FFFFFF',
  gray: '#707070',
  primary: '#142667',
  secondary: '#EFDD43',
  solitude: '#E7EAF3',
  lightblue: '#a8cced',
};

export const BORDERS = {
  BORDER1: {
    borderRadius: 10,
    borderWidth: 2,
  },
  BORDER2: {
    borderRadius: 5,
    borderWidth: 2,
  },
  BORDER3: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
};

export const SIZES = {
  // global sizes
  base: Responsive.font(8),
  font: Responsive.font(14),
  radius: Responsive.font(12),
  padding: Responsive.font(24),

  // font sizes
  h1: Responsive.font(30),
  h2: Responsive.font(24),
  h3: Responsive.font(16),
  h4: Responsive.font(14),
  h5: Responsive.font(12),
  body1: Responsive.font(30),
  body2: Responsive.font(24),
  body3: Responsive.font(16),
  body4: Responsive.font(14),
  body5: Responsive.font(12),
};
export const FONTS = {
  h1: {fontFamily: 'WorkSans-Bold', fontSize: SIZES.h1},
  h2: {fontFamily: 'WorkSans-Bold', fontSize: SIZES.h2},
  h3: {fontFamily: 'WorkSans-Bold', fontSize: SIZES.h3},
  h4: {fontFamily: 'WorkSans-Bold', fontSize: SIZES.h4},
  h5: {fontFamily: 'WorkSans-Bold', fontSize: SIZES.h5},
  body1: {fontFamily: 'WorkSans-Medium', fontSize: SIZES.body1},
  body2: {fontFamily: 'WorkSans-Medium', fontSize: SIZES.body2},
  body3: {fontFamily: 'WorkSans-Medium', fontSize: SIZES.body3},
  body4: {fontFamily: 'WorkSans-Medium', fontSize: SIZES.body4},
  body5: {fontFamily: 'WorkSans-Medium', fontSize: SIZES.body5},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
