scoreboard objectives add FirstConnectionDescend trigger "First connection - Start descent"
scoreboard objectives add FirstConnectionAccelerate trigger "First connection - Accelerate descent"
scoreboard objectives add FirstConnectionFall trigger "First connection - Finish falling"
scoreboard players enable @s FirstConnectionDescend
scoreboard players set @s FirstConnectionDescend 0

execute unless data storage ragnamod_7:first_connection WorldSpawnX store result storage ragnamod_7:first_connection WorldSpawnX int 1 run data get entity @s Pos[0] 1
execute unless data storage ragnamod_7:first_connection WorldSpawnY store result storage ragnamod_7:first_connection WorldSpawnY int 1 run data get entity @s Pos[1] 1
execute unless data storage ragnamod_7:first_connection WorldSpawnZ store result storage ragnamod_7:first_connection WorldSpawnZ int 1 run data get entity @s Pos[2] 1

scoreboard objectives add FirstConnection dummy
execute store result score @s FirstConnection run data get entity @s playerGameType
execute unless score @s FirstConnection matches 1 unless score @s FirstConnection matches 3 run tag @s add FirstConnectionSuspended
execute unless score @s FirstConnection matches 0 unless score @s FirstConnection matches 2 run advancement grant @s only ragnamod_7:first_connection/land
scoreboard objectives remove FirstConnection

execute if entity @s[tag=FirstConnectionSuspended] at @s run summon minecraft:marker ~ ~ ~ { Tags: ["SpawnMarker"] }
execute as @e[tag=SpawnMarker] store result entity @s Pos[0] double 1 run data get storage ragnamod_7:first_connection WorldSpawnX 1
execute as @e[tag=SpawnMarker] store result entity @s Pos[1] double 1 run data get storage ragnamod_7:first_connection WorldSpawnY 1
execute as @e[tag=SpawnMarker] store result entity @s Pos[2] double 1 run data get storage ragnamod_7:first_connection WorldSpawnZ 1
execute if data storage ragnamod_7:first_connection WorldSpawnSet at @e[tag=SpawnMarker] run waypoint create Spawn twilightforest:twilight_forest ~ ~ ~ white @s[tag=FirstConnectionSuspended] true
kill @e[tag=SpawnMarker]

tellraw @s { "translate": "ragnamod_7.first_connection.welcome_1", "bold": true }
tellraw @s[tag=FirstConnectionSuspended] { "translate": "ragnamod_7.first_connection.welcome_2", "with": [ { "text": "[", "extra": [ { "keybind": "key.journeymap.map_toggle_alt" }, { "text": "]" } ], "color": "#00FFFF" } ] }
tellraw @s[tag=FirstConnectionSuspended] { "translate": "ragnamod_7.first_connection.welcome_3" }
tellraw @s[tag=FirstConnectionSuspended] { "text": "[", "extra": [ { "translate": "ragnamod_7.first_connection.descend" }, { "text": "]" } ], "bold": true, "color": "#008000", "clickEvent": { "action": "run_command", "value": "/trigger FirstConnectionDescend" } }

effect give @s[tag=FirstConnectionSuspended] minecraft:night_vision 1000000 0 true
execute if entity @s[tag=FirstConnectionSuspended] run function ragnamod_7:first_connection/suspended
