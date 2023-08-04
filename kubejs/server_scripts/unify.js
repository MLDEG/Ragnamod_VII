//priority: 10000
onEvent('recipes', function (e) {
    /**********************FUNCTION***********************/
    function replaceIO(input, output) {
        e.replaceInput({}, input, output)
        e.replaceOutput({}, input, output)
    }
    /**********************Ingots*************************/
    ['#forge:ingots/steel', 'mekanism:ingot_steel', 'immersiveengineering:ingot_steel'].forEach(I => { replaceIO(I, 'beyond_earth:steel_ingot') });
    ['#forge:ingots/zinc', 'chemlib:zinc_ingot'].forEach(I => { replaceIO(I, 'create:zinc_ingot') });
    ['#forge:ingots/silver', 'chemlib:silver_ingot', 'darkerdepths:silver_ingot', 'occultism:silver_ingot', 'immersiveengineering:ingot_silver'].forEach(I => { replaceIO(I, 'thermal:silver_ingot') });
    ['#forge:ingots/aluminum', 'chemlib:aluminum_ingot', 'ftbic:aluminum_ingot', 'immersiveengineering:ingot_aluminum'].forEach(I => { replaceIO(I, 'tinkers_reforged:aluminum_ingot') });
    ['#forge:ingots/bronze', 'ftbic:bronze_ingot', 'mekanism:ingot_bronze'].forEach(I => { replaceIO(I, 'thermal:bronze_ingot') });
    ['#forge:ingots/enderium', 'ftbic:enderium_ingot'].forEach(I => { replaceIO(I, 'thermal:enderium_ingot') });
    ['#forge:ingots/iridium', 'chemlib:iridium_ingot'].forEach(I => { replaceIO(I, 'ftbic:iridium_ingot') });
    ['#forge:ingots/lead', 'chemlib:lead_ingot', 'ftbic:lead_ingot', 'mekanism:ingot_lead', 'immersiveengineering:ingot_lead'].forEach(I => { replaceIO(I, 'thermal:lead_ingot') });
    ['#forge:ingots/tin', 'chemlib:tin_ingot', 'ftbic:tin_ingot', 'mekanism:ingot_tin'].forEach(I => { replaceIO(I, 'thermal:tin_ingot') });
    ['#forge:ingots/uranium', 'chemlib:uranium_ingot', 'ftbic:uranium_ingot', 'immersiveengineering:ingot_uranium'].forEach(I => { replaceIO(I, 'mekanism:ingot_uranium') });
    ['#forge:ingots/osmium', 'chemlib:osmium_ingot'].forEach(I => { replaceIO(I, 'mekanism:ingot_osmium') });
    ['#forge:ingots/nickel', 'chemlib:nickel_ingot', 'immersiveengineering:ingot_nickel'].forEach(I => { replaceIO(I, 'thermal:nickel_ingot') });
    ['#forge:ingots/constantan', 'immersiveengineering:ingot_constantan'].forEach(I => { replaceIO(I, 'thermal:constantan_ingot') });
    ['#forge:ingots/electrum', 'immersiveengineering:ingot_electrum'].forEach(I => { replaceIO(I, 'thermal:electrum_ingot') });
    /**********************Nuggets*************************/
    ['#forge:nuggets/copper', 'tconstruct:copper_nugget', 'thermal:copper_nugget', 'immersiveengineering:nugget_copper', 'ftbic:copper_nugget'].forEach(I => { replaceIO(I, 'create:copper_nugget') });
    ['#forge:nuggets/lead', 'chemlib:lead_nugget', 'ftbic:lead_nugget', 'mekanism:nugget_lead', 'immersiveengineering:nugget_lead'].forEach(I => { replaceIO(I, 'thermal:lead_nugget') });
    ['#forge:nuggets/lead', 'chemlib:lead_nugget', 'ftbic:lead_nugget', 'mekanism:nugget_lead', 'immersiveengineering:nugget_lead'].forEach(I => { replaceIO(I, 'thermal:lead_nugget') });
    ['#forge:nuggets/aluminum', 'ftbic:aluminum_nugget', 'chemlib:aluminum_nugget', 'immersiveengineering:nugget_aluminum'].forEach(I => { replaceIO(I, 'tinkers_reforged:aluminum_nugget') });
    ['#forge:nuggets/constantan', 'immersiveengineering:nugget_constantan'].forEach(I => { replaceIO(I, 'thermal:constantan_nugget') });
    ['#forge:nuggets/electrum', 'immersiveengineering:nugget_electrum'].forEach(I => { replaceIO(I, 'thermal:electrum_nugget') });
    ['#forge:nuggets/osmium', 'chemlib:osmium_nugget'].forEach(I => { replaceIO(I, 'mekanism:nugget_osmium') });
    ['#forge:nuggets/netherite', 'tconstruct:netherite_nugget'].forEach(I => { replaceIO(I, 'thermal:netherite_nugget') });
    ['#forge:nuggets/zinc', 'chemlib:zinc_nugget'].forEach(I => { replaceIO(I, 'create:zinc_nugget') });
    ['#forge:nuggets/iridium', 'chemlib:iridium_nugget'].forEach(I => { replaceIO(I, 'ftbic:iridium_nugget') });
    ['#forge:nuggets/enderium', 'ftbic:enderium_nugget'].forEach(I => { replaceIO(I, 'thermal:enderium_nugget') });
    ['#forge:nuggets/nickel', 'chemlib:nickel_nugget', 'immersiveengineering:nugget_nickel'].forEach(I => { replaceIO(I, 'thermal:nickel_nugget') });
    ['#forge:nuggets/steel', 'mekanism:nugget_steel', 'immersiveengineering:nugget_steel'].forEach(I => { replaceIO(I, 'beyond_earth:steel_nugget') });
    ['#forge:nuggets/bronze', 'ftbic:bronze_nugget', 'mekanism:nugget_bronze'].forEach(I => { replaceIO(I, 'thermal:bronze_nugget') });
    ['#forge:nuggets/silver', 'chemlib:silver_nugget', 'immersiveengineering:nugget_silver', 'occultism:silver_nugget'].forEach(I => { replaceIO(I, 'thermal:silver_nugget') });
    ['#forge:nuggets/tin', 'chemlib:tin_nugget', 'ftbic:tin_nugget', 'mekanism:nugget_tin'].forEach(I => { replaceIO(I, 'thermal:tin_nugget') });
    ['#forge:nuggets/uranium', 'chemlib:uranium_nugget', 'ftbic:uranium_nugget', 'immersiveengineering:nugget_uranium'].forEach(I => { replaceIO(I, 'mekanism:nugget_uranium') });
    /**********************Blocks*************************/
    ['#forge:storage_blocks/lead', 'ftbic:lead_block', 'mekanism:block_lead', 'immersiveengineering:storage_lead'].forEach(I => { replaceIO(I, 'thermal:lead_block') });
    ['#forge:storage_blocks/silver', 'darkerdepths:silver_block', 'occultism:silver_block', 'immersiveengineering:storage_silver'].forEach(I => { replaceIO(I, 'thermal:silver_block') });
    ['#forge:storage_blocks/uranium', 'ftbic:uranium_block', 'immersiveengineering:storage_uranium'].forEach(I => { replaceIO(I, 'mekanism:block_uranium') });
    ['#forge:storage_blocks/tin', 'ftbic:tin_block', 'mekanism:block_tin'].forEach(I => { replaceIO(I, 'thermal:tin_block') });
    ['#forge:storage_blocks/steel', 'mekanism:block_steel', 'immersiveengineering:storage_steel'].forEach(I => { replaceIO(I, 'beyond_earth:steel_block') });
    ['#forge:storage_blocks/charcoal', 'mekanism:block_charcoal', 'quark:charcoal_block'].forEach(I => { replaceIO(I, 'thermal:charcoal_block') });
    ['#forge:storage_blocks/bronze', 'ftbic:bronze_block', 'mekanism:block_bronze'].forEach(I => { replaceIO(I, 'thermal:bronze_block') });
    ['#forge:storage_blocks/aluminum', 'ftbic:aluminum_block', 'immersiveengineering:storage_aluminum'].forEach(I => { replaceIO(I, 'tinkers_reforged:aluminum_block') });
    ['#forge:storage_blocks/constantan', 'immersiveengineering:storage_constantan'].forEach(I => { replaceIO(I, 'thermal:constantan_block') });
    ['#forge:storage_blocks/enderium', 'ftbic:enderium_block'].forEach(I => { replaceIO(I, 'thermal:enderium_block') });
    ['#forge:storage_blocks/nickel', 'immersiveengineering:storage_nickel'].forEach(I => { replaceIO(I, 'thermal:nickel_block') });
    ['#forge:storage_blocks/electrum', 'immersiveengineering:storage_electrum'].forEach(I => { replaceIO(I, 'thermal:electrum_block') });
    /**********************Dusts*************************/
    ['#forge:dusts/ender_pearl', '#forge:dusts/ender', 'ftbic:ender_dust', 'miniutilities:ender_dust', 'thermal:ender_pearl_dust'].forEach(I => { replaceIO(I, 'ae2:ender_dust') });
    ['#forge:dusts/obsidian', 'ftbic:obsidian_dust', 'mekanism:dust_obsidian', 'occultism:obsidian_dust'].forEach(I => { replaceIO(I, 'create:powdered_obsidian') });
    ['#forge:dusts/osmium', 'chemlib:osmium_dust'].forEach(I => { replaceIO(I, 'mekanism:dust_osmium') });
    ['#forge:dusts/enderium', 'ftbic:enderium_dust'].forEach(I => { replaceIO(I, 'thermal:enderium_dust') });
    ['#forge:dusts/steel', 'immersiveengineering:dust_steel'].forEach(I => { replaceIO(I, 'mekanism:dust_steel') });
    ['#forge:dusts/quartz', 'mekanism:dust_quartz'].forEach(I => { replaceIO(I, 'thermal:quartz_dust') });
    ['#forge:dusts/lapis', 'mekanism:dust_lapis_lazuli'].forEach(I => { replaceIO(I, 'thermal:lapis_dust') });
    ['#forge:dusts/emerald', 'mekanism:dust_emerald'].forEach(I => { replaceIO(I, 'thermal:emerald_dust') });
    ['#forge:dusts/netherite', 'mekanism:dust_netherite'].forEach(I => { replaceIO(I, 'thermal:netherite_dust') });
    ['#forge:dusts/charcoal', 'mekanism:dust_charcoal'].forEach(I => { replaceIO(I, 'ftbic:charcoal_dust') });
    ['#forge:dusts/wood', '#forge:sawdust', 'mekanism:sawdust', 'immersiveengineering:dust_wood'].forEach(I => { replaceIO(I, 'thermal:sawdust') });
    ['#forge:dusts/sulfur', 'chemlib:sulfur_dust', 'immersiveengineering:dust_sulfur', 'mekanism:dust_sulfur'].forEach(I => { replaceIO(I, 'thermal:sulfur_dust') });
    ['#forge:dusts/diamond', 'mekanism:dust_diamond', 'ftbic:diamond_dust', 'createaddition:diamond_grit'].forEach(I => { replaceIO(I, 'thermal:diamond_dust') });
    ['#forge:dusts/coal', 'ftbic:coal_dust', 'bloodmagic:coalsand'].forEach(I => { replaceIO(I, 'mekanism:dust_coal') });
    ['#forge:dusts/iridium', 'chemlib:iridium_dust'].forEach(I => { replaceIO(I, 'ftbic:iridium_dust') });
    ['#forge:dusts/constantan', 'immersiveengineering:dust_constantan'].forEach(I => { replaceIO(I, 'thermal:constantan_dust') });
    ['#forge:dusts/electrum', 'immersiveengineering:dust_electrum'].forEach(I => { replaceIO(I, 'thermal:electrum_dust') });
    ['#forge:dusts/bronze', 'ftbic:bronze_dust', 'mekanism:dust_bronze'].forEach(I => { replaceIO(I, 'thermal:bronze_dust') });
    ['#forge:dusts/nickel', 'chemlib:nickel_dust', 'immersiveengineering:dust_nickel'].forEach(I => { replaceIO(I, 'thermal:nickel_dust') });
    ['#forge:dusts/tin', 'ftbic:tin_dust', 'chemlib:tin_dust', 'mekanism:dust_tin'].forEach(I => { replaceIO(I, 'thermal:tin_dust') });
    ['#forge:dusts/silver', 'occultism:silver_dust', 'immersiveengineering:dust_silver', 'chemlib:silver_dust'].forEach(I => { replaceIO(I, 'thermal:silver_dust') });
    ['#forge:dusts/aluminum', 'ftbic:aluminum_dust', 'immersiveengineering:dust_aluminum', 'chemlib:aluminum_dust'].forEach(I => { replaceIO(I, 'tinkers_reforged:aluminum_dust') });
    ['#forge:dusts/uranium', 'ftbic:uranium_dust', 'immersiveengineering:dust_uranium', 'chemlib:uranium_dust'].forEach(I => { replaceIO(I, 'mekanism:dust_uranium') });
    ['#forge:dusts/lead', 'immersiveengineering:dust_lead', 'mekanism:dust_lead', 'chemlib:lead_dust', 'ftbic:lead_dust'].forEach(I => { replaceIO(I, 'thermal:lead_dust') });
    ['#forge:dusts/copper', 'bloodmagic:coppersand', 'occultism:copper_dust', 'ftbic:copper_dust', 'chemlib:copper_dust', 'immersiveengineering:dust_copper', 'mekanism:dust_copper'].forEach(I => { replaceIO(I, 'thermal:copper_dust') });
    ['#forge:dusts/gold', 'bloodmagic:goldsand', 'occultism:gold_dust', 'ftbic:gold_dust', 'chemlib:gold_dust', 'immersiveengineering:dust_gold', 'mekanism:dust_gold'].forEach(I => { replaceIO(I, 'thermal:gold_dust') });
    ['#forge:dusts/iron', 'bloodmagic:ironsand', 'occultism:iron_dust', 'ftbic:iron_dust', 'chemlib:iron_dust', 'immersiveengineering:dust_iron', 'mekanism:dust_iron'].forEach(I => { replaceIO(I, 'thermal:iron_dust') });
    /**********************Rodes*************************/
    ['#forge:rods/gold', 'immersiveposts:stick_gold', 'createaddition:gold_rod'].forEach(I => { replaceIO(I, 'ftbic:gold_rod') });
    ['#forge:rods/iron', 'immersiveengineering:stick_iron', 'createaddition:iron_rod'].forEach(I => { replaceIO(I, 'ftbic:iron_rod') });
    ['#forge:rods/copper', 'immersiveposts:stick_copper', 'createaddition:copper_rod'].forEach(I => { replaceIO(I, 'ftbic:copper_rod') });
    ['#forge:rods/aluminum', 'immersiveengineering:stick_aluminum'].forEach(I => { replaceIO(I, 'ftbic:aluminum_rod') });
    ['#forge:rods/uranium', 'immersiveposts:stick_uranium'].forEach(I => { replaceIO(I, 'ftbic:uranium_rod') });
    ['#forge:rods/lead', 'immersiveposts:stick_lead'].forEach(I => { replaceIO(I, 'ftbic:lead_rod') });
    /**********************Wires*************************/
    ['#forge:wires/gold', 'createaddition:gold_wire'].forEach(I => { replaceIO(I, 'ftbic:gold_wire') });
    ['#forge:wires/copper', 'createaddition:copper_wire', 'immersiveengineering:wire_copper'].forEach(I => { replaceIO(I, 'ftbic:copper_wire') });
    ['#forge:wires/aluminum', 'immersiveengineering:wire_aluminum'].forEach(I => { replaceIO(I, 'ftbic:aluminum_wire') });
    /**********************Gears*************************/
    ['#forge:gears/bronze', 'ftbic:bronze_gear'].forEach(I => { replaceIO(I, 'thermal:bronze_gear') });
    ['#forge:gears/copper',  'ftbic:copper_gear'].forEach(I => { replaceIO(I, 'thermal:copper_gear') });
    ['#forge:gears/enderium',  'ftbic:enderium_gear'].forEach(I => { replaceIO(I, 'thermal:enderium_gear') });
    ['#forge:gears/lead',  'ftbic:lead_gear'].forEach(I => { replaceIO(I, 'thermal:lead_gear') });
    ['#forge:gears/tin',  'ftbic:tin_gear'].forEach(I => { replaceIO(I, 'thermal:tin_gear') });
    ['#forge:gears/diamond',  'industrialforegoing:diamond_gear'].forEach(I => { replaceIO(I, 'thermal:diamond_gear') });
    ['#forge:gears/iron',  'ftbic:iron_gear', 'industrialforegoing:iron_gear'].forEach(I => { replaceIO(I, 'thermal:iron_gear') });
    ['#forge:gears/gold',  'ftbic:gold_gear', 'industrialforegoing:gold_gear'].forEach(I => { replaceIO(I, 'thermal:gold_gear') });
    /**********************Plates*************************/
    ['#forge:plates/iron', 'chemlib:iron_plate', 'beyond_earth:iron_plate', 'create:iron_sheet', 'thermal:iron_plate', 'immersiveengineering:plate_iron'].forEach(I => { replaceIO(I, 'ftbic:iron_plate') });
    ['#forge:plates/gold', 'chemlib:gold_plate', 'thermal:gold_plate', 'immersiveengineering:plate_gold', 'create:golden_sheet'].forEach(I => { replaceIO(I, 'ftbic:gold_plate') });
    ['#forge:plates/copper', 'chemlib:copper_plate', 'thermal:copper_plate', 'immersiveengineering:plate_copper', 'create:copper_sheet'].forEach(I => { replaceIO(I, 'ftbic:copper_plate') });
    ['#forge:plates/nickel', 'chemlib:nickel_plate', 'immersiveengineering:plate_nickel'].forEach(I => { replaceIO(I, 'thermal:nickel_plate') });
    ['#forge:plates/lead', 'chemlib:lead_plate', 'thermal:lead_plate', 'immersiveengineering:plate_lead'].forEach(I => { replaceIO(I, 'ftbic:lead_plate') });
    ['#forge:plates/uranium', 'chemlib:uranium_plate', 'immersiveengineering:plate_uranium'].forEach(I => { replaceIO(I, 'ftbic:uranium_plate') });
    ['#forge:plates/bronze', 'thermal:bronze_plate'].forEach(I => { replaceIO(I, 'ftbic:bronze_plate') });
    ['#forge:plates/aluminum', 'chemlib:aluminum_plate', 'immersiveengineering:plate_aluminum'].forEach(I => { replaceIO(I, 'ftbic:aluminum_plate') });
    ['#forge:plates/enderium', 'thermal:enderium_plate',].forEach(I => { replaceIO(I, 'ftbic:enderium_plate') });
    ['#forge:plates/tin', 'chemlib:tin_plate', 'thermal:enderium_plate'].forEach(I => { replaceIO(I, 'ftbic:tin_plate') });
    ['#forge:plates/constantan', 'immersiveengineering:plate_constantan'].forEach(I => { replaceIO(I, 'thermal:constantan_plate') });
    ['#forge:plates/electrum', 'immersiveengineering:plate_electrum'].forEach(I => { replaceIO(I, 'thermal:electrum_plate') });
    ['#forge:plates/silver', 'chemlib:silver_plate', 'immersiveengineering:plate_silver'].forEach(I => { replaceIO(I, 'thermal:silver_plate') });
    ['#forge:plates/iridium', 'chemlib:iridium_plate'].forEach(I => { replaceIO(I, 'ftbic:iridium_plate') });
    ['#forge:plates/zinc', 'chemlib:zinc_plate'].forEach(I => { replaceIO(I, 'createaddition:zinc_sheet') });
    /**********************Raw Materials*************************/
    ['#forge:raw_materials/silver', 'darkerdepths:raw_silver', 'occultism:raw_silver', 'immersiveengineering:raw_silver'].forEach(I => { replaceIO(I, 'thermal:raw_silver') });
    ['#forge:raw_materials/nickel', 'immersiveengineering:raw_nickel'].forEach(I => { replaceIO(I, 'thermal:raw_nickel') });
    ['#forge:raw_materials/uranium', 'ftbic:uranium_chunk', 'immersiveengineering:raw_uranium'].forEach(I => { replaceIO(I, 'mekanism:raw_uranium') });
    ['#forge:raw_materials/aluminum', 'ftbic:aluminum_chunk', 'immersiveengineering:raw_aluminum'].forEach(I => { replaceIO(I, 'tinkers_reforged:raw_aluminum') });
    ['#forge:raw_materials/lead', 'ftbic:lead_chunk', 'immersiveengineering:raw_lead', 'mekanism:raw_lead'].forEach(I => { replaceIO(I, 'thermal:raw_lead') });
    ['#forge:raw_materials/tin', 'ftbic:tin_chunk', 'mekanism:raw_tin'].forEach(I => { replaceIO(I, 'thermal:raw_tin') });
    /**********************Raw Materials Blocks*************************/
    ['#forge:storage_blocks/raw_silver', 'darkerdepths:raw_silver_block', 'immersiveengineering:raw_block_silver'].forEach(I => { replaceIO(I, 'thermal:raw_silver_block') });
    ['#forge:storage_blocks/raw_nickel', 'immersiveengineering:raw_block_nickel'].forEach(I => { replaceIO(I, 'thermal:raw_nickel_block') });
    ['#forge:storage_blocks/raw_uranium', 'immersiveengineering:raw_block_uranium'].forEach(I => { replaceIO(I, 'mekanism:block_raw_uranium') });
    ['#forge:storage_blocks/raw_aluminum', 'immersiveengineering:raw_block_aluminum'].forEach(I => { replaceIO(I, 'tinkers_reforged:raw_aluminum_block') });
    ['#forge:storage_blocks/raw_tin', 'mekanism:block_raw_tin'].forEach(I => { replaceIO(I, 'thermal:raw_tin_block') });
    ['#forge:storage_blocks/raw_lead', 'immersiveengineering:raw_block_lead', 'mekanism:block_raw_lead'].forEach(I => { replaceIO(I, 'thermal:raw_lead_block') });
    ['#forge:storage_blocks/coal_coke', 'immersiveengineering:coke'].forEach(I => { replaceIO(I, 'thermal:coal_coke_block') });
    /**********************Other Unify*************************/
    ['#forge:bitumen', 'immersivepetroleum:bitumen'].forEach(I => { replaceIO(I, 'thermal:bitumen') });
    ['#forge:slag', 'immersiveengineering:slag'].forEach(I => { replaceIO(I, 'thermal:slag') });
    ['#forge:coal_coke', 'immersiveengineering:coal_coke'].forEach(I => { replaceIO(I, 'thermal:coal_coke') });


})