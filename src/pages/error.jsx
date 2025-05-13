import { Link } from 'react-router'

export function Error() {  
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Whoops...</h1>
      <p className="text-accent-foreground">Ops!!!</p>     
      <p className="text-accent-foreground">
        Back to{' '}
        <Link to="/" className="text-sky-600 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  )
}