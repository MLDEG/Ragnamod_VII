scoreboard players reset @s FirstConnectionDescend
scoreboard players enable @s FirstConnectionAccelerate
scoreboard players set @s FirstConnectionAccelerate 0

tag @s remove FirstConnectionSuspended
tag @s add FirstConnectionFall
tellraw @s { "text": "[", "extra": [ { "translate": "ragnamod_7.first_connection.accelerate" }, { "text": "]" } ], "bold": true, "color": "#FF8000", "clickEvent": { "action": "run_command", "value": "/trigger FirstConnectionAccelerate" } }
schedule function ragnamod_7:first_connection/fall 1t replace
