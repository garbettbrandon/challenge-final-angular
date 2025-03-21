# ChallengeFinalAngular

Este proyecto es una aplicación Angular que consume la API de iTunes para mostrar podcasts y episodios. Fue generado utilizando [Angular CLI](https://github.com/angular/angular-cli) versión 19.1.6.

## Características

- Listado de los podcasts más populares.
- Búsqueda de podcasts por nombre.
- Visualización de detalles de un podcast, incluyendo episodios.
- Reproducción de episodios de podcast.
- Diseño responsivo.

## Requisitos previos

- Node.js (versión 16 o superior).
- Angular CLI instalado globalmente: `npm install -g @angular/cli`.

## Servidor de desarrollo

Para iniciar un servidor de desarrollo local, ejecuta:

```bash
ng serve
```

Luego abre tu navegador y navega a `http://localhost:4200/`. La aplicación se recargará automáticamente al modificar los archivos fuente.


## Estructura del proyecto

```plaintext
src/
├── app/
│   ├── core/                # Componentes y servicios principales
│   ├── pages/               # Páginas principales de la aplicación
│   ├── shared/              # Componentes compartidos
├── environments/            # Configuraciones de entorno
├── styles.css               # Estilos globales
```

## API utilizada

Este proyecto utiliza la API de iTunes para obtener información sobre podcasts y episodios. La URL base de la API es:

```
https://itunes.apple.com
```

## Recursos adicionales

Para más información sobre Angular CLI, incluyendo referencias detalladas de comandos, visita la [documentación oficial de Angular CLI](https://angular.dev/tools/cli).

## Licencia

Este proyecto está bajo la licencia MIT.
