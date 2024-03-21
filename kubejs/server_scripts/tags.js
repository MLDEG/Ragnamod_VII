onEvent('tags.items', e => {

    //Remove Ingots
    e.remove('forge:ingots/steel', ['mekanism:ingot_steel', 'immersiveengineering:ingot_steel'])
    e.remove('forge:ingots/osmium', 'chemlib:osmium_ingot')
    e.remove('forge:ingots/enderium', 'ftbic:enderium_ingot')
    e.remove('forge:ingots/iridium', 'chemlib:iridium_ingot')
    e.remove('forge:ingots/cobalt', 'chemlib:cobalt_ingot')
    e.remove('forge:ingots/zinc', 'chemlib:zinc_ingot')
    e.remove('forge:ingots/electrum', ['immersiveengineering:ingot_electrum', 'createaddition:electrum_ingot'])
    e.remove('forge:ingots/constantan', 'immersiveengineering:ingot_constantan')
    e.remove('forge:ingots/bronze', ['ftbic:bronze_ingot', 'mekanism:ingot_bronze'])
    e.remove('forge:ingots/nickel', ['chemlib:nickel_ingot', 'immersiveengineering:ingot_nickel'])
    e.remove('forge:ingots/aluminum', ['chemlib:aluminum_ingot', 'ftbic:aluminum_ingot', 'immersiveengineering:ingot_aluminum'])
    e.remove('forge:ingots/uranium', ['chemlib:uranium_ingot', 'ftbic:uranium_ingot', 'immersiveengineering:ingot_uranium'])
    e.remove('forge:ingots/tin', ['chemlib:tin_ingot', 'ftbic:tin_ingot', 'mekanism:ingot_tin'])
    e.remove('forge:ingots/lead', ['chemlib:lead_ingot', 'ftbic:lead_ingot', 'mekanism:ingot_lead', 'immersiveengineering:ingot_lead'])
    e.remove('forge:ingots/silver', ['chemlib:silver_ingot', 'darkerdepths:silver_ingot', 'occultism:silver_ingot', 'immersiveengineering:ingot_silver'])

    //Remove Nuggets
    e.remove('forge:nuggets/constantan', 'immersiveengineering:nugget_constantan')
    e.remove('forge:nuggets/electrum', 'immersiveengineering:nugget_electrum')
    e.remove('forge:nuggets/osmium', 'chemlib:osmium_nugget')
    e.remove('forge:nuggets/netherite', 'tconstruct:netherite_nugget')
    e.remove('forge:nuggets/zinc', 'chemlib:zinc_nugget')
    e.remove('forge:nuggets/iridium', 'chemlib:iridium_nugget')
    e.remove('forge:nuggets/enderium', 'ftbic:enderium_nugget')
    e.remove('forge:nuggets/cobalt', 'chemlib:cobalt_nugget')
    e.remove('forge:nuggets/copper', ['tconstruct:copper_nugget', 'thermal:copper_nugget', 'immersiveengineering:nugget_copper', 'ftbic:copper_nugget'])
    e.remove('forge:nuggets/uranium', ['chemlib:uranium_nugget', 'ftbic:uranium_nugget', 'immersiveengineering:nugget_uranium'])
    e.remove('forge:nuggets/tin', ['chemlib:tin_nugget', 'ftbic:tin_nugget', 'mekanism:nugget_tin'])
    e.remove('forge:nuggets/silver', ['chemlib:silver_nugget', 'immersiveengineering:nugget_silver', 'occultism:silver_nugget'])
    e.remove('forge:nuggets/aluminum', ['ftbic:aluminum_nugget', 'chemlib:aluminum_nugget', 'immersiveengineering:nugget_aluminum'])
    e.remove('forge:nuggets/lead', ['chemlib:lead_nugget', 'ftbic:lead_nugget', 'mekanism:nugget_lead', 'immersiveengineering:nugget_lead'])
    e.remove('forge:nuggets/bronze', ['ftbic:bronze_nugget', 'mekanism:nugget_bronze'])
    e.remove('forge:nuggets/steel', ['mekanism:nugget_steel', 'immersiveengineering:nugget_steel'])
    e.remove('forge:nuggets/nickel', ['chemlib:nickel_nugget', 'immersiveengineering:nugget_nickel'])

    //Remove Rodes
    e.remove('forge:rods/gold', ['immersiveposts:stick_gold', 'createaddition:gold_rod'])
    e.remove('forge:rods/iron', ['immersiveengineering:stick_iron', 'createaddition:iron_rod', 'beyond_earth:iron_stick'])
    e.remove('forge:rods/copper', ['immersiveposts:stick_copper', 'createaddition:copper_rod'])
    e.remove('forge:rods/aluminum', 'immersiveengineering:stick_aluminum')
    e.remove('forge:rods/uranium', 'immersiveposts:stick_uranium')
    e.remove('forge:rods/lead', 'immersiveposts:stick_lead')
    e.remove('forge:rods/electrum', 'createaddition:electrum_rod')

    //Remove Wires
    e.remove('forge:wires/aluminum', 'immersiveengineering:wire_aluminum')
    e.remove('forge:wires/gold', 'createaddition:gold_wire')
    e.remove('forge:wires/electrum', 'createaddition:electrum_wire')
    e.remove('forge:wires/copper', ['createaddition:copper_wire', 'immersiveengineering:wire_copper'])

    //Remove Gears
    e.remove('forge:gears/bronze', 'ftbic:bronze_gear')
    e.remove('forge:gears/copper', 'ftbic:copper_gear')
    e.remove('forge:gears/enderium', 'ftbic:enderium_gear')
    e.remove('forge:gears/lead', 'ftbic:lead_gear')
    e.remove('forge:gears/tin', 'ftbic:tin_gear')
    e.remove('forge:gears/diamond', 'industrialforegoing:diamond_gear')
    e.remove('forge:gears/iron', ['ftbic:iron_gear', 'industrialforegoing:iron_gear'])
    e.remove('forge:gears/gold', ['ftbic:gold_gear', 'industrialforegoing:gold_gear'])

    //Remove Plates
    e.remove('forge:plates/iron', ['chemlib:iron_plate', 'beyond_earth:iron_plate', 'create:iron_sheet', 'thermal:iron_plate', 'immersiveengineering:plate_iron'])
    e.remove('forge:plates/gold', ['chemlib:gold_plate', 'thermal:gold_plate', 'immersiveengineering:plate_gold', 'create:golden_sheet'])
    e.remove('forge:plates/copper', ['chemlib:copper_plate', 'thermal:copper_plate', 'immersiveengineering:plate_copper', 'create:copper_sheet'])
    e.remove('forge:plates/nickel', ['chemlib:nickel_plate', 'immersiveengineering:plate_nickel'])
    e.remove('forge:plates/lead', ['chemlib:lead_plate', 'thermal:lead_plate', 'immersiveengineering:plate_lead'])
    e.remove('forge:plates/uranium', ['chemlib:uranium_plate', 'immersiveengineering:plate_uranium'])
    e.remove('forge:plates/bronze', 'thermal:bronze_plate')
    e.remove('forge:plates/aluminum', ['chemlib:aluminum_plate', 'immersiveengineering:plate_aluminum'])
    e.remove('forge:plates/enderium', 'thermal:enderium_plate')
    e.remove('forge:plates/tin', ['chemlib:tin_plate', 'thermal:tin_plate'])
    e.remove('forge:plates/constantan', 'immersiveengineering:plate_constantan')
    e.remove('forge:plates/electrum', 'immersiveengineering:plate_electrum')
    e.remove('forge:plates/silver', ['chemlib:silver_plate', 'immersiveengineering:plate_silver'])
    e.remove('forge:plates/iridium', 'chemlib:iridium_plate')
    e.remove('forge:plates/zinc', 'chemlib:zinc_plate')

    //Remove Dusts
    e.remove('forge:dusts/wood', ['mekanism:sawdust', 'immersiveengineering:dust_wood'])
    e.remove('forge:sawdust', ['mekanism:sawdust', 'immersiveengineering:dust_wood'])
    e.remove('forge:dusts/obsidian', ['ftbic:obsidian_dust', 'mekanism:dust_obsidian', 'occultism:obsidian_dust'])
    e.remove('forge:dusts/ender', ['miniutilities:ender_dust', 'ftbic:ender_dust'])
    e.remove('forge:dusts/sulfur', ['chemlib:sulfur_dust', 'immersiveengineering:dust_sulfur', 'mekanism:dust_sulfur'])
    e.remove('forge:dusts/diamond', ['mekanism:dust_diamond', 'ftbic:diamond_dust', 'createaddition:diamond_grit'])
    e.remove('forge:dusts/coal', ['ftbic:coal_dust', 'bloodmagic:coalsand'])
    e.remove('forge:dusts/bronze', ['ftbic:bronze_dust', 'mekanism:dust_bronze'])
    e.remove('forge:dusts/nickel', ['chemlib:nickel_dust', 'immersiveengineering:dust_nickel'])
    e.remove('forge:dusts/tin', ['ftbic:tin_dust', 'chemlib:tin_dust', 'mekanism:dust_tin'])
    e.remove('forge:dusts/silver', ['occultism:silver_dust', 'immersiveengineering:dust_silver', 'chemlib:silver_dust'])
    e.remove('forge:dusts/aluminum', ['ftbic:aluminum_dust', 'immersiveengineering:dust_aluminum', 'chemlib:aluminum_dust'])
    e.remove('forge:dusts/uranium', ['ftbic:uranium_dust', 'immersiveengineering:dust_uranium', 'chemlib:uranium_dust'])
    e.remove('forge:dusts/lead', ['immersiveengineering:dust_lead', 'mekanism:dust_lead', 'chemlib:lead_dust', 'ftbic:lead_dust'])
    e.remove('forge:dusts/copper', ['bloodmagic:coppersand', 'occultism:copper_dust', 'ftbic:copper_dust', 'chemlib:copper_dust', 'immersiveengineering:dust_copper', 'mekanism:dust_copper'])
    e.remove('forge:dusts/gold', ['bloodmagic:goldsand', 'occultism:gold_dust', 'ftbic:gold_dust', 'chemlib:gold_dust', 'immersiveengineering:dust_gold', 'mekanism:dust_gold'])
    e.remove('forge:dusts/iron', ['bloodmagic:ironsand', 'occultism:iron_dust', 'ftbic:iron_dust', 'chemlib:iron_dust', 'immersiveengineering:dust_iron', 'mekanism:dust_iron'])
    e.remove('forge:dusts/ender_pearl', 'thermal:ender_pearl_dust')
    e.remove('forge:dusts/osmium', 'chemlib:osmium_dust')
    e.remove('forge:dusts/enderium', 'ftbic:enderium_dust')
    e.remove('forge:dusts/steel', 'immersiveengineering:dust_steel')
    e.remove('forge:dusts/quartz', 'mekanism:dust_quartz')
    e.remove('forge:dusts/lapis', 'mekanism:dust_lapis_lazuli')
    e.remove('forge:dusts/emerald', 'mekanism:dust_emerald')
    e.remove('forge:dusts/netherite', 'mekanism:dust_netherite')
    e.remove('forge:dusts/charcoal', 'mekanism:dust_charcoal')
    e.remove('forge:dusts/iridium', 'chemlib:iridium_dust')
    e.remove('forge:dusts/constantan', 'immersiveengineering:dust_constantan')
    e.remove('forge:dusts/electrum', 'immersiveengineering:dust_electrum')
    e.remove('forge:dyes', 'mekanism:dust_sulfur')
    e.remove('forge:dyes/yellow', 'mekanism:dust_sulfur')
    e.remove('forge:dusts/lithium', 'chemlib:lithium_dust')

    //Remove Raw Materials
    e.remove('forge:raw_materials/silver', ['darkerdepths:raw_silver', 'occultism:raw_silver', 'immersiveengineering:raw_silver'])
    e.remove('forge:raw_materials/uranium', ['ftbic:uranium_chunk', 'immersiveengineering:raw_uranium'])
    e.remove('forge:raw_materials/aluminum', ['ftbic:aluminum_chunk', 'immersiveengineering:raw_aluminum'])
    e.remove('forge:raw_materials/lead', ['ftbic:lead_chunk', 'immersiveengineering:raw_lead', 'mekanism:raw_lead'])
    e.remove('forge:raw_materials/tin', ['ftbic:tin_chunk', 'mekanism:raw_tin'])
    e.remove('forge:raw_materials/nickel', 'immersiveengineering:raw_nickel')

    //Remove Raw Materials
    e.remove('forge:ores/nickel', ['immersiveengineering:ore_nickel', 'immersiveengineering:deepslate_ore_nickel'])
    e.remove('forge:ores/tin', ['ftbic:deepslate_tin_ore', 'ftbic:tin_ore', 'mekanism:deepslate_tin_ore', 'mekanism:tin_ore'])
    e.remove('forge:ores/uranium', ['ftbic:deepslate_uranium_ore', 'ftbic:uranium_ore', 'immersiveengineering:deepslate_ore_uranium', 'immersiveengineering:ore_uranium'])
    e.remove('forge:ores/lead', ['ftbic:deepslate_lead_ore', 'ftbic:lead_ore', 'mekanism:deepslate_lead_ore', 'mekanism:lead_ore', 'immersiveengineering:deepslate_ore_lead', 'immersiveengineering:ore_lead'])
    e.remove('forge:ores/aluminum', ['ftbic:deepslate_aluminum_ore', 'ftbic:aluminum_ore', 'immersiveengineering:deepslate_ore_aluminum', 'immersiveengineering:ore_aluminum'])
    e.remove('forge:ores/silver', ['darkerdepths:silver_ore', 'immersiveengineering:deepslate_ore_silver', 'immersiveengineering:ore_silver', 'occultism:silver_ore_deepslate', 'occultism:silver_ore'])

    //Remove Raw Materials Blocks
    e.remove('forge:storage_blocks/raw_silver', ['darkerdepths:raw_silver_block', 'immersiveengineering:raw_block_silver'])
    e.remove('forge:storage_blocks/raw_lead', ['immersiveengineering:raw_block_lead', 'mekanism:block_raw_lead'])
    e.remove('forge:storage_blocks/raw_nickel', 'immersiveengineering:raw_block_nickel')
    e.remove('forge:storage_blocks/raw_uranium', 'immersiveengineering:raw_block_uranium')
    e.remove('forge:storage_blocks/raw_aluminum', 'immersiveengineering:raw_block_aluminum')
    e.remove('forge:storage_blocks/raw_tin', 'mekanism:block_raw_tin')

    //Remove Block Storage
    e.remove('forge:storage_blocks/lead', ['ftbic:lead_block', 'mekanism:block_lead', 'immersiveengineering:storage_lead', 'chemlib:lead_metal_block'])
    e.remove('forge:storage_blocks/silver', ['darkerdepths:silver_block', 'occultism:silver_block', 'immersiveengineering:storage_silver', 'chemlib:silver_metal_block'])
    e.remove('forge:storage_blocks/uranium', ['ftbic:uranium_block', 'immersiveengineering:storage_uranium', 'chemlib:uranium_metal_block'])
    e.remove('forge:storage_blocks/tin', ['ftbic:tin_block', 'mekanism:block_tin', 'chemlib:tin_metal_block'])
    e.remove('forge:storage_blocks/steel', ['mekanism:block_steel', 'immersiveengineering:storage_steel'])
    e.remove('forge:storage_blocks/charcoal', ['mekanism:block_charcoal', 'quark:charcoal_block'])
    e.remove('forge:storage_blocks/bronze', ['ftbic:bronze_block', 'mekanism:block_bronze'])
    e.remove('forge:storage_blocks/aluminum', ['ftbic:aluminum_block', 'immersiveengineering:storage_aluminum', 'chemlib:aluminum_metal_block'])
    e.remove('forge:storage_blocks/constantan', 'immersiveengineering:storage_constantan')
    e.remove('forge:storage_blocks/enderium', 'ftbic:enderium_block')
    e.remove('forge:storage_blocks/nickel', ['immersiveengineering:storage_nickel', 'chemlib:nickel_metal_block'])
    e.remove('forge:storage_blocks/electrum', 'immersiveengineering:storage_electrum')
    e.remove('forge:storage_blocks/coal_coke', 'immersiveengineering:coke')
    e.remove('forge:storage_blocks/cobalt', 'chemlib:cobalt_metal_block')
    e.remove('forge:storage_blocks/iridium', 'chemlib:iridium_metal_block')
    e.remove('forge:storage_blocks/osmium', 'chemlib:osmium_metal_block')

    //Remove Other
    e.remove('forge:mushrooms', 'byg:white_puffball_cap')
    e.remove('byg:mushrooms', 'byg:white_puffball_cap')
    e.remove('forge:rods/wooden', 'immersiveengineering:stick_treated')
    e.remove('forge:silicon', 'ae2:silicon')
    e.remove('forge:bitumen', 'immersivepetroleum:bitumen')
    e.remove('forge:slag', 'immersiveengineering:slag')
    e.remove('forge:coal_coke', 'immersiveengineering:coal_coke')
    e.remove('minecraft:coals', 'immersiveengineering:coal_coke')
    e.remove('curios:curio', ['ae2:wireless_crafting_terminal', 'ae2wtlib:wireless_pattern_access_terminal', 'ae2wtlib:wireless_pattern_encoding_terminal', 'ae2wtlib:wireless_universal_terminal', 'beyond_earth_giselle_addon:oxygen_can'])

    //Remove Ore from Boon Drops Enchant
    e.remove('forge:ores_in_ground/stone', ['mekanism:lead_ore', 'mekanism:tin_ore', 'immersiveengineering:ore_uranium', 'immersiveengineering:ore_nickel', 'immersiveengineering:ore_silver', 'immersiveengineering:ore_lead', 'immersiveengineering:ore_aluminum'])

    //Remove Aluminum Casts
    e.remove('tinkers_reforged:casts/aluminum', ["tinkers_reforged:cast_nugget", "tinkers_reforged:cast_large_plate", "tinkers_reforged:cast_ingot", "tinkers_reforged:cast_hammer_head", "tinkers_reforged:cast_gem", "tinkers_reforged:cast_gear", "tinkers_reforged:cast_coin", "tinkers_reforged:cast_broad_blade", "tinkers_reforged:cast_broad_axe_head", "tinkers_reforged:cast_large_round_plate", "tinkers_reforged:cast_great_blade", "tinkers_reforged:cast_wire", "tinkers_reforged:cast_tough_handle", "tinkers_reforged:cast_tool_handle", "tinkers_reforged:cast_tool_binding", "tinkers_reforged:cast_small_blade", "tinkers_reforged:cast_small_axe_head", "tinkers_reforged:cast_rod", "tinkers_reforged:cast_repair_kit", "tinkers_reforged:cast_plate", "tinkers_reforged:cast_pick_head", "tinkers_reforged:cast_bowstring", "tinkers_reforged:cast_bow_limb", "tinkers_reforged:cast_round_plate"])
    e.remove('tconstruct:casts/multi_use/nugget', 'tinkers_reforged:cast_nugget')
    e.remove('tconstruct:casts/multi_use/large_plate', 'tinkers_reforged:cast_large_plate')
    e.remove('tconstruct:casts/multi_use/ingot', 'tinkers_reforged:cast_ingot')
    e.remove('tconstruct:casts/multi_use/hammer_head', 'tinkers_reforged:cast_hammer_head')
    e.remove('tconstruct:casts/multi_use/gem', 'tinkers_reforged:cast_gem')
    e.remove('tconstruct:casts/multi_use/gear', 'tinkers_reforged:cast_gear')
    e.remove('tconstruct:casts/multi_use/coin', 'tinkers_reforged:cast_coin')
    e.remove('tconstruct:casts/multi_use/broad_blade', 'tinkers_reforged:cast_broad_blade')
    e.remove('tconstruct:casts/multi_use/broad_axe_head', 'tinkers_reforged:cast_broad_axe_head')
    e.remove('tconstruct:casts/multi_use/large_round_plate', 'tinkers_reforged:cast_large_round_plate')
    e.remove('tconstruct:casts/multi_use/great_blade', 'tinkers_reforged:cast_great_blade')
    e.remove('tconstruct:casts/multi_use/wire', 'tinkers_reforged:cast_wire')
    e.remove('tconstruct:casts/multi_use/tough_handle', 'tinkers_reforged:cast_tough_handle')
    e.remove('tconstruct:casts/multi_use/tool_handle', 'tinkers_reforged:cast_tool_handle')
    e.remove('tconstruct:casts/multi_use/tool_binding', 'tinkers_reforged:cast_tool_binding')
    e.remove('tconstruct:casts/multi_use/small_blade', 'tinkers_reforged:cast_small_blade')
    e.remove('tconstruct:casts/multi_use/small_axe_head', 'tinkers_reforged:cast_small_axe_head')
    e.remove('tconstruct:casts/multi_use/rod', 'tinkers_reforged:cast_rod')
    e.remove('tconstruct:casts/multi_use/repair_kit', 'tinkers_reforged:cast_repair_kit')
    e.remove('tconstruct:casts/multi_use/plate', 'tinkers_reforged:cast_plate')
    e.remove('tconstruct:casts/multi_use/pick_head', 'tinkers_reforged:cast_pick_head')
    e.remove('tconstruct:casts/multi_use/bowstring', 'tinkers_reforged:cast_bowstring')
    e.remove('tconstruct:casts/multi_use/bow_limb', 'tinkers_reforged:cast_bow_limb')
    e.remove('tconstruct:casts/multi_use/round_plate', 'tinkers_reforged:cast_round_plate')

    //Add Ore for Boon Drops Enchant
    e.add('apotheosis:boon_drops', ['ftbic:iridium_ore', 'forbidden_arcanus:arcane_crystal_ore', 'evilcraft:dark_ore', 'ae2:quartz_ore', 'miniutilities:ender_ore', 'thermal:lead_ore', 'thermal:silver_ore', 'thermal:tin_ore', 'tinkers_reforged:red_beryl_ore', 'tinkers_reforged:aluminum_ore', 'powah:uraninite_ore_poor', 'thermal:apatite_ore', 'thermal:cinnabar_ore', 'thermal:sulfur_ore', 'thermal:niter_ore', 'thermal:nickel_ore'])

    //Tag for Metamorphic Stone (Botania)
    e.add('botania:metamorphic_stone', ['botania:metamorphic_desert_stone', 'botania:metamorphic_forest_stone', 'botania:metamorphic_fungal_stone', 'botania:metamorphic_mesa_stone', 'botania:metamorphic_mountain_stone', 'botania:metamorphic_plains_stone', 'botania:metamorphic_swamp_stone', 'botania:metamorphic_taiga_stone'])

    //Tag for FTPQuests Chickens
    e.add('itemfilters:check_nbt', ['chickens:chicken_item', 'chickens:colored_egg', 'naturesaura:aura_bottle'])

    //Tags Forge
    e.add('forge:storage_blocks/hop_graphite', 'immersiveengineering:storage_hop_graphite')
    e.add('forge:storage_blocks/stable', 'miniutilities:stable_block')
    e.add('forge:ingots/stable', 'miniutilities:stable_ingot')
    e.add('forge:storage_blocks/silicon', 'ftbic:silicon_block')
    e.add('forge:ores/iron', 'infernalexp:basalt_iron_ore')
    e.add('forge:ores/silver', ['darkerdepths:aridrock_silver_ore', 'darkerdepths:limestone_silver_ore'])
    e.add('forge:wires/gold', 'ftbic:gold_wire')
    e.add('forge:wires/copper', 'ftbic:copper_wire')
    e.add('forge:wires/aluminum', 'ftbic:aluminum_wire')
    e.add('forge:cheese', ['thermal:cheese_wedge', 'croptopia:cheese', 'beyond_earth:cheese'])
    e.add('minecraft:wool_carpets', ['minecraft:black_carpet', 'minecraft:green_carpet', 'minecraft:blue_carpet', 'minecraft:cyan_carpet', 'minecraft:gray_carpet', 'minecraft:lime_carpet', 'minecraft:light_blue_carpet', 'minecraft:orange_carpet', 'minecraft:red_carpet', 'minecraft:brown_carpet', 'minecraft:purple_carpet', 'minecraft:light_gray_carpet', 'minecraft:pink_carpet', 'minecraft:yellow_carpet', 'minecraft:magenta_carpet', 'minecraft:white_carpet'])
    e.add('forge:nuggets/knightmetal', 'twilightforest:armor_shard')
    e.add('forge:ingots/knightmetal', 'twilightforest:armor_shard_cluster')
    e.add('forge:raw_materials/kepu', 'tinkers_reforged:raw_kepu')
    e.add('forge:raw_materials/falsite', 'blue_skies:raw_falsite')
    e.add('forge:raw_materials/horizonite', 'blue_skies:raw_horizonite')
    e.add('forge:raw_materials/ventium', 'blue_skies:raw_ventium')
    e.add('forge:storage_blocks/raw_falsite', 'blue_skies:raw_falsite_block')
    e.add('forge:storage_blocks/raw_horizonite', 'blue_skies:raw_horizonite_block')
    e.add('forge:storage_blocks/raw_ventium', 'blue_skies:raw_ventium_block')

    //Tag for more revertable chests
    e.add('quark:revertable_chests', ['blue_skies:bluebright_chest', 'ars_nouveau:archwood_chest', 'blue_skies:starlit_chest', 'blue_skies:frostbright_chest', 'blue_skies:lunar_chest', 'blue_skies:dusk_chest', 'blue_skies:maple_chest', 'blue_skies:cherry_chest', 'twilightforest:sorting_chest', 'twilightforest:mining_chest', 'twilightforest:transformation_chest', 'twilightforest:time_chest', 'twilightforest:darkwood_chest', 'twilightforest:mangrove_chest', 'twilightforest:canopy_chest', 'twilightforest:twilight_oak_chest'])

    //Tag for planks (for crafts)
    e.add('rm:oak_planks', ['minecraft:oak_planks', 'twilightforest:dark_planks', 'twilightforest:time_planks', 'twilightforest:transformation_planks', 'twilightforest:mining_planks', 'twilightforest:sorting_planks', 'tconstruct:nahuatl', 'tconstruct:greenheart_planks', 'tconstruct:skyroot_planks', 'tconstruct:bloodshroom_planks', 'blue_skies:frostbright_planks', 'blue_skies:lunar_planks', 'blue_skies:starlit_planks', 'blue_skies:bluebright_planks', 'architects_palette:twisted_planks', 'ars_nouveau:archwood_planks', 'minecraft:warped_planks', 'minecraft:crimson_planks', 'blue_skies:dusk_planks', 'blue_skies:maple_planks', 'blue_skies:crystallized_planks', 'blue_skies:cherry_planks', 'cataclysm:chorus_planks', 'darkerdepths:petrified_planks', 'myrtrees:rubberwood_planks', 'forbidden_arcanus:fungyss_planks', 'forbidden_arcanus:cherrywood_planks', 'forbidden_arcanus:mysterywood_planks', 'forbidden_arcanus:edelwood_planks', 'hexerei:mahogany_planks', 'hexerei:willow_planks', 'integrateddynamics:menril_planks', 'naturesaura:ancient_planks', 'twilightforest:towerwood', 'twilightforest:twilight_oak_planks', 'twilightforest:canopy_planks', 'twilightforest:mangrove_planks'])

    //Tag for Sleeping Bags
    e.add('comforts:sleeping_bags', ['comforts:sleeping_bag_blue', 'comforts:sleeping_bag_brown', 'comforts:sleeping_bag_green', 'comforts:sleeping_bag_red', 'comforts:sleeping_bag_black', 'comforts:sleeping_bag_white', 'comforts:sleeping_bag_orange', 'comforts:sleeping_bag_magenta', 'comforts:sleeping_bag_light_blue', 'comforts:sleeping_bag_yellow', 'comforts:sleeping_bag_lime', 'comforts:sleeping_bag_pink', 'comforts:sleeping_bag_gray', 'comforts:sleeping_bag_light_gray', 'comforts:sleeping_bag_cyan', 'comforts:sleeping_bag_purple'])

    //Tag for Hammocks
    e.add('comforts:hammocks', ['comforts:hammock_black', 'comforts:hammock_white', 'comforts:hammock_orange', 'comforts:hammock_magenta', 'comforts:hammock_light_blue', 'comforts:hammock_yellow', 'comforts:hammock_cyan', 'comforts:hammock_light_gray', 'comforts:hammock_gray', 'comforts:hammock_pink', 'comforts:hammock_lime', 'comforts:hammock_purple', 'comforts:hammock_blue', 'comforts:hammock_brown', 'comforts:hammock_green', 'comforts:hammock_red'])

    //Tag for hammer
    e.add('justhammers:hammer', ['justhammers:netherite_hammer', 'justhammers:diamond_hammer', 'justhammers:gold_hammer', 'justhammers:iron_hammer', 'justhammers:stone_hammer'])

    //Tag for FTBQuests and Crystals of Blood Magic
    e.add('ftbquests:crystal_blood_magic', ['bloodmagic:steadfastdemoncrystal', 'bloodmagic:vengefuldemoncrystal', 'bloodmagic:destructivedemoncrystal', 'bloodmagic:corrosivedemoncrystal', 'bloodmagic:rawdemoncrystal'])

    //Tag for FTBQuests and Petal Apotechary
    e.add('botania:apothecary', ['botania:apothecary_mesa', 'botania:apothecary_taiga', 'botania:apothecary_desert', 'botania:apothecary_swamp', 'botania:apothecary_fungal', 'botania:apothecary_mountain', 'botania:apothecary_plains', 'botania:apothecary_forest', 'botania:apothecary_default', 'botania:apothecary_mossy'])

    //Forge Furnace
    e.add('forge:basic_furnaces', ['minecraft:furnace', 'quark:deepslate_furnace', 'quark:blackstone_furnace'])

    //Logs that burn
    e.add('minecraft:logs_that_burn', ['twilightforest:dark_log', 'twilightforest:dark_wood', 'twilightforest:stripped_dark_wood', 'twilightforest:stripped_dark_log'])

    //Colored runes Quark
    e.add('quark:colored_runes', ['quark:rainbow_rune', 'quark:red_rune', 'quark:brown_rune', 'quark:purple_rune', 'quark:light_gray_rune', 'quark:pink_rune', 'quark:yellow_rune', 'quark:magenta_rune', 'quark:white_rune', 'quark:black_rune', 'quark:green_rune', 'quark:blue_rune', 'quark:cyan_rune', 'quark:gray_rune', 'quark:lime_rune', 'quark:light_blue_rune', 'quark:orange_rune'])

    //Plastic
    e.add('forge:plastic', ['pneumaticcraft:plastic', 'mekanism:hdpe_sheet'])

    //Tags for Powah Items
    e.add('powah:thermo_generator', ['powah:thermo_generator_nitro', 'powah:thermo_generator_spirited', 'powah:thermo_generator_niotic', 'powah:thermo_generator_blazing', 'powah:thermo_generator_hardened', 'powah:thermo_generator_basic', 'powah:thermo_generator_starter'])
    e.add('powah:energy_cell', ['powah:energy_cell_nitro', 'powah:energy_cell_spirited', 'powah:energy_cell_niotic', 'powah:energy_cell_blazing', 'powah:energy_cell_hardened', 'powah:energy_cell_basic', 'powah:energy_cell_starter'])
    e.add('powah:ender_cell', ['powah:ender_cell_nitro', 'powah:ender_cell_spirited', 'powah:ender_cell_niotic', 'powah:ender_cell_blazing', 'powah:ender_cell_hardened', 'powah:ender_cell_basic', 'powah:ender_cell_starter'])
    e.add('powah:energy_cable', ['powah:energy_cable_nitro', 'powah:energy_cable_spirited', 'powah:energy_cable_niotic', 'powah:energy_cable_blazing', 'powah:energy_cable_hardened', 'powah:energy_cable_basic', 'powah:energy_cable_starter'])
    e.add('powah:ender_gate', ['powah:ender_gate_nitro', 'powah:ender_gate_spirited', 'powah:ender_gate_niotic', 'powah:ender_gate_blazing', 'powah:ender_gate_hardened', 'powah:ender_gate_basic', 'powah:ender_gate_starter'])
    e.add('powah:energizing_rod', ['powah:energizing_rod_nitro', 'powah:energizing_rod_spirited', 'powah:energizing_rod_niotic', 'powah:energizing_rod_blazing', 'powah:energizing_rod_hardened', 'powah:energizing_rod_basic', 'powah:energizing_rod_starter'])
    e.add('powah:furnator', ['powah:furnator_nitro', 'powah:furnator_spirited', 'powah:furnator_niotic', 'powah:furnator_blazing', 'powah:furnator_hardened', 'powah:furnator_basic', 'powah:furnator_starter'])
    e.add('powah:magmator', ['powah:magmator_nitro', 'powah:magmator_spirited', 'powah:magmator_niotic', 'powah:magmator_blazing', 'powah:magmator_hardened', 'powah:magmator_basic', 'powah:magmator_starter'])
    e.add('powah:solar_panel', ['powah:solar_panel_nitro', 'powah:solar_panel_spirited', 'powah:solar_panel_niotic', 'powah:solar_panel_blazing', 'powah:solar_panel_hardened', 'powah:solar_panel_basic', 'powah:solar_panel_starter'])
    e.add('powah:reactor', ['powah:reactor_nitro', 'powah:reactor_spirited', 'powah:reactor_niotic', 'powah:reactor_blazing', 'powah:reactor_hardened', 'powah:reactor_basic', 'powah:reactor_starter'])
    e.add('powah:player_transmitter', ['powah:player_transmitter_nitro', 'powah:player_transmitter_spirited', 'powah:player_transmitter_niotic', 'powah:player_transmitter_blazing', 'powah:player_transmitter_hardened', 'powah:player_transmitter_basic', 'powah:player_transmitter_starter'])
    e.add('powah:energy_hopper', ['powah:energy_hopper_nitro', 'powah:energy_hopper_spirited', 'powah:energy_hopper_niotic', 'powah:energy_hopper_blazing', 'powah:energy_hopper_hardened', 'powah:energy_hopper_basic', 'powah:energy_hopper_starter'])
    e.add('powah:energy_discharger', ['powah:energy_discharger_nitro', 'powah:energy_discharger_spirited', 'powah:energy_discharger_niotic', 'powah:energy_discharger_blazing', 'powah:energy_discharger_hardened', 'powah:energy_discharger_basic', 'powah:energy_discharger_starter'])

    //Unknown tag
    e.add('forge:ores', 'ragnamod_seven:unknown_ore')
    e.add('forge:ores/unknown', 'ragnamod_seven:unknown_ore')

    //Storage Blocks tag
    e.add('forge:storage_blocks/sugar_cane', 'quark:sugar_cane_block')

    //Reliquary Drops
    e.add('forge:reliquary_drops', ['reliquary:frozen_core', 'reliquary:molten_core', 'reliquary:withered_rib', 'reliquary:slime_pearl', 'reliquary:chelicerae', 'reliquary:catalyzing_gland', 'reliquary:rib_bone', 'reliquary:squid_beak', 'reliquary:zombie_heart', 'reliquary:guardian_spike', 'reliquary:nebulous_heart', 'reliquary:eye_of_the_storm'])

    //Raw Materials
    e.add('forge:raw_materials', ['beyond_earth:raw_calorite', 'beyond_earth:raw_ostrum', 'beyond_earth:raw_desh', 'tinkers_reforged:raw_kepu'])

    //Thermal Dies
    e.add('thermal:crafting/dies', ['thermal:press_rod_die', 'thermal:press_wire_die'])

    //Enderium Wire
    e.add('forge:wires/enderium', 'ftbic:enderium_wire')

    //Salad Ingredients
    e.add('forge:salad_ingredients', 'croptopia:cabbage')

    //Apo tag
    e.add('apotheosis:nbt', ['#forge:shields', '#forge:tools', '#forge:armor', 'minecraft:stick', 'reliquary:witch_hat', 'hexerei:witch_helmet', 'hexerei:witch_chestplate', 'hexerei:witch_boots', '#forge:bows', '#forge:crossbows', 'minecraft:trident'])

    //tag Crushed Create
    function crushedTag(metal) {
        e.add('forge:crushed/' + metal, 'create:crushed_raw_' + metal)
    }
    crushedTag('iron')
    crushedTag('gold')
    crushedTag('copper')
    crushedTag('zinc')
    crushedTag('osmium')
    crushedTag('silver')
    crushedTag('tin')
    crushedTag('lead')
    crushedTag('aluminum')
    crushedTag('nickel')
    crushedTag('uranium')

    //Botany pots tag
    var botanycolor = ["red", "orange", "yellow", "lime", "green", "blue", "light_blue", "cyan", "pink", "magenta", "purple", "brown", "black", "white", "light_gray", "gray"]
    function botanyPotsBasic(botanycolor) {
        e.add('botanypots:basic_hopper_botany_pot', ['botanypots:' + botanycolor + '_glazed_terracotta_hopper_botany_pot', 'botanypots:' + botanycolor + '_concrete_hopper_botany_pot', 'botanypots:' + botanycolor + '_terracotta_hopper_botany_pot']);
        e.add('botanypotstiers:elite_hopper_botany_pot', ['botanypotstiers:elite_' + botanycolor + '_glazed_terracotta_hopper_botany_pot', 'botanypotstiers:elite_' + botanycolor + '_concrete_hopper_botany_pot', 'botanypotstiers:elite_' + botanycolor + '_terracotta_hopper_botany_pot']);
        e.add('botanypotstiers:ultra_hopper_botany_pot', ['botanypotstiers:ultra_' + botanycolor + '_glazed_terracotta_hopper_botany_pot', 'botanypotstiers:ultra_' + botanycolor + '_concrete_hopper_botany_pot', 'botanypotstiers:ultra_' + botanycolor + '_terracotta_hopper_botany_pot']);
        e.add('botanypotstiers:creative_hopper_botany_pot', ['botanypotstiers:creative_' + botanycolor + '_glazed_terracotta_hopper_botany_pot', 'botanypotstiers:creative_' + botanycolor + '_concrete_hopper_botany_pot', 'botanypotstiers:creative_' + botanycolor + '_terracotta_hopper_botany_pot'])
    }
    botanycolor.forEach(C => { botanyPotsBasic(C) })
    e.add('botanypots:basic_hopper_botany_pot', 'botanypots:terracotta_hopper_botany_pot')
    e.add('botanypotstiers:elite_hopper_botany_pot', 'botanypotstiers:elite_terracotta_hopper_botany_pot')
    e.add('botanypotstiers:ultra_hopper_botany_pot', 'botanypotstiers:ultra_terracotta_hopper_botany_pot')
    e.add('botanypotstiers:creative_hopper_botany_pot', 'botanypotstiers:creative_terracotta_hopper_botany_pot')

    //Workbenches
    e.add('forge:workbenches', ['blue_skies:cherry_crafting_table', 'blue_skies:dusk_crafting_table', 'blue_skies:frostbright_crafting_table', 'blue_skies:bluebright_crafting_table', 'blue_skies:maple_crafting_table', 'blue_skies:lunar_crafting_table', 'blue_skies:starlit_crafting_table'])
})
onEvent('tags.blocks', e => {

    //Workbenches
    e.add('forge:workbenches', ['blue_skies:cherry_crafting_table', 'blue_skies:dusk_crafting_table', 'blue_skies:frostbright_crafting_table', 'blue_skies:bluebright_crafting_table', 'blue_skies:maple_crafting_table', 'blue_skies:lunar_crafting_table', 'blue_skies:starlit_crafting_table'])

    //Remove Raw Materials
    e.remove('forge:ores/nickel', ['immersiveengineering:ore_nickel', 'immersiveengineering:deepslate_ore_nickel'])
    e.remove('forge:ores/tin', ['ftbic:deepslate_tin_ore', 'ftbic:tin_ore', 'mekanism:deepslate_tin_ore', 'mekanism:tin_ore'])
    e.remove('forge:ores/uranium', ['ftbic:deepslate_uranium_ore', 'ftbic:uranium_ore', 'immersiveengineering:deepslate_ore_uranium', 'immersiveengineering:ore_uranium'])
    e.remove('forge:ores/lead', ['ftbic:deepslate_lead_ore', 'ftbic:lead_ore', 'mekanism:deepslate_lead_ore', 'mekanism:lead_ore', 'immersiveengineering:deepslate_ore_lead', 'immersiveengineering:ore_lead'])
    e.remove('forge:ores/aluminum', ['ftbic:deepslate_aluminum_ore', 'ftbic:aluminum_ore', 'immersiveengineering:deepslate_ore_aluminum', 'immersiveengineering:ore_aluminum'])
    e.remove('forge:ores/silver', ['darkerdepths:silver_ore', 'immersiveengineering:deepslate_ore_silver', 'immersiveengineering:ore_silver', 'occultism:silver_ore_deepslate', 'occultism:silver_ore'])

    //Blue Skies Logs
    e.add('blue_skies:logs', ['blue_skies:stripped_dusk_wood', 'blue_skies:maple_wood', 'blue_skies:stripped_maple_wood', 'blue_skies:cherry_wood', 'blue_skies:stripped_cherry_wood', 'blue_skies:bluebright_log', 'blue_skies:stripped_bluebright_log', 'blue_skies:starlit_log', 'blue_skies:stripped_starlit_log', 'blue_skies:frostbright_log', 'blue_skies:stripped_frostbright_log', 'blue_skies:lunar_log', 'blue_skies:stripped_lunar_log', 'blue_skies:dusk_log', 'blue_skies:stripped_dusk_log', 'blue_skies:maple_log', 'blue_skies:stripped_maple_log', 'blue_skies:cherry_log', 'blue_skies:stripped_cherry_log', 'blue_skies:bluebright_wood', 'blue_skies:stripped_bluebright_wood', 'blue_skies:starlit_wood', 'blue_skies:stripped_starlit_wood', 'blue_skies:frostbright_wood', 'blue_skies:stripped_frostbright_wood', 'blue_skies:lunar_wood', 'blue_skies:stripped_lunar_wood', 'blue_skies:dusk_wood'])

    //Fix Mineable
    function mineablePickaxe(pickaxe) { e.add(pickaxe, ['chickenchunks:chunk_loader', 'chickenchunks:spot_loader', 'naturesaura:conversion_catalyst', 'naturesaura:animal_spawner', 'naturesaura:crushing_catalyst', 'naturesaura:tainted_gold_block', 'naturesaura:item_distributor', 'naturesaura:moss_generator', 'naturesaura:hopper_upgrade', 'naturesaura:gold_nether_brick', 'naturesaura:time_changer', 'compactcrafting:field_projector', 'compactcrafting:match_proxy', 'compactcrafting:rescan_proxy', 'evilcraft:environmental_accumulator', 'naturesaura:nature_altar', 'naturesaura:infused_stairs', 'naturesaura:spring', 'naturesaura:infused_iron_block', 'naturesaura:chunk_loader', 'naturesaura:aura_detector', 'naturesaura:pickup_stopper', 'naturesaura:potion_generator', 'naturesaura:firework_generator', 'naturesaura:chorus_generator', 'naturesaura:snow_creator', 'naturesaura:infused_stone', 'naturesaura:nether_grass', 'naturesaura:weather_changer', 'naturesaura:infused_brick', 'naturesaura:blast_furnace_booster', 'naturesaura:aura_timer', 'naturesaura:infused_slab', 'naturesaura:field_creator', 'naturesaura:grated_chute', 'naturesaura:gold_brick', 'naturesaura:powder_placer', 'naturesaura:furnace_heater', 'naturesaura:spawn_lamp', 'naturesaura:rf_converter', 'naturesaura:placer', 'naturesaura:generator_limit_remover', 'naturesaura:projectile_generator', 'naturesaura:animal_generator', 'naturesaura:ender_crate', 'psi:white_psimetal_plate', 'psi:lit_white_psimetal_plate', 'psi:ebony_psimetal_block', 'psi:psimetal_block', 'psi:psigem_block', 'psi:black_psimetal_plate', 'psi:lit_black_psimetal_plate', 'psi:ivory_psimetal_block', 'miniutilities:white_lapis_caelestis', 'miniutilities:light_gray_lapis_caelestis', 'miniutilities:gray_lapis_caelestis', 'miniutilities:black_lapis_caelestis', 'miniutilities:red_lapis_caelestis', 'miniutilities:orange_lapis_caelestis', 'miniutilities:yellow_lapis_caelestis', 'miniutilities:lime_lapis_caelestis', 'miniutilities:green_lapis_caelestis', 'miniutilities:light_blue_lapis_caelestis', 'miniutilities:cyan_lapis_caelestis', 'miniutilities:blue_lapis_caelestis', 'miniutilities:purple_lapis_caelestis', 'miniutilities:magenta_lapis_caelestis', 'miniutilities:pink_lapis_caelestis', 'miniutilities:brown_lapis_caelestis', 'clickmachine:auto_clicker', 'psi:programmer', 'psi:cad_assembler', 'integratednbt:nbt_extractor', 'tinkers_reforged:kepu_ore', 'wormhole:creative_energy_cell', 'goldenhopper:golden_hopper', 'draconicevolution:placed_item']) }
    var pickaxe = ['minecraft:mineable/pickaxe', 'avaritia:mineable/infinity_pickaxe', 'tconstruct:mineable/pickadze', 'immersiveengineering:mineable/drill']
    pickaxe.forEach(P => { mineablePickaxe(P) })
    function mineableAxe(axe) { e.add(axe, ['naturesaura:ancient_slab', 'naturesaura:auto_crafter', 'naturesaura:flower_generator', 'naturesaura:oak_generator', 'naturesaura:ancient_stairs', 'naturesaura:wood_stand', 'naturesaura:offering_table']) }
    var axe = ['minecraft:mineable/axe', 'avaritia:mineable/infinity_axe', 'tconstruct:mineable/hand_axe']
    axe.forEach(A => { mineableAxe(A) })

    e.add('minecraft:mineable/shovel', ['snad:suol_snad', 'snad:red_snad', 'snad:snad', 'psi:psidust_block'])

    //Unknown tag
    e.add('forge:ores', 'ragnamod_seven:unknown_ore')
    e.add('forge:ores/unknown', 'ragnamod_seven:unknown_ore')

    //Candles tag
    e.add('minecraft:candles', ['hexerei:candle_cyan', 'hexerei:candle_red', 'hexerei:candle_purple', 'hexerei:candle_pink', 'hexerei:candle_orange', 'hexerei:candle_lime', 'hexerei:candle_black', 'hexerei:candle_blue', 'supplementaries:candle_holder', 'supplementaries:candle_holder_black', 'supplementaries:candle_holder_red', 'supplementaries:candle_holder_green', 'supplementaries:candle_holder_brown', 'supplementaries:candle_holder_blue', 'supplementaries:candle_holder_purple', 'supplementaries:candle_holder_cyan', 'supplementaries:candle_holder_light_gray', 'hexerei:candle', 'supplementaries:candle_holder_pink', 'supplementaries:candle_holder_lime', 'supplementaries:candle_holder_yellow', 'supplementaries:candle_holder_light_blue', 'supplementaries:candle_holder_magenta', 'supplementaries:candle_holder_orange', 'supplementaries:candle_holder_white', 'supplementaries:candle_holder_gray', 'hexerei:candle_yellow'])

})
onEvent('tags.fluids', e => {

    //Blood
    e.add('forge:blood', ["bloodmagic:life_essence_fluid", "evilcraft:blood", "hexerei:blood_fluid", "tconstruct:blood"])
    //Ethylene
    e.add('forge:ethene', 'immersivepetroleum:ethylene')

})