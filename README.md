# 🚀 PalmiSoft - Sitio Web Corporativo

![PalmiSoft](https://img.shields.io/badge/PalmiSoft-Soluciones%20Tecnológicas-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

Sitio web corporativo moderno y profesional para **PalmiSoft**, empresa especializada en desarrollo de software a la medida, automatización y soluciones tecnológicas en Palmira, Colombia.

## 📋 Contenido

- [Características](#-características)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Instalación Local](#-instalación-local)
- [Despliegue en GitHub Pages](#-despliegue-en-github-pages)
- [Personalización](#-personalización)
- [SEO y Optimización](#-seo-y-optimización)
- [Soporte y Contacto](#-soporte-y-contacto)

## ✨ Características

- ✅ **Diseño Responsive**: Perfecto en desktop, tablet y móvil
- ✅ **Interfaz Moderna**: UI/UX profesional con paleta corporativa
- ✅ **Animaciones Suaves**: Transiciones y efectos visuales discretos
- ✅ **Formulario de Contacto**: Con validación completa en frontend
- ✅ **SEO Optimizado**: Meta tags, headings semánticos y estructura clara
- ✅ **Carga Rápida**: Sin dependencias pesadas, solo HTML, CSS y JS puro
- ✅ **Accesibilidad**: Navegación por teclado y etiquetas ARIA
- ✅ **Política de Privacidad**: Cumplimiento con normativas colombianas

## 📁 Estructura del Proyecto

```
PalmiSoft/
│
├── index.html              # Página principal (landing page)
├── contacto.html           # Página de contacto con formulario
├── privacidad.html         # Política de privacidad y tratamiento de datos
│
├── css/
│   └── styles.css          # Estilos CSS completos
│
├── js/
│   └── script.js           # JavaScript para interactividad
│
├── images/                 # Carpeta para imágenes (actualmente vacía)
│
└── README.md               # Este archivo
```

## 🛠 Tecnologías Utilizadas

- **HTML5**: Estructura semántica moderna
- **CSS3**: Flexbox, Grid, Variables CSS, Animaciones
- **JavaScript (Vanilla)**: Sin frameworks, código puro y optimizado
- **Font Awesome 6.4**: Iconos profesionales
- **Google Fonts**: Tipografía web de calidad

## 💻 Instalación Local

### Opción 1: Abrir directamente
Simplemente abre el archivo `index.html` en tu navegador preferido.

### Opción 2: Servidor local (recomendado)

**Con Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Con Node.js (http-server):**
```bash
npx http-server -p 8000
```

**Con PHP:**
```bash
php -S localhost:8000
```

**Con Visual Studio Code:**
Instala la extensión "Live Server" y haz clic derecho en `index.html` → "Open with Live Server"

Luego visita: `http://localhost:8000`

## 🌐 Despliegue en GitHub Pages

### Paso 1: Crear Repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Clic en **"New Repository"** (botón verde "+")
3. Nombre del repositorio: `palmisoft-website` (o el que prefieras)
4. Marca como **Público**
5. Clic en **"Create repository"**

### Paso 2: Subir el Código

**Opción A - Interfaz Web de GitHub:**

1. En tu nuevo repositorio, clic en **"Upload files"**
2. Arrastra todos los archivos de la carpeta PalmiSoft
3. Escribe un mensaje de commit: "Initial commit - PalmiSoft website"
4. Clic en **"Commit changes"**

**Opción B - Línea de Comandos (Git):**

```bash
# Navega a la carpeta del proyecto
cd c:\Desarrollo\Fuentes\PalmiSoft

# Inicializa Git (si aún no está inicializado)
git init

# Añade todos los archivos
git add .

# Haz el primer commit
git commit -m "Initial commit - PalmiSoft website"

# Conecta con tu repositorio de GitHub (reemplaza TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/palmisoft-website.git

# Sube los cambios
git branch -M main
git push -u origin main
```

### Paso 3: Activar GitHub Pages

1. En tu repositorio de GitHub, ve a **Settings** (Configuración)
2. En el menú lateral, clic en **Pages**
3. En **"Source"**, selecciona **"Deploy from a branch"**
4. En **"Branch"**, selecciona **main** y carpeta **/ (root)**
5. Clic en **"Save"**
6. Espera 1-2 minutos

¡Tu sitio estará disponible en: `https://TU-USUARIO.github.io/palmisoft-website/`

### Paso 4: Configurar Dominio Personalizado (Opcional)

Si tienes un dominio propio:

1. En la configuración de GitHub Pages, ingresa tu dominio en **"Custom domain"**
2. En tu proveedor de dominio, configura un registro DNS:
   - Tipo: **CNAME**
   - Host: **www** (o @)
   - Valor: **TU-USUARIO.github.io**
3. Espera la propagación DNS (puede tomar 24-48 horas)

## 🎨 Personalización

### Colores
Edita las variables CSS en [css/styles.css](css/styles.css#L14-L23):

```css
:root {
    --primary-color: #2563eb;      /* Azul principal */
    --primary-dark: #1e40af;       /* Azul oscuro */
    --secondary-color: #64748b;    /* Gris */
    /* ... más colores */
}
```

### Contenido de Texto
- **Página Principal**: Edita [index.html](index.html)
- **Contacto**: Edita [contacto.html](contacto.html)
- **Privacidad**: Edita [privacidad.html](privacidad.html)

### Imágenes
Coloca tus imágenes en la carpeta `images/` y actualiza las referencias en el HTML.

### Redes Sociales
Actualiza los enlaces en el footer de cada página HTML:

```html
<div class="social-links">
    <a href="https://linkedin.com/company/palmisoft" class="social-link">
        <i class="fab fa-linkedin"></i>
    </a>
    <!-- Añade tus enlaces reales -->
</div>
```

## 🔍 SEO y Optimización

### Características SEO Implementadas:
- ✅ Meta tags descriptivos
- ✅ Estructura de headings semántica (H1, H2, H3)
- ✅ URLs amigables
- ✅ Tiempos de carga optimizados
- ✅ Diseño mobile-first
- ✅ Schema.org ready (puedes añadir JSON-LD)

### Mejoras Adicionales Recomendadas:

**1. Google Analytics**
Añade antes de `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**2. Google Search Console**
- Registra tu sitio en [Google Search Console](https://search.google.com/search-console/)
- Envía el sitemap (crea un archivo `sitemap.xml`)

**3. Favicon**
Añade en el `<head>`:
```html
<link rel="icon" type="image/png" href="images/favicon.png">
```

## 📱 Funcionalidades del Formulario

El formulario de contacto incluye:
- ✅ Validación en tiempo real
- ✅ Mensajes de error descriptivos
- ✅ Confirmación visual de envío
- ✅ Campos requeridos marcados
- ✅ Formato de email y teléfono validado

**Nota**: Actualmente el formulario NO envía datos a un servidor (solo simula el envío). Para implementar envío real:

**Opción 1 - Formspree (Gratuito):**
```html
<form action="https://formspree.io/f/TU-ID" method="POST">
    <!-- campos del formulario -->
</form>
```

**Opción 2 - EmailJS (Gratuito):**
Integra el servicio EmailJS en [script.js](js/script.js)

**Opción 3 - Backend propio:**
Crea un endpoint en Node.js, PHP, Python, etc.

## 📄 Licencia y Uso

Este proyecto fue desarrollado específicamente para **PalmiSoft**. 

- ✅ Uso libre para PalmiSoft
- ⚠️ No redistribuir sin autorización
- 📧 Contacto: rojan11@gmail.com

## 🤝 Soporte y Contacto

**PalmiSoft**
- 📍 Carrera 28C # 4B - 20, Palmira, Valle del Cauca, Colombia
- 📞 +57 317 318 4631
- 📧 rojan11@gmail.com
- 🆔 NIT: 1112956985-1

---

## 🚀 Próximos Pasos Recomendados

1. ✅ **Subir a GitHub** y activar GitHub Pages
2. 📝 **Añadir contenido**: Imágenes de proyectos, testimonios
3. 🎥 **Video corporativo**: Embeber video en hero section
4. 📊 **Google Analytics**: Monitorear tráfico
5. 💬 **Chat en vivo**: Integrar WhatsApp Business o Tawk.to
6. 🔄 **Integración con CRM**: Conectar formulario con sistema de gestión
7. 🌍 **Dominio personalizado**: Comprar y configurar (ej: palmisoft.com.co)
8. 📱 **PWA**: Convertir en Progressive Web App
9. 🎯 **Blog**: Añadir sección de noticias/artículos técnicos
10. 🔒 **HTTPS**: GitHub Pages lo activa automáticamente

---

**Desarrollado con ❤️ para PalmiSoft**

*Última actualización: Enero 2026*
