# Proyecto de Gestión de Historial y Tipo de Cambio

Este proyecto es una aplicación web desarrollada con **Next.js** y **Tailwind CSS** que permite visualizar el historial de solicitudes y el tipo de cambio del día, consumiendo datos desde una API.

## **Características**
- Visualización del tipo de cambio diario en un diseño atractivo.
- Tabla interactiva para el historial de solicitudes.
- Estilizado con **Tailwind CSS**.
- Manejo de datos mediante Server Actions y Axios.

---

## **Requisitos Previos**
1. **Node.js**: Asegúrate de tener instalado Node.js en tu máquina.
   - Recomendado: Node.js `>= 16.x`.
2. **Git**: Asegúrate de tener instalado Git.
3. **API**:
   - Los endpoints deben estar activos en `http://localhost:8080`:
     - `/historial`
     - `/tipoCambioDia`

---

## **Pasos para Ejecutar el Proyecto**

### **1. Clonar el Repositorio**

Clona este repositorio desde GitHub:

```bash
git clone https://github.com/aaldim/final-frontend.git

Dirígete al directorio del proyecto:

cd nombre-del-repositorio

2. Instalar Dependencias

Instala todas las dependencias necesarias:

npm install

3. Ejecutar el Servidor de Desarrollo

Inicia el servidor en modo desarrollo:

npm run dev

La aplicación estará disponible en: http://localhost:3000

4. Funcionalidades Disponibles

Tipo de Cambio

	1.	Navega a la página principal para visualizar el tipo de cambio diario.
	2.	Verás la fecha y el valor de referencia destacado en el centro.

Historial de Solicitudes

	1.	Navega a /history para visualizar una tabla con las solicitudes registradas.
	2.	La tabla muestra: ID, Número de Solicitud, Fecha y Referencia.

Comandos Útiles

Comando	Descripción
npm run dev	Inicia el servidor en modo desarrollo
npm run build	Genera una versión optimizada para producción
npm run start	Inicia el servidor en modo producción
npm run lint	Ejecuta el linter para revisar errores de código

Tecnologías Utilizadas

	•	Next.js: Framework para React.
	•	Tailwind CSS: Framework de estilos.
	•	Axios: Librería para realizar peticiones HTTP.
	•	TypeScript: Tipado estático para JavaScript.