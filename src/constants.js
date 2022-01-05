export const COLORS = {
  primary: '0deg 0% 0%',
  secondary: '0deg 0% 77%',
  background: '0deg 0% 100%',
  backdrop: '220, 5%, 40%, 0.8',
};

export const WEIGHTS = {
  normal: 400,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};
