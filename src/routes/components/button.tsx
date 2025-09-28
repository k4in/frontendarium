import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { createFileRoute } from '@tanstack/react-router';
import { simulateLoading } from '@/lib/utils/simulate-loading-state';
import { MousePointerClick } from 'lucide-react';

export const Route = createFileRoute('/components/button')({
  component: RouteComponent,
});

function RouteComponent() {
  const [primaryDefaultButtonLoading, setPrimaryDefaultButtonLoading] = useState(false);
  const [primaryLargeButtonLoading, setPrimaryLargeButtonLoading] = useState(false);
  const [primaryIconButtonLoading, setPrimaryIconButtonLoading] = useState(false);
  const [primaryBigIconButtonLoading, setPrimaryBigIconButtonLoading] = useState(false);

  const [destructiveDefaultButtonLoading, setDestructiveDefaultButtonLoading] = useState(false);
  const [ghostDefaultButtonLoading, setGhostDefaultButtonLoading] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2">
        <Button
          className="justify-self-start"
          onClick={() => simulateLoading(setPrimaryDefaultButtonLoading)}
          isLoading={primaryDefaultButtonLoading}
        >
          Primary Default
        </Button>
        <p>variant: primary, size: default</p>
      </div>
      <div className="grid grid-cols-2">
        <Button
          className="justify-self-start"
          onClick={() => simulateLoading(setPrimaryLargeButtonLoading)}
          isLoading={primaryLargeButtonLoading}
          size="large"
        >
          Primary Large
        </Button>
        <p>variant: primary, size: large</p>
      </div>
      <div className="grid grid-cols-2">
        <Button
          className="justify-self-start"
          onClick={() => simulateLoading(setPrimaryIconButtonLoading)}
          isLoading={primaryIconButtonLoading}
          size="icon"
        >
          <MousePointerClick />
        </Button>
        <p>variant: primary, size: icon</p>
      </div>
      <div className="grid grid-cols-2">
        <Button
          className="justify-self-start"
          onClick={() => simulateLoading(setPrimaryBigIconButtonLoading)}
          isLoading={primaryBigIconButtonLoading}
          size="bigIcon"
        >
          <MousePointerClick className="size-8" />
        </Button>
        <p>variant: primary, size: bigIcon</p>
      </div>
      <div className="grid grid-cols-2 mt-4">
        <Button
          className="justify-self-start"
          onClick={() => simulateLoading(setDestructiveDefaultButtonLoading)}
          isLoading={destructiveDefaultButtonLoading}
          variant="destructive"
        >
          Destructive Default
        </Button>
        <p>variant: destructive, size: default</p>
      </div>
      <div className="grid grid-cols-2">
        <Button
          className="justify-self-start"
          onClick={() => simulateLoading(setGhostDefaultButtonLoading)}
          isLoading={ghostDefaultButtonLoading}
          variant="ghost"
        >
          Ghost Default
        </Button>
        <p>variant: ghost, size: default</p>
      </div>
    </div>
  );
}
