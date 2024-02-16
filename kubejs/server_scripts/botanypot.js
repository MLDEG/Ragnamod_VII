onEvent('recipes', e => {

    //Botany pot
    function soilPot(block, categories, growth) {
        e.custom({ "type": "botanypots:soil", "input": { "item": block }, "display": { "block": block }, "categories": categories, "growthModifier": growth })
    }
    soilPot('quark:red_corundum', 'red_corundum', 1)
    soilPot('quark:orange_corundum', 'orange_corundum', 1)
    soilPot('quark:yellow_corundum', 'yellow_corundum', 1)
    soilPot('quark:green_corundum', 'green_corundum', 1)
    soilPot('quark:blue_corundum', 'blue_corundum', 1)
    soilPot('quark:indigo_corundum', 'indigo_corundum', 1)
    soilPot('quark:violet_corundum', 'violet_corundum', 1)
    soilPot('quark:white_corundum', 'white_corundum', 1)
    soilPot('quark:black_corundum', 'black_corundum', 1)

    function corumudm(color) { e.custom({ "type": "botanypots:crop", "seed": { "item": "quark:" + color + "_corundum_cluster" }, "categories": [color + "_corundum"], "growthTicks": 600, "display": { "type": "botanypots:simple", "block": "quark:" + color + "_corundum_cluster" }, "drops": [{ "chance": 1.00, "output": { "item": "quark:" + color + "_corundum_cluster" }, "minRolls": 1, "maxRolls": 2 }, { "chance": 1.00, "output": { "item": "quark:" + color + "_corundum" }, "minRolls": 1, "maxRolls": 2 }] }) }
    var color = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "black"]
    color.forEach(C => { corumudm(C) })

    //Nipa Botany Pot
    e.custom({ "type": "botanypots:crop", "seed": { "item": "forbidden_arcanus:nipa" }, "categories": ["dirt"], "growthTicks": 600, "display": { "type": "botanypots:aging", "block": "forbidden_arcanus:nipa" }, "drops": [{ "chance": 1.00, "output": { "item": "forbidden_arcanus:arcane_crystal_dust_speck" }, "minRolls": 1, "maxRolls": 1 }] })

    //Seeds of Doubt
    e.custom({ "type": "botanypots:crop", "seed": { "item": "bloodmagic:growing_doubt" }, "categories": ["dirt"], "growthTicks": 800, "display": { "type": "botanypots:aging", "block": "bloodmagic:creeping_doubt" }, "drops": [{ "chance": 0.20, "output": { "item": "bloodmagic:growing_doubt" }, "minRolls": 1, "maxRolls": 1 }] })

    //Cryo Root
    e.custom({ "type": "botanypots:crop", "seed": { "item": "blue_skies:cryo_root" }, "categories": ["dirt"], "growthTicks": 800, "display": { "type": "botanypots:aging", "block": "blue_skies:cryo_roots" }, "drops": [{ "chance": 0.20, "output": { "item": "blue_skies:cryo_root" }, "minRolls": 1, "maxRolls": 1 }] })

    //Solnuts
    e.custom({ "type": "botanypots:crop", "seed": { "item": "blue_skies:solnut" }, "categories": ["dirt"], "growthTicks": 800, "display": { "type": "botanypots:aging", "block": "blue_skies:solnuts" }, "drops": [{ "chance": 0.20, "output": { "item": "blue_skies:solnut" }, "minRolls": 1, "maxRolls": 1 }] })

    //Otherworld Sappling
    e.custom({ "type": "botanypots:crop", "seed": { "item": "occultism:otherworld_sapling" }, "categories": ["dirt"], "growthTicks": 2400, "display": { "block": "occultism:otherworld_sapling" }, "drops": [{ "chance": 1.00, "output": { "item": "occultism:otherworld_log" }, "minRolls": 2, "maxRolls": 4 }, { "chance": 0.15, "output": { "item": "occultism:otherworld_sapling" } }] })

    //Golden Orchid Seeds Botany Pot Tiers
    e.custom({ "type": "botanypots:soil", "input": { "item": "forbidden_arcanus:magical_farmland" }, "display": { "block": "forbidden_arcanus:magical_farmland" }, "categories": "magical_farmland", "growthModifier": 1 })
    e.custom({ "type": "botanypots:crop", "seed": { "item": "forbidden_arcanus:golden_orchid_seeds" }, "categories": ["magical_farmland"], "growthTicks": 1200, "display": { "type": "botanypots:aging", "block": "forbidden_arcanus:golden_orchid" }, "drops": [{ "chance": 1.00, "output": { "item": "forbidden_arcanus:arcane_gold_nugget" }, "minRolls": 1, "maxRolls": 3 }, { "chance": 0.15, "output": { "item": "forbidden_arcanus:arcane_gold_nugget" }, "minRolls": 1, "maxRolls": 3 }, { "chance": 0.05, "output": { "item": "forbidden_arcanus:golden_orchid_seeds" }, "minRolls": 1, "maxRolls": 2 }] })

    //Botany pot Tier
    function soilPottier(block, categories, growth) {
        e.custom({ "type": "botanypotstiers:soil", "input": { "item": block }, "display": { "block": block }, "categories": categories, "growthModifier": growth })
    }
    soilPottier('quark:red_corundum', 'red_corundum', 1)
    soilPottier('quark:orange_corundum', 'orange_corundum', 1)
    soilPottier('quark:yellow_corundum', 'yellow_corundum', 1)
    soilPottier('quark:green_corundum', 'green_corundum', 1)
    soilPottier('quark:blue_corundum', 'blue_corundum', 1)
    soilPottier('quark:indigo_corundum', 'indigo_corundum', 1)
    soilPottier('quark:violet_corundum', 'violet_corundum', 1)
    soilPottier('quark:white_corundum', 'white_corundum', 1)
    soilPottier('quark:black_corundum', 'black_corundum', 1)

    function corumudmtier(colortier) { e.custom({ "type": "botanypotstiers:crop", "seed": { "item": "quark:" + colortier + "_corundum_cluster" }, "categories": [colortier + "_corundum"], "growthTicks": 600, "display": { "type": "botanypotstiers:simple", "block": "quark:" + colortier + "_corundum_cluster" }, "drops": [{ "chance": 1.00, "output": { "item": "quark:" + colortier + "_corundum_cluster" }, "minRolls": 1, "maxRolls": 2 }, { "chance": 1.00, "output": { "item": "quark:" + colortier + "_corundum" }, "minRolls": 1, "maxRolls": 2 }] }) }
    var colortier = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "black"]
    colortier.forEach(C => { corumudmtier(C) })

    //Nipa Botany Pot Tiers
    e.custom({ "type": "botanypotstiers:crop", "seed": { "item": "forbidden_arcanus:nipa" }, "categories": ["dirt"], "growthTicks": 600, "display": { "type": "botanypotstiers:aging", "block": "forbidden_arcanus:nipa" }, "drops": [{ "chance": 1.00, "output": { "item": "forbidden_arcanus:arcane_crystal_dust_speck" }, "minRolls": 1, "maxRolls": 1 }] })

    //Seeds of Doubt
    e.custom({ "type": "botanypotstiers:crop", "seed": { "item": "bloodmagic:growing_doubt" }, "categories": ["dirt"], "growthTicks": 800, "display": { "type": "botanypotstiers:aging", "block": "bloodmagic:creeping_doubt" }, "drops": [{ "chance": 1.0, "output": { "item": "bloodmagic:growing_doubt" }, "minRolls": 1, "maxRolls": 1 }] })

    //Cryo Root
    e.custom({ "type": "botanypotstiers:crop", "seed": { "item": "blue_skies:cryo_root" }, "categories": ["dirt"], "growthTicks": 800, "display": { "type": "botanypotstiers:aging", "block": "blue_skies:cryo_roots" }, "drops": [{ "chance": 0.20, "output": { "item": "blue_skies:cryo_root" }, "minRolls": 1, "maxRolls": 1 }] })

    //Solnuts
    e.custom({ "type": "botanypotstiers:crop", "seed": { "item": "blue_skies:solnut" }, "categories": ["dirt"], "growthTicks": 800, "display": { "type": "botanypotstiers:aging", "block": "blue_skies:solnuts" }, "drops": [{ "chance": 0.20, "output": { "item": "blue_skies:solnut" }, "minRolls": 1, "maxRolls": 1 }] })

    //Otherworld Sappling Pot Tiers
    e.custom({ "type": "botanypotstiers:crop", "seed": { "item": "occultism:otherworld_sapling" }, "categories": ["dirt"], "growthTicks": 2400, "display": { "block": "occultism:otherworld_sapling" }, "drops": [{ "chance": 1.00, "output": { "item": "occultism:otherworld_log" }, "minRolls": 2, "maxRolls": 4 }, { "chance": 0.15, "output": { "item": "occultism:otherworld_sapling" } }] })

    //Golden Orchid Seeds Botany Pot Tiers
    e.custom({ "type": "botanypotstiers:soil", "input": { "item": "forbidden_arcanus:magical_farmland" }, "display": { "block": "forbidden_arcanus:magical_farmland" }, "categories": "magical_farmland", "growthModifier": 1 })
    e.custom({ "type": "botanypotstiers:crop", "seed": { "item": "forbidden_arcanus:golden_orchid_seeds" }, "categories": ["magical_farmland"], "growthTicks": 1200, "display": { "type": "botanypotstiers:aging", "block": "forbidden_arcanus:golden_orchid" }, "drops": [{ "chance": 1.00, "output": { "item": "forbidden_arcanus:arcane_gold_nugget" }, "minRolls": 1, "maxRolls": 3 }, { "chance": 0.15, "output": { "item": "forbidden_arcanus:arcane_gold_nugget" }, "minRolls": 1, "maxRolls": 3 }, { "chance": 0.05, "output": { "item": "forbidden_arcanus:golden_orchid_seeds" }, "minRolls": 1, "maxRolls": 2 }] })

})