import { cn } from '@/lib/utils/cn';

export const FOCUS_STYLES =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background';

export const DISABLED_STYLES =
  'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-70 disabled:text-muted-foreground disabled:shadow-none';

const DATA_DISABLED_STYLES =
  'data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70 data-[disabled]:text-muted-foreground data-[disabled]:shadow-none';

export const INTERACTIVE_STYLES = cn(FOCUS_STYLES, DISABLED_STYLES);

export const INTERACTIVE_DATA_STYLES = cn(FOCUS_STYLES, DATA_DISABLED_STYLES);
