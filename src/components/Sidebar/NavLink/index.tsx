import Link from 'next/link';
import {useRouter} from 'next/router';

import * as S from './styles';

export type NavLinkProps = {
  children: string;
  href: string;
  icon?: React.ReactElement;
  shouldMatchExactHref?: boolean;
};

export default function NavLink({
  icon,
  shouldMatchExactHref = true,
  href,
  children,
}: NavLinkProps) {
  let isActive = false;
  const {asPath} = useRouter();

  if (shouldMatchExactHref && asPath === href) {
    isActive = true;
  }

  if (!shouldMatchExactHref && asPath.startsWith(href)) {
    isActive = true;
  }

  return (
    <Link href={String(href)}>
      <a className={`${S.link({isActive})} `}>
        <div className={S.icon}>{!!icon && icon}</div>
        <span className={S.linkText}>{children}</span>
      </a>
    </Link>
  );
}
