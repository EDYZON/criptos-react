#Nombre del proyecto Criptos-React

#Clase 135-1 Creando el Proyecto y realizando algunos ajustes
-En esta clase se prepara el proyecto en la importación de las imagenes del proyecto, la importación de google fonts para su posterior uso

#Clase 136. ¿Que son los Styled Components
- En esta clase se aborda el tema de los style components, se realiza la instalacion de @emotion/react y @emotion/styled, se raliza la importación y se añade un primer style component h1 en app.jsx

#Clase 137.- Escribiendo el css de nuestro proyecto con Styled Components
En esta clase se añadieron modificaciones  alos styled components existentes y adecuaciones para centrar y encapsular los componentes principales de la app.

#Clase 138.- Creando el input del formulario
En esta clase se creo un nuevo compononente boton al cual se le añadio stiled component, posteriormente se hizo la importación en el componente app.

#Clase 139.- Primeros pasos para crear un custom hook
En esta clase se creo un costom hook(useSelectMonedas) para poder utilizarlo en el componente formulario.

#Clase 140.- Utilizando nuestro nuevo Hook
En esta clase empezamos a utilizar el hook creado previamente, se le añadio styled components y se hizo uso de este en el componente Formulario.

#Clase 141.- Pasando Opciones al Hook
En esta clase se creo un array de valores para el hook useSelect Monedas, se le paso a traves de props y se desplego haciendo uso del metodo map.

#Clase 142.- Styled components al Select
En esta clase se personaliza el select de monedas convirtiendolo en styled components y añadiendo mejoras visuales al botón submit.

#Clase 143.- Añadiendo State y retornando el Valor.
En esta clase a traves del hook use state se añadio un estado que se actualiza cada vez que se selecciona una opción pasandolo al componente Formulario.

#Clase 144.- Consultando un API.
En esta clase se realiza la importación del hook useEffect para realizar una petición a un endpoint API de criptomonedas, se procesa los resultados usando una función asincrona y se despliega el resultado en consola.

#Clase 145.- Formateando un array para pasarlo como opciones.
En esta clase se procesala información json proveniente del API, se extraen los valores necesarios mediante sus indices y se forma un nuevo objeto que contiene solo las variables que consume la aplicación.

#146.- Añadiendo varios Select con Opciones
En esta clase se realizo una instancia del customhook useSelectMonedas para pasarle el array de datos de criptomonedas provenientes del API, posteriormente se pinto en pantalla.

#147.- Validando el fomulario
En esta clase se añadio una validación que se dispara cuando la moneda y criptomonedas no haya sido seleccionada, el mensaje de error se formateo usando styles components y el mensaje de error se inserto en un componente por separado.

#Clase 148.- Detectando los valores de las monedas
En esta clase se realizo una refinación de la validación de campos, se hizo del hook useEffect

#Clase 149.- Consultando en la API las monedas a cotizar
En esta clase se programo la consulta dinamica al api de monedas pasandole parametros, posteriormente leyendo el resultado, recorriendolo para luego guardarlos en estados usando useState.

#Clase 150.- Mostrando el Resultado
En esta clase, se formateo el resultado proveniente del API, creando un componente llamado resultado, posteriormente importandolo en App que permite visualizar los resultados.