// priority: 1

onEvent('recipes', e => {

    //Questionable Mixture
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            { "item": "chemlib:rutherfordium" },
            { "item": "chemlib:rutherfordium" },
            { "item": "chemlib:rutherfordium" },
            { "item": "chemlib:rutherfordium" },
            { "item": "chemlib:rutherfordium" },
            { "item": "chemlib:rutherfordium" },
            { "item": "chemlib:rutherfordium" },
            { "item": "chemlib:rutherfordium" },
            { "item": "chemlib:seaborgium" },
            { "item": "chemlib:seaborgium" },
            { "item": "chemlib:seaborgium" },
            { "item": "chemlib:seaborgium" },
            { "item": "chemlib:seaborgium" },
            { "item": "chemlib:seaborgium" },
            { "item": "chemlib:seaborgium" },
            { "item": "chemlib:seaborgium" },
            { "item": "ftbic:scrap" },
            { "fluid": "bloodmagic:doubt_fluid", "amount": 1000 }
        ],
        "results": [
            {
                "item": "ragnamod_seven:questionable_mixture"
            }
        ],
        "heatRequirement": "superheated",
    })
    //Strange Mixture
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            { "item": "chemlib:nihonium" },
            { "item": "chemlib:nihonium" },
            { "item": "chemlib:nihonium" },
            { "item": "chemlib:nihonium" },
            { "item": "chemlib:nihonium" },
            { "item": "chemlib:nihonium" },
            { "item": "chemlib:nihonium" },
            { "item": "chemlib:nihonium" },
            { "item": "chemlib:tennessine" },
            { "item": "chemlib:tennessine" },
            { "item": "chemlib:tennessine" },
            { "item": "chemlib:tennessine" },
            { "item": "chemlib:tennessine" },
            { "item": "chemlib:tennessine" },
            { "item": "chemlib:tennessine" },
            { "item": "chemlib:tennessine" },
            { "item": "ftbic:scrap" },
            { "fluid": "bloodmagic:doubt_fluid", "amount": 1000 }
        ],
        "results": [
            {
                "item": "ragnamod_seven:strange_mixture"
            }
        ],
        "heatRequirement": "superheated",
    })
    //Sickening Mixture
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            { "item": "chemlib:meitnerium" },
            { "item": "chemlib:meitnerium" },
            { "item": "chemlib:meitnerium" },
            { "item": "chemlib:meitnerium" },
            { "item": "chemlib:meitnerium" },
            { "item": "chemlib:meitnerium" },
            { "item": "chemlib:meitnerium" },
            { "item": "chemlib:meitnerium" },
            { "item": "chemlib:flerovium" },
            { "item": "chemlib:flerovium" },
            { "item": "chemlib:flerovium" },
            { "item": "chemlib:flerovium" },
            { "item": "chemlib:flerovium" },
            { "item": "chemlib:flerovium" },
            { "item": "chemlib:flerovium" },
            { "item": "chemlib:flerovium" },
            { "item": "ftbic:scrap" },
            { "fluid": "bloodmagic:doubt_fluid", "amount": 1000 }
        ],
        "results": [
            {
                "item": "ragnamod_seven:sickening_mixture"
            }
        ],
        "heatRequirement": "superheated",
    })
    //Unpredictable Dust
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            { "item": "ragnamod_seven:questionable_mixture" },
            { "item": "ragnamod_seven:strange_mixture" },
            { "item": "ragnamod_seven:sickening_mixture" },
            { "item": "draconicevolution:awakened_draconium_dust" },
            { "fluid": "chemlib:krypton_fluid", "amount": 1000 }
        ],
        "results": [
            {
                "item": "ragnamod_seven:unpredictable_dust"
            }
        ]
    })
})