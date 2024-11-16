// Revalidar cada 5 minutos
export const revalidate = 300;

import { fetchTipoCambioDia } from "@/actions";
import Link from "next/link";

export default async function HomePage() {
  const tipoCambio = await fetchTipoCambioDia();
  console.log(tipoCambio);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Tipo de Cambio del Día
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          Fecha: <span className="font-semibold">{tipoCambio.fecha}</span>
        </p>
        <p className="text-5xl font-bold text-green-600">
          {tipoCambio.referencia.toFixed(2)}
        </p>
      </div>

      {/* Botón para redirigir */}
      <Link href="/history">
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
          Ver Historial
        </button>
      </Link>
    </div>
  );
}
