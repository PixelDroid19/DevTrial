## Project Specifications

### 1- Crear una aplicación de presentación de diapositivas básica

- El componente 'Slides' toma una serie de diapositivas. Cada elemento de esta matriz denota una sola diapositiva y es un objeto con 2 propiedades: title y text.
- Al iniciar la aplicación, se debe renderizar la primera diapositiva.
- Al hacer clic en el botón "Sig." se muestra la siguiente diapositiva. Este botón está deshabilitado cuando la diapositiva actual es la última.
- Al hacer clic en el botón "Ant." se muestra la diapositiva anterior. Este botón está deshabilitado cuando la diapositiva actual es la primera.
- Al hacer clic en el botón "Reiniciar" se vuelve a la primera diapositiva. Este botón está deshabilitado cuando la diapositiva actual es la primera.
- Si no hay datos, mostrar un texto diciendo: "No hay datos".

### 2- Crear una aplicación básica de clasificación de artículos

- La lista de artículos se pasa al componente de la aplicación en forma de matriz de objetos.
- Cada artículo tiene las siguientes propiedades:A
  - title: El título del artículo [STRING]
  - upvotes: el número de votos a favor para un artículo [NUMBER]
  - date: La fecha de publicación del artículo en el formato AAAA-MM-DD [STRING]
  - specials(opcional): llega true si el articulo tiene descuento [booleano]

- De forma predeterminada, los artículos deben mostrarse en la tabla ordenados por el número de votos positivos en orden descendente.
- Al hacer clic en el botón "Más votados" se deben reordenar y mostrar los artículos por el número de votos a favor en orden descendente.
- Al hacer clic en el botón "Con descuento" se deben mostrar solo los articulos que tienen descuento.
- Solo algunos articulos tiene la propiedad specials.

### 3- Imagenes Random, Recupera un hecho aleatorio de gatos y muestra una imagen de un gato con la primera palabra

-Al darle clic en el botón 3, habilitar la vista '/point_three'. En esta se requiere la creación de un componente en el cual se muestre la frase y una imagen de un gato. Con el endpoint 'facts random', se obtiene el parámetro fact, que será la frase a mostrar y de la cual se debe extraer la primera palabra para enviarla al endpoint 'url Imagen random' y así obtener la URL de la imagen del gato a mostrar.

- Facts Random: <https://catfact.ninja/fact>
- url Imagen random : <https://cataas.com/cat/says/${PRIMERAPALABRA}?size=50&color=red&json=true>
- mostrar imagen random (src): <https://cataas.com${url>}
- documentacion: <https://cataas.com/#/>
