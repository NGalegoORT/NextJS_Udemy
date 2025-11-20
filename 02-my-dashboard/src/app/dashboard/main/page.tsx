import { SimpleWidget } from "@/components/SimpleWidget"

const LandingPage = () => {
  return (
    <>
      <div className="text-black p-2">
        <h1 className="mt-2 text-3xl">Dashboard</h1>
        <span className="text-xl">Informacion General</span>

        <div className="flex felx-wrap p-2 item-center justify-center">
        <SimpleWidget/>
        
        

        </div>

      </div>




    </>  )
}

export default LandingPage