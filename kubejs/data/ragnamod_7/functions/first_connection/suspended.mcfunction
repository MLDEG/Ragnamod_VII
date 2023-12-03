execute as @a[tag=FirstConnectionSuspended] if score @s FirstConnectionDescend matches 1 run function ragnamod_7:first_connection/startfall
execute as @a[tag=FirstConnectionSuspended] if predicate ragnamod_7:first_connection/suspended run tellraw @s { "text": "[", "extra": [ { "translate": "ragnamod_7.first_connection.descend" }, { "text": "]" } ], "bold": true, "color": "#008000", "clickEvent": { "action": "run_command", "value": "/trigger FirstConnectionDescend" } }

execute as @a[tag=FirstConnectionSuspended] if predicate ragnamod_7:first_connection/suspended run effect give @a[tag=FirstConnectionSuspended] minecraft:night_vision 1000000 0 true
effect give @a[tag=FirstConnectionSuspended] tombstone:feather_fall 1000000 0 true
effect give @a[tag=FirstConnectionSuspended] minecraft:slow_falling 1000000 0 true
effect give @a[tag=FirstConnectionSuspended] bloodmagic:soft_fall 1000000 100 true

execute at @p[tag=FirstConnectionSuspended] run summon minecraft:marker ~ ~ ~ { Tags: ["FirstConnectionSuspendMarker"] }
execute as @e[tag=FirstConnectionSuspendMarker] store result entity @s Pos[0] double 1 run data get storage ragnamod_7:first_connection WorldSpawnX 1
data modify entity @e[tag=FirstConnectionSuspendMarker, limit=1] Pos[1] set value 255.5
execute as @e[tag=FirstConnectionSuspendMarker] store result entity @s Pos[2] double 1 run data get storage ragnamod_7:first_connection WorldSpawnZ 1
execute at @e[tag=FirstConnectionSuspendMarker] run tp @a[tag=FirstConnectionSuspended] ~0.5 ~ ~0.5
kill @e[tag=FirstConnectionSuspendMarker]

kill @e[type=minecraft:item, nbt={ Item: { tag: { display: { Name: '{"translate":"ragnamod_7.first_connection.spawn_device","italic":false,"color":"#008000"}' } } } }]
give @a[tag=FirstConnectionSuspended, nbt=!{ Inventory: [ { id: "minecraft:spyglass" } ] }] minecraft:spyglass{ display: { Name: '{"translate":"ragnamod_7.first_connection.spawn_device","italic":false,"color":"#008000"}' } }

execute if entity @p[tag=FirstConnectionSuspended] run schedule function ragnamod_7:first_connection/suspended 1t replace
