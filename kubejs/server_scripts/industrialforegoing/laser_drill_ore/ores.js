onEvent('recipes', e => {

    //Function for Overworld Ores
    function oreOverworld(ore, min, max, weight, lens) {
        e.custom({
            "output": { "item": ore }, "rarity": [{
                "whitelist": {}, "blacklist": {
                    "type": "minecraft:worldgen/biome", "values": ["minecraft:the_end", "minecraft:the_void", "minecraft:small_end_islands", "minecraft:end_barrens", "minecraft:end_highlands", "minecraft:end_midlands", "minecraft:nether_wastes", "minecraft:basalt_deltas", "minecraft:warped_forest", "minecraft:crimson_forest", "minecraft:soul_sand_valley"]
                }, "depth_min": min, "depth_max": max, "weight": weight
            }, {
                "whitelist": {}, "blacklist": {
                    "type": "minecraft:worldgen/biome", "values": ["minecraft:the_end", "minecraft:the_void", "minecraft:small_end_islands", "minecraft:end_barrens", "minecraft:end_highlands", "minecraft:end_midlands", "minecraft:nether_wastes", "minecraft:basalt_deltas", "minecraft:warped_forest", "minecraft:crimson_forest", "minecraft:soul_sand_valley"]
                }, "depth_min": -64, "depth_max": 255, "weight": 1
            }
            ], "pointer": 0, "catalyst": { "item": "industrialforegoing:laser_lens" + lens }, "type": "industrialforegoing:laser_drill_ore"
        })
    }

    //Function for Nether Ores
    function oreNether(ore, min, max, weight, lens) {
        e.custom({
            "output": { "item": ore }, "rarity": [{
                "whitelist": {
                    "type": "minecraft:worldgen/biome", "values": ["minecraft:nether_wastes", "minecraft:basalt_deltas", "minecraft:warped_forest", "minecraft:crimson_forest", "minecraft:soul_sand_valley"]
                }, "blacklist": {}, "depth_min": min, "depth_max": max, "weight": weight
            }, {
                "whitelist": {
                    "type": "minecraft:worldgen/biome", "values": ["minecraft:nether_wastes", "minecraft:basalt_deltas", "minecraft:warped_forest", "minecraft:crimson_forest", "minecraft:soul_sand_valley"]
                }, "blacklist": {}, "depth_min": 0, "depth_max": 128, "weight": 1
            }
            ], "pointer": 0, "catalyst": { "item": "industrialforegoing:laser_lens" + lens }, "type": "industrialforegoing:laser_drill_ore"
        })
    }

    //Function for End Ores
    function oreEnd(ore, min, max, weight, lens) {
        e.custom({
            "output": { "item": ore }, "rarity": [{
                "whitelist": {
                    "type": "minecraft:worldgen/biome", "values": ["minecraft:the_end", "minecraft:the_void", "minecraft:small_end_islands", "minecraft:end_barrens", "minecraft:end_highlands", "minecraft:end_midlands"]
                }, "blacklist": {}, "depth_min": min, "depth_max": max, "weight": weight
            }, {
                "whitelist": {
                    "type": "minecraft:worldgen/biome", "values": ["minecraft:the_end", "minecraft:the_void", "minecraft:small_end_islands", "minecraft:end_barrens", "minecraft:end_highlands", "minecraft:end_midlands"]
                }, "blacklist": {}, "depth_min": 0, "depth_max": 128, "weight": 1
            }
            ], "pointer": 0, "catalyst": { "item": "industrialforegoing:laser_lens" + lens }, "type": "industrialforegoing:laser_drill_ore"
        })
    }

    //Emerald Ore
    e.custom({ "output": { "item": "minecraft:emerald_ore" }, "rarity": [{ "whitelist": { "type": "minecraft:worldgen/biome", "values": ["minecraft:windswept_gravelly_hills", "minecraft:windswept_gravelly_hills"] }, "blacklist": {}, "depth_min": 100, "depth_max": 200, "weight": 8 }, { "whitelist": {}, "blacklist": { "type": "minecraft:worldgen/biome", "values": ["minecraft:the_end", "minecraft:the_void", "minecraft:small_end_islands", "minecraft:end_barrens", "minecraft:end_highlands", "minecraft:end_midlands", "minecraft:nether_wastes", "minecraft:basalt_deltas", "minecraft:warped_forest", "minecraft:crimson_forest", "minecraft:soul_sand_valley"] }, "depth_min": -64, "depth_max": 255, "weight": 1 }], "pointer": 0, "catalyst": { "item": "industrialforegoing:laser_lens5" }, "type": "industrialforegoing:laser_drill_ore" })

    oreNether('minecraft:nether_quartz_ore', 32, 100, 12, 0)
    oreNether('minecraft:glowstone', 80, 100, 8, 4)
    oreNether('minecraft:nether_gold_ore', 32, 100, 10, 4)
    oreNether('byg:pendorite_ore', 0, 64, 1, 10)
    oreNether('byg:emeraldite_ore', 0, 64, 1, 13)
    oreNether('tconstruct:cobalt_ore', 0, 64, 3, 11)
    oreNether('rftoolsbase:dimensionalshard_nether', 0, 64, 3, 0)
    oreEnd('tinkers_reforged:kepu_ore', 30, 64, 3, 11)
    oreEnd('rftoolsbase:dimensionalshard_end', 0, 30, 1, 0)
    oreOverworld('ftbic:iridium_ore', -30, 0, 3, 0)
    oreOverworld('thermal:nickel_ore', -30, 30, 4, 4)
    oreOverworld('tinkers_reforged:aluminum_ore', 68, 84, 5, 12)
    oreOverworld('minecraft:lapis_ore', -30, 30, 14, 11)
    oreOverworld('minecraft:redstone_ore', -64, -30, 20, 14)
    oreOverworld('ae2:quartz_ore', -30, 30, 8, 3)
    oreOverworld('mekanism:uranium_ore', -30, 30, 5, 5)
    oreOverworld('mekanism:fluorite_ore', -20, 20, 6, 8)
    oreOverworld('minecraft:coal_ore', 0, 132, 12, 15)
    oreOverworld('thermal:niter_ore', 0, 20, 2, 8)
    oreOverworld('minecraft:diamond_ore', -64, -50, 5, 3)
    oreOverworld('thermal:sulfur_ore', -10, 10, 6, 4)
    oreOverworld('mekanism:osmium_ore', -10, 35, 8, 8)
    oreOverworld('thermal:lead_ore', 10, 40, 6, 10)
    oreOverworld('tinkers_reforged:red_beryl_ore', 10, 40, 6, 6)
    oreOverworld('thermal:tin_ore', 64, 96, 8, 8)
    oreOverworld('thermal:silver_ore', 10, 40, 5, 7)
    oreOverworld('minecraft:gold_ore', -40, -20, 16, 4)
    oreOverworld('minecraft:copper_ore', 25, 75, 16, 1)
    oreOverworld('minecraft:iron_ore', 155, 255, 20, 12)
    oreOverworld('thermal:apatite_ore', 100, 200, 25, 3)
    oreOverworld('thermal:cinnabar_ore', -30, 20, 6, 14)
    oreOverworld('create:zinc_ore', -40, 10, 4, 4)
    oreOverworld('tinkers_reforged:deepslate_epidote_ore', -40, 10, 4, 5)
    oreOverworld('evilcraft:dark_ore', 0, 10, 2, 10)
    oreOverworld('forbidden_arcanus:arcane_crystal_ore', 0, 25, 5, 0)
    oreOverworld('miniutilities:ender_ore', 0, 45, 20, 9)
    oreOverworld('powah:uraninite_ore', -40, 30, 5, 5)
    oreOverworld('rftoolsbase:dimensionalshard_overworld', -64, 30, 3, 0)


})