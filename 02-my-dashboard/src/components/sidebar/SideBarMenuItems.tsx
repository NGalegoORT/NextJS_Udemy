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
  //console.log('Pathname:', pathName);
  return (
    <>
            <Link  href={path}
            className={`
              mr-2 hover:underline hover:text-blue-500 w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 ease-linear duration-150
              ${(pathName === path) ? 'bg-blue-800': ''}
              `}>
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