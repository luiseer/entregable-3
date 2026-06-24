# Rick & Morty — Explorador de Ubicaciones

App que consume la [Rick and Morty API](https://rickandmortyapi.com) para explorar ubicaciones del multiverso y sus residentes.

## Funcionalidad

- **Ubicación aleatoria** — Al cargar la página se muestra una ubicación al azar con residentes.
- **Buscar por nombre o ID** — Escribe el nombre de una dimensión (ej: Earth, Citadel) o un número del 1 al 126.
- **🎲 Botón Aleatorio** — Carga una ubicación distinta con personajes.
- **Cards de personajes** — Cada residente se muestra con imagen, nombre, estado (vivo/muerto/desconocido), especie y origen.
- **Paginación (20 por página)** — Las ubicaciones con muchos residentes cargan en bloques de 20, con botón "Mostrar más".
- **Detalle del personaje** — Click en cualquier card para ver información completa con efectos visuales y botón para volver.

## Stack

- **Vite** + **React 18** (createRoot)
- **Fetch nativa** (sin Axios)
- **CSS plano** con variables de diseño (dark mode, tokens globales)
- **Netlify** (despliegue)

## Scripts

```bash
npm run dev      # Entorno de desarrollo (localhost:5173)
npm run build    # Build para producción → dist/
npm run preview  # Previsualizar build localmente
```

## Estructura

```
src/
├── App.jsx                  # Componente principal (ruteo por estado)
├── main.jsx                 # Entry point (createRoot)
├── index.css                # Tokens, layout, componentes
├── components/
│   ├── SearchBox.jsx        # Buscador con label + botón aleatorio
│   ├── LocationInfo.jsx     # Pills con datos de la ubicación
│   ├── ResidentCard.jsx     # Card de personaje (click → detalle)
│   ├── ResidentGrid.jsx     # Grilla responsiva + paginación
│   └── CharacterDetail.jsx  # Vista detalle del personaje
├── hooks/
│   └── useLocation.js       # Hook: fetch, paginación, random
└── services/
    └── api.js               # Llamadas a la API con fetch nativo
```

## Diseño

- Fondo oscuro con imagen del portal a 15% de opacidad
- Tipografía: **Creepster** (títulos), **Inter** (cuerpo)
- Color accent: `#B0E812` (verde Rick & Morty)
- Cards con hover: scale + glow border verde
- Grilla responsive: 2 columnas móvil, 3 tablet, 4 desktop
- Esqueletos animados (pulse) mientras carga
