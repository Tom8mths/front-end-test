import * as S from './styles';

export type HeadingProps = {
  children?: string | React.ReactNode;
  size?: 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall';
  color?: 'white' | 'pink' | 'lightGray';
  weight?: 'bold' | 'normal';
  className?: string;
};

export default function Heading({
  size = 'large',
  color = 'white',
  weight = 'bold',
  className = '',
  children,
}: HeadingProps) {
  return (
    <>
      <h1 className={`${S.heading({color, size, weight})} ${className}`}>
        {children}
      </h1>
    </>
  );
}
