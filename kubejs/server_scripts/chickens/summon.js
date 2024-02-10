// priority: 1

onEvent('recipes', e => {

    function summonChicken(input1, input2, output) {
        e.custom({ "type": "spirit:soul_transmutation", "entityInput": "minecraft:chicken", "consumesActivator": true, "itemInputs": [{ "item": "chickens:chicken_shell" }, { "item": input1 }, { "item": input1 }, { "item": input1 }, { "item": input2 }, { "item": input1 }, { "item": input1 }, { "item": input1 }], "entityOutput": "chickens:" + output + "_chicken", "duration": 100, "shouldSummonMob": true })
        e.custom({
            "type": "custommachinery:custom_machine",
            "machine": "ragnamod_7:soul_pedestal",
            "time": 0,
            "requirements": [
                { "type": "custommachinery:item", "mode": "input", "item": "chickens:chicken_shell", "amount": 1 },
                { "type": "custommachinery:item", "mode": "input", "item": input1, "amount": 1 },
                { "type": "custommachinery:item", "mode": "input", "item": input1, "amount": 1 },
                { "type": "custommachinery:item", "mode": "input", "item": input1, "amount": 1 },
                { "type": "custommachinery:item", "mode": "input", "item": input2, "amount": 1 },
                { "type": "custommachinery:item", "mode": "input", "item": input1, "amount": 1 },
                { "type": "custommachinery:item", "mode": "input", "item": input1, "amount": 1 },
                { "type": "custommachinery:item", "mode": "input", "item": input1, "amount": 1 },
                { "type": "custommachinery:item", "mode": "input", "slot": "input9", "item": "chickens:soul_chicken", "amount": 1 },
                { "type": "custommachinery:item", "mode": "output", "item": "chickens:chicken_item", "nbt": "{ChickenType:{id:'chickens:" + output + "_chicken'}}", "amount": 1 }
            ]
        })

    }

    //Chibee
    e.custom({ "type": "spirit:soul_transmutation", "entityInput": "minecraft:bee", "consumesActivator": true, "itemInputs": [{ "item": "chickens:chicken_shell" }, { "item": "minecraft:beehive" }, { "item": "minecraft:bee_nest" }, { "item": "minecraft:beehive" }, { "item": "minecraft:honeycomb_block" }, { "item": "minecraft:beehive" }, { "item": "minecraft:bee_nest" }, { "item": "minecraft:beehive" }], "entityOutput": "chickens:chibee_chicken", "duration": 100, "shouldSummonMob": true })
    e.custom({
        "type": "custommachinery:custom_machine",
        "machine": "ragnamod_7:soul_pedestal",
        "time": 0,
        "requirements": [
            { "type": "custommachinery:item", "mode": "input", "item": "chickens:chicken_shell", "amount": 1 },
            { "type": "custommachinery:item", "mode": "input", "item": 'minecraft:beehive', "amount": 1 },
            { "type": "custommachinery:item", "mode": "input", "item": 'minecraft:bee_nest', "amount": 1 },
            { "type": "custommachinery:item", "mode": "input", "item": 'minecraft:beehive', "amount": 1 },
            { "type": "custommachinery:item", "mode": "input", "item": 'minecraft:honeycomb_block', "amount": 1 },
            { "type": "custommachinery:item", "mode": "input", "item": 'minecraft:beehive', "amount": 1 },
            { "type": "custommachinery:item", "mode": "input", "item": 'minecraft:bee_nest', "amount": 1 },
            { "type": "custommachinery:item", "mode": "input", "item": 'minecraft:beehive', "amount": 1 },
            { "type": "custommachinery:item", "mode": "input", "slot": "input9", "item": "chickens:soul_bee", "amount": 1 },
            { "type": "custommachinery:item", "mode": "output", "item": "chickens:chicken_item", "nbt": "{ChickenType:{id:\"chickens:chibee_chicken\"}}", "amount": 1 }
        ]
    })
    //Holy Chicken
    e.custom({ "type": "spirit:soul_transmutation", "entityInput": "minecraft:chicken", "consumesActivator": true, "itemInputs": [{ "item": "chickens:chicken_shell" }, { "item": "croptopia:lemon" }, { "item": "croptopia:coconut" }, { "item": "croptopia:strawberry" }, { "item": "croptopia:grapefruit" }, { "item": "croptopia:kiwi" }, { "item": "croptopia:mango" }, { "item": "croptopia:blueberry" }], "entityOutput": "chickens:holy_chicken", "duration": 100, "shouldSummonMob": true })
    e.custom({
        "type": "custommachinery:custom_machine",
        "machine": "ragnamod_7:soul_pedestal",
        "time": 0,
        "requirements": [
            { "type": "custommachinery:item", "mode": "input", "item": "chickens:chicken_shell", "amount": 1 },
            { "type": "custommachinery:item", "mode": "input", "item": 'croptopia:lemon', "amount": 1 },
            { "type": "custommachinery:item", "mode": "input", "item": 'croptopia:coconut', "amount": 1 },
            { "type": "custommachinery:item", "mode": "input", "item": 'croptopia:strawberry', "amount": 1 },
            { "type": "custommachinery:item", "mode": "input", "item": 'croptopia:grapefruit', "amount": 1 },
            { "type": "custommachinery:item", "mode": "input", "item": 'croptopia:kiwi', "amount": 1 },
            { "type": "custommachinery:item", "mode": "input", "item": 'croptopia:mango', "amount": 1 },
            { "type": "custommachinery:item", "mode": "input", "item": 'croptopia:blueberry', "amount": 1 },
            { "type": "custommachinery:item", "mode": "input", "slot": "input9", "item": "chickens:soul_chicken", "amount": 1 },
            { "type": "custommachinery:item", "mode": "output", "item": "chickens:chicken_item", "nbt": "{ChickenType:{id:\"chickens:holy_chicken\"}}", "amount": 1 }
        ]
    })
    //Plastic Bertrand
    e.custom({ "type": "spirit:soul_transmutation", "entityInput": "minecraft:chicken", "consumesActivator": true, "itemInputs": [{ "item": "chickens:chicken_shell" }, { "item": "pneumaticcraft:plastic_brick_red" }, { "item": "pneumaticcraft:plastic_brick_orange" }, { "item": "pneumaticcraft:plastic_brick_yellow" }, { "item": "pneumaticcraft:plastic_brick_green" }, { "item": "pneumaticcraft:plastic_brick_blue" }, { "item": "pneumaticcraft:plastic_brick_purple" }, { "item": "pneumaticcraft:plastic_brick_pink" }], "entityOutput": "chickens:plastic_chicken", "duration": 100, "shouldSummonMob": true })
    e.custom({
        "type": "custommachinery:custom_machine",
        "machine": "ragnamod_7:soul_pedestal",
        "time": 0,
        "requirements": [
            { "type": "custommachinery:item", "mode": "input", "item": "chickens:chicken_shell", "amount": 1 },
            { "type": "custommachinery:item", "mode": "input", "item": 'pneumaticcraft:plastic_brick_red', "amount": 1 },
            { "type": "custommachinery:item", "mode": "input", "item": 'pneumaticcraft:plastic_brick_orange', "amount": 1 },
            { "type": "custommachinery:item", "mode": "input", "item": 'pneumaticcraft:plastic_brick_yellow', "amount": 1 },
            { "type": "custommachinery:item", "mode": "input", "item": 'pneumaticcraft:plastic_brick_green', "amount": 1 },
            { "type": "custommachinery:item", "mode": "input", "item": 'pneumaticcraft:plastic_brick_blue', "amount": 1 },
            { "type": "custommachinery:item", "mode": "input", "item": 'pneumaticcraft:plastic_brick_purple', "amount": 1 },
            { "type": "custommachinery:item", "mode": "input", "item": 'pneumaticcraft:plastic_brick_pink', "amount": 1 },
            { "type": "custommachinery:item", "mode": "input", "slot": "input9", "item": "chickens:soul_chicken", "amount": 1 },
            { "type": "custommachinery:item", "mode": "output", "item": "chickens:chicken_item", "nbt": "{ChickenType:{id:\"chickens:plastic_chicken\"}}", "amount": 1 }
        ]
    })

    summonChicken('tinkers_reforged:duralumin_ingot', 'tinkers_reforged:duralumin_block', 'duralumin')
    summonChicken('tinkers_reforged:qivium_ingot', 'tinkers_reforged:qivium_block', 'qivium')
    summonChicken('minecraft:dirt', 'compressium:dirt_1', 'dirt')
    summonChicken('powah:crystal_spirited', 'powah:spirited_crystal_block', 'spirited_crystal')
    summonChicken('byg:ametrine_gems', 'byg:ametrine_block', 'ametrine')
    summonChicken('thermal:lead_ingot', 'thermal:lead_block', 'lead')
    summonChicken('tconstruct:slimesteel_ingot', 'tconstruct:slimesteel_block', 'slimesteel')
    summonChicken('thermal:lumium_ingot', 'thermal:lumium_block', 'lumium')
    summonChicken('byg:pendorite_ingot', 'byg:pendorite_block', 'pendorite')
    summonChicken('minecraft:snowball', 'minecraft:snow_block', 'snowball')
    summonChicken('create:brass_ingot', 'create:brass_block', 'brass')
    summonChicken('create:zinc_ingot', 'create:zinc_block', 'zinc')
    summonChicken('minecraft:lapis_lazuli', 'minecraft:lapis_block', 'lapis_lazuli')
    summonChicken('tinkers_reforged:felsteel_ingot', 'tinkers_reforged:felsteel_block', 'felsteel')
    summonChicken('minecraft:glass_pane', 'minecraft:glass', 'glass')
    summonChicken('beyond_earth:calorite_ingot', 'beyond_earth:calorite_block', 'calorite')
    summonChicken('beyond_earth:ostrum_ingot', 'beyond_earth:ostrum_block', 'ostrum')
    summonChicken('minecraft:ghast_tear', 'reliquary:catalyzing_gland', 'ghast')
    summonChicken('tinkers_reforged:crusteel_ingot', 'tinkers_reforged:crusteel_block', 'crusteel')
    summonChicken('tinkers_reforged:wavy_ingot', 'tinkers_reforged:wavy_block', 'wavy')
    summonChicken('forbidden_arcanus:arcane_gold_ingot', 'forbidden_arcanus:arcane_gold_block', 'arcane_gold')
    summonChicken('minecraft:gunpowder', 'reliquary:catalyzing_gland', 'gunpowder')
    summonChicken('tconstruct:amethyst_bronze_ingot', 'tconstruct:amethyst_bronze_block', 'amethyst_bronze')
    summonChicken('botania:terrasteel_ingot', 'botania:terrasteel_block', 'terrasteel')
    summonChicken('immersiveengineering:ingot_hop_graphite', 'immersiveengineering:storage_hop_graphite', 'hop')
    summonChicken('ftbic:energy_crystal', 'ftbic:energy_crystal', 'energy_crystal')
    summonChicken('mekanism:ingot_uranium', 'mekanism:block_uranium', 'uranium')
    summonChicken('tinkers_reforged:electrical_copper_ingot', 'tinkers_reforged:electrical_copper_block', 'electrical_copper')
    summonChicken('minecraft:obsidian', 'minecraft:crying_obsidian', 'obsidian')
    summonChicken('powah:steel_energized', 'powah:energized_steel_block', 'steel_energized')
    summonChicken('minecraft:glowstone_dust', 'minecraft:glowstone', 'glowstone')
    summonChicken('minecraft:quartz', 'minecraft:quartz_block', 'quartz')
    summonChicken('minecraft:gravel', 'compressium:gravel_1', 'gravel')
    summonChicken('powah:crystal_blazing', 'powah:blazing_crystal_block', 'blazing_crystal')
    summonChicken('undergarden:cloggrum_ingot', 'undergarden:cloggrum_block', 'cloggrum')
    summonChicken('tconstruct:hepatizon_ingot', 'tconstruct:hepatizon_block', 'hepatizon')
    summonChicken('minecraft:oak_log', 'minecraft:oak_log', 'log')
    summonChicken('tinkers_reforged:lavium_ingot', 'tinkers_reforged:lavium_block', 'lavium')
    summonChicken('ae2:certus_quartz_dust', 'ae2:certus_quartz_crystal', 'certus_quartz')
    summonChicken('mekanism:ingot_refined_obsidian', 'mekanism:block_refined_obsidian', 'refined_obsidian')
    summonChicken('mekanism:ingot_refined_glowstone', 'mekanism:block_refined_glowstone', 'refined_glowstone')
    summonChicken('twilightforest:fiery_ingot', 'twilightforest:fiery_block', 'fiery')
    summonChicken('mekanism:ingot_osmium', 'mekanism:block_osmium', 'osmium')
    summonChicken('undergarden:utherium_crystal', 'undergarden:utherium_block', 'utheric')
    summonChicken('minecraft:emerald', 'minecraft:emerald_block', 'emerald')
    summonChicken('materialis:fairy_ingot', 'materialis:fairy_block', 'fairy')
    summonChicken('undergarden:forgotten_ingot', 'undergarden:forgotten_block', 'forgotten')
    summonChicken('tconstruct:rose_gold_ingot', 'tconstruct:rose_gold_block', 'rose_gold')
    summonChicken('thermal:silver_ingot', 'thermal:silver_block', 'silver')
    summonChicken('minecraft:sand', 'compressium:sand_1', 'sand')
    summonChicken('beyond_earth:steel_ingot', 'beyond_earth:steel_block', 'steel')
    summonChicken('pneumaticcraft:ingot_iron_compressed', 'pneumaticcraft:compressed_iron_block', 'iron_compressed')
    summonChicken('powah:uraninite', 'powah:uraninite_block', 'uraninite')
    summonChicken('minecraft:prismarine_crystals', 'minecraft:sea_lantern', 'pcrystal')
    summonChicken('botania:elementium_ingot', 'botania:elementium_block', 'elementium')
    summonChicken('botania:manasteel_ingot', 'botania:manasteel_block', 'manasteel')
    summonChicken('ars_nouveau:source_gem', 'ars_nouveau:source_gem_block', 'source_gem')
    summonChicken('blue_skies:aquite', 'blue_skies:aquite_block', 'aquite')
    summonChicken('minecraft:string', 'minecraft:cobweb', 'string')
    summonChicken('tinkers_reforged:gausum_ingot', 'tinkers_reforged:gausum_block', 'gausum')
    summonChicken('thermal:bronze_ingot', 'thermal:bronze_block', 'bronze')
    summonChicken('thermal:invar_ingot', 'thermal:invar_block', 'invar')
    summonChicken('blue_skies:charoite', 'blue_skies:charoite_block', 'charoite')
    summonChicken('minecraft:coal', 'minecraft:coal_block', 'coal')
    summonChicken('minecraft:nether_wart', 'minecraft:nether_wart_block', 'netherwart')
    summonChicken('minecraft:ender_pearl', 'architects_palette:ender_pearl_block', 'ender')
    summonChicken('byg:emeraldite_shards', 'byg:emeraldite_shards', 'emeraldite')
    summonChicken('ftbic:rubber', 'ftbic:rubber', 'rubber')
    summonChicken('powah:crystal_niotic', 'powah:niotic_crystal_block', 'niotic_crystal')
    summonChicken('tinkers_reforged:yokel_ingot', 'tinkers_reforged:yokel_block', 'yokel')
    summonChicken('blue_skies:ventium_ingot', 'blue_skies:ventium_block', 'ventium')
    summonChicken('twilightforest:steeleaf_ingot', 'twilightforest:steeleaf_block', 'steeleaf')
    summonChicken('thermal:constantan_ingot', 'thermal:constantan_block', 'constantan')
    summonChicken('minecraft:nether_star', 'miniutilities:nether_star_opinium_core', 'nether_star')
    summonChicken('minecraft:blaze_rod', 'botania:blaze_block', 'blaze')
    summonChicken('minecraft:amethyst_shard', 'minecraft:amethyst_block', 'amethyst_shard')
    summonChicken('undergarden:froststeel_ingot', 'undergarden:froststeel_block', 'froststeel')
    summonChicken('blue_skies:falsite_ingot', 'blue_skies:falsite_block', 'falsite')
    summonChicken('thermal:nickel_ingot', 'thermal:nickel_block', 'nickel')
    summonChicken('tinkers_reforged:durasteel_ingot', 'tinkers_reforged:durasteel_block', 'durasteel')
    summonChicken('minecraft:soul_sand', 'compressium:soulsand_1', 'soulsand')
    summonChicken('tconstruct:pig_iron_ingot', 'tconstruct:pig_iron_block', 'pig_iron')
    summonChicken('beyond_earth:desh_ingot', 'beyond_earth:desh_block', 'desh')
    summonChicken('tinkers_reforged:aluminum_ingot', 'tinkers_reforged:aluminum_block', 'bauxite')
    summonChicken('minecraft:bone', 'minecraft:bone_block', 'bone')
    summonChicken('powah:crystal_nitro', 'powah:nitro_crystal_block', 'nitro_crystal')
    summonChicken('evilcraft:dark_gem', 'evilcraft:dark_block', 'dark_gem')
    summonChicken('blue_skies:horizonite_ingot', 'blue_skies:horizonite_block', 'horizonite')
    summonChicken('minecraft:copper_ingot', 'minecraft:copper_block', 'copper')
    summonChicken('minecraft:cobblestone', 'compressium:cobblestone_1', 'rocky')
    summonChicken('forbidden_arcanus:arcane_crystal', 'forbidden_arcanus:arcane_crystal_block', 'arcane_crystal')
    summonChicken('thermal:electrum_ingot', 'thermal:electrum_block', 'electrum')
    summonChicken('minecraft:prismarine_shard', 'minecraft:prismarine', 'pshard')
    summonChicken('ftbic:iridium_ingot', 'ftbic:iridium_block', 'iridium')
    summonChicken('tconstruct:queens_slime_ingot', 'tconstruct:queens_slime_block', 'queens_slime')
    summonChicken('tinkers_reforged:chorus_metal_ingot', 'tinkers_reforged:chorus_metal_block', 'chorus_metal')
    summonChicken('thermal:tin_ingot', 'thermal:tin_block', 'tin')
    summonChicken('ftbic:silicon', 'ftbic:silicon_block', 'silicon')
    summonChicken('mythicbotany:alfsteel_ingot', 'mythicbotany:alfsteel_block', 'alfsteel')
    summonChicken('minecraft:redstone', 'minecraft:redstone_block', 'redstone')
    summonChicken('tconstruct:manyullyn_ingot', 'tconstruct:manyullyn_block', 'manyullyn')
    summonChicken('minecraft:slime_ball', 'minecraft:slime_block', 'slime')
    summonChicken('minecraft:netherite_scrap', 'minecraft:ancient_debris', 'netherite_scrap')
    summonChicken('thermal:signalum_ingot', 'thermal:signalum_block', 'signalum')
    summonChicken('tconstruct:cobalt_ingot', 'tconstruct:cobalt_block', 'cobalt')
    summonChicken('twilightforest:knightmetal_ingot', 'twilightforest:knightmetal_block', 'knightmetal')
    summonChicken('twilightforest:ironwood_ingot', 'twilightforest:ironwood_block', 'ironwood')
    summonChicken('minecraft:gold_ingot', 'minecraft:gold_block', 'gold')
    summonChicken('tinkers_reforged:kepu_ingot', 'tinkers_reforged:kepu_block', 'kepu')
    summonChicken('minecraft:iron_ingot', 'minecraft:iron_block', 'iron')
    summonChicken('minecraft:clay_ball', 'minecraft:clay', 'clay')
    summonChicken('ae2:fluix_dust', 'ae2:fluix_crystal', 'fluix')
    summonChicken('minecraft:diamond', 'minecraft:diamond_block', 'diamond')
    summonChicken('thermal:enderium_ingot', 'thermal:enderium_block', 'enderium')
    summonChicken('tinkers_reforged:hureaulite_gem', 'tinkers_reforged:hureaulite_block', 'hureaulite')
    summonChicken('tinkers_reforged:red_beryl_gem', 'tinkers_reforged:red_beryl_block', 'red_beryl')
    summonChicken('tinkers_reforged:galu_ingot', 'tinkers_reforged:galu_block', 'galu')
    summonChicken('tinkers_reforged:epidote_gem', 'tinkers_reforged:epidote_block', 'epidote')
    summonChicken('tinkers_reforged:baolian_ingot', 'tinkers_reforged:baolian_block', 'baolian')
    summonChicken('blue_skies:diopside_gem', 'blue_skies:diopside_block', 'diopside')
    summonChicken('blue_skies:pyrope_gem', 'blue_skies:pyrope_block', 'pyrope')
    summonChicken('warden_and_sculk:sculk_block', 'warden_and_sculk:echo_shard', 'sculk')
    summonChicken('thermal_extra:soul_infused_ingot', 'thermal_extra:soul_infused_block', 'soul_infused')
    summonChicken('avaritia:infinity_ingot', 'avaritia:infinity_catalyst', 'infinity')
    summonChicken('draconicevolution:draconium_ingot', 'draconicevolution:draconium_core', 'draconium')
    summonChicken('thermal_extra:twinite_ingot', 'thermal_extra:twinite_block', 'twinite')
    summonChicken('thermal_extra:shellite_ingot', 'thermal_extra:shellite_block', 'shellite')
    summonChicken('avaritia:neutronium_ingot', 'ragnamod_seven:noisy_neutronium', 'neutronium')
    summonChicken('thermal_extra:dragonsteel_ingot', 'thermal_extra:dragonsteel_block', 'dragonsteel')
    summonChicken('draconicevolution:awakened_draconium_ingot', 'draconicevolution:dragon_heart', 'draconic')
    summonChicken('draconicevolution:large_chaos_frag', 'draconicevolution:chaotic_core', 'chaotic')
    summonChicken('thermal:sulfur', 'thermal:sulfur_block', 'sulfur')
    summonChicken('thermal:cinnabar', 'thermal:cinnabar_block', 'cinnabar')
    summonChicken('thermal:apatite', 'thermal:apatite_block', 'apatite')
    summonChicken('thermal:niter', 'thermal:niter_block', 'niter')
    summonChicken('mekanism:fluorite_gem', 'mekanism:block_fluorite', 'fluorite')
    summonChicken('undergarden:regalium_crystal', 'undergarden:regalium_block', 'regalium')
    summonChicken('bloodmagic:ingot_hellforged', 'bloodmagic:dungeon_metal', 'demonite')
    summonChicken('forbidden_arcanus:rune', 'forbidden_arcanus:rune_block', 'rune')
    summonChicken('occultism:iesnium_ingot', 'occultism:iesnium_block', 'iesnium')
    summonChicken('create_sa:heap_of_experience', 'create:experience_block', 'xp')
    summonChicken('minecraft:cake', 'minecraft:cake', 'cake')
    summonChicken('minecraft:packed_ice', 'minecraft:blue_ice', 'icy')
    summonChicken('ragnamod_seven:solid_nuclear_waste', 'mekanism:reprocessed_fissile_fragment', 'decay')
    summonChicken('minecraft:netherrack', 'compressium:netherrack_1', 'netherrack')
    summonChicken('minecraft:end_stone', 'compressium:endstone_1', 'endstone')
    summonChicken('tinkers_reforged:gelot_ingot', 'tinkers_reforged:gelot_block', 'gelot')
    summonChicken('tinkers_reforged:piroot_ingot', 'tinkers_reforged:piroot_block', 'piroot')
    summonChicken('tinkers_reforged:magma_steel_ingot', 'tinkers_reforged:magma_steel_block', 'magma_steel')
    summonChicken('tinkers_reforged:cyber_steel_ingot', 'tinkers_reforged:cyber_steel_block', 'cyber_steel')
    summonChicken('tinkers_reforged:blazing_copper_ingot', 'tinkers_reforged:blazing_copper_block', 'blazing_copper')
    summonChicken('redstone_arsenal:flux_ingot', 'redstone_arsenal:flux_metal_block', 'flux_infused')
    summonChicken('farmersdelight:egg_sandwich', 'farmersdelight:egg_sandwich', 'therealreivax')
    summonChicken('croptopia:pineapple_pepperoni_pizza', 'croptopia:pineapple_pepperoni_pizza', 'thorak83')
    summonChicken('farmersdelight:melon_juice', 'farmersdelight:melon_juice', 'mrchiro33')
    summonChicken('croptopia:fajitas', 'croptopia:fajitas', 'peonlambdaa')
    summonChicken('croptopia:toast_with_jam', 'croptopia:toast_with_jam', 'samnes')
    summonChicken('croptopia:beer', 'croptopia:beer', 'mr_bidou')

})