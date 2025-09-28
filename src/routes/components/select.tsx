import { createFileRoute } from '@tanstack/react-router';
import { SelectComponent } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/components/select')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex items-center gap-2">
      <SelectComponent />
      <Button>Hello</Button>
    </div>
  );
}
