onEvent('recipes', e => {

    //Edelwood Saplings
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

    //Dark Runes
    e.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": "forbidden_arcanus:rune"
        },
        "block_in": "forbidden_arcanus:dark_nether_star_block",
        "post": [
            {
                "type": "drop_item",
                "item": "forbidden_arcanus:dark_rune"
            }
        ]
    })

    //Liveroot
    e.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": "minecraft:emerald"
        },
        "block_in": "twilightforest:root",
        "post": [
            {
                "type": "place",
                "block": "twilightforest:liveroot_block"
            }
        ]
    })


})