import WidgetsGrid from "@/components/dashboard/WidgetsGrid"

export const metadata = {
  title: 'Dashboard',
  Description: 'SEO DESC NG'
}

const LandingPage = () => {
  return (
    <>
      <div className="text-black p-2">
        <h1 className="mt-2 text-3xl">Dashboard</h1>
        <span className="text-xl">Informacion General</span>
        <WidgetsGrid/>
      </div>




    </>  )
}

export default LandingPage