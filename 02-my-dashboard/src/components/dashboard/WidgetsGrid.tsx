'use client'
import { SimpleWidget } from "@/components/dashboard/SimpleWidget"
import { useAppSelector } from "@/store"


const WidgetsGrid = () => {

  const isCart = useAppSelector(state => state.counter.count)
  return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 w-full">
            <SimpleWidget
            subTitle="Productos Agregados"
            title={`${isCart}`}
            label="Carrito de Compras"
            icon={  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-6 h-6"
                    >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>}
            href="/dashboard/counter"
            />           
        </div>
    )
}

export default WidgetsGrid