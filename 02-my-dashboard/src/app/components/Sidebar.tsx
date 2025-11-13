import Image from 'next/image'
import SideBarMenuItems from './SideBarMenuItems'
import path from 'path';

const menuItems = [
  {
    path:'/dashboard/main',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
          </svg>,
    title: 'Dashboard',
    subTitle: 'Resumen de Actividades'
  },
  {
    path:'/dashboard/counter',
    icon:                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>,
    title: 'Counter',
    subTitle: 'Estado Local'
  }

];


const Sidebar = () => {
  return (
        <div id="menu" 
        style={{width:'400px'}}
        className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll">
          <div id="logo" className="my-4 px-6">
            <h1 className="text-lg md:text-2xl font-bold text-white">
                Nano
            <span className="text-blue-500">15</span>.
            </h1>
            <p className="text-slate-500 text-sm">Superivsa tus acciones y actividades.</p>
          </div>


          <div id="profile" className="px-6 py-10">
            <p className="text-slate-500">Bienvenido,</p>
            <a href="#" className="inline-flex space-x-2 items-center">
              <span>
                <Image
                className="rounded-full w-8 h-8"
                src="https://media.licdn.com/dms/image/v2/D4D03AQE_3tJpZNOD9A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1664393951547?e=2147483647&v=beta&t=8mFgyF43Dpzn6f-xHgqhWEjs1a22LJbaA_SAC3I5U0E"
                width={50}
                height={50}
                alt="Users Avatar"
                />
              </span>
              <span className="text-sm md:text-base font-bold">
                Nahuel Galego
              </span>
            </a>
          </div>

          <div id="nav" className="w-full px-6">

            {
            menuItems.map((item) => (
            <SideBarMenuItems key={item.path} {...item}/>))
            }


          </div>
        </div>
          )
}

export default Sidebar