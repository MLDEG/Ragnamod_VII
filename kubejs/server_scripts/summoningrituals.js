onEvent('recipes', e => {

    e.custom({
        "type": "summoningrituals:altar",
        "catalyst": { "tag": "forge:ingots" },
        "outputs": [
            { "mob": "chickens:obsidian_chicken" }
        ],
        "inputs": [
            { "ingredient": { "item": "minecraft:stone" }, "count": 64 },
            { "ingredient": { "item": "minecraft:prismarine_shard" }, "count": 5 },
            { "ingredient": { "item": "minecraft:amethyst_shard" }, "count": 10 },
            { "tag": "forge:glass" }
        ],
        "sacrifices": {
            "mobs": [{ "mob": "minecraft:pig", "count": 3 }, { "mob": "minecraft:sheep" }, { "mob": "minecraft:cow" }],
            "region": { "x": 3, "y": 3, "z": 3 }
        },
        "recipe_time": 200,
        "block_below": { "block": "minecraft:furnace", "properties": { "lit": "true" } },
        "day_time": "DAY",
        "weather": "CLEAR"
    })

})