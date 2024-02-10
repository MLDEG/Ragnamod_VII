onEvent('recipes', e => {

    //Function for Orechid Ignem
    function orechidIgnem(input, output, weight) { e.custom({ "type": "botania:orechid_ignem", "input": input, "output": { "type": "block", "block": output }, "weight": weight }) }

    orechidIgnem('minecraft:netherrack', 'byg:emeraldite_ore', 500)
    orechidIgnem('minecraft:netherrack', 'byg:pendorite_ore', 150)
    orechidIgnem('minecraft:netherrack', 'tconstruct:cobalt_ore', 750)
    orechidIgnem('minecraft:netherrack', 'rftoolsbase:dimensionalshard_nether', 750)

    orechidIgnem('minecraft:obsidian', 'minecraft:crying_obsidian', 85)

    orechidIgnem('beyond_earth:mars_stone', 'beyond_earth:mars_ice_shard_ore', 1)
    orechidIgnem('beyond_earth:mars_stone', 'beyond_earth:mars_ostrum_ore', 4)
    orechidIgnem('beyond_earth:mars_stone', 'beyond_earth:mars_diamond_ore', 2)
    orechidIgnem('beyond_earth:mars_stone', 'beyond_earth:mars_iron_ore', 3)

    orechidIgnem('beyond_earth:venus_stone', 'beyond_earth:venus_calorite_ore', 1)
    orechidIgnem('beyond_earth:venus_stone', 'beyond_earth:venus_diamond_ore', 2)
    orechidIgnem('beyond_earth:venus_stone', 'beyond_earth:venus_gold_ore', 2)
    orechidIgnem('beyond_earth:venus_stone', 'beyond_earth:venus_coal_ore', 5)

})