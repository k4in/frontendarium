import { ThemeToggle } from '@/components/theme-toggle';
import { Link } from '@tanstack/react-router';

const linkClasses =
  'h-9 flex items-center px-3 justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors rounded';

const activeLinkClasses = 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground';

export default function Header() {
  return (
    <header className="h-16 bg-card/85 backdrop-blur shadow-md">
      <div className="container h-full px-2 mx-auto flex justify-between items-center">
        <nav className="flex gap-4">
          <Link
            to="/"
            className={linkClasses}
            activeProps={{
              className: activeLinkClasses,
            }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/components"
            className={linkClasses}
            activeProps={{
              className: activeLinkClasses,
            }}
          >
            Components
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
