execute unless block ~ ~ ~ forbidden_arcanus:hephaestus_forge{ Items: [ { Slot: 4b, Count: 1b, id: "minecraft:diamond" } ] } run tag @s add RitualBroken

function ragnamod_7:hephaestus_ritual/items/forbidden_arcanus_xpetrified_orb
function ragnamod_7:hephaestus_ritual/items/forbidden_arcanus_xpetrified_orb
function ragnamod_7:hephaestus_ritual/items/forbidden_arcanus_xpetrified_orb
function ragnamod_7:hephaestus_ritual/items/forbidden_arcanus_stellarite_piece

execute store result score @s HephaestusCheckRitual if entity @e[type=minecraft:marker, tag=RitualChecker, distance=..3.1]
execute unless score @s HephaestusCheckRitual matches 4 run tag @s add RitualBroken
