import {MiniCartProps} from '.';

type ContainerProps = Pick<MiniCartProps, 'isOpen'>;

export const container = ({isOpen}: ContainerProps) => `
  bg-black
  w-20
  h-full
  fixed
  right-0

  ${isOpen ? 'block' : 'hidden'}
`;
