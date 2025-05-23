# App
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
npm run build
npm run preview
```
Esto por defecto abrirá el sitio en:  
`http://localhost:4173`

# Testeo en celular en WSL
1. Ejecuta la app en modo preview
2. Agregar una regla en el Firewall. Como administrador, abrir la powerShell:
```cmd
New-NetFirewallRule -DisplayName "Allow Vite 4173" -Direction Inbound -Protocol TCP –LocalPort 4173 –Action Allow
```
3. Configurar el reenvio de puertos(portproxy):
Abrir una terminal de WSL, para obtener la IP
```bash
ip addr show eth0 | grep "inet " | awk '{print $2}' | cut -d/ -f1
```
En la terminal de Windows, como administrador se configura
```cmd
netsh interface portproxy add v4tov4 listenaddress=0.0.0.0 listenport=4173 connectaddress=LA_IP_DE_WSL connectport=4173
```
Reemplaza 'LA_IP_DE_WSL' por la dirección IP que obtuviste en el paso anterior
> La IP de WSL puede cambiar cada vez que reinicias el entorno, por lo que podrías necesitar actualizar el reenvío cuando ello suceda.
5. Conseguir la IPv4 de Windows:
```cmd
ipconfig
```
6. Abre la IPv4 en tu celular:
En el navegador móvil, abre:

```
http://[tu-IPv4]:4173
```
(Reemplazar con la IP local real)


## Forzar PWA:

 Revisar manifest.webmanifest:
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
