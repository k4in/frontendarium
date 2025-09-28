export const FOCUS_STYLES =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent';

export const DISABLED_STYLES =
  'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-70 disabled:text-muted-foreground disabled:shadow-none';

export const INTERACTIVE_STYLES = `${FOCUS_STYLES} ${DISABLED_STYLES}`;
