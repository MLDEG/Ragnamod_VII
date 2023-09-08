// priority: 1

onEvent('recipes', e => {

    e.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
                "item": "chickens:smashed_chicken"
            }
        ],
        "tool": {
            "item": "occultism:butcher_knife"
        },
        "result": [
            {
                "item": "farmersdelight:chicken_cuts",
                "count": 2
            },
            {
                "item": "chickens:chicken_skin"
            },
            {
                "item": "minecraft:bone_meal",
                "count": 2
            },
            {
                "item": "minecraft:feather",
                "count": 5
            }
        ]
    })

})