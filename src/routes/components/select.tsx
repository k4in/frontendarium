import { createFileRoute } from '@tanstack/react-router';
import { SelectComponent } from '@/components/ui/select';
import { ComboboxComponent } from '@/components/ui/combobox';

export const Route = createFileRoute('/components/select')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex items-center flex-col gap-6">
      <SelectComponent />
      <ComboboxComponent />
    </div>
  );
}
