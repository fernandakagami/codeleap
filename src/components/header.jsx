import { AccountMenu } from './account-menu';
import { NavLink } from './nav-link';

export function Header() {
  return (
    <div className="bg-[#7695EC] text-white">
      <div className="flex h-16 items-center gap-6 px-6">
        <NavLink to="/">					
					CodeLeap Network
				</NavLink>     
       
        <div className="ml-auto flex items-center gap-2">
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}