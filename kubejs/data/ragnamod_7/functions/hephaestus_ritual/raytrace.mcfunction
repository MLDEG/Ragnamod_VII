execute store result score PartMinX HephaestusRitual run data get entity @s Pos[0] 32
execute store result score PartMinY HephaestusRitual run data get entity @s Pos[1] 32
execute store result score PartMinZ HephaestusRitual run data get entity @s Pos[2] 32
execute store result score PartMaxX HephaestusRitual run data get entity @s Pos[0] 32
execute store result score PartMaxY HephaestusRitual run data get entity @s Pos[1] 32
execute store result score PartMaxZ HephaestusRitual run data get entity @s Pos[2] 32

# Upper part
scoreboard players remove PartMinX HephaestusRitual 16
scoreboard players remove PartMinZ HephaestusRitual 16
scoreboard players add PartMaxX HephaestusRitual 16
scoreboard players add PartMaxY HephaestusRitual 14
scoreboard players add PartMaxZ HephaestusRitual 16
function ragnamod_7:hephaestus_ritual/raytrace_part

# Lower foot
scoreboard players add PartMinX HephaestusRitual 2
scoreboard players remove PartMinY HephaestusRitual 16
scoreboard players add PartMinZ HephaestusRitual 2
scoreboard players remove PartMaxX HephaestusRitual 2
scoreboard players remove PartMaxY HephaestusRitual 24
scoreboard players remove PartMaxZ HephaestusRitual 2
execute unless entity @s[tag=ForgeFound] run function ragnamod_7:hephaestus_ritual/raytrace_part

# Inner foot
scoreboard players add PartMinX HephaestusRitual 2
scoreboard players add PartMinZ HephaestusRitual 2
scoreboard players remove PartMaxX HephaestusRitual 2
scoreboard players add PartMaxY HephaestusRitual 2
scoreboard players remove PartMaxZ HephaestusRitual 2
execute unless entity @s[tag=ForgeFound] run function ragnamod_7:hephaestus_ritual/raytrace_part

# Support
scoreboard players add PartMinX HephaestusRitual 4
scoreboard players add PartMinZ HephaestusRitual 4
scoreboard players remove PartMaxX HephaestusRitual 4
scoreboard players add PartMaxY HephaestusRitual 22
scoreboard players remove PartMaxZ HephaestusRitual 4
execute unless entity @s[tag=ForgeFound] run function ragnamod_7:hephaestus_ritual/raytrace_part

# NW corner
scoreboard players remove PartMinX HephaestusRitual 8
scoreboard players add PartMinY HephaestusRitual 16
scoreboard players add PartMinZ HephaestusRitual 8
scoreboard players remove PartMaxX HephaestusRitual 18
scoreboard players add PartMaxY HephaestusRitual 2
scoreboard players remove PartMaxZ HephaestusRitual 18
execute unless entity @s[tag=ForgeFound] run function ragnamod_7:hephaestus_ritual/raytrace_part

# NE corner
scoreboard players add PartMinX HephaestusRitual 26
scoreboard players add PartMaxX HephaestusRitual 26
execute unless entity @s[tag=ForgeFound] run function ragnamod_7:hephaestus_ritual/raytrace_part

# SE corner
scoreboard players add PartMinY HephaestusRitual 26
scoreboard players add PartMaxY HephaestusRitual 26
execute unless entity @s[tag=ForgeFound] run function ragnamod_7:hephaestus_ritual/raytrace_part

# SW corner
scoreboard players remove PartMinX HephaestusRitual 26
scoreboard players remove PartMaxX HephaestusRitual 26
execute unless entity @s[tag=ForgeFound] run function ragnamod_7:hephaestus_ritual/raytrace_part

execute unless entity @s[tag=ForgeFound] run tag @s add ForgeNotFound
