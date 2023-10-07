scoreboard objectives add FirstConnectionFall dummy
execute as @a[tag=FirstConnectionFall] store result score @s FirstConnectionFall run data get entity @s OnGround
execute as @a[tag=FirstConnectionFall] if score @s FirstConnectionFall matches 0 run effect give @s minecraft:slow_falling 10 0 true
scoreboard objectives remove FirstConnectionFall
execute if entity @a[tag=FirstConnectionFall] run schedule function ragnamod_7:first_connection_fall 1s replace
