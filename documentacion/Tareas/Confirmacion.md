<<En las tareas tienes que definir el tiempo que te lleva cada una de ellas (hrs) y no la dificultad.>>

# Confirmacion

## Ruta de api para confirmar una recarga
Ruta que simplemente confirma que se realizara una recarga. Montada como
`/api/recarga/<id>/confirmar`

#### Detalles
- Responde con estado 404 si el id de la recarga no existe.

**Dificultad:** 1


## Reducer y acciones de Confirmacion
- Simplemente responde cuando el usuario confirma la recarga. Debe permitir
  reintentar si ocurre un error de red.
#### Detalles
- Acciones
  - *CONFIRM_REQUEST*: Indica que se envio una solicitud de confirmacion.
  - *CONFIRM_SUCCESS*: Indica que se confirmo exitosamente la recarga.
  - *CONFIRM_FAILURE*: Indica que hubo un error al confirmar.
  - *RETURN_TO_START*: Indica que se debe volver al inicio del sistema.
- El reducer debe reflejar los estados de la confirmacion y almacenar cuantas
  veces se ha reintentado.

**Dificultad:** 3


## Componente contenedor de confirmacion
Simplemente conecta los detalles de la recarga y el estado de la confirmación
con los componentes de presentacion

**Dificultad:** 1


## Componentes ded presentacion
Incluye un componente que despliega los datos de la recarga y un boton que
indique el estado de la confirmacion.

**Dificultad**: 2
