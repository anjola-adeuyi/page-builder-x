import Link from 'next/link';
import React from 'react';

function Logo() {
  return (
    <Link
      href={'/'}
      className="font-bold text-3xl bg-gradient-to-r from-fuchsia-500 to-lime-300 text-transparent bg-clip-text hover:cursor-pointer"
    >
      PageBuilderX
    </Link>
  );
}

export default Logo;
