onEvent('recipes', e => {

  e.shapeless('undergarden:gronglet', ['hostilenetworks:undergarden_prediction', '3x twilightforest:moonworm'])
  e.shapeless('3x undergarden:twistytwig', ['hostilenetworks:undergarden_prediction', '3x minecraft:string'])
  e.shapeless('3x undergarden:ditchbulb', ['hostilenetworks:undergarden_prediction', '3x minecraft:coal'])
  e.shapeless('3x undergarden:gloomgourd', ['hostilenetworks:undergarden_prediction', '3x minecraft:pumpkin'])
  e.shapeless('3x undergarden:glitterkelp', ['hostilenetworks:undergarden_prediction', '3x minecraft:kelp'])
  e.shapeless('3x minecraft:cocoa_beans', ['hostilenetworks:undergarden_prediction', '3x undergarden:underbeans'])
  e.shapeless('3x undergarden:droopvine_item', ['hostilenetworks:undergarden_prediction', '3x minecraft:sweet_berries'])

  function modelEvolution(data, input1, input2) {
    //Faulty to Basic
    e.custom({
      "type": "custommachinery:custom_machine",
      "machine": "ragnamod_7:model_evolution",
      "time": 60,
      "requirements": [
        {
          "type": "custommachinery:energy",
          "mode": "input",
          "amount": 100000
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "item": 'hostilenetworks:data_model',
          "nbt": "{data_model:{id:'hostilenetworks:" + data + "'}}",
          "amount": 1,
          "slot": "input"
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "item": 'hostilenetworks:polymer_clay',
          "amount": 16,
          "slot": "in1"
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "item": 'hostilenetworks:blank_data_model',
          "amount": 1,
          "slot": "in2"
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "item": input1,
          "amount": 1,
          "slot": "in3"
        },
        {
          "type": "custommachinery:item",
          "mode": "output",
          "item": 'hostilenetworks:data_model',
          "nbt": "{data_model:{data:1,id:'hostilenetworks:" + data + "'}}",
          "amount": 1,
          "slot": "output"
        }
      ]
    })
    //Basic to Advanced
    e.custom({
      "type": "custommachinery:custom_machine",
      "machine": "ragnamod_7:model_evolution",
      "time": 60,
      "requirements": [
        {
          "type": "custommachinery:energy",
          "mode": "input",
          "amount": 100000
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "item": 'hostilenetworks:data_model',
          "nbt": "{data_model:{data:1,id:'hostilenetworks:" + data + "'}}",
          "amount": 1,
          "slot": "input"
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "item": 'hostilenetworks:prediction',
          "nbt": "{data_model:{id:'hostilenetworks:" + data + "'}}",
          "amount": 16,
          "slot": "in1"
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "item": 'hostilenetworks:blank_data_model',
          "amount": 1,
          "slot": "in2"
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "item": input2,
          "amount": 16,
          "slot": "in3"
        },
        {
          "type": "custommachinery:item",
          "mode": "output",
          "item": 'hostilenetworks:data_model',
          "nbt": "{data_model:{data:2,id:'hostilenetworks:" + data + "'}}",
          "amount": 1,
          "slot": "output"
        }
      ]
    })
    //Advanced to Superior
    e.custom({
      "type": "custommachinery:custom_machine",
      "machine": "ragnamod_7:model_evolution",
      "time": 60,
      "requirements": [
        {
          "type": "custommachinery:energy",
          "mode": "input",
          "amount": 100000
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "item": 'hostilenetworks:data_model',
          "nbt": "{data_model:{data:2,id:'hostilenetworks:" + data + "'}}",
          "amount": 1,
          "slot": "input"
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "item": 'hostilenetworks:prediction',
          "nbt": "{data_model:{id:'hostilenetworks:" + data + "'}}",
          "amount": 32,
          "slot": "in1"
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "item": 'hostilenetworks:blank_data_model',
          "amount": 1,
          "slot": "in2"
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "item": input2,
          "amount": 64,
          "slot": "in3"
        },
        {
          "type": "custommachinery:fluid",
          "mode": "input",
          "fluid": "industrialforegoing:biofuel",
          "amount": 10000,
        },
        {
          "type": "custommachinery:item",
          "mode": "output",
          "item": 'hostilenetworks:data_model',
          "nbt": "{data_model:{data:3,id:'hostilenetworks:" + data + "'}}",
          "amount": 1,
          "slot": "output"
        }
      ]
    })
    //Superior to Self-Aware
    e.custom({
      "type": "custommachinery:custom_machine",
      "machine": "ragnamod_7:model_evolution",
      "time": 60,
      "requirements": [
        {
          "type": "custommachinery:energy",
          "mode": "input",
          "amount": 100000
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "item": 'hostilenetworks:data_model',
          "nbt": "{data_model:{data:3,id:'hostilenetworks:" + data + "'}}",
          "amount": 1,
          "slot": "input"
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "item": 'hostilenetworks:prediction',
          "nbt": "{data_model:{id:'hostilenetworks:" + data + "'}}",
          "amount": 64,
          "slot": "in1"
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "item": 'hostilenetworks:blank_data_model',
          "amount": 1,
          "slot": "in2"
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "item": input2,
          "amount": 64,
          "slot": "in3"
        },
        {
          "type": "custommachinery:fluid",
          "mode": "input",
          "fluid": "industrialforegoing:ether_gas",
          "amount": 1000,
        },
        {
          "type": "custommachinery:item",
          "mode": "output",
          "item": 'hostilenetworks:data_model',
          "nbt": "{data_model:{data:4,id:'hostilenetworks:" + data + "'}}",
          "amount": 1,
          "slot": "output"
        }
      ]
    })
  }

  modelEvolution("ars_nouveau/wilden_mobs", '#ars_nouveau:wilden_drop', 'hostilenetworks:overworld_prediction')
  modelEvolution("bat", 'forbidden_arcanus:bat_wing', 'hostilenetworks:overworld_prediction')
  modelEvolution("bee", 'minecraft:honeycomb', 'hostilenetworks:overworld_prediction')
  modelEvolution("blaze", 'minecraft:blaze_rod', 'hostilenetworks:nether_prediction')
  modelEvolution("blue_skies_armored_frost_spirit", 'minecraft:packed_ice', 'hostilenetworks:blueskies_prediction')
  modelEvolution("blue_skies_artificial_golem", 'blue_skies:glowing_blinding_stone', 'hostilenetworks:blueskies_prediction')
  modelEvolution("blue_skies_azulfo", 'blue_skies:azulfo_horn', 'hostilenetworks:blueskies_prediction')
  modelEvolution("blue_skies_cosmic_fox", 'blue_skies:fox_pelt', 'hostilenetworks:blueskies_prediction')
  modelEvolution("blue_skies_crogre", 'blue_skies:bug_guts', 'hostilenetworks:blueskies_prediction')
  modelEvolution("blue_skies_crynocerous", 'minecraft:packed_ice', 'hostilenetworks:blueskies_prediction')
  modelEvolution("blue_skies_crystal_camel", 'blue_skies:vitreous_moonstone', 'hostilenetworks:blueskies_prediction')
  modelEvolution("blue_skies_diophyde_prowler", 'blue_skies:municipal_monkfish', 'hostilenetworks:blueskies_prediction')
  modelEvolution("blue_skies_emberback", 'blue_skies:bug_guts', 'hostilenetworks:blueskies_prediction')
  modelEvolution("blue_skies_firefly", 'minecraft:glowstone_dust', 'hostilenetworks:blueskies_prediction')
  modelEvolution("blue_skies_frost_spirit", 'blue_skies:star_flare', 'hostilenetworks:blueskies_prediction')
  modelEvolution("blue_skies_infested_swarmer", 'blue_skies:bug_guts', 'hostilenetworks:blueskies_prediction')
  modelEvolution("blue_skies_nyctofly", 'minecraft:slime_ball', 'hostilenetworks:blueskies_prediction')
  modelEvolution("blue_skies_polargeist", 'blue_skies:soul_fragment', 'hostilenetworks:blueskies_prediction')
  modelEvolution("blue_skies_reindeer", 'blue_skies:venison', 'hostilenetworks:blueskies_prediction')
  modelEvolution("blue_skies_seclam", 'blue_skies:pearl', 'hostilenetworks:blueskies_prediction')
  modelEvolution("blue_skies_shade_monitor", 'blue_skies:monitor_tail', 'hostilenetworks:blueskies_prediction')
  modelEvolution("blue_skies_shrumpty", 'blue_skies:snowcap_pinhead', 'hostilenetworks:blueskies_prediction')
  modelEvolution("blue_skies_snow_owl", 'minecraft:feather', 'hostilenetworks:blueskies_prediction')
  modelEvolution("blue_skies_stardust_ram", 'minecraft:white_wool', 'hostilenetworks:blueskies_prediction')
  modelEvolution("blue_skies_stonelet", 'blue_skies:nature_stone', 'hostilenetworks:blueskies_prediction')
  modelEvolution("blue_skies_venom_spider", 'minecraft:spider_eye', 'hostilenetworks:blueskies_prediction')
  modelEvolution("chicken", 'minecraft:egg', 'hostilenetworks:overworld_prediction')
  modelEvolution("cow", 'minecraft:leather', 'hostilenetworks:overworld_prediction')
  modelEvolution("creeper", 'minecraft:gunpowder', 'hostilenetworks:overworld_prediction')
  modelEvolution("doppleganger", 'botania:life_essence', 'hostilenetworks:overworld_prediction')
  modelEvolution("drowned", 'minecraft:copper_ingot', 'hostilenetworks:overworld_prediction')
  modelEvolution("ender_dragon", 'minecraft:dragon_egg', 'hostilenetworks:end_prediction')
  modelEvolution("enderman", 'minecraft:ender_pearl', 'hostilenetworks:end_prediction')
  modelEvolution("ghast", 'minecraft:ghast_tear', 'hostilenetworks:nether_prediction')
  modelEvolution("glow_squid", 'minecraft:glow_ink_sac', 'hostilenetworks:overworld_prediction')
  modelEvolution("guardian", 'minecraft:prismarine_shard', 'hostilenetworks:overworld_prediction')
  modelEvolution("hoglin", 'nethersdelight:hoglin_loin', 'hostilenetworks:nether_prediction')
  modelEvolution("infernalexp_blackstone_dwarf", 'minecraft:golden_apple', 'hostilenetworks:nether_prediction')
  modelEvolution("infernalexp_blindsight", 'infernalexp:blindsight_tongue', 'hostilenetworks:nether_prediction')
  modelEvolution("infernalexp_embody", 'infernalexp:soul_salt_clump', 'hostilenetworks:nether_prediction')
  modelEvolution("infernalexp_glowsilk_moth", 'infernalexp:moth_dust', 'hostilenetworks:nether_prediction')
  modelEvolution("infernalexp_glowsquito", 'infernalexp:glowcoal', 'hostilenetworks:nether_prediction')
  modelEvolution("infernalexp_shroomloin", 'infernalexp:ascus_bomb', 'hostilenetworks:nether_prediction')
  modelEvolution("infernalexp_voline", 'minecraft:gold_nugget', 'hostilenetworks:nether_prediction')
  modelEvolution("infernalexp_warpbeetle", 'infernalexp:warped_fungus_cap', 'hostilenetworks:nether_prediction')
  modelEvolution("magma_cube", 'minecraft:magma_cream', 'hostilenetworks:nether_prediction')
  modelEvolution("mooshroom", 'minecraft:mushroom_stew', 'hostilenetworks:overworld_prediction')
  modelEvolution("panda", 'minecraft:bamboo', 'hostilenetworks:overworld_prediction')
  modelEvolution("pig", 'minecraft:porkchop', 'hostilenetworks:overworld_prediction')
  modelEvolution("rabbit", 'minecraft:rabbit_foot', 'hostilenetworks:overworld_prediction')
  modelEvolution("sheep", '#minecraft:wool', 'hostilenetworks:overworld_prediction')
  modelEvolution("skeleton", 'minecraft:bone', 'hostilenetworks:overworld_prediction')
  modelEvolution("slime", 'minecraft:slime_ball', 'hostilenetworks:overworld_prediction')
  modelEvolution("snow_golem", 'minecraft:snow_block', 'hostilenetworks:overworld_prediction')
  modelEvolution("spider", 'minecraft:cobweb', 'hostilenetworks:overworld_prediction')
  modelEvolution("squid", 'minecraft:ink_sac', 'hostilenetworks:overworld_prediction')
  modelEvolution("stray", 'minecraft:bone', 'hostilenetworks:overworld_prediction')
  modelEvolution("turtle", 'minecraft:turtle_egg', 'hostilenetworks:overworld_prediction')
  modelEvolution("undergarden_brute", 'undergarden:brute_tusk', 'hostilenetworks:undergarden_prediction')
  modelEvolution("undergarden_dweller", 'undergarden:raw_dweller_meat', 'hostilenetworks:undergarden_prediction')
  modelEvolution("undergarden_forgotten_guardian", 'undergarden:forgotten_nugget', 'hostilenetworks:undergarden_prediction')
  modelEvolution("undergarden_gloomper", 'undergarden:raw_gloomper_leg', 'hostilenetworks:undergarden_prediction')
  modelEvolution("undergarden_mog", 'undergarden:mogmoss', 'hostilenetworks:undergarden_prediction')
  modelEvolution("undergarden_muncher", 'undergarden:cloggrum_nugget', 'hostilenetworks:undergarden_prediction')
  modelEvolution("undergarden_rotbeast", 'undergarden:utheric_shard', 'hostilenetworks:undergarden_prediction')
  modelEvolution("undergarden_rotling", 'undergarden:utheric_shard', 'hostilenetworks:undergarden_prediction')
  modelEvolution("undergarden_rotwalker", 'undergarden:utheric_shard', 'hostilenetworks:undergarden_prediction')
  modelEvolution("undergarden_scintling", 'undergarden:goo_ball', 'hostilenetworks:undergarden_prediction')
  modelEvolution("undergarden_sploogie", 'undergarden:depthrock_pebble', 'hostilenetworks:undergarden_prediction')
  modelEvolution("undergarden_stoneborn", 'undergarden:depthrock_pebble', 'hostilenetworks:undergarden_prediction')
  modelEvolution("warden", 'warden_and_sculk:echo_shard', 'hostilenetworks:overworld_prediction')
  modelEvolution("witch", 'reliquary:witch_hat', 'hostilenetworks:overworld_prediction')
  modelEvolution("wither_skeleton", 'minecraft:wither_skeleton_skull', 'hostilenetworks:nether_prediction')
  modelEvolution("wither", 'minecraft:nether_star', 'hostilenetworks:nether_prediction')
  modelEvolution("zombie", 'minecraft:rotten_flesh', 'hostilenetworks:overworld_prediction')
  modelEvolution("zombified_piglin", 'minecraft:golden_sword', 'hostilenetworks:nether_prediction')
  modelEvolution("cod", 'minecraft:cod_bucket', 'hostilenetworks:overworld_prediction')
  modelEvolution("elder_guardian", 'minecraft:wet_sponge', 'hostilenetworks:overworld_prediction')
  modelEvolution("evoker", 'minecraft:totem_of_undying', 'hostilenetworks:overworld_prediction')
  modelEvolution("iron_golem", 'minecraft:iron_block', 'hostilenetworks:overworld_prediction')
  modelEvolution("phantom", 'minecraft:phantom_membrane', 'hostilenetworks:overworld_prediction')
  modelEvolution("polar_bear", 'minecraft:salmon_bucket', 'hostilenetworks:overworld_prediction')
  modelEvolution("shulker", 'minecraft:shulker_shell', 'hostilenetworks:end_prediction')
  modelEvolution("thermal/basalz", 'thermal:basalz_rod', 'hostilenetworks:overworld_prediction')
  modelEvolution("thermal/blitz", 'thermal:blitz_rod', 'hostilenetworks:overworld_prediction')
  modelEvolution("thermal/blizz", 'thermal:blizz_rod', 'hostilenetworks:overworld_prediction')
  modelEvolution("vindicator", 'minecraft:iron_axe', 'hostilenetworks:overworld_prediction')
  modelEvolution("twilightforest/alpha_yeti", 'twilightforest:alpha_yeti_fur', 'hostilenetworks:twilight_prediction')
  modelEvolution("twilightforest/carminite_golem", 'minecraft:iron_block', 'hostilenetworks:twilight_prediction')
  modelEvolution("twilightforest/death_tome", 'minecraft:writable_book', 'hostilenetworks:twilight_prediction')
  modelEvolution("twilightforest/deer", 'twilightforest:raw_venison', 'hostilenetworks:twilight_prediction')
  modelEvolution("twilightforest/fire_beetle", 'minecraft:gunpowder', 'hostilenetworks:twilight_prediction')
  modelEvolution("twilightforest/giant", 'twilightforest:giant_sword', 'hostilenetworks:twilight_prediction')
  modelEvolution("twilightforest/goblin", 'twilightforest:armor_shard', 'hostilenetworks:twilight_prediction')
  modelEvolution("twilightforest/helmet_crab", 'twilightforest:armor_shard', 'hostilenetworks:twilight_prediction')
  modelEvolution("twilightforest/hydra", 'twilightforest:hydra_trophy', 'hostilenetworks:twilight_prediction')
  modelEvolution("twilightforest/kobold", 'minecraft:wheat', 'hostilenetworks:twilight_prediction')
  modelEvolution("twilightforest/lich", 'twilightforest:lich_trophy', 'hostilenetworks:twilight_prediction')
  modelEvolution("twilightforest/minoshroom", 'twilightforest:minoshroom_trophy', 'hostilenetworks:twilight_prediction')
  modelEvolution("twilightforest/minotaur", 'twilightforest:raw_meef', 'hostilenetworks:twilight_prediction')
  modelEvolution("twilightforest/naga", 'twilightforest:naga_trophy', 'hostilenetworks:twilight_prediction')
  modelEvolution("twilightforest/raven", 'twilightforest:raven_feather', 'hostilenetworks:twilight_prediction')
  modelEvolution("twilightforest/redcap", 'minecraft:iron_pickaxe', 'hostilenetworks:twilight_prediction')
  modelEvolution("twilightforest/skeleton_druid", 'twilightforest:torchberries', 'hostilenetworks:twilight_prediction')
  modelEvolution('twilightforest/snow_queen', 'twilightforest:snow_queen_trophy', 'hostilenetworks:twilight_prediction')
  modelEvolution("twilightforest/stable_ice_core", 'minecraft:snowball', 'hostilenetworks:twilight_prediction')
  modelEvolution("twilightforest/towerwood_borer", 'twilightforest:borer_essence', 'hostilenetworks:twilight_prediction')
  modelEvolution("twilightforest/troll", 'twilightforest:magic_beans', 'hostilenetworks:twilight_prediction')
  modelEvolution("twilightforest/ur_ghast", 'twilightforest:ur_ghast_trophy', 'hostilenetworks:twilight_prediction')
  modelEvolution("twilightforest/winter_wolf", 'twilightforest:arctic_fur', 'hostilenetworks:twilight_prediction')
  modelEvolution("twilightforest/wraith", 'minecraft:glowstone_dust', 'hostilenetworks:twilight_prediction')
  modelEvolution("twilightforest/yeti", 'twilightforest:arctic_fur', 'hostilenetworks:twilight_prediction')
  modelEvolution("artifacts/mimic", '#artifacts:artifacts', 'hostilenetworks:end_prediction')


  //Complete Prediction
  function completedPrediction(input, output) {
    e.shapeless('hostilenetworks:' + output + '_complete_prediction', ['ragnamod_seven:alloy_matrix', [Item.of('hostilenetworks:data_model', '{data_model:{data:4,id:"hostilenetworks:' + input + '"}}'), Item.of('hostilenetworks:data_model', '{data_model:{data:4,id:"hostilenetworks:' + input + '",iterations:0}}')]])
  }
  completedPrediction("ars_nouveau/wilden_mobs", 'ars_wilden')
  completedPrediction("bat", 'bat')
  completedPrediction("bee", 'bee')
  completedPrediction("blaze", 'blaze')
  completedPrediction("blue_skies_armored_frost_spirit", 'armored_frost_spirit')
  completedPrediction("blue_skies_artificial_golem", 'artificial_golem')
  completedPrediction("blue_skies_azulfo", 'azulfo')
  completedPrediction("blue_skies_cosmic_fox", 'cosmic_fox')
  completedPrediction("blue_skies_crogre", 'crogre')
  completedPrediction("blue_skies_crynocerous", 'crynocerous')
  completedPrediction("blue_skies_crystal_camel", 'crystal_camel')
  completedPrediction("blue_skies_diophyde_prowler", 'diophyde_prowler')
  completedPrediction("blue_skies_emberback", 'emberback')
  completedPrediction("blue_skies_firefly", 'firefly')
  completedPrediction("blue_skies_frost_spirit", 'frost_spirit')
  completedPrediction("blue_skies_infested_swarmer", 'infested_swarmer')
  completedPrediction("blue_skies_nyctofly", 'nyctofly')
  completedPrediction("blue_skies_polargeist", 'polargeist')
  completedPrediction("blue_skies_reindeer", 'reindeer')
  completedPrediction("blue_skies_seclam", 'seclam')
  completedPrediction("blue_skies_shade_monitor", 'shade_monitor')
  completedPrediction("blue_skies_shrumpty", 'shrumpty')
  completedPrediction("blue_skies_snow_owl", 'snow_owl')
  completedPrediction("blue_skies_stardust_ram", 'stardust_ram')
  completedPrediction("blue_skies_stonelet", 'stonelet')
  completedPrediction("blue_skies_venom_spider", 'venom_spider')
  completedPrediction("chicken", 'chicken')
  completedPrediction("cow", 'cow')
  completedPrediction("creeper", 'creeper')
  completedPrediction("doppleganger", 'doppleganger')
  completedPrediction("drowned", 'drowned')
  completedPrediction("ender_dragon", 'ender_dragon')
  completedPrediction("enderman", 'enderman')
  completedPrediction("ghast", 'ghast')
  completedPrediction("glow_squid", 'glow_squid')
  completedPrediction("guardian", 'guardian')
  completedPrediction("hoglin", 'hoglin')
  completedPrediction("infernalexp_blackstone_dwarf", 'blackstone_dwarf')
  completedPrediction("infernalexp_blindsight", 'blindsight')
  completedPrediction("infernalexp_embody", 'embody')
  completedPrediction("infernalexp_glowsilk_moth", 'glowsilk_moth')
  completedPrediction("infernalexp_glowsquito", 'glowsquito')
  completedPrediction("infernalexp_shroomloin", 'shroomloin')
  completedPrediction("infernalexp_voline", 'voline')
  completedPrediction("infernalexp_warpbeetle", 'warpbeetle')
  completedPrediction("magma_cube", 'magma_cube')
  completedPrediction("mooshroom", 'mooshroom')
  completedPrediction("panda", 'panda')
  completedPrediction("pig", 'pig')
  completedPrediction("rabbit", 'rabbit')
  completedPrediction("sheep", 'sheep')
  completedPrediction("skeleton", 'skeleton')
  completedPrediction("slime", 'slime')
  completedPrediction("snow_golem", 'snow_golem')
  completedPrediction("spider", 'spider')
  completedPrediction("squid", 'squid')
  completedPrediction("stray", 'stray')
  completedPrediction("turtle", 'turtle')
  completedPrediction("undergarden_brute", 'brute')
  completedPrediction("undergarden_dweller", 'dweller')
  completedPrediction("undergarden_forgotten_guardian", 'forgotten_guardian')
  completedPrediction("undergarden_gloomper", 'gloomper')
  completedPrediction("undergarden_mog", 'mog')
  completedPrediction("undergarden_muncher", 'muncher')
  completedPrediction("undergarden_rotbeast", 'rotbeast')
  completedPrediction("undergarden_rotling", 'rotling')
  completedPrediction("undergarden_rotwalker", 'rotwalker')
  completedPrediction("undergarden_scintling", 'scintling')
  completedPrediction("undergarden_sploogie", 'sploogie')
  completedPrediction("undergarden_stoneborn", 'stoneborn')
  completedPrediction("warden", 'warden')
  completedPrediction("witch", 'witch')
  completedPrediction("wither_skeleton", 'wither_skeleton')
  completedPrediction("wither", 'wither')
  completedPrediction("zombie", 'zombie')
  completedPrediction("zombified_piglin", 'zombified_piglin')
  completedPrediction("cod", 'cod')
  completedPrediction("elder_guardian", 'elder_guardian')
  completedPrediction("evoker", 'evoker')
  completedPrediction("iron_golem", 'iron_golem')
  completedPrediction("phantom", 'phantom')
  completedPrediction("polar_bear", 'polar_bear')
  completedPrediction("shulker", 'shulker')
  completedPrediction("thermal/basalz", 'basalz')
  completedPrediction("thermal/blitz", 'blitz')
  completedPrediction("thermal/blizz", 'blizz')
  completedPrediction("vindicator", 'vindicator')
  completedPrediction("twilightforest/alpha_yeti", 'alpha_yeti')
  completedPrediction("twilightforest/carminite_golem", 'carminite_golem')
  completedPrediction("twilightforest/death_tome", 'death_tome')
  completedPrediction("twilightforest/deer", 'deer')
  completedPrediction("twilightforest/fire_beetle", 'fire_beetle')
  completedPrediction("twilightforest/giant", 'twilight_giant')
  completedPrediction("twilightforest/goblin", 'twilight_goblin')
  completedPrediction("twilightforest/helmet_crab", 'helmet_crab')
  completedPrediction("twilightforest/hydra", 'hydra')
  completedPrediction("twilightforest/kobold", 'kobold')
  completedPrediction("twilightforest/lich", 'lich')
  completedPrediction("twilightforest/minoshroom", 'minoshroom')
  completedPrediction("twilightforest/minotaur", 'minotaur')
  completedPrediction("twilightforest/naga", 'naga')
  completedPrediction("twilightforest/raven", 'raven')
  completedPrediction("twilightforest/redcap", 'redcap')
  completedPrediction("twilightforest/skeleton_druid", 'skeleton_druid')
  completedPrediction("twilightforest/snow_queen", 'snow_queen')
  completedPrediction("twilightforest/stable_ice_core", 'twilight_ice')
  completedPrediction("twilightforest/towerwood_borer", 'towerwood_borer')
  completedPrediction("twilightforest/troll", 'troll')
  completedPrediction("twilightforest/ur_ghast", 'ur_ghast')
  completedPrediction("twilightforest/winter_wolf", 'winter_wolf')
  completedPrediction("twilightforest/wraith", 'wraith')
  completedPrediction("twilightforest/yeti", 'yeti')
  completedPrediction("artifacts/mimic", 'mimic')

})