import type { PaletteType } from '../../types/theme/Theming';
import base from './baseColors';

const pink: PaletteType = {
  ...base,
  // Esto no haría que se repitan los valores? conviene lodash merge?
  mainDisabledColorLighten: '#C1C1C1',
  mainDisabledColor: '#656565',
  mainDisabledColorDarken: '#454545',
  mainColorLighten: '#EEB9DE',
  mainColor: '#DD86C3',
  mainColorDarken: '#692153',
};

export default pink;
