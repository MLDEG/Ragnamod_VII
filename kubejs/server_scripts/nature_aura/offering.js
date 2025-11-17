onEvent('recipes', e => {

    //Infinity Shard
    e.custom({
        "type": "naturesaura:offering",
        "input": {
            "item": "ragnamod_seven:infinity_gem"
        },
        "start_item": {
            "item": "apotheosis:mythic_material"
        },
        "output": {
            "item": "ragnamod_seven:infinity_shard",
            "count": 3
        }
    })
})