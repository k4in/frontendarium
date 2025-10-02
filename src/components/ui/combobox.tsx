import { Combobox } from '@base-ui-components/react/combobox';
import { useId } from 'react';
import { Check, X, ChevronDown } from 'lucide-react';
import { INTERACTIVE_DATA_STYLES } from '@/lib/base-styles';
import { cn } from '@/lib/utils/cn';

const fruits = [
  'Apple',
  'Banana',
  'Orange',
  'Pineapple',
  'Grape',
  'Mango',
  'Strawberry',
  'Blueberry',
  'Raspberry',
  'Blackberry',
  'Cherry',
  'Peach',
  'Pear',
  'Plum',
  'Kiwi',
  'Watermelon',
  'Cantaloupe',
  'Honeydew',
  'Papaya',
  'Guava',
  'Lychee',
  'Pomegranate',
  'Apricot',
  'Grapefruit',
  'Passionfruit',
];

export function ComboboxComponent() {
  const id = useId();
  return (
    <Combobox.Root items={fruits}>
      <div className="relative flex flex-col gap-1 text-sm">
        <label htmlFor={id}>Choose a fruit</label>
        <Combobox.Input
          placeholder="e.g. Apple"
          id={id}
          className={cn(
            'bg-background flex h-9 min-w-40 items-center justify-between gap-3 rounded border px-3 text-base text-foreground select-none hover:bg-accent data-[popup-open]:bg-background cursor-default',
            INTERACTIVE_DATA_STYLES
          )}
        />
        <div className="absolute right-2 bottom-0 flex h-9 items-center justify-center text-muted-foreground">
          <Combobox.Clear
            className="flex h-9 w-6 items-center justify-center rounded bg-transparent p-0"
            aria-label="Clear selection"
          >
            <X className="size-4" />
          </Combobox.Clear>
          <Combobox.Trigger
            className="flex h-9 w-6 items-center justify-center rounded bg-transparent p-0"
            aria-label="Open popup"
          >
            <ChevronDown className="size-4" />
          </Combobox.Trigger>
        </div>
      </div>

      <Combobox.Portal>
        <Combobox.Positioner className="outline-none" sideOffset={4}>
          <Combobox.Popup className="w-[var(--anchor-width)] max-h-[min(var(--available-height),23rem)] max-w-[var(--available-width)] origin-[var(--transform-origin)] overflow-y-auto scroll-pt-2 scroll-pb-2 overscroll-contain rounded-md bg-popover text-popover-foreground py-2 shadow outline-1 outline-border transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0">
            <Combobox.Empty className="px-4 py-2 text-muted-foreground empty:m-0 empty:p-0">
              No fruits found.
            </Combobox.Empty>
            <Combobox.List>
              {(item: string) => (
                <Combobox.Item
                  key={item}
                  value={item}
                  className="grid cursor-default grid-cols-[0.75rem_1fr] items-center gap-2 py-2 pr-8 pl-4 text-base leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-accent-foreground data-[highlighted]:bg-accent"
                >
                  <Combobox.ItemIndicator className="col-start-1">
                    <Check className="size-3" />
                  </Combobox.ItemIndicator>
                  <div className="col-start-2">{item}</div>
                </Combobox.Item>
              )}
            </Combobox.List>
          </Combobox.Popup>
        </Combobox.Positioner>
      </Combobox.Portal>
    </Combobox.Root>
  );
}
