onEvent('recipes', e => {

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

})