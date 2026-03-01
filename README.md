# Portfolio de Desarrollador Frontend

Un portfolio moderno y elegante construido con Astro y Tailwind CSS, diseñado específicamente para desarrolladores frontend. Cuenta con un diseño oscuro estilo Linear con acentos en verde y blanco.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia con estilo Linear dark theme
- **Responsive**: Optimizado para todos los dispositivos
- **Animaciones Suaves**: Transiciones y efectos visuales atractivos
- **Secciones Completas**: 
  - Presentación personal
  - Experiencia profesional con timeline
  - Proyectos destacados con imágenes
  - Formación académica y certificaciones
  - Formulario de contacto funcional
- **SEO Optimizado**: Metadatos y estructura semántica
- **Rendimiento**: Carga rápida y optimizada

## 🛠️ Tecnologías

- **Astro** - Framework web moderno
- **Tailwind CSS** - Framework de CSS utilitario
- **TypeScript** - Tipado estático
- **Responsive Design** - Diseño adaptable

## 🎨 Paleta de Colores

- **Fondo Principal**: Dark 950 (`#020617`)
- **Fondo Secundario**: Dark 900-800 (`#0f172a` - `#1e293b`)
- **Acentos**: Verde 400-600 (`#22c55e` - `#16a34a`)
- **Texto**: Blanco y grises
- **Bordes**: Verde con opacidad

## 📁 Estructura del Proyecto

```
src/
├── layouts/
│   └── Layout.astro          # Layout principal
├── components/
│   ├── Navigation.astro      # Barra de navegación
│   ├── Hero.astro            # Sección de presentación
│   ├── Experience.astro      # Timeline de experiencia
│   ├── Projects.astro        # Galería de proyectos
│   ├── Education.astro       # Formación y certificaciones
│   ├── Contact.astro         # Formulario de contacto
│   └── Footer.astro          # Pie de página
├── pages/
│   └── index.astro           # Página principal
└── styles/
    └── global.css            # Estilos globales
```

## 🚀 Instalación y Uso

1. **Clona o descarga el proyecto**
2. **Instala las dependencias**:
   ```bash
   npm install
   ```
3. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
4. **Construye para producción**:
   ```bash
   npm run build
   ```

## ✏️ Personalización

### Información Personal
Edita los siguientes archivos para personalizar con tu información:

- **Hero.astro**: Nombre, título, descripción personal
- **Experience.astro**: Historial laboral y experiencias
- **Projects.astro**: Tus proyectos destacados
- **Education.astro**: Formación académica y certificaciones
- **Contact.astro**: Información de contacto y redes sociales

### Estilos y Colores
- Modifica `tailwind.config.mjs` para cambiar la paleta de colores
- Ajusta las animaciones en los componentes individuales
- Personaliza el gradiente de fondo en `Layout.astro`

### Imágenes de Proyectos
Reemplaza los emojis en `Projects.astro` con imágenes reales:
```astro
<img src="/projects/proyecto1.jpg" alt="Proyecto 1" class="w-full h-full object-cover" />
```

## 📱 Características Responsive

- **Desktop**: Layout completo con sidebar y contenido principal
- **Tablet**: Diseño adaptativo con navegación colapsable
- **Mobile**: Stack vertical optimizado para pantallas pequeñas

## 🔧 Comandos Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Preview de la build
- `npm run astro` - Comandos CLI de Astro

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

---

**¡Personaliza este portfolio y hazlo tuyo!** 🚀