onEvent('recipes', e => {

  //Creative Tank Fluid Meka Reset
  e.shapeless('mekanism:creative_fluid_tank', 'mekanism:creative_fluid_tank')
  //Creative Tank Gaz Meka Reset
  e.shapeless('mekanism:creative_chemical_tank', 'mekanism:creative_chemical_tank')
  //Ice Shard
  e.shapeless('4x beyond_earth:ice_shard', 'minecraft:packed_ice')
  //Beyond Heart Cheese
  e.shapeless('beyond_earth:cheese', 'croptopia:cheese')
  //Silicon Block
  e.shapeless('9x ftbic:silicon', 'ftbic:silicon_block')
  e.shapeless('ftbic:silicon_block', '9x ftbic:silicon')
  //Cataclysm
  //Ignitium
  e.shapeless('9x cataclysm:ignitium_ingot', 'cataclysm:ignitium_block')
  //Ignitium
  e.shapeless('9x cataclysm:witherite_ingot', 'cataclysm:witherite_block')
  e.shapeless('cataclysm:witherite_block', '9x cataclysm:witherite_ingot')
  //Ignitium
  e.shapeless('9x cataclysm:enderite_ingot', 'cataclysm:enderite_block')
  e.shapeless('cataclysm:enderite_block', '9x cataclysm:enderite_ingot')
  //Stable Ingot
  e.shapeless('9x miniutilities:stable_ingot', 'miniutilities:stable_block')
  e.shapeless('miniutilities:stable_block', '9x miniutilities:stable_ingot')
  e.custom({ "type": "alchemistry:combiner", "group": "alchemistry:combiner", "input": [{ "ingredient": { "item": "chemlib:acetylsalicylic_acid" }, "count": 16 }, { "ingredient": { "item": "chemlib:mullite" }, "count": 8 }, { "ingredient": { "item": "miniutilities:unstable_ingot" }, "count": 1 }], "result": { "item": "miniutilities:stable_ingot" } })
  //Sculk Ingot
  e.shapeless('9x ragnamod_seven:sculk_ingot', 'ragnamod_seven:sculk_metal')
  e.shapeless('ragnamod_seven:sculk_metal', '9x ragnamod_seven:sculk_ingot')
  //Shub Niggurath Ingot
  e.shapeless('9x ragnamod_seven:shub_niggurath_ingot', 'ragnamod_seven:shub_niggurath_ingot_block')
  e.shapeless('ragnamod_seven:shub_niggurath_ingot_block', '9x ragnamod_seven:shub_niggurath_ingot')
  //Chemical Draconium
  e.shapeless('9x ragnamod_seven:chemical_draconium_nugget', 'ragnamod_seven:chemical_draconium_ingot')
  e.shapeless('ragnamod_seven:chemical_draconium_ingot', '9x ragnamod_seven:chemical_draconium_nugget')
  e.shapeless('9x ragnamod_seven:chemical_draconium_ingot', 'ragnamod_seven:chemical_draconium_block')
  e.shapeless('ragnamod_seven:chemical_draconium_block', '9x ragnamod_seven:chemical_draconium_ingot')
  //Unknown
  e.shapeless('9x ragnamod_seven:unknown_nugget', 'ragnamod_seven:unknown_ingot')
  e.shapeless('ragnamod_seven:unknown_ingot', '9x ragnamod_seven:unknown_nugget')
  e.shapeless('9x ragnamod_seven:unknown_ingot', 'ragnamod_seven:unknown_ingot_block')
  e.shapeless('ragnamod_seven:unknown_ingot_block', '9x ragnamod_seven:unknown_ingot')
  e.blasting('ragnamod_seven:unknown_ingot', 'ragnamod_seven:unknown_ore')
  e.smelting('ragnamod_seven:unknown_ingot', 'ragnamod_seven:unknown_ore')
  e.blasting('ragnamod_seven:unknown_ingot', 'ragnamod_seven:raw_unknown')
  e.smelting('ragnamod_seven:unknown_ingot', 'ragnamod_seven:raw_unknown')
  //Bright Opal
  e.blasting('gemsnjewels:opal', 'gemsnjewels:bright_opal_ore_block')
  e.smelting('gemsnjewels:opal', 'gemsnjewels:bright_opal_ore_block')
  /***************************Horsmen Stuff***************************/
  /***************************Death***************************/
  e.shapeless('9x ragnamod_seven:death_nugget', 'ragnamod_seven:death_ingot')
  e.shapeless('ragnamod_seven:death_ingot', '9x ragnamod_seven:death_nugget')
  e.shapeless('9x ragnamod_seven:death_ingot', 'ragnamod_seven:death_block')
  e.shapeless('ragnamod_seven:death_block', '9x ragnamod_seven:death_ingot')
  //Helmet
  e.shaped('ragnamod_seven:death_helmet', ['AAA', 'A A'], { A: 'ragnamod_seven:death_ingot' })
  //Chestplate
  e.shaped('ragnamod_seven:death_chestplate', ['A A', 'AAA', 'AAA'], { A: 'ragnamod_seven:death_ingot' })
  //Leggings
  e.shaped('ragnamod_seven:death_leggings', ['AAA', 'A A', 'A A'], { A: 'ragnamod_seven:death_ingot' })
  //Boots
  e.shaped('ragnamod_seven:death_boots', ['A A', 'A A'], { A: 'ragnamod_seven:death_ingot' })
  //Weapon
  e.shaped('ragnamod_seven:death_weapon', ['AA ', ' SA', 'S  '], { A: 'ragnamod_seven:death_ingot', S: 'minecraft:stick' })
  //Essence
  e.custom({ "type": "create:compacting", "ingredients": [{ "item": "ragnamod_seven:death_essence" }, { "item": "thermal:netherite_dust" }], "results": [{ "item": "ragnamod_seven:death_essence" }, { "item": "ragnamod_seven:death_essence_materialized" }], "heatRequirement": "superheated" })
  //Ingot
  e.custom({ "type": "evilcraft:blood_infuser", "item": "ragnamod_seven:death_essence_materialized", "fluid": { "fluid": "evilcraft:blood", "amount": 100000 }, "result": { "item": "ragnamod_seven:death_ingot" }, "duration": 1200, "xp": 20, "tier": 3 })
  /***************************War***************************/
  e.shapeless('9x ragnamod_seven:war_nugget', 'ragnamod_seven:war_ingot')
  e.shapeless('ragnamod_seven:war_ingot', '9x ragnamod_seven:war_nugget')
  e.shapeless('9x ragnamod_seven:war_ingot', 'ragnamod_seven:war_block')
  e.shapeless('ragnamod_seven:war_block', '9x ragnamod_seven:war_ingot')
  //Helmet
  e.shaped('ragnamod_seven:war_helmet', ['AAA', 'A A'], { A: 'ragnamod_seven:war_ingot' })
  //Chestplate
  e.shaped('ragnamod_seven:war_chestplate', ['A A', 'AAA', 'AAA'], { A: 'ragnamod_seven:war_ingot' })
  //Leggings
  e.shaped('ragnamod_seven:war_leggings', ['AAA', 'A A', 'A A'], { A: 'ragnamod_seven:war_ingot' })
  //Boots
  e.shaped('ragnamod_seven:war_boots', ['A A', 'A A'], { A: 'ragnamod_seven:war_ingot' })
  //Weapon
  e.shaped('ragnamod_seven:war_weapon', ['A A', 'ASA', ' S '], { A: 'ragnamod_seven:war_ingot', S: 'minecraft:stick' })
  //Essence
  e.custom({ "type": "create:compacting", "ingredients": [{ "item": "ragnamod_seven:war_essence" }, { "item": "thermal:netherite_dust" }], "results": [{ "item": "ragnamod_seven:war_essence" }, { "item": "ragnamod_seven:war_essence_materialized" }], "heatRequirement": "superheated" })
  //Ingot
  e.custom({ "type": "evilcraft:blood_infuser", "item": "ragnamod_seven:war_essence_materialized", "fluid": { "fluid": "evilcraft:blood", "amount": 100000 }, "result": { "item": "ragnamod_seven:war_ingot" }, "duration": 1200, "xp": 20, "tier": 3 })
  /***************************Conquest***************************/
  e.shapeless('9x ragnamod_seven:conquest_nugget', 'ragnamod_seven:conquest_ingot')
  e.shapeless('ragnamod_seven:conquest_ingot', '9x ragnamod_seven:conquest_nugget')
  e.shapeless('9x ragnamod_seven:conquest_ingot', 'ragnamod_seven:conquest_block')
  e.shapeless('ragnamod_seven:conquest_block', '9x ragnamod_seven:conquest_ingot')
  //Helmet
  e.shaped('ragnamod_seven:conquest_helmet', ['AAA', 'A A'], { A: 'ragnamod_seven:conquest_ingot' })
  //Chestplate
  e.shaped('ragnamod_seven:conquest_chestplate', ['A A', 'AAA', 'AAA'], { A: 'ragnamod_seven:conquest_ingot' })
  //Leggings
  e.shaped('ragnamod_seven:conquest_leggings', ['AAA', 'A A', 'A A'], { A: 'ragnamod_seven:conquest_ingot' })
  //Boots
  e.shaped('ragnamod_seven:conquest_boots', ['A A', 'A A'], { A: 'ragnamod_seven:conquest_ingot' })
  //Essence
  e.custom({ "type": "create:compacting", "ingredients": [{ "item": "ragnamod_seven:conquest_essence" }, { "item": "thermal:netherite_dust" }], "results": [{ "item": "ragnamod_seven:conquest_essence" }, { "item": "ragnamod_seven:conquest_essence_materialized" }], "heatRequirement": "superheated" })
  //Ingot
  e.custom({ "type": "evilcraft:blood_infuser", "item": "ragnamod_seven:conquest_essence_materialized", "fluid": { "fluid": "evilcraft:blood", "amount": 100000 }, "result": { "item": "ragnamod_seven:conquest_ingot" }, "duration": 1200, "xp": 20, "tier": 3 })
  /***************************Famine***************************/
  e.shapeless('9x ragnamod_seven:famine_nugget', 'ragnamod_seven:famine_ingot')
  e.shapeless('ragnamod_seven:famine_ingot', '9x ragnamod_seven:famine_nugget')
  e.shapeless('9x ragnamod_seven:famine_ingot', 'ragnamod_seven:famine_block')
  e.shapeless('ragnamod_seven:famine_block', '9x ragnamod_seven:famine_ingot')
  //Helmet
  e.shaped('ragnamod_seven:famine_helmet', ['AAA', 'A A'], { A: 'ragnamod_seven:famine_ingot' })
  //Chestplate
  e.shaped('ragnamod_seven:famine_chestplate', ['A A', 'AAA', 'AAA'], { A: 'ragnamod_seven:famine_ingot' })
  //Leggings
  e.shaped('ragnamod_seven:famine_leggings', ['AAA', 'A A', 'A A'], { A: 'ragnamod_seven:famine_ingot' })
  //Boots
  e.shaped('ragnamod_seven:famine_boots', ['A A', 'A A'], { A: 'ragnamod_seven:famine_ingot' })
  //Weapon
  e.shaped('ragnamod_seven:famine_weapon', ['A', 'A', 'S'], { A: 'ragnamod_seven:famine_ingot', S: 'minecraft:stick' })
  //Essence
  e.custom({ "type": "create:compacting", "ingredients": [{ "item": "ragnamod_seven:famine_essence" }, { "item": "thermal:netherite_dust" }], "results": [{ "item": "ragnamod_seven:famine_essence" }, { "item": "ragnamod_seven:famine_essence_materialized" }], "heatRequirement": "superheated" })
  //Ingot
  e.custom({ "type": "evilcraft:blood_infuser", "item": "ragnamod_seven:famine_essence_materialized", "fluid": { "fluid": "evilcraft:blood", "amount": 100000 }, "result": { "item": "ragnamod_seven:famine_ingot" }, "duration": 1200, "xp": 20, "tier": 3 })
  //Corundum Block
  //RED
  e.shapeless('quark:red_corundum', '4x quark:red_corundum_cluster')
  e.shapeless('4x quark:red_corundum_cluster', 'quark:red_corundum')
  //ORANGE
  e.shapeless('quark:orange_corundum', '4x quark:orange_corundum_cluster')
  e.shapeless('4x quark:orange_corundum_cluster', 'quark:orange_corundum')
  //YELLOW
  e.shapeless('quark:yellow_corundum', '4x quark:yellow_corundum_cluster')
  e.shapeless('4x quark:yellow_corundum_cluster', 'quark:yellow_corundum')
  //GREEN
  e.shapeless('quark:green_corundum', '4x quark:green_corundum_cluster')
  e.shapeless('4x quark:green_corundum_cluster', 'quark:green_corundum')
  //BLUE
  e.shapeless('quark:blue_corundum', '4x quark:blue_corundum_cluster')
  e.shapeless('4x quark:blue_corundum_cluster', 'quark:blue_corundum')
  //INDIGO
  e.shapeless('quark:indigo_corundum', '4x quark:indigo_corundum_cluster')
  e.shapeless('4x quark:indigo_corundum_cluster', 'quark:indigo_corundum')
  //VIOLET
  e.shapeless('quark:violet_corundum', '4x quark:violet_corundum_cluster')
  e.shapeless('4x quark:violet_corundum_cluster', 'quark:violet_corundum')
  //WHITE
  e.shapeless('quark:white_corundum', '4x quark:white_corundum_cluster')
  e.shapeless('4x quark:white_corundum_cluster', 'quark:white_corundum')
  //BLACK
  e.shapeless('quark:black_corundum', '4x quark:black_corundum_cluster')
  e.shapeless('4x quark:black_corundum_cluster', 'quark:black_corundum')
  //Nether Star Shard
  e.shapeless('minecraft:nether_star', '9x chickens:nether_star_shard')
  e.shapeless('9x chickens:nether_star_shard', 'minecraft:nether_star')
  //HOP Graphite Block
  e.shapeless('immersiveengineering:storage_hop_graphite', '9x immersiveengineering:ingot_hop_graphite')
  e.shapeless('9x immersiveengineering:ingot_hop_graphite', 'immersiveengineering:storage_hop_graphite')
  //Black Lotus
  e.shaped('botania:black_lotus', ['AAA', 'ASA', 'AAA'], {
    S: 'psi:cad_colorizer_purple',
    A: 'psi:ebony_substance'
  })
  //Void Stone
  e.shaped('8x cataclysm:void_stone', ['AAA', 'ASA', 'AAA'], {
    S: 'bloodmagic:reagentvoid',
    A: 'minecraft:redstone_block'
  })
  //Ender Stone
  e.shaped('8x cataclysm:ender_stone', ['AAA', 'ASA', 'AAA'], {
    S: 'botania:ender_air_bottle',
    A: 'cataclysm:void_stone'
  })
  //Oak Log
  e.shaped('16x minecraft:oak_log', ['AAA', '   ', '   '], {
    A: 'ragnamod_seven:log_egg_component'
  })
  //Spruce Log
  e.shaped('16x minecraft:spruce_log', ['  A', ' A ', 'A  '], {
    A: 'ragnamod_seven:log_egg_component'
  })
  //Birch Log
  e.shaped('16x minecraft:birch_log', ['A  ', ' A ', '  A'], {
    A: 'ragnamod_seven:log_egg_component'
  })
  //Jungle Log
  e.shaped('16x minecraft:jungle_log', [' A ', ' A ', ' A '], {
    A: 'ragnamod_seven:log_egg_component'
  })
  //Acacia Log
  e.shaped('16x minecraft:acacia_log', [' A ', 'A  ', ' A '], {
    A: 'ragnamod_seven:log_egg_component'
  })
  //Dark Oak Log
  e.shaped('16x minecraft:dark_oak_log', [' A ', '  A', ' A '], {
    A: 'ragnamod_seven:log_egg_component'
  })
  //Crimson Leg
  e.shaped('16x minecraft:crimson_stem', ['NA ', 'AA ', '   '], {
    A: 'ragnamod_seven:log_egg_component',
    N: 'minecraft:netherrack'
  })
  //Warped Leg
  e.shaped('16x minecraft:warped_stem', ['AN ', 'AA ', '   '], {
    A: 'ragnamod_seven:log_egg_component',
    N: 'minecraft:netherrack'
  })
  //Summoning Table
  e.shaped('summoningrituals:altar', ['ABA', 'CDC', 'DED'], {
    A: 'minecraft:candle',
    B: 'minecraft:wither_skeleton_skull',
    C: 'minecraft:gold_block',
    D: 'minecraft:red_carpet',
    E: 'immersiveengineering:craftingtable'
  })
  //Generalized Twilight Prediction
  e.shaped('hostilenetworks:twilight_prediction', [' A ', 'ABA', ' A '], {
    A: 'hostilenetworks:end_prediction',
    B: 'twilightforest:root'
  })
  //Generalized Undergarden Prediction
  e.shaped('hostilenetworks:undergarden_prediction', [' A ', 'ABA', ' A '], {
    A: 'hostilenetworks:twilight_prediction',
    B: 'undergarden:depthrock'
  })
  //Generalized Blueskies Prediction
  e.shaped('hostilenetworks:blueskies_prediction', [' A ', 'ABA', ' A '], {
    A: 'hostilenetworks:undergarden_prediction',
    B: 'blue_skies:turquoise_stone'
  })
  //Ghast Cow Star
  e.shaped('ragnamod_seven:ghast_cow_star', [' A ', 'ABA', ' A '], {
    A: 'ragnamod_seven:ghast_cow_tear',
    B: 'forbidden_arcanus:dark_nether_star'
  })
  //Blood Magic Ritual Stone
  function ritualStone(input, output, catalyst) { e.custom({ "type": "create:item_application", "ingredients": [{ "item": input }, { "item": catalyst }], "results": [{ "item": output }] }) }
  ritualStone('bloodmagic:ritualstone', 'bloodmagic:airritualstone', 'bloodmagic:airscribetool')
  ritualStone('bloodmagic:ritualstone', 'bloodmagic:waterritualstone', 'bloodmagic:firescribetool')
  ritualStone('bloodmagic:ritualstone', 'bloodmagic:fireritualstone', 'bloodmagic:waterscribetool')
  ritualStone('bloodmagic:ritualstone', 'bloodmagic:earthritualstone', 'bloodmagic:earthscribetool')
  ritualStone('bloodmagic:ritualstone', 'bloodmagic:duskritualstone', 'bloodmagic:duskscribetool')
  //Chemical Core
  e.custom({
    "type": "draconicevolution:fusion_crafting",
    "result": { "item": "ragnamod_seven:chemical_core" },
    "catalyst": { "item": "draconicevolution:chaotic_core" },
    "total_energy": 5120000000,
    "tier": "CHAOTIC",
    "ingredients": [
      { "item": "chemlib:francium_metal_block" },
      { "item": "chemlib:francium_metal_block" },
      { "item": "chemlib:francium_metal_block" },
      { "item": "chemlib:francium_metal_block" },
      { "item": "chemlib:francium_metal_block" },
      { "item": "chemlib:francium_metal_block" },
      { "item": "chemlib:francium_metal_block" },
      { "item": "chemlib:francium_metal_block" },
      { "item": "chemlib:francium_metal_block" },
      { "item": "chemlib:francium_metal_block" },
      { "item": "chemlib:francium_metal_block" },
      { "item": "chemlib:francium_metal_block" }
    ]
  })
  //Chemical Draconium Block
  e.custom({
    "type": "draconicevolution:fusion_crafting",
    "result": { "item": "ragnamod_seven:chemical_draconium_block", "count": 4 },
    "catalyst": {
      "count": 4,
      "items": [{ "item": "draconicevolution:awakened_draconium_block" }],
      "type": "draconicevolution:ingredient_stack"
    },
    "total_energy": 10240000000,
    "tier": "CHAOTIC",
    "ingredients": [
      { "item": "ragnamod_seven:chemical_core" },
      { "item": "ragnamod_seven:chemical_core" },
      { "item": "ragnamod_seven:chemical_core" },
      { "item": "ragnamod_seven:ghast_cow_star" },
      { "item": "ragnamod_seven:chemical_core" },
      { "item": "ragnamod_seven:chemical_core" },
      { "item": "ragnamod_seven:chemical_core" }
    ]
  })
  //Singularity Silent
  e.custom({
    "type": "architects_palette:warping",
    "ingredient": [{ "item": "warden_and_sculk:sculk_shrieker" }],
    "result": { "item": "ragnamod_seven:singularity_silent" },
    "dimension": "minecraft:the_nether"
  })

  //PSI Stabilizer
  e.custom({
    "type": "occultism:ritual",
    "ritual_type": "occultism:craft",
    "activation_item": { "item": "occultism:book_of_binding_bound_marid" },
    "pentacle_id": "occultism:craft_marid",
    "duration": 240,
    "ritual_dummy": { "item": "occultism:ritual_dummy/craft_stabilizer_tier4" },
    "ingredients": [
      { "item": "occultism:storage_stabilizer_tier4" },
      { "item": "psi:psigem_block" },
      { "item": "botania:gaia_head" },
      { "item": "forbidden_arcanus:arcane_crystal_obelisk" },
      { "item": "forbidden_arcanus:arcane_crystal_obelisk" }
    ],
    "result": { "item": "ragnamod_seven:psi_stabilizer" }
  })
  //Rune Forbidden Arcanus
  e.custom({
    "type": "create:deploying",
    "ingredients": [{ "item": "undergarden:depthrock_pebble" }, { "item": "ars_nouveau:glyph_rune" }],
    "results": [{ "item": "forbidden_arcanus:rune", "count": 1 }],
    "keepHeldItem": true
  })
  //Creative Tank Mekanism
  e.custom({
    "type": "create:deploying",
    "ingredients": [{ "item": "evilcraft:dark_tank" }, { "item": "create:creative_fluid_tank" }],
    "results": [{ "item": "mekanism:creative_fluid_tank", "count": 1 }],
    "keepHeldItem": true
  })
  //Creative Energy Cell Wormhole
  e.custom({
    "type": "create:deploying",
    "ingredients": [{ "item": "wormhole:advanced_energy_cell" }, { "item": "avaritia:infinity_ingot" }],
    "results": [{ "item": "wormhole:creative_energy_cell", "count": 1 }]
  })
})