# Inciar recarga

## Modelo de recarga
Implementar modelo en redis que represente una recarga.

#### Detalles
- Cada recarga debe tener un id unico.
- Almacenerara los detalles de la recarga:
  - Compañia
  - Numero de telefono
  - Cantidad

**Dificultad:** 2


## Ruta para recargas
Ruta en la ruta del api rest para manejar recargas. Montada en `/api/recarga`

#### Detalles
- Enviar los detalles de la recarga para ser validados.
- Responde con una confirmación si el sistema acepto la recarga.

**Dificultad:** 1


## Acciones y reducer para inciación de recarga
Acciones para controlar el flujo de iniciacion de una recarga. Contendra tres
acciones y un reducer que mantendra el estado de la recarga.

**Dificultad:** 3


## Acciones y reducer para formulario de recarga
Validador y reducer de redux-forms para almacenar los datos de la recarga.
#### Detalles
- Al enviar el formulario se lanzara una acción que enviara la recarga al api.

**Dificultad:** 3

## Componente contenedor de formulario de recarga
Componente que conecta los reducers de recarga con los componentes del
formulario.

**Dificultad** 1

## Componentes de presentacion del formulario
Componentes para mostrar el formulario de recargas.
