import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/button')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/components/button"!</div>
}
