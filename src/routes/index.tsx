import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="h-full rounded-xl p-4 bg-card/85 backdrop-blur border">
      <h3>Welcome Home!</h3>
    </div>
  );
}
