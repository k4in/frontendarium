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
      <div className="container px-2 mx-auto">
        <Outlet />
      </div>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
    </>
  );
}
