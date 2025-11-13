import Link from "next/link"

const navItems = [
    {text: "About", path:"/about"},
    {text: "Pricing", path:"/pricing"},
    {text: "Contact", path:"/contact"},
]

const Navbar = () => {
  
    return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
    
    <Link href={'/'}><span>Home</span></Link>
    <div className="flex flex-1"></div>

    {navItems.map(navItem =>(
    <Link key={navItem.path} className="mr-2" href={navItem.path}>{navItem.text}</Link>

    ))}
    </nav>
  )
}

export default Navbar