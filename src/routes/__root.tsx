import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { QueryClient } from '@tanstack/react-query';
import Header from '@/components/header';

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Header />
      <main className="px-4 md:px-20 py-2 md:py-10">
        <Outlet />
      </main>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
    </>
  );
}
