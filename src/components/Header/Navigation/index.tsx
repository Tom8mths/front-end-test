import Link from 'next/link';
import {XIcon as CloseIcon} from '@heroicons/react/outline';

import * as S from './styles';
import {User} from '../../../interfaces/user.interface';

import Text from '../../Text';
import Button from '../../Button';

export type NavigationProps = {
  isOpen: boolean;
  user?: User;
  children: React.ReactNode;
  onClose: () => void;
};

export default function Navigation({
  children,
  isOpen,
  user,
  onClose,
}: NavigationProps) {
  return (
    <nav className={`${S.wrapper({isOpen})}`} aria-hidden={!isOpen}>
      <div className={S.iconWrapper}>
        <CloseIcon
          className={S.icon}
          aria-label="Close menu"
          aria-hidden="false"
          tabIndex={0}
          onClick={() => onClose()}
        />
      </div>

      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>Discover</li>
      </ul>

      {!!user && (
        <>
          <div className={S.navItemContainer}>{children}</div>
          <Text className="py-4">
            Welcome, &nbsp;
            <a href="#" className="text-pink-600">
              {user.name}
            </a>
          </Text>
        </>
      )}

      {!user && (
        <div className={S.signInContainer}>
          <Link href="/">
            <a>
              <Button size="small" fullWidth>
                Sign in
              </Button>
            </a>
          </Link>
          <Text className="py-4">
            Don&apos;t have an account?&nbsp;
            <Link href="/">
              <a href="#" className="text-[#fd927d]">
                Sign up
              </a>
            </Link>
          </Text>
        </div>
      )}
    </nav>
  );
}
