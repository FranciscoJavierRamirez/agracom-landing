# Configuración de GitHub Pages para Agracom Landing

Este documento explica cómo configurar y desplegar la página web de Agracom Internacional S.A. en GitHub Pages.

## Archivos Creados

### 1. `.github/workflows/deploy.yml`
Workflow de GitHub Actions que automáticamente:
- Se ejecuta cuando se hace push a la rama `main`
- Instala las dependencias del proyecto
- Construye el sitio web con Astro
- Despliega a GitHub Pages

### 2. Configuración actualizada en `astro.config.mjs`
- **Desarrollo local**: Funciona normalmente sin prefijos
- **GitHub Pages**: Usa configuración condicional basada en `process.env.CI`

## Pasos para Configurar GitHub Pages

### 1. Actualizar la URL en `astro.config.mjs`
En la línea 9, reemplaza `YOUR_USERNAME` con tu nombre de usuario de GitHub:

```javascript
site: process.env.CI ? 'https://TU_USUARIO_GITHUB.github.io' : 'http://localhost:4321',
```

### 2. Configurar GitHub Pages en tu repositorio
1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, busca **Pages**
4. En **Source**, selecciona **GitHub Actions**

### 3. Hacer push de los cambios
```bash
git add .
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

### 4. Verificar el despliegue
1. Ve a la pestaña **Actions** en tu repositorio
2. Verifica que el workflow se ejecute exitosamente
3. Una vez completado, tu sitio estará disponible en: `https://TU_USUARIO_GITHUB.github.io/agracom-landing`

## Configuración Técnica

### Variables de Entorno
- **`process.env.CI`**: Detecta automáticamente si se está ejecutando en GitHub Actions
- **`import.meta.env.BASE_URL`**: Astro proporciona la URL base correcta

### Rutas de Assets
Se ha añadido una función `getAssetURL()` en `src/utils/i18n.ts` que maneja automáticamente las rutas de imágenes y assets públicos para que funcionen tanto en desarrollo como en producción.

## Uso Local vs Producción

### Desarrollo Local
```bash
npm run dev
# El sitio se ejecuta en http://localhost:4321
# Las imágenes se cargan desde /images/
```

### GitHub Pages
```bash
# Automáticamente en GitHub Actions
# El sitio se despliega en https://usuario.github.io/agracom-landing
# Las imágenes se cargan desde /agracom-landing/images/
```

## Dominios Personalizados (Opcional)

Si quieres usar tu propio dominio:

1. Crea un archivo `public/CNAME` con tu dominio:
```
www.tudominio.com
```

2. Actualiza `astro.config.mjs`:
```javascript
site: 'https://www.tudominio.com',
base: undefined,
```

3. Configura los DNS de tu dominio para apuntar a GitHub Pages

## Troubleshooting

### Error 404 en imágenes
- Verifica que las rutas en `astro.config.mjs` estén correctas
- Asegúrate de que el nombre del repositorio coincida con el `base` configurado

### Workflow falla
- Verifica que GitHub Pages esté habilitado en la configuración del repositorio
- Revisa los logs en la pestaña Actions para más detalles

### Cambios no se reflejan
- Los cambios pueden tardar unos minutos en propagarse
- Verifica que el workflow se haya ejecutado correctamente
- Limpia la caché del navegador

## Mantenimiento

- El sitio se actualiza automáticamente con cada push a `main`
- Los builds antiguos se almacenan en GitHub Actions por 90 días
- Puedes ejecutar deployments manuales desde la pestaña Actions

## Recursos Adicionales

- [Documentación de Astro](https://docs.astro.build/en/guides/deploy/github/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
