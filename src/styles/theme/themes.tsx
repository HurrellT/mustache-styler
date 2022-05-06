import type { ThemeObjectType } from '../../types/theme/Theming';
import base from './baseColors';
import pink from './pinkColors';

const themes: ThemeObjectType = {
  pink: {
    ...pink,
  },
  base: {
    ...base,
  },
};

export default themes;
