type LinkProps = {
  isActive: boolean;
};

export const link = ({isActive}: LinkProps) => `
  flex
  items-center
  font-bold
  mb-6
  last:mb-12
  w-fit
  hover:underline

  ${isActive ? 'text-pink-600' : 'text-white'}
`;

export const icon = `
  mr-4
  w-5
`;

export const linkText = `
  translate-y-px
`;
