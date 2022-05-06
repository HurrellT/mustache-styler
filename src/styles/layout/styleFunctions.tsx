import colors from './colors';

export const shadow = (elevation: number, color = colors.black) => {
  return {
    elevation,
    shadowColor: color,
    shadowOffset: { width: 2, height: elevation - 1 },
    shadowOpacity: 0.24,
    shadowRadius: elevation,
  };
};

export const remToPixel = (remSize: number) => remSize * 16;
