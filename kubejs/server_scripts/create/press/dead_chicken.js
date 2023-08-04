// priority: 1

onEvent('recipes', e => {

    e.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "item": "forbidden_arcanus:edelwood_chicken_bucket"
            }
        ],
        "results": [
            {
                "fluid": "evilcraft:blood",
                "amount": 250
            },
            {
                "item": "forbidden_arcanus:edelwood_stick",
                "count": 3
            },
            {
                "item": "chickens:dead_chicken",
                "count": 1
            }
        ]
    })

})