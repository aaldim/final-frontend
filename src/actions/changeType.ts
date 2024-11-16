"use server";

import axios from "axios";

export async function fetchHistorial() {
  const BASE_URL = "http://localhost:8080";

  try {
    const response = await axios.get(`${BASE_URL}/historial`);
    return response.data;
  } catch (error) {
    console.error("Error fetching /historial:", error);
    throw new Error("No se pudo obtener el historial");
  }
}

export async function fetchTipoCambioDia() {
  const BASE_URL = "http://localhost:8080";

  try {
    const response = await axios.get(`${BASE_URL}/tipoCambioDia`);
    return response.data;
  } catch (error) {
    console.error("Error fetching /tipoCambioDia:", error);
    throw new Error("No se pudo obtener el tipo de cambio del día");
  }
}
