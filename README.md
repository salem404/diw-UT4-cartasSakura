# Sakura Cards

- [ ] Documentar código
- [x] Descargar otras versiones del logo
- [x] Dos formas de incluir CSS directamente y la recomendación de su uso
- [ ] Mixings con cosas repetidas
- [ ] Transiciones elementos con distintos eventos
  - [x] Botones
  - [ ] Cartas arriba :hover
  - [ ] Like btn :checked
- [x] Buscador flotante
- [ ] carrousel alas flotantes
- [ ] Bajar brightness a group
- [ ] Recordario del modo

## Incluir CSS

De forma directa css se puede incluir con la etiqueta `<style>` de dos formas:

1. En cada una de las etiquetas se le aplican sus estilos.

   ```html
   <h1 style="color:blue; font-size:14px;">Título azul</h1>
   <h1 style="color:red; font-size:16px;">Título rojo</h1>
   ```

2. Al principio del documento en `<head>`.

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

Para facilitar la lectura y entendimiento del código usamos la metodologia BEM (Block Element Modifier). El CSS será estucturado nombrando cada clase por el bloque en el que está, el elemento y, si fuera el caso, los modificadores. Así al mirar a un elemento sabremos directamente todos esos datos y podremos aprovechar el código.
Además junto a SCSS podemos simplificar aún más con formaciones como esta:

```scss
.header {
  //Propiedades del header
  &__btn {
    //Propiedades de botones del header (header__btn)
    &_access {
      /*
      Propiedades de botones access en el header 
      (header__btn_access)
      */
    }
  }
}
```

## Cambios en el diseño vs prototipado

- [ ] Explicacion de cambios vs guia de estilos
- Intercambio de colores principal y secundario en modo noche para mejorar la visibilidad.
- La desaparición de las flechas en el footer del listado viene dado por la falta de necesidad de esta. El listado no es tan largo como para necesitar varias páginas.
- Añadido de una página secreta para cumplir el RA3e de video al pulsar ¿? en la página 404.
- Añadido de sombra en algunos botones que faltaban.
- Añadida una sombra por encima del footer para diferenciarlo mejor en las páginas de formulario y darle profundidad.

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
