execute unless block ~ ~ ~ forbidden_arcanus:hephaestus_forge{ Items: [ { Slot: 4b, Count: 1b, id: "forbidden_arcanus:arcane_crystal_block" } ] } run tag @s add RitualBroken

function ragnamod_7:hephaestus_ritual/items/minecraft_coal
function ragnamod_7:hephaestus_ritual/items/minecraft_blaze_powder
function ragnamod_7:hephaestus_ritual/items/minecraft_blaze_powder
function ragnamod_7:hephaestus_ritual/items/minecraft_blaze_powder
function ragnamod_7:hephaestus_ritual/items/minecraft_blaze_powder
function ragnamod_7:hephaestus_ritual/items/minecraft_coal

execute store result score @s HephaestusCheckRitual if entity @e[type=minecraft:marker, tag=RitualChecker, distance=..3.1]
execute unless score @s HephaestusCheckRitual matches 6 run tag @s add RitualBroken
