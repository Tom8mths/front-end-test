import {HeadingProps} from '.';

type HeadingStyleProps = Pick<HeadingProps, 'color' | 'size' | 'weight'>;

const sizesModiffiers = {
  large: 'text-6xl',
  medium: 'text-2xl',
  small: 'text-xl',
  xsmall: 'text-lg',
  xxsmall: 'text-sm',
};

const colorsModiffiers = {
  white: 'text-white',
  pink: 'text-pink-600',
  lightGray: 'text-neutral-400',
};

export const heading = ({color, size, weight}: HeadingStyleProps) => `
  ${weight === 'bold' ? 'font-bold' : 'font-normal'}
  ${!!size && sizesModiffiers[size]}
  ${!!color && colorsModiffiers[color]}
`;
