spawnpoint @a ~ ~ ~ ~
setworldspawn ~ ~ ~
fill ~ ~ ~ ~ ~1 ~ air destroy
setblock ~ ~ ~ waystones:waystone[facing=south, half=lower]
setblock ~ ~1 ~ waystones:waystone[facing=south, half=upper]
execute store result storage ragnamod_7:first_connection WorldSpawnX int 1 run data get entity @s Pos[0] 1
execute store result storage ragnamod_7:first_connection WorldSpawnY int 1 run data get entity @s Pos[1] 1
execute store result storage ragnamod_7:first_connection WorldSpawnZ int 1 run data get entity @s Pos[2] 1
data modify storage ragnamod_7:first_connection WorldSpawnSet set value true
tellraw @a { "translate": "ragnamod_7.first_connection.spawn_set", "bold": true, "color": "#00FF00", "with": [ { "selector": "@s" }, { "nbt": "WorldSpawnX", "storage": "ragnamod_7:first_connection" }, { "nbt": "WorldSpawnY", "storage": "ragnamod_7:first_connection" }, { "nbt": "WorldSpawnZ", "storage": "ragnamod_7:first_connection" } ] }

summon minecraft:marker ~ ~ ~ { Tags: ["SpawnMarker"] }
execute as @e[tag=SpawnMarker] store result entity @s Pos[0] double 1 run data get storage ragnamod_7:first_connection WorldSpawnX 1
execute as @e[tag=SpawnMarker] store result entity @s Pos[1] double 1 run data get storage ragnamod_7:first_connection WorldSpawnY 1
execute as @e[tag=SpawnMarker] store result entity @s Pos[2] double 1 run data get storage ragnamod_7:first_connection WorldSpawnZ 1
execute as @e[tag=SpawnMarker] at @s run waypoint create Spawn twilightforest:twilight_forest ~ ~ ~ white @a true
execute at @e[tag=SpawnMarker] run tp @s ~0.5 ~2 ~0.5
kill @e[tag=SpawnMarker]
