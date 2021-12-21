#Objetivo:
Definir una API para gestionar nuestro equipo Pokémon

#Acciones:
- Identificarnos
- Añadir pokemon a nuestro equipo
- Eliminar pokémon de nuestro equipo
- Consultar información de nuestro equipo
- Intercambiar el orden de nuestros pokémon


#REST design:
- Añadir Pokémon: POST /team/pokemons
- Consultar nuestro Equipo: GET /team
- Eliminar Pokémon: DELETE /team/pokemons/:id
- Intercambiar el orden de nuestros pokémon: PUT /team
- Sistema de credenciales