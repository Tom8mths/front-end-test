import Heading from '../../Heading';
import * as S from './styles';

type NavSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function NavSection({title, children}: NavSectionProps) {
  return (
    <div>
      <Heading className={S.title} color="lightGray" size="xxsmall">
        {title}
      </Heading>
      {children}
    </div>
  );
}
