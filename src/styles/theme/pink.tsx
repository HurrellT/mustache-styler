import pinkColors from './pinkColors';

const pink = {
  content: '#AB2B84',
  box: '#DD86C3',
  button: {
    text: {
      primary: pinkColors.textColorLighten,
      secondary: pinkColors.mainColor,
      link: pinkColors.mainColor,
      flat: pinkColors.textColor,
    },
    container: {
      primary: pinkColors.mainColor,
      secondary: pinkColors.transparent,
      link: pinkColors.transparent,
      flat: pinkColors.transparent,
    },
    containerBorder: {
      secondary: pinkColors.mainColor,
    },
  },
};

export default pink;
