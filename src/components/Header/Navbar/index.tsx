import * as S from './styles';
export type NavigationProps = {
  children: React.ReactNode;
};

export default function Navigation({children}: NavigationProps) {
  return <nav className={S.wrapper}>{children}</nav>;
}
