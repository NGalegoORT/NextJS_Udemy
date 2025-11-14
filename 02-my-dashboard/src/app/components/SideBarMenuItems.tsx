'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props{
    path:string;
    icon: JSX.Element;
    title: string;
    subTitle: string;
}


const SideBarMenuItems = ({path, icon, title, subTitle}: Props) => {

  const pathName = usePathname();
  console.log('Pathname:', pathName);
  return (
    <>
            <Link  
                className={`mr-2 transition-all hover:underline hover:text-blue-500 
              ${(pathName === path) && 'text-blue-700'}`}
              href={path}>
              <div>
                
                {icon}

              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-5 text-white">{title}</span>
                <span className="text-sm text-white/50 hidden md:block">{subTitle}</span>
              </div>
            </Link>   
    </>
)
}

export default SideBarMenuItems