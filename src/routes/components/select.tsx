import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/select')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/components/select"!</div>
}
