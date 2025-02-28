import { palette } from './palette';

export const theme = {
  colors: {
    ...palette,
  },
  typography: {
    fontFamily: "'Arial', sans-serif",
    fontSize: {
      small: '12px',
      medium: '16px',
      large: '20px',
    },
    fontWeight: {
      light: 300,
      regular: 400,
      bold: 700,
    },
  },
  spacing: (factor: number) => `${(factor * 8).toString()}px`,
};
