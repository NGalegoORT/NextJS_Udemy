import Link from "next/link"
import ActiveLink from "../active-link/ActiveLink";
const navItems = [
    {text: "About", path:"/about"},
    {text: "Pricing", path:"/pricing"},
    {text: "Contact", path:"/contact"},
]

const Navbar = () => {
  
    return (
    <nav className="flex bg-green-900 bg-opacity-30 p-2 m-2 rounded">
    
    <Link href={'/'}><span>Home</span></Link>
    <div className="flex flex-1"></div>

    {navItems.map(navItem =>(
        <ActiveLink key={navItem.path} {...navItem}/>
    ))}
    </nav>
  )
}

export default Navbar