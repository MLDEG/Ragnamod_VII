// priority: 1

onEvent('recipes', e => {

    function stoneCutter(output, input) { e.custom({ "type": "minecraft:stonecutting", "ingredient": input, "result": output, "count": 1 }) }

    /**************************Raw Blocks************************************/
    //Silver
    stoneCutter('thermal:raw_silver_block', [{ "item": 'darkerdepths:raw_silver_block' }, { "item": 'immersiveengineering:raw_block_silver' }])
    stoneCutter('darkerdepths:raw_silver_block', [{ "item": 'thermal:raw_silver_block' }, { "item": 'immersiveengineering:raw_block_silver' }])
    stoneCutter('immersiveengineering:raw_block_silver', [{ "item": 'thermal:raw_silver_block' }, { "item": 'darkerdepths:raw_silver_block' }])
    //Lead
    stoneCutter('thermal:raw_lead_block', [{ "item": 'immersiveengineering:raw_block_lead' }, { "item": 'mekanism:block_raw_lead' }])
    stoneCutter('immersiveengineering:raw_block_lead', [{ "item": 'thermal:raw_lead_block' }, { "item": 'mekanism:block_raw_lead' }])
    stoneCutter('mekanism:block_raw_lead', [{ "item": 'thermal:raw_lead_block' }, { "item": 'immersiveengineering:raw_block_lead' }])
    //Nickel
    stoneCutter('immersiveengineering:raw_block_nickel', { "item": 'thermal:raw_nickel_block' })
    stoneCutter('thermal:raw_nickel_block', { "item": 'immersiveengineering:raw_block_nickel' })
    //Nickel
    stoneCutter('immersiveengineering:raw_block_uranium', { "item": 'mekanism:block_raw_uranium' })
    stoneCutter('mekanism:block_raw_uranium', { "item": 'immersiveengineering:raw_block_uranium' })
    //Nickel
    stoneCutter('immersiveengineering:raw_block_aluminum', { "item": 'tinkers_reforged:raw_aluminum_block' })
    stoneCutter('tinkers_reforged:raw_aluminum_block', { "item": 'immersiveengineering:raw_block_aluminum' })
    //Nickel
    stoneCutter('mekanism:block_raw_tin', { "item": 'thermal:raw_tin_block' })
    stoneCutter('thermal:raw_tin_block', { "item": 'mekanism:block_raw_tin' })

    /**************************Blocks************************************/
    //Silver
    stoneCutter('darkerdepths:silver_block', [{ "item": 'occultism:silver_block' }, { "item": 'immersiveengineering:storage_silver' }, { "item": 'thermal:silver_block' }, { "item": 'chemlib:silver_metal_block' }])
    stoneCutter('occultism:silver_block', [{ "item": 'darkerdepths:silver_block' }, { "item": 'immersiveengineering:storage_silver' }, { "item": 'thermal:silver_block' }, { "item": 'chemlib:silver_metal_block' }])
    stoneCutter('immersiveengineering:storage_silver', [{ "item": 'darkerdepths:silver_block' }, { "item": 'occultism:silver_block' }, { "item": 'thermal:silver_block' }, { "item": 'chemlib:silver_metal_block' }])
    stoneCutter('thermal:silver_block', [{ "item": 'darkerdepths:silver_block' }, { "item": 'occultism:silver_block' }, { "item": 'immersiveengineering:storage_silver' }, { "item": 'chemlib:silver_metal_block' }])
    stoneCutter('chemlib:silver_metal_block', [{ "item": 'darkerdepths:silver_block' }, { "item": 'occultism:silver_block' }, { "item": 'immersiveengineering:storage_silver' }, { "item": 'thermal:silver_block' }])
    //Lead
    stoneCutter('ftbic:lead_block', [{ "item": 'mekanism:block_lead' }, { "item": 'immersiveengineering:storage_lead' }, { "item": 'thermal:lead_block' }, { "item": 'chemlib:lead_metal_block' }])
    stoneCutter('mekanism:block_lead', [{ "item": 'ftbic:lead_block' }, { "item": 'immersiveengineering:storage_lead' }, { "item": 'thermal:lead_block' }, { "item": 'chemlib:lead_metal_block' }])
    stoneCutter('immersiveengineering:storage_lead', [{ "item": 'ftbic:lead_block' }, { "item": 'mekanism:block_lead' }, { "item": 'thermal:lead_block' }, { "item": 'chemlib:lead_metal_block' }])
    stoneCutter('thermal:lead_block', [{ "item": 'ftbic:lead_block' }, { "item": 'mekanism:block_lead' }, { "item": 'immersiveengineering:storage_lead' }, { "item": 'chemlib:lead_metal_block' }])
    stoneCutter('chemlib:lead_metal_block', [{ "item": 'ftbic:lead_block' }, { "item": 'mekanism:block_lead' }, { "item": 'immersiveengineering:storage_lead' }, { "item": 'thermal:lead_block' }])
    //Uranium
    stoneCutter('ftbic:uranium_block', [{ "item": 'immersiveengineering:storage_uranium' }, { "item": 'mekanism:block_uranium' }, { "item": 'chemlib:uranium_metal_block' }])
    stoneCutter('immersiveengineering:storage_uranium', [{ "item": 'ftbic:uranium_block' }, { "item": 'mekanism:block_uranium' }, { "item": 'chemlib:uranium_metal_block' }])
    stoneCutter('mekanism:block_uranium', [{ "item": 'ftbic:uranium_block' }, { "item": 'immersiveengineering:storage_uranium' }, { "item": 'chemlib:uranium_metal_block' }])
    stoneCutter('chemlib:uranium_metal_block', [{ "item": 'ftbic:uranium_block' }, { "item": 'immersiveengineering:storage_uranium' }, { "item": 'mekanism:block_uranium' }])
    //Tin
    stoneCutter('ftbic:tin_block', [{ "item": 'mekanism:block_tin' }, { "item": 'thermal:tin_block' }, { "item": 'chemlib:tin_metal_block' }])
    stoneCutter('mekanism:block_tin', [{ "item": 'ftbic:tin_block' }, { "item": 'thermal:tin_block' }, { "item": 'chemlib:tin_metal_block' }])
    stoneCutter('thermal:tin_block', [{ "item": 'ftbic:tin_block' }, { "item": 'mekanism:block_tin' }, { "item": 'chemlib:tin_metal_block' }])
    stoneCutter('chemlib:tin_metal_block', [{ "item": 'ftbic:tin_block' }, { "item": 'mekanism:block_tin' }, { "item": 'thermal:tin_block' }])
    //Steel
    stoneCutter('mekanism:block_steel', [{ "item": 'immersiveengineering:storage_steel' }, { "item": 'beyond_earth:steel_block' }])
    stoneCutter('immersiveengineering:storage_steel', [{ "item": 'mekanism:block_steel' }, { "item": 'beyond_earth:steel_block' }])
    stoneCutter('beyond_earth:steel_block', [{ "item": 'mekanism:block_steel' }, { "item": 'immersiveengineering:storage_steel' }])
    //Charcoal
    stoneCutter('mekanism:block_charcoal', [{ "item": 'quark:charcoal_block' }, { "item": 'thermal:charcoal_block' }])
    stoneCutter('quark:charcoal_block', [{ "item": 'mekanism:block_charcoal' }, { "item": 'thermal:charcoal_block' }])
    stoneCutter('thermal:charcoal_block', [{ "item": 'mekanism:block_charcoal' }, { "item": 'quark:charcoal_block' }])
    //Bronze
    stoneCutter('ftbic:bronze_block', [{ "item": 'mekanism:block_bronze' }, { "item": 'thermal:bronze_block' }])
    stoneCutter('mekanism:block_bronze', [{ "item": 'ftbic:bronze_block' }, { "item": 'thermal:bronze_block' }])
    stoneCutter('thermal:bronze_block', [{ "item": 'ftbic:bronze_block' }, { "item": 'mekanism:block_bronze' }])
    //Aluminum
    stoneCutter('ftbic:aluminum_block', [{ "item": 'immersiveengineering:storage_aluminum' }, { "item": 'tinkers_reforged:aluminum_block' }, { "item": 'chemlib:aluminum_metal_block' }])
    stoneCutter('immersiveengineering:storage_aluminum', [{ "item": 'ftbic:aluminum_block' }, { "item": 'tinkers_reforged:aluminum_block' }, { "item": 'chemlib:aluminum_metal_block' }])
    stoneCutter('tinkers_reforged:aluminum_block', [{ "item": 'ftbic:aluminum_block' }, { "item": 'immersiveengineering:storage_aluminum' }, { "item": 'chemlib:aluminum_metal_block' }])
    stoneCutter('chemlib:aluminum_metal_block', [{ "item": 'ftbic:aluminum_block' }, { "item": 'immersiveengineering:storage_aluminum' }, { "item": 'tinkers_reforged:aluminum_block' }])
    //Constantan
    stoneCutter('immersiveengineering:storage_constantan', { "item": 'thermal:constantan_block' })
    stoneCutter('thermal:constantan_block', { "item": 'immersiveengineering:storage_constantan' })
    //Enderium
    stoneCutter('ftbic:enderium_block', { "item": 'thermal:enderium_block' })
    stoneCutter('thermal:enderium_block', { "item": 'ftbic:enderium_block' })
    //Nickel
    stoneCutter('immersiveengineering:storage_nickel', { "item": 'thermal:nickel_block' }, { "item": 'chemlib:nickel_metal_block' })
    stoneCutter('thermal:nickel_block', { "item": 'immersiveengineering:storage_nickel' }, { "item": 'chemlib:nickel_metal_block' })
    stoneCutter('chemlib:nickel_metal_block', { "item": 'immersiveengineering:storage_nickel' }, { "item": 'thermal:nickel_block' })
    //Electrum
    stoneCutter('thermal:electrum_block', { "item": 'immersiveengineering:storage_electrum' })
    stoneCutter('immersiveengineering:storage_electrum', { "item": 'thermal:electrum_block' })
    //Iridium
    stoneCutter('ftbic:iridium_block', { "item": 'chemlib:iridium_metal_block' })
    stoneCutter('chemlib:iridium_metal_block', { "item": 'ftbic:iridium_block' })
    //Osmium
    stoneCutter('mekanism:block_osmium', { "item": 'chemlib:osmium_metal_block' })
    stoneCutter('chemlib:osmium_metal_block', { "item": 'mekanism:block_osmium' })
    //Coal Coke
    stoneCutter('thermal:coal_coke_block', { "item": 'immersiveengineering:coke' })
    stoneCutter('immersiveengineering:coke', { "item": 'thermal:coal_coke_block' })
    //Zinc
    stoneCutter('create:zinc_block', { "item": 'chemlib:zinc_metal_block' })
    stoneCutter('chemlib:zinc_metal_block', { "item": 'create:zinc_block' })
})