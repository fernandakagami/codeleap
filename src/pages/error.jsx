import { Link } from 'react-router'

export function Error() {  
  return (
    <div className="min-h-screen flex items-center flex-col gap-4 justify-center w-screen">
      <h1 className="text-4xl font-bold">Whoops...</h1>      
      <p className="text-accent-foreground">
        Back to{' '}
        <Link to="/sign-up" className="text-[#7695EC]">
          Sign up
        </Link>
      </p>
    </div>
  )
}