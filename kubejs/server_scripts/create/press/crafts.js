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

    //Dead Chicken Alt
    function deadChicken(chicken) { e.custom({ "type": "create:compacting", "ingredients": [{ "type": "forge:nbt", "item": "chickens:chicken_item", "count": 1, "nbt": "{ChickenType:{id:\"chickens:" + chicken + "_chicken\"}}" }], "results": [{ "fluid": "evilcraft:blood", "amount": 250 }, { "item": "chickens:smashed_chicken", "count": 1 }] }) }
    var chicken = ['duralumin', 'qivium', 'dirt', 'spirited_crystal', 'ametrine', 'lead', 'slimesteel', 'lumium', 'pendorite', 'snowball', 'brass', 'zinc', 'lapis_lazuli', 'felsteel', 'glass', 'calorite', 'ostrum', 'ghast', 'crusteel', 'wavy', 'arcane_gold', 'gunpowder', 'amethyst_bronze', 'terrasteel', 'hop', 'energy_crystal', 'uranium', 'electrical_copper', 'obsidian', 'steel_energized', 'glowstone', 'quartz', 'gravel', 'blazing_crystal', 'cloggrum', 'hepatizon', 'log', 'lavium', 'certus_quartz', 'refined_obsidian', 'refined_glowstone', 'fiery', 'osmium', 'utheric', 'emerald', 'fairy', 'forgotten', 'rose_gold', 'silver', 'sand', 'steel', 'iron_compressed', 'uraninite', 'pcrystal', 'elementium', 'manasteel', 'source_gem', 'aquite', 'string', 'gausum', 'bronze', 'invar', 'charoite', 'coal', 'netherwart', 'ender', 'emeraldite', 'rubber', 'niotic_crystal', 'yokel', 'ventium', 'steeleaf', 'constantan', 'nether_star', 'blaze', 'amethyst_shard', 'froststeel', 'falsite', 'nickel', 'durasteel', 'soulsand', 'pig_iron', 'desh', 'bauxite', 'bone', 'nitro_crystal', 'dark_gem', 'horizonite', 'copper', 'rocky', 'arcane_crystal', 'electrum', 'pshard', 'iridium', 'queens_slime', 'chorus_metal', 'tin', 'silicon', 'alfsteel', 'redstone', 'manyullyn', 'slime', 'netherite_scrap', 'signalum', 'cobalt', 'knightmetal', 'ironwood', 'gold', 'kepu', 'iron', 'clay', 'fluix', 'diamond', 'enderium', 'hureaulite', 'red_beryl', 'galu', 'epidote', 'baolian', 'diopside', 'pyrope', 'sculk', 'soul_infused', 'infinity', 'draconium', 'twinite', 'shellite', 'neutronium', 'dragonsteel', 'draconic', 'chaotic', 'sulfur', 'cinnabar', 'apatite', 'niter', 'fluorite', 'therealreivax', 'thorak83', 'mrchiro33', 'peonlambdaa', 'samnes', 'mr_bidou', 'smart', 'red', 'orange', 'yellow', 'lime', 'green', 'blue', 'light_blue', 'cyan', 'pink', 'magenta', 'purple', 'brown', 'black', 'white', 'light_gray', 'gray']
    chicken.forEach(C => { deadChicken(C) })


})