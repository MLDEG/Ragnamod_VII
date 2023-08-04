// priority: 1

onEvent('recipes', e => {

    e.custom({
        "type": "lychee:item_inside",
        "item_in": [
            { "item": "ae2:sky_dust" },
            { "item": "minecraft:diamond" },
            { "item": "thermal:ender_pearl_dust" }
        ],
        "block_in": {
            "blocks": ["minecraft:water"]
        },
        "post": [
            {
                "type": "drop_item",
                "item": "lazierae2:resonating_dust",
                "count": 2
            }
        ]
    })

})