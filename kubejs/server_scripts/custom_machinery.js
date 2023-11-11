onEvent('recipes', e => {

  //Extreme Crafting Table
  e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"ragnamod_7:extreme_table"}'), ['AAA', 'ABA', 'AAA'], { A: 'avaritia:crystal_matrix_ingot', B: 'avaritia:compressed_crafting_table' })

  //Will Factory Block
  e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"ragnamod_7:will_factory"}'), ['ABA', 'BCD', 'ABA'], { A: 'ftbic:iridium_circuit', B: 'bloodmagic:ritualstone', C: 'xnet:controller', D: 'rftoolsutility:screen' })
  //Will Crystals
  e.custom({
    "type": "custommachinery:custom_machine",
    "machine": "ragnamod_7:will_factory",
    "time": 20,
    "requirements": [
      {
        "type": "custommachinery:item",
        "mode": "input",
        "item": "bloodmagic:reagentbinding",
        "amount": 1
      },
      {
        "type": "custommachinery:fluid",
        "mode": "input",
        "fluid": "bloodmagic:life_essence_fluid",
        "amount": 1000,
      },
      {
        "type": "custommachinery:energy",
        "mode": "input",
        "amount": 10000
      },
      {
        "type": "custommachinery:item",
        "mode": "output",
        "item": "bloodmagic:defaultcrystal",
        "amount": 4
      },
      {
        "type": "custommachinery:item",
        "mode": "output",
        "item": "bloodmagic:corrosivecrystal",
        "amount": 4
      },
      {
        "type": "custommachinery:item",
        "mode": "output",
        "item": "bloodmagic:vengefulcrystal",
        "amount": 4
      },
      {
        "type": "custommachinery:item",
        "mode": "output",
        "item": "bloodmagic:destructivecrystal",
        "amount": 4
      },
      {
        "type": "custommachinery:item",
        "mode": "output",
        "item": "bloodmagic:steadfastcrystal",
        "amount": 4
      },
      {
        "type": "custommachinery:structure",
        "pattern": [
          [
            " A A ",
            "A   A",
            "     ",
            "A   A",
            " A A "
          ],
          [
            "  B  ",
            " BWB ",
            "BEBIB",
            " BFB ",
            "  m  "
          ],
          [
            "     ",
            "  1  ",
            " 234 ",
            "  5  ",
            "     "
          ]
        ],
        "keys": {
          "A": "bloodmagic:duskritualstone",
          "B": "bloodmagic:ritualstone",
          "W": "bloodmagic:waterritualstone",
          "I": "bloodmagic:airritualstone",
          "E": "bloodmagic:earthritualstone",
          "F": "bloodmagic:fireritualstone",
          "1": "bloodmagic:steadfastdemoncrystal[age=6]",
          "2": "bloodmagic:corrosivedemoncrystal[age=6]",
          "3": "bloodmagic:rawdemoncrystal[age=6]",
          "4": "bloodmagic:destructivedemoncrystal[age=6]",
          "5": "bloodmagic:vengefuldemoncrystal[age=6]"
        }
      }
    ]
  })

  //Focus Entangled Block
  e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"ragnamod_7:focus_entangled"}'), ['ABA', 'BCD', 'ABA'], { A: 'ftbic:iridium_circuit', B: 'gemsnjewels:kunzite_block', C: 'xnet:controller', D: 'rftoolsutility:screen' })
  //Focus Entangled
  function focusEntangled(inputbox, outputblock) {
    e.custom({ "type": "custommachinery:custom_machine", "machine": "ragnamod_7:focus_entangled", "time": 20, "requirements": [{ "type": "custommachinery:item", "mode": "input", "slot": "input_focus_entangled1", "item": "ragnamod_seven:unknown_ingot_block", "amount": 1 }, { "type": "custommachinery:item", "mode": "input", "slot": "input_focus_entangled2", "item": "ragnamod_seven:unknown_ingot_block", "amount": 1 }, { "type": "custommachinery:item", "mode": "input", "slot": "input_focus_entangled3", "item": "ragnamod_seven:unknown_ingot_block", "amount": 1 }, { "type": "custommachinery:item", "mode": "input", "slot": "input_focus_entangled4", "item": "ragnamod_seven:unknown_ingot_block", "amount": 1 }, { "type": "custommachinery:item", "mode": "input", "slot": "input_focus_entangled_focus", "item": "ars_nouveau:summon_focus", "amount": 1 }, { "type": "custommachinery:item", "mode": "input", "slot": "input_focus_entangled_box", "item": "evilcraft:box_of_eternal_closure", "nbt": "{spiritTag:{innerEntity:\"" + inputbox + "\"}}", "amount": 1 }, { "type": "custommachinery:energy", "mode": "input", "amount": 1000000 }, { "type": "custommachinery:item", "mode": "output", "slot": "output_focus_entangled", "item": outputblock, "amount": 4 }, { "type": "custommachinery:item", "mode": "output", "slot": "output_focus_entangled_box", "item": "evilcraft:box_of_eternal_closure", "amount": 1 }, { "type": "custommachinery:structure", "pattern": [["     ", "     ", "  A  ", "   C ", "     "], ["     ", "  A  ", " ABAC", "  AC ", "  C  "], ["     ", "  AC ", " ABA ", " Cm  ", "     "], ["  C  ", " CA  ", "CABA ", "  A  ", "     "], ["     ", " C   ", "  A  ", "     ", "     "]], "keys": { "A": "gemsnjewels:kunzite_block", "B": "ars_nouveau:source_gem_block", "C": "forbidden_arcanus:arcane_golden_glass" } }] })
  }

  focusEntangled("warden_and_sculk:warden", "ragnamod_seven:sculk_metal")
  focusEntangled("occultism:shub_niggurath_familiar", "ragnamod_seven:shub_niggurath_ingot_block")


  //Simulation Matrix Block
  e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"ragnamod_7:simulation_matrix"}'), ['ABA', 'BCD', 'ABA'], { A: 'ftbic:iridium_circuit', B: 'spirit:soul_steel_block', C: 'xnet:controller', D: 'rftoolsutility:screen' })
  //Simulation Matrix
  function simulMatrix(output, pedestal) {
    e.custom({
      "type": "custommachinery:custom_machine", "machine": "ragnamod_7:simulation_matrix", "time": 20, "requirements": [{ "type": "custommachinery:energy", "mode": "input", "amount": 10000 }, { "type": "custommachinery:item", "mode": "output", "item": "hostilenetworks:prediction", "nbt": "{data_model:{id:\"hostilenetworks:" + output + "\"}}", "amount": 2 }, { "type": "custommachinery:block", "mode": "output", "action": "check", "pos": [0, 0, 0, 0, 1, 0], "whitelist": true, "filter": ["spirit:pedestal{item:{Count:1b,id:'hostilenetworks:" + pedestal + "_complete_prediction'}}"] }, { "type": "custommachinery:structure", "pattern": [[" C ", "CmC"], [" A ", "BDB"]], "keys": { "A": "architects_palette:lit_withered_osseous_skull", "B": "decorative_blocks:soul_brazier", "C": "create:scorchia_pillar", "D": "spirit:pedestal" } }]
    })
  }

  simulMatrix("ars_nouveau/wilden_mobs", 'ars_wilden')
  simulMatrix("bat", 'bat')
  simulMatrix("bee", 'bee')
  simulMatrix("blaze", 'blaze')
  simulMatrix("blue_skies_armored_frost_spirit", 'armored_frost_spirit')
  simulMatrix("blue_skies_artificial_golem", 'artificial_golem')
  simulMatrix("blue_skies_azulfo", 'azulfo')
  simulMatrix("blue_skies_cosmic_fox", 'cosmic_fox')
  simulMatrix("blue_skies_crogre", 'crogre')
  simulMatrix("blue_skies_crynocerous", 'crynocerous')
  simulMatrix("blue_skies_crystal_camel", 'crystal_camel')
  simulMatrix("blue_skies_diophyde_prowler", 'diophyde_prowler')
  simulMatrix("blue_skies_emberback", 'emberback')
  simulMatrix("blue_skies_firefly", 'firefly')
  simulMatrix("blue_skies_frost_spirit", 'frost_spirit')
  simulMatrix("blue_skies_infested_swarmer", 'infested_swarmer')
  simulMatrix("blue_skies_nyctofly", 'nyctofly')
  simulMatrix("blue_skies_polargeist", 'polargeist')
  simulMatrix("blue_skies_reindeer", 'reindeer')
  simulMatrix("blue_skies_seclam", 'seclam')
  simulMatrix("blue_skies_shade_monitor", 'shade_monitor')
  simulMatrix("blue_skies_shrumpty", 'shrumpty')
  simulMatrix("blue_skies_snow_owl", 'snow_owl')
  simulMatrix("blue_skies_stardust_ram", 'stardust_ram')
  simulMatrix("blue_skies_stonelet", 'stonelet')
  simulMatrix("blue_skies_venom_spider", 'venom_spider')
  simulMatrix("chicken", 'chicken')
  simulMatrix("cow", 'cow')
  simulMatrix("creeper", 'creeper')
  simulMatrix("doppleganger", 'doppleganger')
  simulMatrix("drowned", 'drowned')
  simulMatrix("ender_dragon", 'ender_dragon')
  simulMatrix("enderman", 'enderman')
  simulMatrix("ghast", 'ghast')
  simulMatrix("glow_squid", 'glow_squid')
  simulMatrix("guardian", 'guardian')
  simulMatrix("hoglin", 'hoglin')
  simulMatrix("infernalexp_blackstone_dwarf", 'blackstone_dwarf')
  simulMatrix("infernalexp_blindsight", 'blindsight')
  simulMatrix("infernalexp_embody", 'embody')
  simulMatrix("infernalexp_glowsilk_moth", 'glowsilk_moth')
  simulMatrix("infernalexp_glowsquito", 'glowsquito')
  simulMatrix("infernalexp_shroomloin", 'shroomloin')
  simulMatrix("infernalexp_voline", 'voline')
  simulMatrix("infernalexp_warpbeetle", 'warpbeetle')
  simulMatrix("magma_cube", 'magma_cube')
  simulMatrix("mooshroom", 'mooshroom')
  simulMatrix("panda", 'panda')
  simulMatrix("pig", 'pig')
  simulMatrix("rabbit", 'rabbit')
  simulMatrix("sheep", 'sheep')
  simulMatrix("skeleton", 'skeleton')
  simulMatrix("slime", 'slime')
  simulMatrix("snow_golem", 'snow_golem')
  simulMatrix("spider", 'spider')
  simulMatrix("squid", 'squid')
  simulMatrix("stray", 'stray')
  simulMatrix("turtle", 'turtle')
  simulMatrix("undergarden_brute", 'brute')
  simulMatrix("undergarden_dweller", 'dweller')
  simulMatrix("undergarden_forgotten_guardian", 'forgotten_guardian')
  simulMatrix("undergarden_gloomper", 'gloomper')
  simulMatrix("undergarden_mog", 'mog')
  simulMatrix("undergarden_muncher", 'muncher')
  simulMatrix("undergarden_rotbeast", 'rotbeast')
  simulMatrix("undergarden_rotling", 'rotling')
  simulMatrix("undergarden_rotwalker", 'rotwalker')
  simulMatrix("undergarden_scintling", 'scintling')
  simulMatrix("undergarden_sploogie", 'sploogie')
  simulMatrix("undergarden_stoneborn", 'stoneborn')
  simulMatrix("warden", 'warden')
  simulMatrix("witch", 'witch')
  simulMatrix("wither_skeleton", 'wither_skeleton')
  simulMatrix("wither", 'wither')
  simulMatrix("zombie", 'zombie')
  simulMatrix("zombified_piglin", 'zombified_piglin')
  simulMatrix("cod", 'cod')
  simulMatrix("elder_guardian", 'elder_guardian')
  simulMatrix("evoker", 'evoker')
  simulMatrix("iron_golem", 'iron_golem')
  simulMatrix("phantom", 'phantom')
  simulMatrix("polar_bear", 'polar_bear')
  simulMatrix("shulker", 'shulker')
  simulMatrix("thermal_basalz", 'basalz')
  simulMatrix("thermal_blitz", 'blitz')
  simulMatrix("thermal_blizz", 'blizz')
  simulMatrix("vindicator", 'vindicator')
  simulMatrix("twilightforest/alpha_yeti", 'alpha_yeti')
  simulMatrix("twilightforest/carminite_golem", 'carminite_golem')
  simulMatrix("twilightforest/death_tome", 'death_tome')
  simulMatrix("twilightforest/deer", 'deer')
  simulMatrix("twilightforest/fire_beetle", 'fire_beetle')
  simulMatrix("twilightforest/twilight_giant", 'twilight_giant')
  simulMatrix("twilightforest/twilight_goblin", 'twilight_goblin')
  simulMatrix("twilightforest/helmet_crab", 'helmet_crab')
  simulMatrix("twilightforest/hydra", 'hydra')
  simulMatrix("twilightforest/kobold", 'kobold')
  simulMatrix("twilightforest/lich", 'lich')
  simulMatrix("twilightforest/minoshroom", 'minoshroom')
  simulMatrix("twilightforest/minotaur", 'minotaur')
  simulMatrix("twilightforest/naga", 'naga')
  simulMatrix("twilightforest/raven", 'raven')
  simulMatrix("twilightforest/redcap", 'redcap')
  simulMatrix("twilightforest/skeleton_druid", 'skeleton_druid')
  simulMatrix("twilightforest/snow_queen", 'snow_queen')
  simulMatrix("twilightforest/twilight_ice", 'twilight_ice')
  simulMatrix("twilightforest/towerwood_borer", 'towerwood_borer')
  simulMatrix("twilightforest/troll", 'troll')
  simulMatrix("twilightforest/ur_ghast", 'ur_ghast')
  simulMatrix("twilightforest/winter_wolf", 'winter_wolf')
  simulMatrix("twilightforest/wraith", 'wraith')
  simulMatrix("twilightforest/yeti", 'yeti')

  //Singulatiries Catalyst
  function singCata(singu1, singu2, singu3, singu4, singu5, matter) { e.custom({ "type": "custommachinery:custom_machine", "machine": "ragnamod_7:singularity_catalyst", "time": 20, "requirements": [{ "type": "custommachinery:item", "mode": "input", "item": "ragnamod_seven:" + singu1 + "_singularity", "amount": 1 }, { "type": "custommachinery:item", "mode": "input", "item": "ragnamod_seven:" + singu2 + "_singularity", "amount": 1 }, { "type": "custommachinery:item", "mode": "input", "item": "ragnamod_seven:" + singu3 + "_singularity", "amount": 1 }, { "type": "custommachinery:item", "mode": "input", "item": "ragnamod_seven:" + singu4 + "_singularity", "amount": 1 }, { "type": "custommachinery:item", "mode": "input", "item": "ragnamod_seven:" + singu5 + "_singularity", "amount": 1 }, { "type": "custommachinery:item", "mode": "output", "item": "ragnamod_seven:agglomerate_matter_" + matter, "amount": 1 }, { "type": "custommachinery:structure", "pattern": [["BCB", "CXC", "BmB"], ["BGB", "GZG", "BGB"], ["BCB", "CDC", "ACB"], ["B A", " X ", "  B"], ["B  ", "   ", "  A"], ["A  ", "   ", "   "]], "keys": { "A": "forbidden_arcanus:eternal_obsidian_skull", "B": "forbidden_arcanus:arcane_polished_darkstone_rod", "X": "ragnamod_seven:singularity_silent", "C": "architects_palette:unobtanium_block", "D": "simplylight:illuminant_magenta_block_on", "G": "quark:myalite_crystal", "Z": "forbidden_arcanus:black_hole" } }] }) }

  singCata('steeleaf', 'magicbeans', 'alphayeti', 'carminite', 'ironwood', 'twilight')
  singCata('vengefulwill', 'steadfaswill', 'destructivewill', 'corrosivewill', 'demonwill', 'blood_magic')
  singCata('hydraulicengine', 'steamengine', 'heatengine', 'precisionmechanism', 'electrontube', 'create')
  singCata('uranium', 'osmium', 'mekasuitmodule', 'electrolytic', 'reprocessedfissilefragment', 'mekanism')
  singCata('spiritedcrystal', 'nioticcrystal', 'blazingcrystal', 'energizedsteel', 'nitrocrystal', 'powah')
  singCata('pixie', 'manadiamond', 'livingwood', 'livingrock', 'alfsteel', 'botania')
  singCata('charoite', 'falsite', 'horizonite', 'ventium', 'aquite', 'blue_skies')
  singCata('ostrum', 'desh', 'calorite', 'cheese', 'ice_shard', 'space')
  singCata('redstone', 'gold', 'copper', 'iron', 'coal', 'minecraft1')
  singCata('lapislazuli', 'emerald', 'diamond', 'quartz', 'honeycomb', 'minecraft2')
  singCata('sculk', 'amethyst', 'netheritescrap', 'enderpearl', 'glowstone', 'minecraft3')
  singCata('cerebral', 'netherbrass', 'wardstone', 'sunmetal', 'oracle_jelly', 'blocky')
  singCata('catalyzinggland', 'zombieheart', 'nebulousheart', 'moltencore', 'frozencore', 'mobs')
  singCata('white_psimetal', 'black_psimetal', 'ebony', 'ivory', 'psigem', 'psi')
  singCata('rosin', 'slag', 'blizz', 'blitz', 'basalz', 'thermal')
  singCata('dark_gem', 'condensed_blood', 'blood_waxed_coal', 'bloodpotash', 'darkpower', 'evil_craft')
  singCata('engineering_processor', 'calculation_processor', 'logic_processor', 'certus_quartz_crystal', 'fluix', 'ae2')
  singCata('dark_matter', 'rune', 'mundabitur', 'darknetherstar', 'arcanecrystal', 'forbidden_arcanus')
  singCata('utherium', 'regalium', 'froststeel', 'cloggrum', 'forgotten', 'undergarden')
  singCata('silicon', 'scrap', 'ftbroteinbar', 'compressedcoalball', 'antimatter', 'ftbic')
  singCata('scorched_brick', 'seared_brick', 'cobalt', 'manyullyn', 'amethyst_bronze', 'tconstruct')
  singCata('abjuration_essence', 'water_essence', 'fire_essence', 'earth_essence', 'air_essence', 'ars')
  singCata('compactmachinewall', 'variablecard', 'logicdirector', 'fertilizer', 'plastic', 'tech')
  singCata('iron_compressed', 'programming_puzzle', 'transistor', 'capacitor', 'glycerol', 'pneumaticcraft')



})