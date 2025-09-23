import { ThemeToggle } from '@/components/theme-toggle';
import { Link } from '@tanstack/react-router';

export default function Header() {
  return (
    <header className="px-4 md:px-20 flex justify-between items-center h-16 bg-card/85 backdrop-blur shadow-md">
      <nav>
        <Link
          to="/"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>
      </nav>
      <ThemeToggle />
    </header>
  );
}
