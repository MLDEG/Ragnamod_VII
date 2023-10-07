onEvent('recipes', e => {

  //Silicon Block
  e.shapeless('9x ftbic:silicon', 'kubejs:silicon_block')
  e.shapeless('kubejs:silicon_block', '9x ftbic:silicon')
  
  //Cataclysm
  //Ignitium
  e.shapeless('9x cataclysm:ignitium_ingot', 'cataclysm:ignitium_block')
  //Ignitium
  e.shapeless('9x cataclysm:witherite_ingot', 'cataclysm:witherite_block')
  e.shapeless('cataclysm:witherite_block', '9x cataclysm:witherite_ingot')
  //Ignitium
  e.shapeless('9x cataclysm:enderite_ingot', 'cataclysm:enderite_block')
  e.shapeless('cataclysm:enderite_block', '9x cataclysm:enderite_ingot')

  /***************************Horsmen Stuff***************************/
  /***************************Death***************************/
  e.shapeless('9x ragnamod_seven:death_nugget', 'ragnamod_seven:death_ingot')
  e.shapeless('ragnamod_seven:death_ingot', '9x ragnamod_seven:death_nugget')
  e.shapeless('9x ragnamod_seven:death_ingot', 'ragnamod_seven:death_block')
  e.shapeless('ragnamod_seven:death_block', '9x ragnamod_seven:death_ingot')
  //Helmet
  e.shaped('ragnamod_seven:death_helmet', ['AAA','A A'], {A: 'ragnamod_seven:death_ingot'})
  //Chestplate
  e.shaped('ragnamod_seven:death_chestplate', ['A A','AAA','AAA'], {A: 'ragnamod_seven:death_ingot'})
  //Leggings
  e.shaped('ragnamod_seven:death_leggings', ['AAA','A A','A A'], {A: 'ragnamod_seven:death_ingot'})
  //Boots
  e.shaped('ragnamod_seven:death_boots', ['A A','A A'], {A: 'ragnamod_seven:death_ingot'})
  //Weapon
  e.shaped('ragnamod_seven:death_weapon', ['AA ',' SA','S  '], {A: 'ragnamod_seven:death_ingot', S: 'minecraft:stick'})
  //Essence
  e.custom({"type": "create:compacting","ingredients": [{"item": "ragnamod_seven:death_essence"},{"item": "thermal:netherite_dust"}],"results": [{"item": "ragnamod_seven:death_essence"},{"item": "ragnamod_seven:death_essence_materialized"}],"heatRequirement": "superheated"})
  //Ingot
  e.custom({"type": "evilcraft:blood_infuser","item": "ragnamod_seven:death_essence_materialized","fluid": {"fluid": "evilcraft:blood","amount": 100000},"result": {"item": "ragnamod_seven:death_ingot"},"duration": 1200,"xp": 20,"tier": 3})
  /***************************War***************************/
  e.shapeless('9x ragnamod_seven:war_nugget', 'ragnamod_seven:war_ingot')
  e.shapeless('ragnamod_seven:war_ingot', '9x ragnamod_seven:war_nugget')
  e.shapeless('9x ragnamod_seven:war_ingot', 'ragnamod_seven:war_block')
  e.shapeless('ragnamod_seven:war_block', '9x ragnamod_seven:war_ingot')
  //Helmet
  e.shaped('ragnamod_seven:war_helmet', ['AAA','A A'], {A: 'ragnamod_seven:war_ingot'})
  //Chestplate
  e.shaped('ragnamod_seven:war_chestplate', ['A A','AAA','AAA'], {A: 'ragnamod_seven:war_ingot'})
  //Leggings
  e.shaped('ragnamod_seven:war_leggings', ['AAA','A A','A A'], {A: 'ragnamod_seven:war_ingot'})
  //Boots
  e.shaped('ragnamod_seven:war_boots', ['A A','A A'], {A: 'ragnamod_seven:war_ingot'})
  //Weapon
  e.shaped('ragnamod_seven:war_weapon', ['A A','ASA',' S '], {A: 'ragnamod_seven:war_ingot', S: 'minecraft:stick'})
  //Essence
  e.custom({"type": "create:compacting","ingredients": [{"item": "ragnamod_seven:war_essence"},{"item": "thermal:netherite_dust"}],"results": [{"item": "ragnamod_seven:war_essence"},{"item": "ragnamod_seven:war_essence_materialized"}],"heatRequirement": "superheated"})
  //Ingot
  e.custom({"type": "evilcraft:blood_infuser","item": "ragnamod_seven:war_essence_materialized","fluid": {"fluid": "evilcraft:blood","amount": 100000},"result": {"item": "ragnamod_seven:war_ingot"},"duration": 1200,"xp": 20,"tier": 3})
  /***************************Conquest***************************/
  e.shapeless('9x ragnamod_seven:conquest_nugget', 'ragnamod_seven:conquest_ingot')
  e.shapeless('ragnamod_seven:conquest_ingot', '9x ragnamod_seven:conquest_nugget')
  e.shapeless('9x ragnamod_seven:conquest_ingot', 'ragnamod_seven:conquest_block')
  e.shapeless('ragnamod_seven:conquest_block', '9x ragnamod_seven:conquest_ingot')
  //Helmet
  e.shaped('ragnamod_seven:conquest_helmet', ['AAA','A A'], {A: 'ragnamod_seven:conquest_ingot'})
  //Chestplate
  e.shaped('ragnamod_seven:conquest_chestplate', ['A A','AAA','AAA'], {A: 'ragnamod_seven:conquest_ingot'})
  //Leggings
  e.shaped('ragnamod_seven:conquest_leggings', ['AAA','A A','A A'], {A: 'ragnamod_seven:conquest_ingot'})
  //Boots
  e.shaped('ragnamod_seven:conquest_boots', ['A A','A A'], {A: 'ragnamod_seven:conquest_ingot'})
  //Essence
  e.custom({"type": "create:compacting","ingredients": [{"item": "ragnamod_seven:conquest_essence"},{"item": "thermal:netherite_dust"}],"results": [{"item": "ragnamod_seven:conquest_essence"},{"item": "ragnamod_seven:conquest_essence_materialized"}],"heatRequirement": "superheated"})
  //Ingot
  e.custom({"type": "evilcraft:blood_infuser","item": "ragnamod_seven:conquest_essence_materialized","fluid": {"fluid": "evilcraft:blood","amount": 100000},"result": {"item": "ragnamod_seven:conquest_ingot"},"duration": 1200,"xp": 20,"tier": 3})
  /***************************Famine***************************/
  e.shapeless('9x ragnamod_seven:famine_nugget', 'ragnamod_seven:famine_ingot')
  e.shapeless('ragnamod_seven:famine_ingot', '9x ragnamod_seven:famine_nugget')
  e.shapeless('9x ragnamod_seven:famine_ingot', 'ragnamod_seven:famine_block')
  e.shapeless('ragnamod_seven:famine_block', '9x ragnamod_seven:famine_ingot')
  //Helmet
  e.shaped('ragnamod_seven:famine_helmet', ['AAA','A A'], {A: 'ragnamod_seven:famine_ingot'})
  //Chestplate
  e.shaped('ragnamod_seven:famine_chestplate', ['A A','AAA','AAA'], {A: 'ragnamod_seven:famine_ingot'})
  //Leggings
  e.shaped('ragnamod_seven:famine_leggings', ['AAA','A A','A A'], {A: 'ragnamod_seven:famine_ingot'})
  //Boots
  e.shaped('ragnamod_seven:famine_boots', ['A A','A A'], {A: 'ragnamod_seven:famine_ingot'})
  //Weapon
  e.shaped('ragnamod_seven:famine_weapon', ['A','A','S'], {A: 'ragnamod_seven:famine_ingot', S: 'minecraft:stick'})
  //Essence
  e.custom({"type": "create:compacting","ingredients": [{"item": "ragnamod_seven:famine_essence"},{"item": "thermal:netherite_dust"}],"results": [{"item": "ragnamod_seven:famine_essence"},{"item": "ragnamod_seven:famine_essence_materialized"}],"heatRequirement": "superheated"})
  //Ingot
  e.custom({"type": "evilcraft:blood_infuser","item": "ragnamod_seven:famine_essence_materialized","fluid": {"fluid": "evilcraft:blood","amount": 100000},"result": {"item": "ragnamod_seven:famine_ingot"},"duration": 1200,"xp": 20,"tier": 3})

  //Corundum Block
  //RED
  e.shapeless('quark:red_corundum', '4x quark:red_corundum_cluster')
  e.shapeless('4x quark:red_corundum_cluster', 'quark:red_corundum')
  //ORANGE
  e.shapeless('quark:orange_corundum', '4x quark:orange_corundum_cluster')
  e.shapeless('4x quark:orange_corundum_cluster', 'quark:orange_corundum')
  //YELLOW
  e.shapeless('quark:yellow_corundum', '4x quark:yellow_corundum_cluster')
  e.shapeless('4x quark:yellow_corundum_cluster', 'quark:yellow_corundum')
  //GREEN
  e.shapeless('quark:green_corundum', '4x quark:green_corundum_cluster')
  e.shapeless('4x quark:green_corundum_cluster', 'quark:green_corundum')
  //BLUE
  e.shapeless('quark:blue_corundum', '4x quark:blue_corundum_cluster')
  e.shapeless('4x quark:blue_corundum_cluster', 'quark:blue_corundum')
  //INDIGO
  e.shapeless('quark:indigo_corundum', '4x quark:indigo_corundum_cluster')
  e.shapeless('4x quark:indigo_corundum_cluster', 'quark:indigo_corundum')
  //VIOLET
  e.shapeless('quark:violet_corundum', '4x quark:violet_corundum_cluster')
  e.shapeless('4x quark:violet_corundum_cluster', 'quark:violet_corundum')
  //WHITE
  e.shapeless('quark:white_corundum', '4x quark:white_corundum_cluster')
  e.shapeless('4x quark:white_corundum_cluster', 'quark:white_corundum')
  //BLACK
  e.shapeless('quark:black_corundum', '4x quark:black_corundum_cluster')
  e.shapeless('4x quark:black_corundum_cluster', 'quark:black_corundum')


  //Nether Star Shard
  e.shapeless('minecraft:nether_star', '9x chickens:nether_star_shard')
  e.shapeless('9x chickens:nether_star_shard', 'minecraft:nether_star')

  //HOP Graphite Block
  e.shapeless('immersiveengineering:storage_hop_graphite', '9x immersiveengineering:ingot_hop_graphite')
  e.shapeless('9x immersiveengineering:ingot_hop_graphite', 'immersiveengineering:storage_hop_graphite')

  //Black Lotus
  e.shaped('botania:black_lotus', [
    'AAA',
    'ASA',
    'AAA'
  ], {
    S: 'psi:cad_colorizer_purple',
    A: 'psi:ebony_substance'
  })

  //Void Stone
  e.shaped('8x cataclysm:void_stone', [
    'AAA',
    'ASA',
    'AAA'
  ], {
    S: 'bloodmagic:reagentvoid',
    A: 'minecraft:redstone_block'
  })

  //Ender Stone
  e.shaped('8x cataclysm:ender_stone', [
    'AAA',
    'ASA',
    'AAA'
  ], {
    S: 'botania:ender_air_bottle',
    A: 'cataclysm:void_stone'
  })

  //Combined Singularity
  //Vanilla
  e.custom({
    "type": "create:mechanical_crafting",
    "pattern": [
      "  A  ",
      " BCD ",
      "EFGHI",
      " JKL ",
      " M N "
    ],
    "key": {
      "A": {"item": 'ragnamod_seven:copper_singularity'},
      "B": {"item": 'ragnamod_seven:emerald_singularity'},
      "C": {"item": 'ragnamod_seven:diamond_singularity'},
      "D": {"item": 'ragnamod_seven:redstone_singularity'},
      "E": {"item": 'ragnamod_seven:glowstone_singularity'},
      "F": {"item": 'ragnamod_seven:gold_singularity'},
      "G": {"item": 'ragnamod_seven:coal_singularity'},
      "H": {"item": 'ragnamod_seven:amethyst_singularity'},
      "I": {"item": 'ragnamod_seven:sculk_singularity'},
      "J": {"item": 'ragnamod_seven:enderpearl_singularity'},
      "K": {"item": 'ragnamod_seven:iron_singularity'},
      "L": {"item": 'ragnamod_seven:quartz_singularity'},
      "M": {"item": 'ragnamod_seven:netheritescrap_singularity'},
      "N": {"item": 'ragnamod_seven:lapislazuli_singularity'},
    },
    "result": {
      "item": "ragnamod_seven:vanilla"
    },
    "acceptMirrored": true
  })
  
  //Raw Materials
  e.shapeless('ragnamod_seven:raw_materials', ['ragnamod_seven:tin_singularity', 'ragnamod_seven:silver_singularity', 'ragnamod_seven:nickel_singularity', 'ragnamod_seven:zinc_singularity', 'ragnamod_seven:lead_singularity', 'ragnamod_seven:kepu_singularity', 'ragnamod_seven:bauxite_singularity', 'ragnamod_seven:cobalt_singularity', 'ragnamod_seven:pendorite_singularity'])
  
  //Undergarden
  e.shapeless('ragnamod_seven:undergarden', ['ragnamod_seven:depthrock_singularity', 'ragnamod_seven:forgotten_singularity', 'ragnamod_seven:cloggrum_singularity', 'ragnamod_seven:froststeel_singularity', 'ragnamod_seven:regalium_singularity', 'ragnamod_seven:utherium_singularity'])
  
  //MAGIC
  e.shapeless('ragnamod_seven:magic', ['ragnamod_seven:glowcoke_singularity', 'ragnamod_seven:soulpowder_singularity', 'ragnamod_seven:infusedrock_singularity', 'ragnamod_seven:spiritattunedgem_singularity', 'ragnamod_seven:sourcegem_singularity'])
  
  //TECH
  e.shapeless('ragnamod_seven:tech', ['ragnamod_seven:logicdirector_singularity', 'ragnamod_seven:fluix_singularity', 'ragnamod_seven:variablecard_singularity', 'ragnamod_seven:compactmachinewall_singularity', 'ragnamod_seven:constructionpaste_singularity'])
  
  //FTBIC
  e.shapeless('ragnamod_seven:ftbic', ['ragnamod_seven:scrap_singularity', 'ragnamod_seven:ftbroteinbar_singularity', 'ragnamod_seven:compressedcoalball_singularity', 'ragnamod_seven:antimatter_singularity'])
  
  //Forbidden Arcanus
  e.shapeless('ragnamod_seven:forbidden', ['ragnamod_seven:arcanecrystal_singularity', 'ragnamod_seven:darknetherstar_singularity', 'ragnamod_seven:mundabitur_singularity'])
  
  //Industrial
  e.shapeless('ragnamod_seven:industrial', ['ragnamod_seven:fertilizer_singularity', 'ragnamod_seven:pinkslime_singularity', 'ragnamod_seven:plastic_singularity'])
  
  //Pneumaticcraft
  e.shapeless('ragnamod_seven:pneumaticcraft', ['ragnamod_seven:transistor_singularity', 'ragnamod_seven:capacitor_singularity', 'ragnamod_seven:glycerol_singularity'])
  
  //MEKA
  e.shapeless('ragnamod_seven:meka', ['ragnamod_seven:reprocessedfissilefragment_singularity', 'ragnamod_seven:uranium_singularity', 'ragnamod_seven:osmium_singularity', 'ragnamod_seven:mekasuitmodule_singularity', 'ragnamod_seven:electrolytic_singularity'])
  
  //Create
  e.shapeless('ragnamod_seven:create', ['ragnamod_seven:electrontube_singularity', 'ragnamod_seven:precisionmechanism_singularity', 'ragnamod_seven:heatengine_singularity', 'ragnamod_seven:steamengine_singularity', 'ragnamod_seven:hydraulicengine_singularity', 'ragnamod_seven:sturdysheet_singularity'])
  
  //Blood Magic
  e.shapeless('ragnamod_seven:blood_magic', ['ragnamod_seven:corrosivewill_singularity', 'ragnamod_seven:vengefulwill_singularity', 'ragnamod_seven:steadfaswill_singularity', 'ragnamod_seven:destructivewill_singularity', 'ragnamod_seven:demonwill_singularity'])
  
  //Mobs
  e.shapeless('ragnamod_seven:mobs', ['ragnamod_seven:frozencore_singularity', 'ragnamod_seven:moltencore_singularity', 'ragnamod_seven:nebulousheart_singularity', 'ragnamod_seven:ribbone_singularity', 'ragnamod_seven:zombieheart_singularity', 'ragnamod_seven:chelicerae_singularity', 'ragnamod_seven:catalyzinggland_singularity', 'ragnamod_seven:jellybaby_singularity'])
  
  //PSI
  e.shapeless('ragnamod_seven:psi', ['ragnamod_seven:ebony_singularity', 'ragnamod_seven:ivory_singularity', 'ragnamod_seven:psigem_singularity'])
  
  //Thermal
  e.shapeless('ragnamod_seven:thermal', ['ragnamod_seven:basalz_singularity', 'ragnamod_seven:blitz_singularity', 'ragnamod_seven:blizz_singularity', 'ragnamod_seven:cinnabar_singularity', 'ragnamod_seven:niter_singularity', 'ragnamod_seven:slag_singularity', 'ragnamod_seven:sulfur_singularity', 'ragnamod_seven:rosin_singularity', 'ragnamod_seven:bitumen_singularity'])
  
  //Evil Craft
  e.shapeless('ragnamod_seven:evil_craft', ['ragnamod_seven:darkpower_singularity', 'ragnamod_seven:bloodpotash_singularity'])
  
  //Twilight
  e.shapeless('ragnamod_seven:twilight', ['ragnamod_seven:castlebrick_singularity', 'ragnamod_seven:magicbeans_singularity', 'ragnamod_seven:alphayeti_singularity', 'ragnamod_seven:carminite_singularity', 'ragnamod_seven:ironwood_singularity', 'ragnamod_seven:steeleaf_singularity'])
  
  //Special Bricks
  e.shapeless('ragnamod_seven:special_bricks', ['ragnamod_seven:castiron_singularity', 'ragnamod_seven:industrialiron_singularity', 'ragnamod_seven:wardstone_singularity', 'ragnamod_seven:sunmetal_singularity', 'ragnamod_seven:oraclejelly_singularity', 'ragnamod_seven:netherbrass_singularity', 'ragnamod_seven:cerebral_singularity', 'ragnamod_seven:algal_singularity'])
  
  //Blue Skies
  e.shapeless('ragnamod_seven:blue_skies', ['ragnamod_seven:diopside_singularity', 'ragnamod_seven:ventium_singularity', 'ragnamod_seven:horizonite_singularity', 'ragnamod_seven:falsite_singularity', 'ragnamod_seven:charoite_singularity', 'ragnamod_seven:aquite_singularity', 'ragnamod_seven:pyrope_singularity'])
  
  //Space
  e.shapeless('ragnamod_seven:space', ['ragnamod_seven:ostrum_singularity', 'ragnamod_seven:desh_singularity', 'ragnamod_seven:calorite_singularity'])
  
  //Botania
  e.shapeless('ragnamod_seven:botania', ['ragnamod_seven:pixie_singularity', 'ragnamod_seven:manadiamond_singularity', 'ragnamod_seven:livingwood_singularity', 'ragnamod_seven:livingrock_singularity'])
  
  //Powah
  e.shapeless('ragnamod_seven:powah', ['ragnamod_seven:uraninite_singularity', 'ragnamod_seven:energizedsteel_singularity', 'ragnamod_seven:blazingcrystal_singularity', 'ragnamod_seven:nioticcrystal_singularity', 'ragnamod_seven:spiritedcrystal_singularity', 'ragnamod_seven:nitrocrystal_singularity'])

  //Infinity Gem
  e.custom({
    "type": "create:mechanical_crafting",
    "pattern": [
      "ABCDEFGH",
      "IJKLMNOP",
      "QRSTUVWX",
      "YZ012345",
      "6789abcd"
    ],
    "key": {
      "A": {"item": 'gemsnjewels:garnet'},
      "B": {"item": 'gemsnjewels:ruby'},
      "C": {"item": 'miningmaster:spirit_garnet'},
      "D": {"item": 'gemsnjewels:spinel'},
      "E": {"item": 'miningmaster:fire_ruby'},
      "F": {"item": 'redstone_arsenal:flux_gem'},
      "G": {"item": 'tinkers_reforged:red_beryl_gem'},
      "H": {"item": 'gemsnjewels:tourmaline'},
      "I": {"item": 'tinkers_reforged:hureaulite_gem'},
      "J": {"item": 'miningmaster:kinetic_opal'},
      "K": {"item": 'miningmaster:lucky_citrine'},
      "L": {"item": 'gemsnjewels:citrine'},
      "M": {"item": 'gemsnjewels:topaz'},
      "N": {"item": 'miningmaster:power_pyrite'},
      "O": {"item": 'miningmaster:haste_peridot'},
      "P": {"item": 'tinkers_reforged:epidote_gem'},
      "Q": {"item": 'gemsnjewels:peridot'},
      "R": {"item": 'minecraft:emerald'},
      "S": {"item": 'gemsnjewels:emerald'},
      "T": {"item": 'miningmaster:divine_beryl'},
      "U": {"item": 'miningmaster:air_malachite'},
      "V": {"item": 'minecraft:diamond'},
      "W": {"item": 'gemsnjewels:aquamarine'},
      "X": {"item": 'miningmaster:dive_aquamarine'},
      "Y": {"item": 'gemsnjewels:alexandrite'},
      "Z": {"item": 'gemsnjewels:zircon'},
      "0": {"item": 'miningmaster:ice_sapphire'},
      "1": {"item": 'gemsnjewels:sapphire'},
      "2": {"item": 'gemsnjewels:iolite'},
      "3": {"item": 'miningmaster:unbreaking_iolite'},
      "4": {"item": 'gemsnjewels:tanzanite'},
      "5": {"item": 'occultism:spirit_attuned_gem'},
      "6": {"item": 'gemsnjewels:amethyst'},
      "7": {"item": 'gemsnjewels:ametrine'},
      "8": {"item": 'gemsnjewels:kunzite'},
      "9": {"item": 'miningmaster:heart_rhodonite'},
      "a": {"item": 'miningmaster:spider_kunzite'},
      "b": {"item": 'gemsnjewels:morganite'},
      "c": {"item": 'gemsnjewels:opal'},
      "d": {"item": 'gemsnjewels:black_opal'},
    },
    "result": {
      "item": "ragnamod_seven:infinity_gem"
    },
    "acceptMirrored": true
  })
  
  //Oak Log
  e.shaped('16x minecraft:oak_log', [
    'AAA',
    '   ',
    '   '
  ], {
    A: 'ragnamod_seven:log_egg_component'
  })
  
  //Spruce Log
  e.shaped('16x minecraft:spruce_log', [
    '  A',
    ' A ',
    'A  '
  ], {
    A: 'ragnamod_seven:log_egg_component'
  })
  
  //Birch Log
  e.shaped('16x minecraft:birch_log', [
    'A  ',
    ' A ',
    '  A'
  ], {
    A: 'ragnamod_seven:log_egg_component'
  })
  
  //Jungle Log
  e.shaped('16x minecraft:jungle_log', [
    ' A ',
    ' A ',
    ' A '
  ], {
    A: 'ragnamod_seven:log_egg_component'
  })
  
  //Acacia Log
  e.shaped('16x minecraft:acacia_log', [
    ' A ',
    'A  ',
    ' A '
  ], {
    A: 'ragnamod_seven:log_egg_component'
  })
  
  //Dark Oak Log
  e.shaped('16x minecraft:dark_oak_log', [
    ' A ',
    '  A',
    ' A '
  ], {
    A: 'ragnamod_seven:log_egg_component'
  })
  
  //Crimson Leg
  e.shaped('16x minecraft:crimson_stem', [
    'NA ',
    'AA ',
    '   '
  ], {
    A: 'ragnamod_seven:log_egg_component',
    N: 'minecraft:netherrack'
  })
  
  //Warped Leg
  e.shaped('16x minecraft:warped_stem', [
    'AN ',
    'AA ',
    '   '
  ], {
    A: 'ragnamod_seven:log_egg_component',
    N: 'minecraft:netherrack'
  })
  
  //Summoning Table
  e.shaped('summoningrituals:altar', [
    'ABA',
    'CDC',
    'DED'
  ], {
    A: 'minecraft:candle',
    B: 'minecraft:wither_skeleton_skull',
    C: 'minecraft:gold_block',
    D: 'minecraft:red_carpet',
    E: 'immersiveengineering:craftingtable'
  })

})