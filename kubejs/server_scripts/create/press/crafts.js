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

    //Doubt Fluid
    e.custom({
        "type": "create:compacting",
        "ingredients": [{ "item": "bloodmagic:growing_doubt" }],
        "results": [
            { "fluid": "bloodmagic:doubt_fluid", "amount": 50 }
        ]
    })
})