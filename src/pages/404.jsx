import { Link } from 'react-router'

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center flex-col gap-4 justify-center w-screen">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="text-accent-foreground">
        Back to{' '}
        <Link to="/" className="text-[#7695EC]">
          Dashboard
        </Link>
      </p>
    </div>
  )
}