import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <a>
        <h1 className="text-white text-4xl">Shop</h1>
      </a>
    </Link>
  );
}
