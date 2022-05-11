import CriptoTheme from './CriptoTheme';
import TradingTheme from './TradingTheme';

const AllThemes = {
  base: TradingTheme,
  cripto: CriptoTheme,
};

export enum Themes {
  base = 'base',
  cripto = 'cripto',
}

export default AllThemes;
