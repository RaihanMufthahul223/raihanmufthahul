'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface SkewButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  external?: boolean;
  id?: string;
}

export default function SkewButton({
  href,
  children,
  variant = 'primary',
  external = false,
  id,
}: SkewButtonProps) {
  const cls = `btn-p5 btn-p5-${variant}`;
  const extraProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      style={{ display: 'inline-block' }}
    >
      <Link href={href} className={cls} id={id} {...extraProps}>
        <span>{children}</span>
      </Link>
    </motion.div>
  );
}
