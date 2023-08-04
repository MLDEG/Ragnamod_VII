scoreboard objectives add FirstConnection dummy
execute store result score @s FirstConnection run data get entity @s playerGameType
execute unless score @s FirstConnection matches 1 unless score @s FirstConnection matches 3 run tag @s add FirstConnectionFall
execute unless score @s FirstConnection matches 0 unless score @s FirstConnection matches 2 run advancement grant @s only subathon:first_connection_land
scoreboard objectives remove FirstConnection
tp @s[tag=FirstConnectionFall] ~ 255 ~
execute if entity @s[tag=FirstConnectionFall] run schedule function subathon:first_connection_fall 1t replace
