# miv-level-test-dev
Reto Técnico Mid Level INNPACTIA

# Debe tener instalado

Angular v12 en adelante

Node v15 en adelante

Npm v8.1.0

# Despliegue de la Base de datos

El codigo SQL de la base de datos se encuentra en el resposito, en la ruta: server -> src -> db -> sql.sql. 
Esta base de datos lleva por nombre 'phone_repair_shop'

## Uso de la base de datos

Se puede usar con un servidor local como 'Xampp', a traves de PhpMyAdmin, luego de que se haya leido el archivo sql.sql 
hay que buscar las credenciales de su servidor local como son el 'usuario', 'contraseña', 'database' y 'host'. Si se uso Xampp, 
por defecto son: 

usuario: 'root', contraseña: '' (vacio), host: 'localhost', database: 'phone_repair_shop' o algun otro nombre que le haya dado.

Si se utiliza otro servidor, debe buscar sus credenciales para poder configurar el proyecto con las mismas, para poder 
conectarse a la base de datos.

# Despligue del Backend

## Configuracion del Backend

Primero debe dirigirse al archivo en la ruta: server -> .env.example, crear un archivo en la misma ruta con el nombre '.env', 
copiar y pegar las variables y agregar sus valores, alli configurarlas con las credenciales del servidor donde subio la base de datos.

PORT=4000

HOST=

DATABASE=

USER=

PASSWORD=

Esta variable sera el dato secreto con el que encriptara el JsonWebToken, procure no compartirlo y no olvidarlo.

SECRET_JWT=

Por ultimo debe situarse en la carpeta 'server' de la aplicacion y ejecutar el comando 'npm run dev', esto desplegara un servidor local en el puerto 4000

# Despliegue del Frontend

Situarse en la carpeta APP de la aplicacion y ejecutar el comando 'ng serve', esto desplegara un servidor local en el puerto 4200

De esa manera podra usar la aplicacion a traves de localhost:4200. Siempre y cuando este probando la app en un entorno local.