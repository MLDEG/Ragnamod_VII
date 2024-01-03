execute unless block ~ ~ ~ forbidden_arcanus:hephaestus_forge{ Items: [ { Slot: 4b, Count: 1b, id: "hostilenetworks:machine_frame" } ] } run tag @s add RitualBroken

function ragnamod_7:hephaestus_ritual/items/hostilenetworks_overworld_prediction
function ragnamod_7:hephaestus_ritual/items/hostilenetworks_nether_prediction
function ragnamod_7:hephaestus_ritual/items/hostilenetworks_end_prediction
function ragnamod_7:hephaestus_ritual/items/hostilenetworks_twilight_prediction
function ragnamod_7:hephaestus_ritual/items/hostilenetworks_blueskies_prediction
function ragnamod_7:hephaestus_ritual/items/hostilenetworks_undergarden_prediction

execute store result score @s HephaestusCheckRitual if entity @e[type=minecraft:marker, tag=RitualChecker, distance=..3.1]
execute unless score @s HephaestusCheckRitual matches 6 run tag @s add RitualBroken
