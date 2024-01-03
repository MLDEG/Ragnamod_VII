advancement revoke @s only ragnamod_7:hephaestus_ritual_started
tag @s add ForgeClicker
scoreboard objectives add HephaestusRitual dummy
scoreboard players set 1000 HephaestusRitual 1000

execute anchored eyes positioned ^ ^ ^ facing entity @s eyes run summon minecraft:marker ~ ~ ~ { Tags: ["HephaestusRitual", "ForgeSearch", "ForgePos"] }
execute as @e[type=minecraft:marker, tag=ForgePos] at @s store result score EyesX HephaestusRitual run data get entity @s Pos[0] 32
execute as @e[type=minecraft:marker, tag=ForgePos] at @s store result score EyesY HephaestusRitual run data get entity @s Pos[1] 32
execute as @e[type=minecraft:marker, tag=ForgePos] at @s store result score EyesZ HephaestusRitual run data get entity @s Pos[2] 32

execute as @e[type=minecraft:marker, tag=ForgePos] at @s run tp ^ ^ ^-20
execute as @e[type=minecraft:marker, tag=ForgePos] at @s store result score RangeX HephaestusRitual run data get entity @s Pos[0] 32
execute as @e[type=minecraft:marker, tag=ForgePos] at @s store result score RangeY HephaestusRitual run data get entity @s Pos[1] 32
execute as @e[type=minecraft:marker, tag=ForgePos] at @s store result score RangeZ HephaestusRitual run data get entity @s Pos[2] 32

scoreboard players operation LengthX HephaestusRitual = RangeX HephaestusRitual
scoreboard players operation LengthY HephaestusRitual = RangeY HephaestusRitual
scoreboard players operation LengthZ HephaestusRitual = RangeZ HephaestusRitual
scoreboard players operation LengthX HephaestusRitual -= EyesX HephaestusRitual
scoreboard players operation LengthY HephaestusRitual -= EyesY HephaestusRitual
scoreboard players operation LengthZ HephaestusRitual -= EyesZ HephaestusRitual

execute anchored eyes positioned ^ ^ ^1 run function ragnamod_7:hephaestus_ritual/find_forge

tag @e[type=minecraft:marker, tag=ForgeSearch, tag=ForgeFound] remove ForgeSearch
kill @e[type=minecraft:marker, tag=ForgeSearch]
tag @s remove ForgeClicker
scoreboard objectives remove HephaestusRitual

execute if entity @e[type=minecraft:marker, tag=ForgeFound, distance=..25] run schedule function ragnamod_7:hephaestus_ritual/check_rituals 1 replace
