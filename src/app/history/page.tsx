// Revalidar cada 5 minutos
export const revalidate = 300;

import { fetchHistorial } from "@/actions";
import Link from "next/link";

export default async function NamePage() {
  const historial = await fetchHistorial();
  console.log(historial);
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-black mb-4">Historial de Solicitudes</h1>
        <div className="overflow-x-auto">
          {/* Botón para redirigir */}
          <Link href="/home">
            <button className="mt-6 mb-2 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
              Ver Tasa de Cambio
            </button>
          </Link>
          <table className="min-w-full bg-white shadow-lg rounded-lg">
            <thead className="bg-gray-200 text-black">
              <tr>
                <th className="py-2 px-4 text-left">ID</th>
                <th className="py-2 px-4 text-left">Número de Solicitud</th>
                <th className="py-2 px-4 text-left">Fecha</th>
                <th className="py-2 px-4 text-left">Referencia</th>
              </tr>
            </thead>
            <tbody>
              {historial.map((item) => (
                <tr
                  key={item.id}
                  className="border-t text-black hover:bg-gray-100 transition-colors"
                >
                  <td className="py-2 px-4">{item.id}</td>
                  <td className="py-2 px-4">{item.numeroSolicitud}</td>
                  <td className="py-2 px-4">{item.fecha}</td>
                  <td className="py-2 px-4">{item.referencia.toFixed(5)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
