import Link from 'next/link';
import React from 'react';

/**
 * Footer component displays a copyright notice with a link to my github.
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-primary py-4 text-center">
      <p className="mt-3 text-white">
        &copy; 2023 -{' '}
        <Link
          className="lg:hover:underline"
          target="_blank"
          href="https://github.com/pwdbymoral"
        >
          pwdbymoral
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
