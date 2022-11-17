import Link from 'next/link';
import clsx from 'clsx';

export const NavLink = ({
  to,
  title = 'Link',
  selected = false,
  ...props
}: any) => {
  return (
    <Link
      {...props}
      href={to}
      className={clsx(
        'text-sm font-semibold tracking-wide transition duration-150 hover:text-accent focus-visible:outline-accent',
        {
          'text-accent': selected,
          'text-fore-secondary': !selected,
        },
      )}
    >
      {title}
    </Link>
  );
};
