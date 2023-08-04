onEvent('worldgen.add', e => {

	e.addOre((moon_stone) => {
		moon_stone.biomes = "beyond_earth:moon_desert"
		moon_stone.addTarget('minecraft:soul_soil', 'beyond_earth:moon_stone')
        moon_stone.size = 100                            // max. vein size
      	moon_stone.chance = 1							// if != 0 and count is unset, the ore has a 1/n chance to generate per chunk
    })

})