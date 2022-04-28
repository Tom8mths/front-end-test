import * as S from './styles';

export type MiniCartProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MiniCart({isOpen}) {
  return <div className={`${S.container({isOpen})}`}></div>;
}
