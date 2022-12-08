# Sakura Cards

- [ ] Documentar código
- [ ] Descargar otras versiones del logo
- [x] Dos formas de incluir CSS directamente y la recomendación de su uso
- [ ] Mixings con cosas repetidas
- [ ] Transiciones elementos con distintos eventos

## Incluir CSS

De forma directa css se puede incluir con la etiqueta `<style>` de dos formas:

1. En cada una de las etiquetas se le aplican sus estilos

   ```html
   <h1 style="color:blue; font-size:14px;">Título azul</h1>
   <h1 style="color:red; font-size:16px;">Título rojo</h1>
   ```

2. Al principio del documento en `<head>`

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <style>
         h1 {
           color: blue;
           font-size: 14px;
         }
       </style>
     </head>
     <body>
       <h1>Título azul</h1>
     </body>
   </html>
   ```

En ambos casos la reutilización del código es limitada, en el primer caso para solo un `<h1>` y en el segundo solo para los de la misma página. Por esto lo más recomendable es integrar css mediante la etiqueta `<link>` en el `<head>` del documento, siendo el código css universal para todas las página en las que lo usemos.

```html
<head>
  <link rel="stylesheet" href="/src/assets/sass/main.scss" />
</head>
```

## Metodología BEM

- [ ] BEM metodologia usada explicar porque y cambiar variables

## Cambios en el diseño vs prototipado

- [ ] Explicacion de cambios vs guia de estilos
- La desaparición de las flechas en el footer del listado viene dado por la falta de necesidad de esta. El listado no es tan largo como para necesitar varias páginas.
- Añadido de una página secreta para cumplir el RA3e de video al pulsar ¿? en la página 404

### Página de inicio

- Añadido de música de fondo para cumplir el RA3e de audio

### Flujo de registro y Acceso del usuario

### Listado de productos

### Vista de producto

### Página de contacto

### Página 404

### Página de perfil de usuario

## Validación de código css

- [ ] Validación del código
