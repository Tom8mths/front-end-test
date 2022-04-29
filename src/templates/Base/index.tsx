import * as S from './styles';

import {User} from '../../interfaces/user.interface';

import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export type BaseProps = {
  user?: User;
  children?: React.ReactNode;
  hasSidebar?: boolean;
  paddingTop?: boolean;
};

export default function Base({user, paddingTop = true, children}: BaseProps) {
  return (
    <section className="headerBackground">
      <Container>
        <Header user={user} />
        <div className={S.wrapper({paddingTop})}>{children}</div>
      </Container>
    </section>
  );
}
