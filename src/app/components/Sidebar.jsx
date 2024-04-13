import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faFootball, faUser } from '@fortawesome/free-solid-svg-icons';
export default function Sidebar() {
  return (
    <div className="bg-slate-700 h-screen w-24 flex-row items-center justify-normal fixed z-10">
      <Link href="/"><FontAwesomeIcon className="pt-36 w-full size-12 text-white" icon={ faHome }/></Link>
      <Link href="/players"><FontAwesomeIcon className="pt-36 w-full size-12 text-white" icon={ faUser }/></Link>
      <Link href="/teams"><FontAwesomeIcon className="pt-36 w-full size-12 text-white" icon={ faUsers }/></Link>
      <Link href="/games"><FontAwesomeIcon className="pt-36 w-full size-12 text-white" icon={ faFootball }/></Link>
    </div>
  );
}