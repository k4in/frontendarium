import { ThemeToggle } from '@/components/theme-toggle';
import { Link } from '@tanstack/react-router';

export default function Header() {
  return (
    <header className="h-16 bg-card/85 backdrop-blur shadow-md">
      <div className="container h-full mx-auto flex justify-between items-center">
        <nav className="flex gap-4">
          <Link
            to="/"
            activeProps={{
              className: 'font-bold',
            }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/components"
            activeProps={{
              className: 'font-bold',
            }}
            activeOptions={{ exact: true }}
          >
            Components
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
