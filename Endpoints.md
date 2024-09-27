Endpoints de Autenticación

    POST /auth/register - Registro de nuevos usuarios
    POST /auth/login - Inicio de sesión de usuarios
    POST /auth/logout - Cierre de sesión de usuarios
    POST /auth/refresh-token - Renovación de tokens de acceso

Endpoints de Usuarios

    GET /users - Obtener todos los usuarios (solo administradores)
    GET /users/{id} - Obtener un usuario por ID (solo administradores)
    PUT /users/{id} - Actualizar un usuario por ID (solo administradores)
    DELETE /users/{id} - Eliminar un usuario por ID (solo administradores)
    GET /users/me - Obtener el usuario autenticado
    PUT /users/me - Actualizar el perfil del usuario autenticado

Endpoints de Productos

    GET /products - Obtener todos los productos
    GET /products/{id} - Obtener un producto por ID
    POST /products - Crear un nuevo producto (solo administradores)
    PUT /products/{id} - Actualizar un producto por ID (solo administradores)
    DELETE /products/{id} - Eliminar un producto por ID (solo administradores)

Endpoints de Carrito

    GET /carts - Obtener el carrito del usuario autenticado
    POST /carts - Agregar un producto al carrito del usuario autenticado
    PUT /carts/{id} - Actualizar un producto en el carrito del usuario autenticado
    DELETE /carts/{id} - Eliminar un producto del carrito del usuario autenticado
    POST /carts/checkout - Procesar el checkout del carrito del usuario autenticado

Endpoints de Órdenes

    GET /orders - Obtener todas las órdenes (solo administradores)
    GET /orders/{id} - Obtener una orden por ID (solo administradores)
    POST /orders - Crear una nueva orden para el usuario autenticado
    PUT /orders/{id} - Actualizar una orden por ID (solo administradores)
    DELETE /orders/{id} - Cancelar una orden por ID (solo administradores)

Endpoints de Reseñas

    GET /reviews - Obtener todas las reseñas
    GET /reviews/{id} - Obtener una reseña por ID
    POST /reviews - Crear una nueva reseña para un producto
    PUT /reviews/{id} - Actualizar una reseña por ID
    DELETE /reviews/{id} - Eliminar una reseña por ID
