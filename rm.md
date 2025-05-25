# 📋 Requisitos Mínimos para la DApp "Task Manager"

Este documento describe los requisitos técnicos y de entorno necesarios para ejecutar y desarrollar la DApp de seguimiento de tareas construida con Angular y Truffle.

---

## 🔧 Requisitos del Sistema

- **Sistema Operativo**: Linux, macOS o Windows con WSL.
- **Node.js**: Versión 18.x o superior.
- **npm**: Versión 9.x o superior.
- **Angular CLI**: Versión 15 o superior.
- **Ganache**: Interfaz gráfica o CLI para blockchain local.
- **Truffle**: Versión 5.x para compilación y migración de contratos.
- **Git**: Para control de versiones.

---

## 📦 Dependencias del Proyecto

### Backend (Contratos inteligentes con Truffle)

- `truffle`: framework para desarrollo de contratos.
- `ganache`: blockchain local para pruebas.

### Frontend (Interfaz Angular)

- `@angular/core`
- `@angular/cli`
- `@angular/forms`
- `web3`: para conexión con Ethereum.
- Otros paquetes de Angular según `package.json`.

---

## 🛠️ Configuración y Ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu_usuario/task-dapp.git
cd task-dapp
