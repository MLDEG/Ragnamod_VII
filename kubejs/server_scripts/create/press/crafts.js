// priority: 1

onEvent('recipes', e => {

    //Dead Chicken
    e.custom({
        "type": "create:compacting",
        "ingredients": [{ "item": "forbidden_arcanus:edelwood_chicken_bucket" }],
        "results": [
            { "fluid": "evilcraft:blood", "amount": 250 },
            { "item": "chickens:smashed_chicken", "count": 1 }
        ]
    })
})