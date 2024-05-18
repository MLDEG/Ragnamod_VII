//priority: 10000
onEvent('recipes', function (e) {
    /**********************FUNCTION***********************/
    function replaceIO(input, output) {
        e.replaceInput({}, input, output)
        e.replaceOutput({}, input, output)
    }
    //Extruding
    function extrudingFTB(input, countIn, output, countOut) { e.custom({ "type": "ftbic:extruding", "inputItems": [{ "ingredient": { "item": input }, "count": countIn }], "outputItems": [{ "item": output, "count": countOut }] }) }
    //Metal Press
    function metalPress(mold, input, countIn, output, countOut) { e.custom({ "type": "immersiveengineering:metal_press", "mold": mold, "result": { "count": countOut, "base_ingredient": { "item": output } }, "input": { "count": countIn, "base_ingredient": { "item": input } }, "energy": 2400 }) }
    //Casting Table
    function castingTable(cast, consumed, fluid, amount, output, cool) { e.custom({ "type": "tconstruct:casting_table", "cast": { "tag": "tconstruct:casts/" + cast }, "cast_consumed": consumed, "fluid": { "name": fluid, "amount": amount }, "result": { "item": output }, "cooling_time": cool }) }
    //Rolling Mill
    function rollingCreate(input, output, count) { e.custom({ "type": "createaddition:rolling", "input": { "item": input }, "result": { "item": output, "count": count } }) }
    //Multiservo Press
    function multiPress(input, count, press, output) { e.custom({ "type": "thermal:press", "ingredients": [{ "item": input, "count": count }, { "item": press }], "result": [{ "item": output }] }) }
    //Multiservo Press Plate
    function multiPressPlate(input, count, output) { e.custom({ "type": "thermal:press", "ingredients": { "item": input, "count": count }, "result": [{ "item": output }] }) }
    //Multiservo Press Rod
    function multiPressRodWire(input, press, output, outcount) { e.custom({ "type": "thermal:press", "ingredients": [{ "item": input }, { "item": press }], "result": [{ "item": output, "count": outcount }] }) }
    //Pressing Create
    function createPress(input, output) { e.custom({ "type": "create:pressing", "ingredients": [{ "item": input }], "results": [{ "item": output }] }) }
    //Rolling FTB
    function rollingFTB(input, count, output) { e.custom({ "type": "ftbic:rolling", "inputItems": [{ "ingredient": { "item": input }, "count": count }], "outputItems": [{ "item": output }] }) }
    //Crusher MEKA
    function crusherMeka(input, output, count) { e.custom({ "type": "mekanism:crushing", "input": { "ingredient": { "item": input } }, "output": { "item": output, "count": count } }) }
    //Crusher MEKA Tag
    function crusherMekaTag(input, output, count) { e.custom({ "type": "mekanism:crushing", "input": { "ingredient": { "tag": input } }, "output": { "item": output, "count": count } }) }
    //Crusher Occultism
    function crusherOccu(input, output, count, ignore) { e.custom({ "type": "occultism:crushing", "ingredient": { "item": input }, "result": { "item": output, "count": count }, "crushing_time": 200, "ignore_crushing_multiplier": ignore }) }
    //Crusher Occultism Tag
    function crusherOccuTag(input, output, count, ignore) { e.custom({ "type": "occultism:crushing", "ingredient": { "tag": input }, "result": { "item": output, "count": count }, "crushing_time": 200, "ignore_crushing_multiplier": ignore }) }
    //Pulverizer Thermal
    function crusherThermal(input, output, amount) { e.custom({ "type": "thermal:pulverizer", "ingredient": { "item": input }, "result": [{ "item": output, "chance": amount }] }) }
    //Pulverizer Thermal Tag
    function crusherThermalTag(input, output, amount) { e.custom({ "type": "thermal:pulverizer", "ingredient": { "tag": input }, "result": [{ "item": output, "chance": amount }] }) }
    //Macerating FTB
    function crusherFTB(input, countIn, output, countOut) { e.custom({ "type": "ftbic:macerating", "inputItems": [{ "ingredient": { "item": input }, "count": countIn }], "outputItems": [{ "item": output, "count": countOut }] }) }
    //Macerating FTB Tag
    function crusherFTBTag(input, countIn, output, countOut) { e.custom({ "type": "ftbic:macerating", "inputItems": [{ "ingredient": { "tag": input }, "count": countIn }], "outputItems": [{ "item": output, "count": countOut }] }) }
    //Crusher Create
    function crusherCreate(input, output) { e.custom({ "type": "create:milling", "ingredients": [{ "item": input }], "results": [{ "item": output }], "processingTime": 100 }) }
    //Crusher Create Tag
    function crusherCreateTag(input, output) { e.custom({ "type": "create:milling", "ingredients": [{ "tag": input }], "results": [{ "item": output }], "processingTime": 100 }) }
    //Crusher Immersive
    function crusherIE(input, output) { e.custom({ "type": "immersiveengineering:crusher", "secondaries": [], "result": { "item": output }, "input": { "item": input }, "energy": 3000 }) }
    //Crusher Immersive
    function crusherIETag(input, output) { e.custom({ "type": "immersiveengineering:crusher", "secondaries": [], "result": { "item": output }, "input": { "tag": input }, "energy": 3000 }) }
    //Fermenter
    function fermenter(input, output, outamount) { e.custom({ "type": "immersiveengineering:fermenter", "fluid": { "fluid": output, "amount": outamount }, "input": { "item": input }, "energy": 6400 }) }
    //Squeezer
    function squeezer(input, output, outamount) { e.custom({ "type": "immersiveengineering:squeezer", "fluid": { "fluid": output, "amount": outamount }, "input": { "tag": input }, "energy": 6400 }) }
    //Thermopneumatic Proccesing Plant
    function thermo_plant(input, output, outamount) { e.custom({ "type": "pneumaticcraft:thermo_plant", "item_input": { "item": input }, "fluid_input": { "type": "pneumaticcraft:fluid", "tag": "pneumaticcraft:yeast_culture", "amount": 100 }, "fluid_output": { "fluid": output, "amount": outamount }, "temperature": { "min_temp": 303, "max_temp": 333 }, "exothermic": true }) }
    //Thermopneumatic Proccesing Plant tag
    function thermo_planttag(input, output, outamount) { e.custom({ "type": "pneumaticcraft:thermo_plant", "item_input": { "tag": input }, "fluid_output": { "fluid": output, "amount": outamount }, "temperature": { "min_temp": 303, "max_temp": 333 }, "exothermic": true }) }
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
    ['#forge:ingots/electrum', 'immersiveengineering:ingot_electrum', 'createaddition:electrum_ingot'].forEach(I => { replaceIO(I, 'thermal:electrum_ingot') });
    ['#forge:ingots/cobalt', 'chemlib:cobalt_ingot'].forEach(I => { replaceIO(I, 'tconstruct:cobalt_ingot') });
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
    ['#forge:nuggets/cobalt', 'chemlib:cobalt_nugget'].forEach(I => { replaceIO(I, 'tconstruct:cobalt_nugget') });
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
    ['#forge:storage_blocks/cobalt', 'chemlib:cobalt_metal_block'].forEach(I => { replaceIO(I, 'tconstruct:cobalt_block') });
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
    ['#forge:dusts/lithium', 'chemlib:lithium_dust'].forEach(I => { replaceIO(I, 'mekanism:dust_lithium') });
    crusherMeka('minecraft:basalt', 'infernalexp:basalt_cobbled', 1);
    crusherMeka('minecraft:soul_sand', 'thermal_extra:soul_sand_dust', 1);
    crusherMeka('occultism:iesnium_ingot', 'occultism:iesnium_dust', 1);
    crusherMeka('evilcraft:dark_gem', 'evilcraft:dark_gem_crushed', 1);
    crusherMeka('draconicevolution:draconium_ingot', 'draconicevolution:draconium_dust', 1);
    crusherMeka('draconicevolution:awakened_draconium_ingot', 'draconicevolution:awakened_draconium_dust', 1);
    crusherMeka('minecraft:ender_pearl', 'ae2:ender_dust', 1);
    crusherMeka('thermal:sulfur', 'thermal:sulfur_dust', 1);
    crusherMeka('chemlib:platinum_ingot', 'chemlib:platinum_dust', 1);
    crusherMeka('ftbic:iridium_ingot', 'ftbic:iridium_dust', 1);
    crusherMeka('thermal:electrum_ingot', 'thermal:electrum_dust', 1);
    crusherMeka('thermal:silver_ingot', 'thermal:silver_dust', 1);
    crusherMeka('thermal:constantan_ingot', 'thermal:constantan_dust', 1);
    crusherMeka('thermal:nickel_ingot', 'thermal:nickel_dust', 1);
    crusherMeka('thermal:enderium_ingot', 'thermal:enderium_dust', 1);
    crusherMeka('create:zinc_ingot', 'chemlib:zinc_dust', 1);
    crusherMeka('redstone_arsenal:flux_ingot', 'redstone_arsenal:flux_dust', 1);
    crusherMeka('tinkers_reforged:crusteel_ingot', 'tinkers_reforged:crusteel_dust', 1);
    crusherMeka('tinkers_reforged:yokel_ingot', 'tinkers_reforged:yokel_dust', 1);
    crusherMeka('tinkers_reforged:wavy_ingot', 'tinkers_reforged:wavy_dust', 1);
    crusherMeka('tinkers_reforged:baolian_ingot', 'tinkers_reforged:baolian_dust', 1);
    crusherMeka('tinkers_reforged:duralumin_ingot', 'tinkers_reforged:duralumin_dust', 1);
    crusherMeka('tinkers_reforged:piroot_ingot', 'tinkers_reforged:piroot_dust', 1);
    crusherMeka('tinkers_reforged:gelot_ingot', 'tinkers_reforged:gelot_dust', 1);
    crusherMeka('tinkers_reforged:kepu_ingot', 'tinkers_reforged:kepu_dust', 1);
    crusherMeka('tinkers_reforged:gausum_ingot', 'tinkers_reforged:gausum_dust', 1);
    crusherMeka('tinkers_reforged:felsteel_ingot', 'tinkers_reforged:felsteel_dust', 1);
    crusherMeka('tinkers_reforged:electrical_copper_ingot', 'tinkers_reforged:electrical_copper_dust', 1);
    crusherMeka('tinkers_reforged:galu_ingot', 'tinkers_reforged:galu_dust', 1);
    crusherMeka('tinkers_reforged:blazing_copper_ingot', 'tinkers_reforged:blazing_copper_dust', 1);
    crusherMeka('tinkers_reforged:magma_steel_ingot', 'tinkers_reforged:magma_steel_dust', 1);
    crusherMeka('tinkers_reforged:cyber_steel_ingot', 'tinkers_reforged:cyber_steel_dust', 1);
    crusherMeka('tinkers_reforged:lavium_ingot', 'tinkers_reforged:lavium_dust', 1);
    crusherMeka('tinkers_reforged:qivium_ingot', 'tinkers_reforged:qivium_dust', 1);
    crusherMeka('tinkers_reforged:chorus_metal_ingot', 'tinkers_reforged:chorus_metal_dust', 1);
    crusherMeka('tinkers_reforged:durasteel_ingot', 'tinkers_reforged:durasteel_dust', 1);
    crusherMeka('tinkers_reforged:aluminum_ingot', 'tinkers_reforged:aluminum_dust', 1);
    crusherMeka('immersivepetroleum:petcoke', 'immersivepetroleum:petcoke_dust', 1);
    crusherMeka('thermal:coal_coke', 'immersiveengineering:dust_coke', 1);
    crusherMeka('immersiveengineering:ingot_hop_graphite', 'immersiveengineering:dust_hop_graphite', 1);
    crusherMeka('chemlib:lithium_ingot', 'mekanism:dust_lithium', 1);
    crusherMeka('thermal:niter', 'thermal:niter_dust', 1);
    crusherMeka('thermal:apatite', 'thermal:apatite_dust', 1);
    crusherMeka('thermal:cinnabar', 'thermal:cinnabar_dust', 1);
    crusherMekaTag('forge:gems/amethyst', 'thermal_extra:amethyst_dust', 1);
    crusherOccu('minecraft:basalt', 'infernalexp:basalt_cobbled', 1, true);
    crusherOccu('evilcraft:dark_gem', 'evilcraft:dark_gem_crushed', 1, true);
    crusherOccu('draconicevolution:draconium_ingot', 'draconicevolution:draconium_dust', 1, true);
    crusherOccu('draconicevolution:awakened_draconium_ingot', 'draconicevolution:awakened_draconium_dust', 1, true);
    crusherOccu('tinkers_reforged:crusteel_ingot', 'tinkers_reforged:crusteel_dust', 1, true);
    crusherOccu('tinkers_reforged:yokel_ingot', 'tinkers_reforged:yokel_dust', 1, true);
    crusherOccu('tinkers_reforged:wavy_ingot', 'tinkers_reforged:wavy_dust', 1, true);
    crusherOccu('tinkers_reforged:baolian_ingot', 'tinkers_reforged:baolian_dust', 1, true);
    crusherOccu('tinkers_reforged:duralumin_ingot', 'tinkers_reforged:duralumin_dust', 1, true);
    crusherOccu('tinkers_reforged:piroot_ingot', 'tinkers_reforged:piroot_dust', 1, true);
    crusherOccu('tinkers_reforged:gelot_ingot', 'tinkers_reforged:gelot_dust', 1, true);
    crusherOccu('tinkers_reforged:kepu_ingot', 'tinkers_reforged:kepu_dust', 1, true);
    crusherOccu('tinkers_reforged:gausum_ingot', 'tinkers_reforged:gausum_dust', 1, true);
    crusherOccu('tinkers_reforged:felsteel_ingot', 'tinkers_reforged:felsteel_dust', 1, true);
    crusherOccu('tinkers_reforged:electrical_copper_ingot', 'tinkers_reforged:electrical_copper_dust', 1, true);
    crusherOccu('tinkers_reforged:galu_ingot', 'tinkers_reforged:galu_dust', 1, true);
    crusherOccu('tinkers_reforged:blazing_copper_ingot', 'tinkers_reforged:blazing_copper_dust', 1, true);
    crusherOccu('tinkers_reforged:magma_steel_ingot', 'tinkers_reforged:magma_steel_dust', 1, true);
    crusherOccu('tinkers_reforged:cyber_steel_ingot', 'tinkers_reforged:cyber_steel_dust', 1, true);
    crusherOccu('tinkers_reforged:lavium_ingot', 'tinkers_reforged:lavium_dust', 1, true);
    crusherOccu('tinkers_reforged:qivium_ingot', 'tinkers_reforged:qivium_dust', 1, true);
    crusherOccu('tinkers_reforged:chorus_metal_ingot', 'tinkers_reforged:chorus_metal_dust', 1, true);
    crusherOccu('tinkers_reforged:durasteel_ingot', 'tinkers_reforged:durasteel_dust', 1, true);
    crusherOccu('minecraft:lapis_lazuli', 'thermal:lapis_dust', 1, true);
    crusherOccu('minecraft:charcoal', 'ftbic:charcoal_dust', 1, true);
    crusherOccu('thermal_extra:shellite_ingot', 'thermal_extra:shellite_dust', 1, true);
    crusherOccu('thermal_extra:soul_infused_ingot', 'thermal_extra:soul_infused_dust', 1, true);
    crusherOccu('minecraft:soul_sand', 'thermal_extra:soul_sand_dust', 1, true);
    crusherOccu('chemlib:lithium_ingot', 'mekanism:dust_lithium', 1, true);
    crusherOccu('ae2:fluix_crystal', 'ae2:fluix_dust', 1, true);
    crusherOccu('redstone_arsenal:flux_ingot', 'redstone_arsenal:flux_dust', 1, true);
    crusherOccu('thermal_extra:dragonsteel_ingot', 'thermal_extra:dragonsteel_dust', 1, true);
    crusherOccu('thermal_extra:twinite_ingot', 'thermal_extra:twinite_dust', 1, true);
    crusherOccu('minecraft:ender_pearl', 'ae2:ender_dust', 1, true);
    crusherOccu('minecraft:quartz', 'thermal:quartz_dust', 1, true);
    crusherOccu('minecraft:coal', 'mekanism:dust_coal', 1, true);
    crusherOccu('thermal:sulfur', 'thermal:sulfur_dust', 1, true);
    crusherOccu('immersiveengineering:ingot_hop_graphite', 'immersiveengineering:dust_hop_graphite', 1, true);
    crusherOccu('thermal:coal_coke', 'immersiveengineering:dust_coke', 1, true);
    crusherOccu('immersivepetroleum:petcoke', 'immersivepetroleum:petcoke_dust', 1, true);
    crusherOccu('mekanism:fluorite_gem', 'mekanism:dust_fluorite', 1, true);
    crusherOccu('thermal:niter', 'thermal:niter_dust', 1, true);
    crusherOccu('thermal:apatite', 'thermal:apatite_dust', 1, true);
    crusherOccu('thermal:cinnabar', 'thermal:cinnabar_dust', 1, true);
    crusherOccu('miniutilities:ender_ore', 'ae2:ender_dust', 2, false);
    crusherOccuTag('forge:gems/amethyst', 'thermal_extra:amethyst_dust', 1, true);
    crusherOccuTag('forge:gems/certus_quartz', 'ae2:certus_quartz_dust', 1, true);
    crusherOccuTag('forge:gems/diamond', 'thermal:diamond_dust', 1, true);
    crusherOccuTag('forge:gems/emerald', 'thermal:emerald_dust', 1, true);
    crusherOccuTag('forge:ores/niter', 'thermal:niter_dust', 2, false);
    crusherThermal('minecraft:basalt', 'infernalexp:basalt_cobbled', 1);
    crusherThermal('occultism:iesnium_ingot', 'occultism:iesnium_dust', 1);
    crusherThermal('evilcraft:dark_gem', 'evilcraft:dark_gem_crushed', 1);
    crusherThermal('draconicevolution:draconium_ingot', 'draconicevolution:draconium_dust', 1);
    crusherThermal('draconicevolution:awakened_draconium_ingot', 'draconicevolution:awakened_draconium_dust', 1);
    crusherThermal('tinkers_reforged:crusteel_ingot', 'tinkers_reforged:crusteel_dust', 1);
    crusherThermal('tinkers_reforged:yokel_ingot', 'tinkers_reforged:yokel_dust', 1);
    crusherThermal('tinkers_reforged:wavy_ingot', 'tinkers_reforged:wavy_dust', 1);
    crusherThermal('tinkers_reforged:baolian_ingot', 'tinkers_reforged:baolian_dust', 1);
    crusherThermal('tinkers_reforged:duralumin_ingot', 'tinkers_reforged:duralumin_dust', 1);
    crusherThermal('tinkers_reforged:piroot_ingot', 'tinkers_reforged:piroot_dust', 1);
    crusherThermal('tinkers_reforged:gelot_ingot', 'tinkers_reforged:gelot_dust', 1);
    crusherThermal('tinkers_reforged:kepu_ingot', 'tinkers_reforged:kepu_dust', 1);
    crusherThermal('tinkers_reforged:gausum_ingot', 'tinkers_reforged:gausum_dust', 1);
    crusherThermal('tinkers_reforged:felsteel_ingot', 'tinkers_reforged:felsteel_dust', 1);
    crusherThermal('tinkers_reforged:electrical_copper_ingot', 'tinkers_reforged:electrical_copper_dust', 1);
    crusherThermal('tinkers_reforged:galu_ingot', 'tinkers_reforged:galu_dust', 1);
    crusherThermal('tinkers_reforged:blazing_copper_ingot', 'tinkers_reforged:blazing_copper_dust', 1);
    crusherThermal('tinkers_reforged:magma_steel_ingot', 'tinkers_reforged:magma_steel_dust', 1);
    crusherThermal('tinkers_reforged:cyber_steel_ingot', 'tinkers_reforged:cyber_steel_dust', 1);
    crusherThermal('tinkers_reforged:lavium_ingot', 'tinkers_reforged:lavium_dust', 1);
    crusherThermal('tinkers_reforged:qivium_ingot', 'tinkers_reforged:qivium_dust', 1);
    crusherThermal('tinkers_reforged:chorus_metal_ingot', 'tinkers_reforged:chorus_metal_dust', 1);
    crusherThermal('tinkers_reforged:durasteel_ingot', 'tinkers_reforged:durasteel_dust', 1);
    crusherThermal('tinkers_reforged:aluminum_ingot', 'tinkers_reforged:aluminum_dust', 1);
    crusherThermal('minecraft:charcoal', 'ftbic:charcoal_dust', 1);
    crusherThermal('minecraft:coal', 'mekanism:dust_coal', 1);
    crusherThermal('minecraft:obsidian', 'create:powdered_obsidian', 1);
    crusherThermal('chemlib:platinum_ingot', 'chemlib:platinum_dust', 1);
    crusherThermal('immersiveengineering:ingot_hop_graphite', 'immersiveengineering:dust_hop_graphite', 1);
    crusherThermal('thermal:coal_coke', 'immersiveengineering:dust_coke', 1);
    crusherThermal('immersivepetroleum:petcoke', 'immersivepetroleum:petcoke_dust', 1);
    crusherThermal('mekanism:fluorite_gem', 'mekanism:dust_fluorite', 1);
    crusherThermal('tinkers_reforged:aluminum_ingot', 'tinkers_reforged:aluminum_dust', 1);
    crusherThermal('ftbic:iridium_ingot', 'ftbic:iridium_dust', 1);
    crusherThermal('ae2:fluix_crystal', 'ae2:fluix_dust', 1);
    crusherThermal('chemlib:lithium_ingot', 'mekanism:dust_lithium', 1);
    crusherThermal('beyond_earth:steel_ingot', 'mekanism:dust_steel', 1);
    crusherThermal('mekanism:ingot_osmium', 'mekanism:dust_osmium', 1);
    crusherThermal('create:zinc_ingot', 'chemlib:zinc_dust', 1);
    crusherThermal('mekanism:ingot_uranium', 'mekanism:dust_uranium', 1);
    crusherThermalTag('forge:gems/certus_quartz', 'ae2:certus_quartz_dust', 1);
    crusherFTB('minecraft:basalt', 1, 'infernalexp:basalt_cobbled', 1);
    crusherFTB('occultism:iesnium_ingot', 1, 'occultism:iesnium_dust', 1);
    crusherFTB('evilcraft:dark_gem', 1, 'evilcraft:dark_gem_crushed', 1);
    crusherFTB('draconicevolution:draconium_ingot', 1, 'draconicevolution:draconium_dust', 1);
    crusherFTB('draconicevolution:awakened_draconium_ingot', 1, 'draconicevolution:awakened_draconium_dust', 1);
    crusherFTB('tinkers_reforged:crusteel_ingot', 1, 'tinkers_reforged:crusteel_dust', 1);
    crusherFTB('tinkers_reforged:yokel_ingot', 1, 'tinkers_reforged:yokel_dust', 1);
    crusherFTB('tinkers_reforged:wavy_ingot', 1, 'tinkers_reforged:wavy_dust', 1);
    crusherFTB('tinkers_reforged:baolian_ingot', 1, 'tinkers_reforged:baolian_dust', 1);
    crusherFTB('tinkers_reforged:duralumin_ingot', 1, 'tinkers_reforged:duralumin_dust', 1);
    crusherFTB('tinkers_reforged:piroot_ingot', 1, 'tinkers_reforged:piroot_dust', 1);
    crusherFTB('tinkers_reforged:gelot_ingot', 1, 'tinkers_reforged:gelot_dust', 1);
    crusherFTB('tinkers_reforged:kepu_ingot', 1, 'tinkers_reforged:kepu_dust', 1);
    crusherFTB('tinkers_reforged:gausum_ingot', 1, 'tinkers_reforged:gausum_dust', 1);
    crusherFTB('tinkers_reforged:felsteel_ingot', 1, 'tinkers_reforged:felsteel_dust', 1);
    crusherFTB('tinkers_reforged:electrical_copper_ingot', 1, 'tinkers_reforged:electrical_copper_dust', 1);
    crusherFTB('tinkers_reforged:galu_ingot', 1, 'tinkers_reforged:galu_dust', 1);
    crusherFTB('tinkers_reforged:blazing_copper_ingot', 1, 'tinkers_reforged:blazing_copper_dust', 1);
    crusherFTB('tinkers_reforged:magma_steel_ingot', 1, 'tinkers_reforged:magma_steel_dust', 1);
    crusherFTB('tinkers_reforged:cyber_steel_ingot', 1, 'tinkers_reforged:cyber_steel_dust', 1);
    crusherFTB('tinkers_reforged:lavium_ingot', 1, 'tinkers_reforged:lavium_dust', 1);
    crusherFTB('tinkers_reforged:qivium_ingot', 1, 'tinkers_reforged:qivium_dust', 1);
    crusherFTB('tinkers_reforged:chorus_metal_ingot', 1, 'tinkers_reforged:chorus_metal_dust', 1);
    crusherFTB('tinkers_reforged:durasteel_ingot', 1, 'tinkers_reforged:durasteel_dust', 1);
    crusherFTB('minecraft:lapis_lazuli', 1, 'thermal:lapis_dust', 1);
    crusherFTB('minecraft:quartz', 1, 'thermal:quartz_dust', 1);
    crusherFTB('thermal:sulfur', 1, 'thermal:sulfur_dust', 1);
    crusherFTB('chemlib:platinum_ingot', 1, 'chemlib:platinum_dust', 1);
    crusherFTB('ae2:fluix_crystal', 1, 'ae2:fluix_dust', 1);
    crusherFTB('redstone_arsenal:flux_ingot', 1, 'redstone_arsenal:flux_dust', 1);
    crusherFTB('thermal_extra:dragonsteel_ingot', 1, 'thermal_extra:dragonsteel_dust', 1);
    crusherFTB('thermal_extra:twinite_ingot', 1, 'thermal_extra:twinite_dust', 1);
    crusherFTB('mekanism:ingot_osmium', 1, 'mekanism:dust_osmium', 1);
    crusherFTB('create:zinc_ingot', 1, 'chemlib:zinc_dust', 1);
    crusherFTB('thermal:electrum_ingot', 1, 'thermal:electrum_dust', 1);
    crusherFTB('thermal:silver_ingot', 1, 'thermal:silver_dust', 1);
    crusherFTB('beyond_earth:steel_ingot', 1, 'mekanism:dust_steel', 1);
    crusherFTB('thermal:constantan_ingot', 1, 'thermal:constantan_dust', 1);
    crusherFTB('minecraft:netherite_ingot', 1, 'thermal:netherite_dust', 1);
    crusherFTB('thermal:nickel_ingot', 1, 'thermal:nickel_dust', 1);
    crusherFTB('thermal_extra:shellite_ingot', 1, 'thermal_extra:shellite_dust', 1);
    crusherFTB('thermal_extra:soul_infused_ingot', 1, 'thermal_extra:soul_infused_dust', 1);
    crusherFTB('minecraft:soul_sand', 1, 'thermal_extra:soul_sand_dust', 1);
    crusherFTB('mekanism:fluorite_gem', 1, 'mekanism:dust_fluorite', 1);
    crusherFTB('immersivepetroleum:petcoke', 1, 'immersivepetroleum:petcoke_dust', 1);
    crusherFTB('thermal:coal_coke', 1, 'immersiveengineering:dust_coke', 1);
    crusherFTB('immersiveengineering:ingot_hop_graphite', 1, 'immersiveengineering:dust_hop_graphite', 1);
    crusherFTB('chemlib:lithium_ingot', 1, 'mekanism:dust_lithium', 1);
    crusherFTB('thermal:niter', 1, 'thermal:niter_dust', 1);
    crusherFTB('thermal:apatite', 1, 'thermal:apatite_dust', 1);
    crusherFTB('thermal:cinnabar', 1, 'thermal:cinnabar_dust', 1);
    crusherFTBTag('forge:gems/emerald', 1, 'thermal:emerald_dust', 1);
    crusherFTBTag('forge:gems/certus_quartz', 1, 'ae2:certus_quartz_dust', 1);
    crusherFTBTag('forge:gems/amethyst', 1, 'thermal_extra:amethyst_dust', 1);
    crusherCreate('minecraft:basalt', 'infernalexp:basalt_cobbled');
    crusherCreate('occultism:iesnium_ingot', 'occultism:iesnium_dust');
    crusherCreate('evilcraft:dark_gem', 'evilcraft:dark_gem_crushed');
    crusherCreate('draconicevolution:draconium_ingot', 'draconicevolution:draconium_dust');
    crusherCreate('draconicevolution:awakened_draconium_ingot', 'draconicevolution:awakened_draconium_dust');
    crusherCreate('tinkers_reforged:crusteel_ingot', 'tinkers_reforged:crusteel_dust');
    crusherCreate('tinkers_reforged:yokel_ingot', 'tinkers_reforged:yokel_dust');
    crusherCreate('tinkers_reforged:wavy_ingot', 'tinkers_reforged:wavy_dust');
    crusherCreate('tinkers_reforged:baolian_ingot', 'tinkers_reforged:baolian_dust');
    crusherCreate('tinkers_reforged:duralumin_ingot', 'tinkers_reforged:duralumin_dust');
    crusherCreate('tinkers_reforged:piroot_ingot', 'tinkers_reforged:piroot_dust');
    crusherCreate('tinkers_reforged:gelot_ingot', 'tinkers_reforged:gelot_dust');
    crusherCreate('tinkers_reforged:kepu_ingot', 'tinkers_reforged:kepu_dust');
    crusherCreate('tinkers_reforged:gausum_ingot', 'tinkers_reforged:gausum_dust');
    crusherCreate('tinkers_reforged:felsteel_ingot', 'tinkers_reforged:felsteel_dust');
    crusherCreate('tinkers_reforged:electrical_copper_ingot', 'tinkers_reforged:electrical_copper_dust');
    crusherCreate('tinkers_reforged:galu_ingot', 'tinkers_reforged:galu_dust');
    crusherCreate('tinkers_reforged:blazing_copper_ingot', 'tinkers_reforged:blazing_copper_dust');
    crusherCreate('tinkers_reforged:magma_steel_ingot', 'tinkers_reforged:magma_steel_dust');
    crusherCreate('tinkers_reforged:cyber_steel_ingot', 'tinkers_reforged:cyber_steel_dust');
    crusherCreate('tinkers_reforged:lavium_ingot', 'tinkers_reforged:lavium_dust');
    crusherCreate('tinkers_reforged:qivium_ingot', 'tinkers_reforged:qivium_dust');
    crusherCreate('tinkers_reforged:chorus_metal_ingot', 'tinkers_reforged:chorus_metal_dust');
    crusherCreate('tinkers_reforged:durasteel_ingot', 'tinkers_reforged:durasteel_dust');
    crusherCreate('tinkers_reforged:aluminum_ingot', 'tinkers_reforged:aluminum_dust');
    crusherCreate('thermal:sulfur', 'thermal:sulfur_dust');
    crusherCreate('thermal:niter', 'thermal:niter_dust');
    crusherCreate('chemlib:platinum_ingot', 'chemlib:platinum_dust');
    crusherCreate('thermal:bronze_ingot', 'thermal:bronze_dust');
    crusherCreate('create:zinc_ingot', 'chemlib:zinc_dust');
    crusherCreate('mekanism:ingot_uranium', 'mekanism:dust_uranium');
    crusherCreate('tinkers_reforged:aluminum_ingot', 'tinkers_reforged:aluminum_dust');
    crusherCreate('ftbic:iridium_ingot', 'ftbic:iridium_dust');
    crusherCreate('thermal:nickel_ingot', 'thermal:nickel_dust');
    crusherCreate('mekanism:ingot_osmium', 'mekanism:dust_osmium');
    crusherCreate('thermal:enderium_ingot', 'thermal:enderium_dust');
    crusherCreate('thermal:lead_ingot', 'thermal:lead_dust');
    crusherCreate('thermal:tin_ingot', 'thermal:tin_dust');
    crusherCreate('thermal:constantan_ingot', 'thermal:constantan_dust');
    crusherCreate('minecraft:gold_ingot', 'thermal:gold_dust');
    crusherCreate('minecraft:netherite_ingot', 'thermal:netherite_dust');
    crusherCreate('thermal:electrum_ingot', 'thermal:electrum_dust');
    crusherCreate('thermal:silver_ingot', 'thermal:silver_dust');
    crusherCreate('minecraft:copper_ingot', 'thermal:copper_dust');
    crusherCreate('minecraft:iron_ingot', 'thermal:iron_dust');
    crusherCreate('thermal_extra:dragonsteel_ingot', 'thermal_extra:dragonsteel_dust');
    crusherCreate('redstone_arsenal:flux_ingot', 'redstone_arsenal:flux_dust');
    crusherCreate('minecraft:soul_sand', 'thermal_extra:soul_sand_dust');
    crusherCreate('thermal_extra:soul_infused_ingot', 'thermal_extra:soul_infused_dust');
    crusherCreate('thermal_extra:shellite_ingot', 'thermal_extra:shellite_dust');
    crusherCreate('thermal_extra:twinite_ingot', 'thermal_extra:twinite_dust');
    crusherCreate('chemlib:lithium_ingot', 'mekanism:dust_lithium');
    crusherCreate('immersiveengineering:ingot_hop_graphite', 'immersiveengineering:dust_hop_graphite');
    crusherCreate('immersivepetroleum:petcoke', 'immersivepetroleum:petcoke_dust');
    crusherCreate('mekanism:fluorite_gem', 'mekanism:dust_fluorite');
    crusherCreate('thermal:apatite', 'thermal:apatite_dust');
    crusherCreate('thermal:cinnabar', 'thermal:cinnabar_dust');
    crusherCreate('minecraft:quartz', 'thermal:quartz_dust');
    crusherCreateTag('forge:gems/emerald', 'thermal:emerald_dust');
    crusherCreateTag('forge:gems/amethyst', 'thermal_extra:amethyst_dust');
    crusherIE('minecraft:basalt', 'infernalexp:basalt_cobbled');
    crusherIE('occultism:iesnium_ingot', 'occultism:iesnium_dust');
    crusherIE('evilcraft:dark_gem', 'evilcraft:dark_gem_crushed');
    crusherIE('draconicevolution:draconium_ingot', 'draconicevolution:draconium_dust');
    crusherIE('draconicevolution:awakened_draconium_ingot', 'draconicevolution:awakened_draconium_dust');
    crusherIE('tinkers_reforged:crusteel_ingot', 'tinkers_reforged:crusteel_dust');
    crusherIE('tinkers_reforged:yokel_ingot', 'tinkers_reforged:yokel_dust');
    crusherIE('tinkers_reforged:wavy_ingot', 'tinkers_reforged:wavy_dust');
    crusherIE('tinkers_reforged:baolian_ingot', 'tinkers_reforged:baolian_dust');
    crusherIE('tinkers_reforged:duralumin_ingot', 'tinkers_reforged:duralumin_dust');
    crusherIE('tinkers_reforged:piroot_ingot', 'tinkers_reforged:piroot_dust');
    crusherIE('tinkers_reforged:gelot_ingot', 'tinkers_reforged:gelot_dust');
    crusherIE('tinkers_reforged:kepu_ingot', 'tinkers_reforged:kepu_dust');
    crusherIE('tinkers_reforged:gausum_ingot', 'tinkers_reforged:gausum_dust');
    crusherIE('tinkers_reforged:felsteel_ingot', 'tinkers_reforged:felsteel_dust');
    crusherIE('tinkers_reforged:electrical_copper_ingot', 'tinkers_reforged:electrical_copper_dust');
    crusherIE('tinkers_reforged:galu_ingot', 'tinkers_reforged:galu_dust');
    crusherIE('tinkers_reforged:blazing_copper_ingot', 'tinkers_reforged:blazing_copper_dust');
    crusherIE('tinkers_reforged:magma_steel_ingot', 'tinkers_reforged:magma_steel_dust');
    crusherIE('tinkers_reforged:cyber_steel_ingot', 'tinkers_reforged:cyber_steel_dust');
    crusherIE('tinkers_reforged:lavium_ingot', 'tinkers_reforged:lavium_dust');
    crusherIE('tinkers_reforged:qivium_ingot', 'tinkers_reforged:qivium_dust');
    crusherIE('tinkers_reforged:chorus_metal_ingot', 'tinkers_reforged:chorus_metal_dust');
    crusherIE('tinkers_reforged:durasteel_ingot', 'tinkers_reforged:durasteel_dust');
    crusherIE('redstone_arsenal:flux_ingot', 'redstone_arsenal:flux_dust');
    crusherIE('thermal_extra:dragonsteel_ingot', 'thermal_extra:dragonsteel_dust');
    crusherIE('thermal_extra:twinite_ingot', 'thermal_extra:twinite_dust');
    crusherIE('thermal_extra:shellite_ingot', 'thermal_extra:shellite_dust');
    crusherIE('minecraft:netherite_ingot', 'thermal:netherite_dust');
    crusherIE('thermal:sulfur', 'thermal:sulfur_dust');
    crusherIE('minecraft:obsidian', 'create:powdered_obsidian');
    crusherIE('minecraft:quartz', 'thermal:quartz_dust');
    crusherIE('chemlib:lithium_ingot', 'mekanism:dust_lithium');
    crusherIE('ae2:fluix_crystal', 'ae2:fluix_dust');
    crusherIE('ftbic:iridium_ingot', 'ftbic:iridium_dust');
    crusherIE('thermal:enderium_ingot', 'thermal:enderium_dust');
    crusherIE('thermal_extra:soul_infused_ingot', 'thermal_extra:soul_infused_dust');
    crusherIE('minecraft:soul_sand', 'thermal_extra:soul_sand_dust');
    crusherIE('mekanism:fluorite_gem', 'mekanism:dust_fluorite');
    crusherIE('immersiveengineering:ingot_hop_graphite', 'immersiveengineering:dust_hop_graphite');
    crusherIE('minecraft:ender_pearl', 'ae2:ender_dust');
    crusherIE('minecraft:charcoal', 'ftbic:charcoal_dust');
    crusherIE('minecraft:lapis_lazuli', 'thermal:lapis_dust');
    crusherIE('thermal:apatite', 'thermal:apatite_dust');
    crusherIE('thermal:cinnabar', 'thermal:cinnabar_dust');
    crusherIE('thermal:niter', 'thermal:niter_dust');
    crusherIETag('forge:gems/diamond', 'thermal:diamond_dust');
    crusherIETag('forge:gems/emerald', 'thermal:emerald_dust');
    crusherIETag('forge:gems/certus_quartz', 'ae2:certus_quartz_dust');
    crusherIETag('forge:gems/amethyst', 'thermal_extra:amethyst_dust');
    // crusherIdynamics(input, output)
    /**********************Rodes*************************/
    ['#forge:rods/gold', 'immersiveposts:stick_gold', 'createaddition:gold_rod'].forEach(I => { replaceIO(I, 'ftbic:gold_rod') });
    ['#forge:rods/iron', 'immersiveengineering:stick_iron', 'createaddition:iron_rod', 'beyond_earth:iron_stick'].forEach(I => { replaceIO(I, 'ftbic:iron_rod') });
    ['#forge:rods/copper', 'immersiveposts:stick_copper', 'createaddition:copper_rod'].forEach(I => { replaceIO(I, 'ftbic:copper_rod') });
    ['#forge:rods/aluminum', 'immersiveengineering:stick_aluminum'].forEach(I => { replaceIO(I, 'ftbic:aluminum_rod') });
    ['#forge:rods/uranium', 'immersiveposts:stick_uranium'].forEach(I => { replaceIO(I, 'ftbic:uranium_rod') });
    ['#forge:rods/lead', 'immersiveposts:stick_lead'].forEach(I => { replaceIO(I, 'ftbic:lead_rod') });
    ['#forge:rods/electrum', 'createaddition:electrum_rod'].forEach(I => { replaceIO(I, 'immersiveposts:stick_electrum') });
    //CRAFTS
    multiPressRodWire('create:brass_ingot', 'thermal:press_rod_die', 'createaddition:brass_rod', 2);
    multiPressRodWire('tinkers_reforged:aluminum_ingot', 'thermal:press_rod_die', 'ftbic:aluminum_rod', 2);
    multiPressRodWire('thermal:bronze_ingot', 'thermal:press_rod_die', 'ftbic:bronze_rod', 2);
    multiPressRodWire('minecraft:copper_ingot', 'thermal:press_rod_die', 'ftbic:copper_rod', 2);
    multiPressRodWire('thermal:enderium_ingot', 'thermal:press_rod_die', 'ftbic:enderium_rod', 2);
    multiPressRodWire('minecraft:gold_ingot', 'thermal:press_rod_die', 'ftbic:gold_rod', 2);
    multiPressRodWire('ftbic:iridium_ingot', 'thermal:press_rod_die', 'ftbic:iridium_rod', 2);
    multiPressRodWire('minecraft:iron_ingot', 'thermal:press_rod_die', 'ftbic:iron_rod', 2);
    multiPressRodWire('thermal:lead_ingot', 'thermal:press_rod_die', 'ftbic:lead_rod', 2);
    multiPressRodWire('thermal:tin_ingot', 'thermal:press_rod_die', 'ftbic:tin_rod', 2);
    multiPressRodWire('mekanism:ingot_uranium', 'thermal:press_rod_die', 'ftbic:uranium_rod', 2);
    multiPressRodWire('beyond_earth:steel_ingot', 'thermal:press_rod_die', 'immersiveengineering:stick_steel', 2);
    multiPressRodWire('thermal:silver_ingot', 'thermal:press_rod_die', 'immersiveposts:stick_silver', 2);
    multiPressRodWire('thermal:nickel_ingot', 'thermal:press_rod_die', 'immersiveposts:stick_nickel', 2);
    multiPressRodWire('thermal:constantan_ingot', 'thermal:press_rod_die', 'immersiveposts:stick_constantan', 2);
    multiPressRodWire('thermal:electrum_ingot', 'thermal:press_rod_die', 'immersiveposts:stick_electrum', 2);
    metalPress('immersiveengineering:mold_rod', 'thermal:enderium_ingot', 1, 'ftbic:enderium_rod', 2);
    metalPress('immersiveengineering:mold_rod', 'ftbic:iridium_ingot', 1, 'ftbic:iridium_rod', 2);
    extrudingFTB('create:brass_ingot', 1, 'createaddition:brass_rod', 2);
    extrudingFTB('beyond_earth:steel_ingot', 1, 'immersiveengineering:stick_steel', 2);
    extrudingFTB('thermal:silver_ingot', 1, 'immersiveposts:stick_silver', 2);
    extrudingFTB('thermal:nickel_ingot', 1, 'immersiveposts:stick_nickel', 2);
    extrudingFTB('thermal:constantan_ingot', 1, 'immersiveposts:stick_constantan', 2);
    extrudingFTB('thermal:electrum_ingot', 1, 'immersiveposts:stick_electrum', 2);
    rollingCreate('thermal:enderium_ingot', 'ftbic:enderium_rod', 2);
    rollingCreate('thermal:bronze_ingot', 'ftbic:bronze_rod', 2);
    rollingCreate('ftbic:iridium_ingot', 'ftbic:iridium_rod', 2);
    rollingCreate('mekanism:ingot_uranium', 'ftbic:uranium_rod', 2);
    rollingCreate('thermal:constantan_ingot', 'immersiveposts:stick_constantan', 2);
    rollingCreate('thermal:electrum_ingot', 'immersiveposts:stick_electrum', 2);
    rollingCreate('thermal:tin_ingot', 'ftbic:tin_rod', 2);
    rollingCreate('thermal:lead_ingot', 'ftbic:lead_rod', 2);
    rollingCreate('thermal:silver_ingot', 'immersiveposts:stick_silver', 2);
    rollingCreate('thermal:nickel_ingot', 'immersiveposts:stick_nickel', 2);
    castingTable('multi_use/rod', false, 'tconstruct:molten_iron', 45, 'ftbic:iron_rod', 40);
    castingTable('single_use/rod', true, 'tconstruct:molten_iron', 45, 'ftbic:iron_rod', 40);
    /**********************Wires*************************/
    ['#forge:wires/gold', 'createaddition:gold_wire'].forEach(I => { replaceIO(I, 'ftbic:gold_wire') });
    ['#forge:wires/copper', 'createaddition:copper_wire', 'immersiveengineering:wire_copper'].forEach(I => { replaceIO(I, 'ftbic:copper_wire') });
    ['#forge:wires/aluminum', 'immersiveengineering:wire_aluminum'].forEach(I => { replaceIO(I, 'ftbic:aluminum_wire') });
    ['#forge:wires/electrum', 'createaddition:electrum_wire'].forEach(I => { replaceIO(I, 'immersiveengineering:wire_electrum') });
    multiPressRodWire('minecraft:iron_ingot', 'thermal:press_wire_die', 'createaddition:iron_wire', 2);
    multiPressRodWire('tinkers_reforged:aluminum_ingot', 'thermal:press_wire_die', 'ftbic:aluminum_wire', 2);
    multiPressRodWire('minecraft:copper_ingot', 'thermal:press_wire_die', 'ftbic:copper_wire', 2);
    multiPressRodWire('thermal:enderium_ingot', 'thermal:press_wire_die', 'ftbic:enderium_wire', 2);
    multiPressRodWire('minecraft:gold_ingot', 'thermal:press_wire_die', 'ftbic:gold_wire', 2);
    multiPressRodWire('thermal:electrum_ingot', 'thermal:press_wire_die', 'immersiveengineering:wire_electrum', 2);
    multiPressRodWire('beyond_earth:steel_ingot', 'thermal:press_wire_die', 'immersiveengineering:wire_steel', 2);
    multiPressRodWire('thermal:lead_ingot', 'thermal:press_wire_die', 'immersiveengineering:wire_lead', 2);
    //CRAFTS
    extrudingFTB('ftbic:lead_rod', 1, 'immersiveengineering:wire_lead', 2);
    extrudingFTB('immersiveengineering:stick_steel', 1, 'immersiveengineering:wire_steel', 2);
    extrudingFTB('immersiveposts:stick_electrum', 1, 'immersiveengineering:wire_electrum', 2);
    extrudingFTB('ftbic:iron_rod', 1, 'createaddition:iron_wire', 2);
    rollingCreate('ftbic:enderium_plate', 'ftbic:enderium_wire', 2);
    rollingCreate('thermal:electrum_plate', 'immersiveengineering:wire_electrum', 2);
    metalPress('immersiveengineering:mold_wire', 'thermal:enderium_ingot', 1, 'ftbic:enderium_wire', 2);
    castingTable('multi_use/wire', false, 'tconstruct:molten_enderium', 45, 'ftbic:enderium_wire', 40);
    castingTable('single_use/wire', true, 'tconstruct:molten_enderium', 45, 'ftbic:enderium_wire', 40);
    /**********************Gears*************************/
    ['#forge:gears/bronze', 'ftbic:bronze_gear'].forEach(I => { replaceIO(I, 'thermal:bronze_gear') });
    ['#forge:gears/copper', 'ftbic:copper_gear'].forEach(I => { replaceIO(I, 'thermal:copper_gear') });
    ['#forge:gears/enderium', 'ftbic:enderium_gear'].forEach(I => { replaceIO(I, 'thermal:enderium_gear') });
    ['#forge:gears/lead', 'ftbic:lead_gear'].forEach(I => { replaceIO(I, 'thermal:lead_gear') });
    ['#forge:gears/tin', 'ftbic:tin_gear'].forEach(I => { replaceIO(I, 'thermal:tin_gear') });
    ['#forge:gears/diamond', 'industrialforegoing:diamond_gear'].forEach(I => { replaceIO(I, 'thermal:diamond_gear') });
    ['#forge:gears/iron', 'ftbic:iron_gear', 'industrialforegoing:iron_gear'].forEach(I => { replaceIO(I, 'thermal:iron_gear') });
    ['#forge:gears/gold', 'ftbic:gold_gear', 'industrialforegoing:gold_gear'].forEach(I => { replaceIO(I, 'thermal:gold_gear') });
    //CRAFTS
    multiPress('avaritia:infinity_ingot', 4, 'thermal:press_gear_die', 'ragnamod_seven:infinity_gear');
    multiPress('tinkers_reforged:aluminum_ingot', 4, 'thermal:press_gear_die', 'ftbic:aluminum_gear');
    multiPress('ftbic:iridium_ingot', 4, 'thermal:press_gear_die', 'ftbic:iridium_gear');
    multiPress('mekanism:ingot_uranium', 4, 'thermal:press_gear_die', 'ftbic:uranium_gear');
    multiPress('minecraft:diamond', 4, 'thermal:press_gear_die', 'thermal:diamond_gear');
    multiPress('redstone_arsenal:flux_ingot', 4, 'thermal:press_gear_die', 'redstone_arsenal:flux_gear');
    multiPress('pneumaticcraft:ingot_iron_compressed', 4, 'thermal:press_gear_die', 'pneumaticcraft:compressed_iron_gear');
    multiPress('minecraft:emerald', 4, 'thermal:press_gear_die', 'thermal:emerald_gear');
    multiPress('minecraft:quartz', 4, 'thermal:press_gear_die', 'thermal:quartz_gear');
    multiPress('minecraft:lapis_lazuli', 4, 'thermal:press_gear_die', 'thermal:lapis_gear');
    extrudingFTB('avaritia:infinity_ingot', 4, 'ragnamod_seven:infinity_gear', 1);
    extrudingFTB('minecraft:diamond', 4, 'thermal:diamond_gear', 1);
    extrudingFTB('pneumaticcraft:ingot_iron_compressed', 4, 'pneumaticcraft:compressed_iron_gear', 1);
    extrudingFTB('thermal:signalum_plate', 4, 'thermal:signalum_gear', 1);
    extrudingFTB('thermal:constantan_plate', 4, 'thermal:constantan_gear', 1);
    extrudingFTB('thermal:lumium_plate', 4, 'thermal:lumium_gear', 1);
    extrudingFTB('thermal_extra:soul_infused_plate', 4, 'thermal_extra:soul_infused_gear', 1);
    extrudingFTB('thermal_extra:twinite_plate', 4, 'thermal_extra:twinite_gear', 1);
    extrudingFTB('thermal_extra:shellite_plate', 4, 'thermal_extra:shellite_gear', 1);
    extrudingFTB('minecraft:emerald', 4, 'thermal:emerald_gear', 1);
    extrudingFTB('minecraft:quartz', 4, 'thermal:quartz_gear', 1);
    extrudingFTB('minecraft:lapis_lazuli', 4, 'thermal:lapis_gear', 1);
    extrudingFTB('thermal:netherite_plate', 4, 'thermal:netherite_gear', 1);
    extrudingFTB('thermal:invar_plate', 4, 'thermal:invar_gear', 1);
    extrudingFTB('thermal:electrum_plate', 4, 'thermal:electrum_gear', 1);
    extrudingFTB('thermal:nickel_plate', 4, 'thermal:nickel_gear', 1);
    extrudingFTB('thermal:silver_plate', 4, 'thermal:silver_gear', 1);
    extrudingFTB('redstone_arsenal:flux_ingot', 4, 'redstone_arsenal:flux_gear', 1);
    extrudingFTB('thermal_extra:dragonsteel_plate', 4, 'thermal_extra:dragonsteel_gear', 1);
    metalPress('immersiveengineering:mold_gear', 'avaritia:infinity_ingot', 4, 'ragnamod_seven:infinity_gear', 1);
    metalPress('immersiveengineering:mold_gear', 'thermal:enderium_ingot', 4, 'thermal:enderium_gear', 1);
    metalPress('immersiveengineering:mold_gear', 'ftbic:iridium_ingot', 4, 'ftbic:iridium_gear', 1);
    metalPress('immersiveengineering:mold_gear', 'minecraft:diamond', 4, 'thermal:diamond_gear', 1);
    metalPress('immersiveengineering:mold_gear', 'pneumaticcraft:ingot_iron_compressed', 4, 'pneumaticcraft:compressed_iron_gear', 1);
    metalPress('immersiveengineering:mold_gear', 'thermal_extra:twinite_ingot', 4, 'thermal_extra:twinite_gear', 1);
    metalPress('immersiveengineering:mold_gear', 'thermal_extra:soul_infused_ingot', 4, 'thermal_extra:soul_infused_gear', 1);
    metalPress('immersiveengineering:mold_gear', 'thermal_extra:dragonsteel_ingot', 4, 'thermal_extra:dragonsteel_gear', 1);
    metalPress('immersiveengineering:mold_gear', 'minecraft:netherite_ingot', 4, 'thermal:netherite_gear', 1);
    metalPress('immersiveengineering:mold_gear', 'thermal:lumium_ingot', 4, 'thermal:lumium_gear', 1);
    metalPress('immersiveengineering:mold_gear', 'redstone_arsenal:flux_ingot', 4, 'redstone_arsenal:flux_gear', 1);
    metalPress('immersiveengineering:mold_gear', 'thermal_extra:shellite_ingot', 4, 'thermal_extra:shellite_gear', 1);
    metalPress('immersiveengineering:mold_gear', 'thermal:signalum_ingot', 4, 'thermal:signalum_gear', 1);
    metalPress('immersiveengineering:mold_gear', 'minecraft:emerald', 4, 'thermal:emerald_gear', 1);
    metalPress('immersiveengineering:mold_gear', 'minecraft:quartz', 4, 'thermal:quartz_gear', 1);
    metalPress('immersiveengineering:mold_gear', 'minecraft:lapis_lazuli', 4, 'thermal:lapis_gear', 1);
    castingTable('multi_use/gear', false, "tconstruct:molten_diamond", 360, 'thermal:diamond_gear', 140);
    castingTable('single_use/gear', true, "tconstruct:molten_diamond", 360, 'thermal:diamond_gear', 140);
    castingTable('multi_use/gear', false, "tconstruct:molten_emerald", 360, 'thermal:emerald_gear', 140);
    castingTable('single_use/gear', true, "tconstruct:molten_emerald", 360, 'thermal:emerald_gear', 140);
    castingTable('multi_use/gear', false, "tconstruct:molten_quartz", 360, 'thermal:quartz_gear', 40);
    castingTable('single_use/gear', true, "tconstruct:molten_quartz", 360, 'thermal:quartz_gear', 40);
    castingTable('multi_use/gear', false, "tinkers_reforged:molten_lapis", 360, 'thermal:lapis_gear', 40);
    castingTable('single_use/gear', true, "tinkers_reforged:molten_lapis", 360, 'thermal:lapis_gear', 40);
    castingTable('multi_use/gear', false, "thermal_extra:shellite", 360, 'thermal_extra:shellite_gear', 140);
    castingTable('single_use/gear', true, "thermal_extra:shellite", 360, 'thermal_extra:shellite_gear', 140);
    castingTable('multi_use/gear', false, "thermal_extra:twinite", 360, 'thermal_extra:twinite_gear', 60);
    castingTable('single_use/gear', true, "thermal_extra:twinite", 360, 'thermal_extra:twinite_gear', 60);
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
    //CRAFTS
    createPress('thermal:signalum_ingot', 'thermal:signalum_plate');
    createPress('thermal:lumium_ingot', 'thermal:lumium_plate');
    createPress('thermal:invar_ingot', 'thermal:invar_plate');
    createPress('minecraft:netherite_ingot', 'thermal:netherite_plate');
    createPress('thermal_extra:dragonsteel_ingot', 'thermal_extra:dragonsteel_plate');
    createPress('thermal:tin_ingot', 'ftbic:tin_plate');
    createPress('thermal_extra:twinite_ingot', 'thermal_extra:twinite_plate');
    createPress('thermal_extra:soul_infused_ingot', 'thermal_extra:soul_infused_plate');
    createPress('thermal_extra:shellite_ingot', 'thermal_extra:shellite_plate');
    createPress('beyond_earth:desh_ingot', 'beyond_earth:desh_plate');
    createPress('thermal:bronze_ingot', 'ftbic:bronze_plate');
    createPress('thermal:enderium_ingot', 'ftbic:enderium_plate');
    createPress('ftbic:iridium_ingot', 'ftbic:iridium_plate');
    metalPress('immersiveengineering:mold_plate', 'thermal:signalum_ingot', 1, 'thermal:signalum_plate', 1);
    metalPress('immersiveengineering:mold_plate', 'thermal:lumium_ingot', 1, 'thermal:lumium_plate', 1);
    metalPress('immersiveengineering:mold_plate', 'minecraft:netherite_ingot', 1, 'thermal:netherite_plate', 1);
    metalPress('immersiveengineering:mold_plate', 'thermal_extra:shellite_ingot', 1, 'thermal_extra:shellite_plate', 1);
    metalPress('immersiveengineering:mold_plate', 'thermal_extra:dragonsteel_ingot', 1, 'thermal_extra:dragonsteel_plate', 1);
    metalPress('immersiveengineering:mold_plate', 'thermal:enderium_ingot', 1, 'ftbic:enderium_plate', 1);
    metalPress('immersiveengineering:mold_plate', 'ftbic:iridium_ingot', 1, 'ftbic:iridium_plate', 1);
    metalPress('immersiveengineering:mold_plate', 'thermal_extra:twinite_ingot', 1, 'thermal_extra:twinite_plate', 1);
    metalPress('immersiveengineering:mold_plate', 'thermal_extra:soul_infused_ingot', 1, 'thermal_extra:soul_infused_plate', 1);
    multiPressPlate('beyond_earth:steel_ingot', 1, 'immersiveengineering:plate_steel');
    multiPressPlate('create:brass_ingot', 1, 'create:brass_sheet');
    multiPressPlate('create:zinc_ingot', 1, 'createaddition:zinc_sheet');
    multiPressPlate('mekanism:ingot_uranium', 1, 'ftbic:uranium_plate');
    multiPressPlate('tinkers_reforged:aluminum_ingot', 1, 'ftbic:aluminum_plate');
    multiPressPlate('ftbic:iridium_ingot', 1, 'ftbic:iridium_plate');
    rollingFTB('thermal:constantan_ingot', 1, 'thermal:constantan_plate');
    rollingFTB('thermal:signalum_ingot', 1, 'thermal:signalum_plate');
    rollingFTB('thermal:lumium_ingot', 1, 'thermal:lumium_plate');
    rollingFTB('thermal:invar_ingot', 1, 'thermal:invar_plate');
    rollingFTB('thermal_extra:twinite_ingot', 1, 'thermal_extra:twinite_plate');
    rollingFTB('thermal_extra:soul_infused_ingot', 1, 'thermal_extra:soul_infused_plate');
    rollingFTB('thermal_extra:shellite_ingot', 1, 'thermal_extra:shellite_plate');
    rollingFTB('thermal_extra:dragonsteel_ingot', 1, 'thermal_extra:dragonsteel_plate');
    rollingFTB('create:brass_ingot', 1, 'create:brass_sheet');
    rollingFTB('create:zinc_ingot', 1, 'createaddition:zinc_sheet');
    rollingFTB('beyond_earth:desh_ingot', 1, 'beyond_earth:desh_plate');
    rollingFTB('thermal:nickel_ingot', 1, 'thermal:nickel_plate');
    rollingFTB('thermal:electrum_ingot', 1, 'thermal:electrum_plate');
    rollingFTB('thermal:silver_ingot', 1, 'thermal:silver_plate');
    rollingFTB('minecraft:netherite_ingot', 1, 'thermal:netherite_plate');
    rollingFTB('beyond_earth:steel_ingot', 1, 'immersiveengineering:plate_steel');
    castingTable('multi_use/plate', false, "thermal_extra:shellite", 90, 'thermal_extra:shellite_plate', 140);
    castingTable('single_use/plate', true, "thermal_extra:shellite", 90, 'thermal_extra:shellite_plate', 140);
    castingTable('multi_use/plate', false, "thermal_extra:twinite", 90, 'thermal_extra:twinite_plate', 60);
    castingTable('single_use/plate', true, "thermal_extra:twinite", 90, 'thermal_extra:twinite_plate', 60);
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
    ['reliquary:bat_wing'].forEach(I => { replaceIO(I, 'forbidden_arcanus:bat_wing') });
    ['architects_palette:withered_bone', 'tconstruct:necrotic_bone'].forEach(I => { replaceIO(I, 'bhc:wither_bone') });
    ['forge:silicon', 'ae2:silicon'].forEach(I => { replaceIO(I, 'ftbic:silicon') });
    e.replaceInput({}, 'minecraft:crafting_table', '#forge:workbenches')
    e.replaceInput({}, 'minecraft:stick', '#forge:rods/wooden')
    e.replaceInput({}, 'pneumaticcraft:small_tank', 'mob_grinding_utils:tank')
    /**********************Ethanol Unify*************************/
    fermenter('minecraft:potato', 'immersiveengineering:ethanol', 80)
    fermenter('minecraft:melon_slice', 'immersiveengineering:ethanol', 20)
    fermenter('minecraft:sweet_berries', 'immersiveengineering:ethanol', 50)
    fermenter('minecraft:apple', 'immersiveengineering:ethanol', 80)
    fermenter('minecraft:sugar_cane', 'immersiveengineering:ethanol', 80)
    fermenter('minecraft:honey_bottle', 'immersiveengineering:ethanol', 250)
    fermenter('minecraft:glow_berries', 'immersiveengineering:ethanol', 100)
    fermenter('minecraft:beetroot', 'immersiveengineering:ethanol', 40)
    fermenter('minecraft:poisonous_potato', 'immersiveengineering:ethanol', 160)
    thermo_plant('minecraft:potato', 'pneumaticcraft:ethanol', 100)
    thermo_plant('minecraft:melon_slice', 'pneumaticcraft:ethanol', 40)
    thermo_plant('minecraft:sweet_berries', 'pneumaticcraft:ethanol', 70)
    thermo_plant('minecraft:apple', 'pneumaticcraft:ethanol', 100)
    thermo_plant('minecraft:sugar_cane', 'pneumaticcraft:ethanol', 100)
    thermo_plant('minecraft:honey_bottle', 'pneumaticcraft:ethanol', 270)
    thermo_plant('minecraft:glow_berries', 'pneumaticcraft:ethanol', 120)
    thermo_plant('minecraft:beetroot', 'pneumaticcraft:ethanol', 60)
    thermo_plant('minecraft:poisonous_potato', 'pneumaticcraft:ethanol', 180)
    /**********************Seed/Vegetable Oil  Unify*************************/
    squeezer('forge:seeds', 'immersiveengineering:plantoil', 100)
    squeezer('forge:crops', 'immersiveengineering:plantoil', 50)
    thermo_planttag('forge:seeds', 'pneumaticcraft:vegetable_oil', 120)
    thermo_planttag('forge:crops', 'pneumaticcraft:vegetable_oil', 70)
})