## CLAROVIDEO TEST

Esta es una prueba para la vacante Front-end developer para el proyecto de ClaroVideo

## DESCRIPCIÓN

Esta prueba consiste en replicar dos de las vistas actuales de claro video web, se necesitará revisar que endpoints se están consumiendo para traer la lista de películas disponibles y el detalle de la película seleccionada. 

## REQUERIMIENTOS TECNICOS GENERALES

<ul>
    <li>Se deberá usar react y react-redux.</li>
    <li>El desarrollo deberá incluir pruebas unitarias.</li>
    <li>Se deberá de subir la prueba a un repositorio publico.</li>
    <li>En el repositorio deberá existir un README con las instrucciones para levantar el proyecto y correr pruebas
unitarias.</li>
    <li>La aplicación deberá subirse a un hosting o nube.</li>
</ul>

## PASOS
<ol>
    <li>Creación de repositorio en Github</li>
    <li>Creación de proyecto react con redux</li>
    <li>Creación de pruebas unitarias</li>
    <li>Publicación en hosting</li>
</ol>

## PASOS PARA CORRER EL PROYECTO EN LOCAL

<ol>
    <li>Clonar el repositorio https://github.com/alcocoha/clarovideo-test.git</li>
    <li>Instalar el administrador de paquetes de Node.js instalando <a href="https://nodejs.org/es/" target="_blank">Node.js</a></li>
    <li>
        Instalar react con la siguiente instrucción
        <pre>npm install react</pre>
    </li>
    <li>Entrar a la carpeta del proyecto "clarovideo-test"</li>
    <li>
        Correr la aplicación con la siguiente instrucción
        <pre>npm start</pre>
    </li>
</ol>

## DEPENDENCIAS UTILIZADAS

<p>Instalar las siguientes dependencias:</p>

<p><strong>Axios</strong></p>
<p>Permite hacer conexiones HTTP externas</p>
<pre>npm install --save axios</pre>

<p><strong>Router dom</strong></p>
<p>Es un enrutador que permite reescriben secciones de una página en lugar de cargar páginas nuevas completas desde un servidor tipo SPA</p>
<pre>npm install --save react-router-dom</pre>

<p><strong>Redux</strong></p>
<p>Permite almacenar mi estado en un Store, este estado solo va a poder cambiar a través de acciones</p>
<pre>npm install --save redux</pre>

<p><strong>React-redux</strong></p>
<p>Permite almacenar mi estado en un Store, este estado solo va a poder cambiar a través de acciones</p>
<pre>npm install --save react-redux</pre>
<pre>
<i><small>IMPORTANTE: Estudiando un poco más sobre redux y react decidí instalar react-redux para optimizar la funcionalidad del proyecto</small></i>
</pre>

<p><strong>Redux-thunk</strong></p>
<p>Permite conectar con los action y en lugar de devolver un objeto devuelve una función con una acción asyncrona</p>
<pre>npm install --save redux-thunk</pre>

<p><strong>React tooltip</strong></p>
<p>Permite generar un tooltip dinamico</p>
<pre> npm install --save react-tooltip</pre>



## LIGA DEV

http://jorgehdev.esy.es/

## PRUEBAS UNITARIAS
<p>
Las pruebas unitarias se realizaron con Jest, un framework que se instala al momento de enviar la instrucción create-react-app.
</p>
<p>
Para correr las pruebas una vez instalado el proyecto se ejecuta la siguiente instrucción desde npm
</p>
<pre>npm test</pre>

## RESPONSIVE

DONE

## DATOS IMPORTANTES REDUX

<ol>
    <li>Store: Unica fuente de la verdad</li>
    <li>State: es de solo lectura</li>
    <li>Reducers: Los cambios se realizan unicamente con reducers(Funciones puras)</li>
</ol>