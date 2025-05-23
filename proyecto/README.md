## Instalación

1. Clona el repositorio:
   ```bash
   git clone git@github.com:nicolasmnz/INFOSOC_2025-2.git
   cd INFOSOC_2025-2
2. Instala dependencias
   ```bash
   cd proyecto
   npm install

## Desarrollo

Ejecuta el servidor de desarrollo, aqui se ven los cambios que se desarrollen en tiempo real
```bash
npm run dev
```

## Version de producción (modo preview)
```bash
npm build
npm preview
```
Esto por defecto abrirá el sitio en:  
`http://localhost:4173`

### Testeo en celular
1. Ejecuta la app en modo preview
2. Obtén la IP de tu computador:
```bash
hostname -I
```
3. Abre la IP en tu celular:
En el navegador móvil, abre:

```
http://192.168.0.12:4173
```
(Reemplazar con la IP local real)

4. Revisar manifest.webmanifest:
- Instalación app desde el navegador
- Función sin conexión después de la primera carga (offline)
- Ícono y nombre personalizados 
- App se abre sin barra de direcciones


---
## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
