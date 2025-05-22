# INFOSOC_2025-2
Repositorio para el desarrollo del proyecto de Infosoc

## Documentación para `progressive web app`:
* https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/
* https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps
* https://web.dev/learn/pwa
* https://www.geeksforgeeks.org/making-a-simple-pwa-under-5-minutes/
* https://www.youtube.com/watch?v=BByUknfLTuA

## Posibles tecnologías:
Sujeto a modificación en base a lo que se lea en la documentación

* HTML5
* CSS
* JavaScript
* GO
* Framework: Svelte
* BdD: a eleccion de doxter

---

# 🗺️ Roadmap PWA - sanAvisos

Una guía organizada para desarrollar funcionalidades clave y mejorar progresivamente la aplicación PWA de avisos universitarios.

## 🚀 MVP (Versión Mínima Viable)

- [x] Interfaz de botones circulares con iconos
- [x] Páginas básicas con rutas (`+page.svelte`)
- [x] Título dinámico por ruta
- [x] Estructura responsiva con Grid
- [x] Navegación entre vistas simples
- [ ] Detalle del aviso (al tocar un botón)

## 🔔 Funcionalidades Esenciales

- [ ] **Notificaciones push** con `vite-plugin-pwa`
- [ ] **Modo offline** (caching de avisos)
- [ ] Filtro por tipo de aviso (urgente, actividad, etc.)
- [ ] Fecha y hora en los avisos
- [ ] Avisos favoritos o marcados como importantes

## 🎨 Mejora de la Experiencia (UX/UI)

- [ ] Tema claro/oscuro con selector
- [ ] Adaptación completa a móviles pequeños
- [ ] Animaciones suaves entre vistas
- [ ] Indicador de nuevos avisos


## 🔐 Administración y Control

- [ ] Autenticación para rol "administrador"
- [ ] Panel de publicación de avisos
- [ ] Expiración automática de avisos antiguos
- [ ] Historial de avisos

## 🛠 Técnicas y optimización

- [ ] Guardar preferencias del usuario (localStorage)
- [ ] Lazy loading de componentes
- [ ] Accesibilidad básica (A11y)
- [ ] Validaciones de formulario

## 📈 Ideas futuras

- [ ] Estadísticas de clics o avisos más vistos
- [ ] Reportar aviso como incorrecto o spam
- [ ] Modo lectura rápida (solo resumen de avisos)

📁 **Archivos recomendados** para estructura modular:

```
src/
├── lib/
│   ├── Header.svelte
│   ├── components/
│   └── icons/
├── routes/
│   ├── +page.svelte
│   └── avisos/+page.svelte
└── static/
    └── img/
