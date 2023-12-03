scoreboard players reset @s FirstConnectionAccelerate
scoreboard players set @s FirstConnectionAccelerate 2
scoreboard players enable @s FirstConnectionFall
scoreboard players set @s FirstConnectionFall 0

effect clear @s tombstone:feather_fall
tellraw @s { "text": "[", "extra": [ { "translate": "ragnamod_7.first_connection.fall" }, { "text": "]" } ], "bold": true, "color": "#FF0000", "clickEvent": { "action": "run_command", "value": "/trigger FirstConnectionFall" } }
