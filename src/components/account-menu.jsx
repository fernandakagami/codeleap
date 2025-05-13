// import { useMutation, useQuery } from '@tanstack/react-query'
// import { Building, ChevronDown, LogOut } from 'lucide-react'
import { useNavigate } from 'react-router';
import { Dropdown, Space } from 'antd';
import { CircleUserRound, LogOut } from 'lucide-react';
import { signOut } from "./../api/sign-out";

export function AccountMenu() {
	const username = localStorage.getItem("username");
  const navigate = useNavigate();

  // const { data: profile, isLoading: isLoadingProfile } = useQuery({
  //   queryKey: ['profile'],
  //   queryFn: getProfile,
  //   staleTime: Infinity,
  // })

  // const { data: managedRestaurant, isLoading: isLoadingManagedRestaurant } =
  //   useQuery({
  //     queryKey: ['managed-restaurant'],
  //     queryFn: getManagedRestaurant,
  //     staleTime: Infinity,
  //   })

  // const { mutateAsync: signOutFn, isPending: isSigningOut } = useMutation({
  //   mutationFn: signOut,
  //   onSuccess: () => {
  //     navigate('/sign-in', { replace: true })
  //   },
  // })

	const items = [
		{
			key: '1',
			label: <p className="text-base">Hi, {username}!!!</p>,
			disabled: true,
		},
		{
			type: 'divider',
		},	
		{
			key: '4',
			label: <p className="text-base flex fle-row items-center gap-2 justify-center"><LogOut size={14} /> <span>Sign out</span></p>,			
			onClick: () => {
				signOut();
 				navigate('/sign-up', { replace: true })
			},		
		},
	];

  return (
     <Dropdown menu={{ items }}>
			<a onClick={(e) => e.preventDefault()}>
				<Space>
					<CircleUserRound size={28} className="cursor-pointer" />
				</Space>
			</a>
		</Dropdown>
  )
}