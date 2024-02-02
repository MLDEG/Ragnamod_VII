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

    //Blood Magic Rune
    function cleanRune(rune) {
        e.custom(
            {
                "type": "lychee:item_inside",
                "item_in": {
                    "item": rune
                },
                "block_in": {
                    "blocks": ["water"],
                    "state": {
                        "level": 0
                    }
                },
                "post": [
                    {
                        "type": "drop_item",
                        "item": "bloodmagic:blankrune"
                    }
                ]
            }
        )
    }
    var rune = ['bloodmagic:chargingrune', 'bloodmagic:accelerationrune', 'bloodmagic:orbcapacityrune', 'bloodmagic:bettercapacityrune', 'bloodmagic:altarcapacityrune', 'bloodmagic:dislocationrune', 'bloodmagic:selfsacrificerune', 'bloodmagic:sacrificerune', 'bloodmagic:speedrune']
    rune.forEach(R => { cleanRune(R) })

    //Seeds of Doubt
    e.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": "bloodmagic:demonitegravel"
        },
        "block_in": "bloodmagic:strong_tau",
        "state": {
            "age": 7
        },
        "post": [
            {
                "type": "place",
                "block": "bloodmagic:creeping_doubt",
                "state": {
                    "age": 7
                }
            }
        ]
    })



})