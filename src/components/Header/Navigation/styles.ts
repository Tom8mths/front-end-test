import {NavigationProps} from '.';

type WrapperProps = Pick<NavigationProps, 'isOpen'>;

export const wrapper = ({isOpen}: WrapperProps) => `
  md:hidden
  flex
  flex-col
  justify-between
  items-center
  absolute
  top-0
  bottom-0
  left-0
  right-0
  h-full
  overflow-hidden
  bg-[#c7d4db]
  text-white
  transition-opacity
  duration-300
  ease-in-out
  p-4
  z-10
  ${isOpen ? 'opacity-1' : 'opacity-0'}
  ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}
`;

export const iconWrapper = `
  py-4
  self-end
`;

export const icon = `
  md:hidden
  h-fit
  w-8
  cursor-pointer
`;

export const navItemContainer = `
  flex
  flex-col
  min-h-2/6
  justify-between
`;

export const signInContainer = `
  flex
  flex-col
  self-center
  pb-4
`;
