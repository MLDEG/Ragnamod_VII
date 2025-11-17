onEvent('recipes', e => {

    //Infinity Gem
    e.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "ragnamod_seven:infinity_nugget"
            },
            {
                "item": "ragnamod_seven:cyan_gem"
            },
            {
                "item": "ragnamod_seven:purple_gem"
            },
            {
                "item": "ragnamod_seven:yellow_gem"
            },
            {
                "item": "ragnamod_seven:white_gem"
            },
            {
                "item": "ragnamod_seven:green_gem"
            },
            {
                "item": "ragnamod_seven:red_gem"
            },
            {
                "item": "ragnamod_seven:blue_gem"
            }
        ],
        "sapling": {
            "item": "forbidden_arcanus:mysterywood_sapling"
        },
        "output": {
            "item": "ragnamod_seven:infinity_gem",
            "count": 1
        },
        "time": 200
    })
})