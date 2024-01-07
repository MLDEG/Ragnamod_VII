execute unless block ~ ~ ~ forbidden_arcanus:hephaestus_forge{ Items: [ { Slot: 4b, Count: 1b, id: "miniutilities:stable_ingot" } ] } run tag @s add RitualBroken

function ragnamod_7:hephaestus_ritual/items/cataclysm_ignitium_ingot
function ragnamod_7:hephaestus_ritual/items/ragnamod_seven_shub_niggurath_ingot
function ragnamod_7:hephaestus_ritual/items/ragnamod_seven_sculk_ingot
function ragnamod_7:hephaestus_ritual/items/ragnamod_seven_chemical_draconium_ingot
function ragnamod_7:hephaestus_ritual/items/cataclysm_enderite_ingot
function ragnamod_7:hephaestus_ritual/items/cataclysm_witherite_ingot

execute store result score @s HephaestusCheckRitual if entity @e[type=minecraft:marker, tag=RitualChecker, distance=..3.1]
execute unless score @s HephaestusCheckRitual matches 6 run tag @s add RitualBroken
