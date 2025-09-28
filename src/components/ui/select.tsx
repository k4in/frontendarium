import { Select } from '@base-ui-components/react/select';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { INTERACTIVE_DATA_STYLES } from '@/lib/base-styles';

const fonts = [
  { label: 'Select font', value: null },
  { label: 'Sans-serif', value: 'sans' },
  { label: 'Serif', value: 'serif' },
  { label: 'Monospace', value: 'mono' },
  { label: 'Cursive', value: 'cursive' },
  { label: 'Verdana', value: 'verdana' },
  { label: 'Tahoma', value: 'tahoma' },
  { label: 'Roboto', value: 'roboto' },
];

export function SelectComponent() {
  return (
    <Select.Root items={fonts}>
      <Select.Trigger
        className={cn(
          'bg-background flex h-9 min-w-40 items-center justify-between gap-3 rounded border px-3 text-base text-foreground select-none hover:bg-accent data-[popup-open]:bg-background cursor-default',
          INTERACTIVE_DATA_STYLES
        )}
      >
        <Select.Value />
        <Select.Icon className="flex">
          <ChevronsUpDown className="size-4" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner className="outline-none select-none z-10">
          <Select.ScrollUpArrow className="border-t border-x top-0 z-[1] flex h-4 w-full cursor-default items-center text-primary justify-center bg-background text-center text-xs" />
          <Select.Popup className="outline-none min-w-60 max-h-[var(--available-height)] overflow-y-auto rounded-md bg-background text-foreground border shadow">
            {fonts.map(({ label, value }) => (
              <Select.Item
                key={label}
                value={value}
                className="grid min-w-[var(--anchor-width)] cursor-default grid-cols-[0.75rem_1fr] items-center gap-2 py-2 px-2 text-sm outline-none select-none data-[highlighted]:bg-accent"
              >
                <Select.ItemIndicator className="col-start-1">
                  <Check className="size-4" />
                </Select.ItemIndicator>
                <Select.ItemText className="col-start-2">{label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Popup>
          <Select.ScrollDownArrow className="border-b border-x bottom-0 z-[1] flex h-4 w-full cursor-default items-center justify-center bg-background text-center text-xs" />
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}

// export function SelectComponent() {
//   return (
//     <Select.Root items={fonts}>
//       <Select.Trigger className="flex h-10 min-w-36 items-center justify-between gap-3 rounded-md border border-gray-200 pr-3 pl-3.5 text-base text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 data-[popup-open]:bg-gray-100 cursor-default">
//         <Select.Value />
//         <Select.Icon className="flex">
//           <ChevronsUpDown />
//         </Select.Icon>
//       </Select.Trigger>
//       <Select.Portal>
//         <Select.Positioner className="outline-none select-none z-10" sideOffset={8}>
//           <Select.ScrollUpArrow className="top-0 z-[1] flex h-4 w-full cursor-default items-center justify-center rounded-md bg-[canvas] text-center text-xs before:absolute before:top-[-100%] before:left-0 before:h-full before:w-full before:content-[''] data-[direction=down]:bottom-0 data-[direction=down]:before:bottom-[-100%]" />
//           <Select.Popup className="group max-h-[var(--available-height)] origin-[var(--transform-origin)] overflow-y-auto bg-clip-padding rounded-md bg-[canvas] py-1 text-gray-900 shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[side=none]:data-[ending-style]:transition-none data-[starting-style]:scale-90 data-[starting-style]:opacity-0 data-[side=none]:data-[starting-style]:scale-100 data-[side=none]:data-[starting-style]:opacity-100 data-[side=none]:data-[starting-style]:transition-none data-[side=none]:scroll-py-5 dark:shadow-none dark:outline-gray-300">
//             {fonts.map(({ label, value }) => (
//               <Select.Item
//                 key={label}
//                 value={value}
//                 className="grid min-w-[var(--anchor-width)] cursor-default grid-cols-[0.75rem_1fr] items-center gap-2 py-2 pr-4 pl-2.5 text-sm leading-4 outline-none select-none group-data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] group-data-[side=none]:pr-12 group-data-[side=none]:text-base group-data-[side=none]:leading-4 group-data-[side=none]:scroll-my-1 data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900 pointer-coarse:py-2.5 pointer-coarse:text-[0.925rem]"
//               >
//                 <Select.ItemIndicator className="col-start-1">
//                   <Check className="size-3" />
//                 </Select.ItemIndicator>
//                 <Select.ItemText className="col-start-2">{label}</Select.ItemText>
//               </Select.Item>
//             ))}
//           </Select.Popup>
//           <Select.ScrollDownArrow className="bottom-0 z-[1] flex h-4 w-full cursor-default items-center justify-center rounded-md bg-[canvas] text-center text-xs before:absolute before:top-[-100%] before:left-0 before:h-full before:w-full before:content-[''] data-[direction=down]:bottom-0 data-[direction=down]:before:bottom-[-100%]" />
//         </Select.Positioner>
//       </Select.Portal>
//     </Select.Root>
//   );
// }
