onEvent('recipes', e => {

    //New Soil
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

    e.custom({ "type": "botanypots:crop", "seed": { "item": "forbidden_arcanus:nipa" }, "categories": ["dirt"], "growthTicks": 600, "display": { "type": "botanypots:aging", "block": "forbidden_arcanus:nipa" }, "drops": [{ "chance": 1.00, "output": { "item": "forbidden_arcanus:arcane_crystal_dust_speck" }, "minRolls": 1, "maxRolls": 1 }] })

})
