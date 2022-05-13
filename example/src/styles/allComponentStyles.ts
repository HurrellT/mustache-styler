import ButtonStyle from './Button';

export type ComponentsStyles = keyof typeof AllComponentStyles;

export enum Components {
  Button = 'Button',
}

const AllComponentStyles = {
  Button: ButtonStyle,
};

export default AllComponentStyles;
