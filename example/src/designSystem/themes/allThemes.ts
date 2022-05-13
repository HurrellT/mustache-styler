import CriptoTheme from './CriptoTheme';
import TradingTheme from './TradingTheme';

export enum Themes {
  base = 'base',
  cripto = 'cripto',
}

const AllThemes = {
  base: TradingTheme,
  cripto: CriptoTheme,
};

export default AllThemes;
