# Login

## Modelo de tienda
Crear modelo de la tienda para la base de datos.

#### Detalles
- Escribir una clase de javascript que represente las tiendas en redis.
- Debe contener al menos la clave y nombre de la tienda.

**Dificultad:** 3

## Ruta de api
Escribir el controlador para la ruta del api rest para autenticarse.

#### Detalles
- Debe aceptar la clave de la tienda en el cuerpo de la petición.
- Si la clave es correcta, regresa un JWT valido.
- Responde con un estado 400 en otro caso.

**Dificultad:** 2


## Middleware de autenticacion
Implementar el middleware de express que permita bloquear el acceso a ciertas
rutas del api.

#### Detalles
- Revisa un JWT en el cuerpo de la peticion.
  - Llama a la siguiente funcion en la cadena si el token es vólido.
  - Responde con un estado 403 si no lo es.

**Dificultad:** 2


## Acciones y reducer de autenticación
Reducer y acciones de redux que almacene el estado de autenticacion.

#### Detalles
- Acciones
  - *TOKEN_FETCHING*: Indica que se esta solicitando un token.
  - *TOKEN_RECEIVED*: Incluye un token en el cuerpo.
  - *TOKEN_INVALIDADO*: Indica que el token almacenado ya no es válido.
- El reductor simplemente almacena el token enviado en la acción
  *TOKEN_RECEIVED*
- Tambien implementar un selector que regrese el estado de la session.

**Dificultad:** 2


## Reducer y acciones del formulario de autenticación y su validacion
Agregar el formulario con el campo para la clave a un reducer de redux-forms

#### Detalles
- La unica validacion es que la clave debe tener exactamente 6 caracteres
- El reducer sera el proveido por redux-forms.
- Cuando se envie el formulario se lanzara una accion *TOKEN_FETCHING*

**Dificultad:** 5


## Contenedor del login
Implementar componente contenedor para el formulario del login.

**Dificultad:** 1

## Componentes presentacionales del login
Implementar componentes de presentacion para el formulario de login.

**Dificultad:** 1
