onEvent('recipes', e => {

    //Small Gate Catalyst
    e.shaped('gateways:catalyst_small_pearl_gate', [' A ', 'ASA', ' A '], { A: 'bloodmagic:reagentvoid', S: 'ae2:fluix_pearl' })

    //Medium
    e.custom({ "type": "botania:runic_altar", "output": { "item": "gateways:catalyst_medium_pearl_gate" }, "mana": 10000, "ingredients": [{ "item": "gateways:catalyst_small_pearl_gate" }, { "item": "gateways:catalyst_small_pearl_gate" }, { "item": "gateways:catalyst_small_pearl_gate" }, { "item": "gateways:catalyst_small_pearl_gate" }, { "item": "botania:pixie_dust" }] })

    //Large
    e.custom({ "type": "createaddition:charging", "input": { "item": "gateways:catalyst_medium_pearl_gate", "count": 1 }, "result": { "item": "gateways:catalyst_large_pearl_gate", "count": 1 }, "energy": 100000 })

    function gate(item, mob) { [e.custom({ "type": "gateways:gate_recipe", "group": "gateways", "pattern": [" # ", "#A#", " # "], "key": { "#": { "item": item }, "A": { "item": "gateways:catalyst_small_pearl_gate" } }, "result": { "item": "gateways:gate_pearl" }, "gateway": "gateways:" + mob + "_gate_small" }), e.custom({ "type": "gateways:gate_recipe", "group": "gateways", "pattern": ["###", "#A#", "###"], "key": { "#": { "item": item }, "A": { "item": "gateways:catalyst_medium_pearl_gate" } }, "result": { "item": "gateways:gate_pearl" }, "gateway": "gateways:" + mob + "_gate" }), e.custom({ "type": "gateways:gate_recipe", "group": "gateways", "pattern": ["###", "#A#", "###"], "key": { "#": { "item": item }, "A": { "item": "gateways:catalyst_large_pearl_gate" } }, "result": { "item": "gateways:gate_pearl" }, "gateway": "gateways:" + mob + "_gate_large" })] }

    gate('twilightforest:arctic_fur', 'yeti')
    gate('bhc:wither_bone', 'wither')
    gate('thermal:blitz_rod', 'blitz')
    gate('thermal:blizz_rod', 'blizz')
    gate('thermal:basalz_rod', 'basalz')
    gate('tconstruct:ender_slime_ball', 'ender_slime')
    gate('tconstruct:sky_slime_ball', 'sky_slime')
    gate('minecraft:clay_ball', 'terracube')
    gate('twilightforest:torchberries', 'skeleton_druid')
    gate('minecraft:book', 'death_tome')
    gate('undergarden:forgotten_nugget', 'forgotten_guardian')
    gate('minecraft:diamond', 'star_crawler')
    gate('ars_nouveau:wilden_spike', 'wilden_guardian')
    gate('ars_nouveau:wilden_horn', 'wilden_hunter')
    gate('ars_nouveau:wilden_wing', 'wilden_stalker')
    gate('minecraft:phantom_membrane', 'phantom')
    gate('botania:pixie_dust', 'alf_pixie')
    gate('twilightforest:armor_shard', 'blockchain_goblin')
    gate('minecraft:coal', 'foxhound')
    gate('twilightforest:borer_essence', 'towerwood_borer')
    gate('twilightforest:raw_meef', 'minotaur')

})