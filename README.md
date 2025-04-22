# Ethereum Smart Contracts with Solidity

Este repositorio contiene un tutorial paso a paso para aprender a desarrollar y desplegar contratos inteligentes en la red Ethereum utilizando el lenguaje de programación Solidity. Aquí encontrarás instrucciones claras y ejemplos prácticos para configurar tu entorno de desarrollo, escribir tu primer contrato inteligente y desplegarlo en una red de desarrollo local.
---
## Contenidos

- **Configuración del Entorno:** Instalación de Node.js, npm, Truffle y Ganache.
- **Escribir un Contrato Inteligente:** Creación y escritura de un contrato sencillo en Solidity.
- **Compilar y Desplegar:** Compilación del contrato y despliegue en una red local utilizando Truffle y Ganache.
- **Interacción con el Contrato:** Ejecución de funciones del contrato desde la consola de Truffle.
---
## Requisitos

- **Node.js y npm**: Asegúrate de tener Node.js instalado, puedes descargarlo desde [nodejs.org](https://nodejs.org).
- **Truffle**: Framework de desarrollo para Ethereum. Instálalo con `npm install -g truffle`.
- **Ganache**: Blockchain local para probar contratos. Descárgalo desde [trufflesuite.com/ganache](https://www.trufflesuite.com/ganache).
---
## Instrucciones

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/ethereum-smart-contracts-solidity.git
   cd ethereum-smart-contracts-solidity

2. **Instala las dependencias de Truffle:**

   ```bash
   npm install -g truffle
   
3. **Configura Ganache:**
Descarga e instala Ganache desde trufflesuite.com/ganache.
Crea una nueva blockchain en Ganache y toma nota de la URL (por defecto, es http://127.0.0.1:7545).

4. **Compila el contrato:**

   ```bash
   truffle compile

5. **Despliega el contrato**
Asegúrate de que Ganache esté en ejecución y luego despliega el contrato con:

   ```bash
   truffle compile

6. Interactúa con el contrato:
Una vez desplegado, abre la consola de Truffle y ejecuta los siguientes comandos para interactuar con el contrato:

   ```bash
   truffle console
   const instance = await SimpleStorage.deployed();
   await instance.set(42);
   const value = await instance.get();
   console.log(value.toString());
---
## Estructura de Archivos
- contracts/: Contiene los contratos inteligentes en Solidity.
- SimpleStorage.sol: El contrato inteligente que permite almacenar y recuperar un número.
- migrations/: Carpeta de migraciones, encargada de desplegar contratos en la blockchain.
- 1_initial_migration.js: Migración inicial para desplegar el contrato de Truffle.
- 2_deploy_contracts.js: Migración para desplegar el contrato SimpleStorage.
- test/: Carpeta de pruebas unitarias.
      - simpleStorageTest.js: Prueba unitaria para verificar que el contrato funcione correctamente.
- truffle-config.js: Archivo de configuración de Truffle para redes de despliegue y compilación de contratos.
- README.md: Este archivo, que explica cómo utilizar el repositorio.
- package.json: Gestión de dependencias y scripts de Node.js.

---
### Contribuciones
¡Las contribuciones son bienvenidas! Si tienes alguna sugerencia o mejora, no dudes en abrir un issue o enviar un pull reques
---

## Recursos Adicionales
Documentación de Solidity: https://docs.soliditylang.org/en/v0.8.29/
Guías de Truffle: https://archive.trufflesuite.com/guides/
Documentación de Ganache: https://archive.trufflesuite.com/docs/ganache/

---
## Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.



