import { createFileRoute, Outlet, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/components')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="grid grid-cols-[12rem_1fr] h-full">
      <nav className="flex flex-col gap-2 border-r py-2 md:py-10">
        <Link
          to="/components/button"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Button
        </Link>
        <Link
          to="/components/select"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Select
        </Link>
      </nav>
      <main className="py-2 md:py-10 pl-2 md:pl-10">
        <Outlet />
      </main>
    </div>
  );
}
