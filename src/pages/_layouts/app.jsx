import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { Header } from './../../components/header';
import { useQueryParams } from './../../hooks/useQueryParams';

export function AppLayout() {
  const navigate = useNavigate();
  const { setQueryParams } = useQueryParams();

  useEffect(() => {
    const username = localStorage.getItem("username");
    setQueryParams({username: username})
    
    
    if (!username) {          
      navigate('/sign-up', { replace: true });
    }
  }, [navigate, setQueryParams])

  return (
     <div className="flex min-h-screen flex-col antialiased min-w-screen">
      <Header />

      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  )
}