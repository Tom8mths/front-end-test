import {TextProps} from '.';

type TextStyleProps = Pick<TextProps, 'color' | 'size'>;

export const sizeModiffiers = {
  xsmall: 'text-xs',
  small: 'text-sm',
  base: 'text-base',
  large: 'text-lg',
  xlarge: 'text-4xl',
};

export const colorModiffiers = {
  white: 'text-white',
  black: 'text-black',
  lightGray: 'text-neutral-400',
};

export const text = ({color, size}: TextStyleProps) => `
  ${!!size && sizeModiffiers[size]}
  ${!!color && colorModiffiers[color]}
`;
