execute as @a[tag=FirstConnectionFall] if score @s FirstConnectionAccelerate matches 1 run function ragnamod_7:first_connection/accelerate
execute as @a[tag=FirstConnectionFall] if score @s FirstConnectionFall matches 1 run effect clear @s minecraft:slow_falling

effect give @a[tag=FirstConnectionFall] minecraft:night_vision 1000000 0 true
execute as @a[tag=FirstConnectionFall] if score @s FirstConnectionAccelerate matches 0 run effect give @s tombstone:feather_fall 1000000 0 true
execute as @a[tag=FirstConnectionFall] if score @s FirstConnectionFall matches 0 run effect give @s minecraft:slow_falling 1000000 0 true
effect give @a[tag=FirstConnectionFall] bloodmagic:soft_fall 1000000 100 true

kill @e[type=minecraft:item, nbt={ Item: { tag: { display: { Name: '{"translate":"ragnamod_7.first_connection.spawn_device","italic":false,"color":"#008000"}' } } } }]
give @a[tag=FirstConnectionFall, nbt=!{ Inventory: [ { id: "minecraft:spyglass" } ] }] minecraft:spyglass{ display: { Name: '{"translate":"ragnamod_7.first_connection.spawn_device","italic":false,"color":"#008000"}' } }

execute if entity @a[tag=FirstConnectionFall] run schedule function ragnamod_7:first_connection/fall 1t replace
