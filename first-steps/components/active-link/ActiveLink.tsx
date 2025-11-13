'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    path: string;
    text: string
    
}

const ActiveLink = ({path, text}: Props) => {
  const pathName = usePathname();

  return (
    <Link 
    className={`mr-2 transition-all hover:underline hover:text-blue-500 
      ${(pathName === path) && 'text-blue-500'}`}
    href={path}>
        {text}
    </Link>
  )
}

export default ActiveLink