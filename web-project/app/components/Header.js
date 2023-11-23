import Link from 'next/link'
import OutlineUserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon'
import { useContext } from 'react';
import UserContext from './UserContext'

export default function Header(){
  const {profile, login, logout} = useContext(UserContext)
  console.log('Informations de la personne connectée :', profile);
  return (
    
    <header className="flex bg-slate-200 px-10 py-2">
      <Link href={`/`} className="flex-grow flex items-center">
        
        <span className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100">
          Web-tech gr04-09
        </span>
      </Link>
      
      <ul className="flex gap-5">
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100">
          <Link href="/articles">
            Random Meals Idea
          </Link>
        </li>
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100">
          <Link href="/categories">
            Meal Categories
          </Link>
        </li>
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100">
          <Link href="/about">
            About us
          </Link>
        </li>
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100">
          <Link href="/contacts">
            Contact us
          </Link>
        </li>
        { profile && (
          <li className="rounded py-1 px-2 text-slate-600 border border-cyan-700 hover:bg-cyan-500 hover:text-slate-50">
            <Link href="/profile" className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6">
            My profile : {profile.email}
              <OutlineUserCircleIcon />
            </Link>
          </li>
        )}
        <li className="py-1 px-2 text-slate-800 hover:text-slate-500">
        {profile ? (
  <button onClick={() => logout()} className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6">
    Sign out
  </button>
) : (
  <button onClick={async () => {
    login();
  }} className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6">
    Sign in
  </button>
)}

        </li>
      </ul>
    </header>
  )
}

//loggedCheck