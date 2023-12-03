scoreboard players reset @s FirstConnectionDescend
scoreboard players reset @s FirstConnectionAccelerate
scoreboard players reset @s FirstConnectionFall

effect clear @s minecraft:night_vision
effect give @s minecraft:night_vision 5 0 true
effect clear @s tombstone:feather_fall
effect clear @s minecraft:slow_falling
effect give @s bloodmagic:soft_fall 1000000 255 true
clear @s minecraft:spyglass
tag @s remove FirstConnectionFall

execute unless data storage ragnamod_7:first_connection WorldSpawnSet run function ragnamod_7:first_connection/setspawn
tellraw @s { "translate": "ragnamod_7.first_connection.land", "with": [ { "text": "[", "color": "#00FFFF", "clickEvent": { "action": "run_command", "value": "/ftbquests open_book" }, "extra": [ { "keybind": "key.ftbquests.quests" }, { "text": "]" } ] } ], "color": "gold", "bold": true }
schedule function ragnamod_7:first_connection/clear_soft_fall 1s replace
