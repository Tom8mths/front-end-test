import {ButtonProps} from '.';

type ButtonStyleProps = Pick<ButtonProps, 'size' | 'color' | 'fullWidth'>;

type IconProps = {
  hasMargin: boolean;
};

const sizeModiffiers = {
  smallest: 'px-3 py-1.5',
  small: 'px-6 py-2',
  medium: 'px-8 py-4',
  large: 'px-10 py-6',
};

const colorModiffiers = {
  primary: 'bg-[#6891aa] hover:bg-cyan-700',
  secondary: 'bg-white/20 border border-white hover:bg-white/50',
  transparent:
    'bg-transparent hover:bg-neutral-600 text-neutral-400 hover:text-white',
};

export const button = ({size, color, fullWidth}: ButtonStyleProps) => `
  inline-flex
  justify-center
  items-center
  font-bold
  text-white
  rounded
  h-fit

  ${fullWidth ? 'w-full' : 'w-fit'}
  ${!!size && sizeModiffiers[size]}
  ${!!color && colorModiffiers[color]}
`;

export const icon = ({hasMargin}: IconProps) => `
  w-4

  ${hasMargin ? 'mr-2' : ''}
`;
