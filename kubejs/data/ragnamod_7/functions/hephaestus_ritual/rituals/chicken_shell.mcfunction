execute unless block ~ ~ ~ forbidden_arcanus:hephaestus_forge{ Items: [ { Slot: 4b, Count: 1b, id: "chickens:chicken_skin" } ] } run tag @s add RitualBroken

function ragnamod_7:hephaestus_ritual/items/reliquary_phoenix_down
function ragnamod_7:hephaestus_ritual/items/twilightforest_borer_essence
function ragnamod_7:hephaestus_ritual/items/create_sa_heap_of_experience
function ragnamod_7:hephaestus_ritual/items/gemsnjewels_spinel
function ragnamod_7:hephaestus_ritual/items/ars_nouveau_manipulation_essence
function ragnamod_7:hephaestus_ritual/items/botania_spark

execute store result score @s HephaestusCheckRitual if entity @e[type=minecraft:marker, tag=RitualChecker, distance=..3.1]
execute unless score @s HephaestusCheckRitual matches 6 run tag @s add RitualBroken
