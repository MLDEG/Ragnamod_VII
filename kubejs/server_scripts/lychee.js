onEvent('recipes', e => {

    e.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": "forbidden_arcanus:arcane_crystal_dust"
        },
        "block_in": "#minecraft:saplings",
        "post": [
            {
                "type": "place",
                "block": "forbidden_arcanus:growing_edelwood"
            }
        ]
    })

})