export const size = {
  mobileM: 320,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  mobileM: `(min-width: ${size.mobileM}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  laptopL: `(min-width: ${size.laptopL}px)`,
};
