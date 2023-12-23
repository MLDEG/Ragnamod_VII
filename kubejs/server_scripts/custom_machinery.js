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
  function focusEntangled(inputbox, outputblock) { e.custom({ "type": "custommachinery:custom_machine", "machine": "ragnamod_7:focus_entangled", "time": 20, "requirements": [{ "type": "custommachinery:item", "mode": "input", "slot": "input_focus_entangled1", "item": "ragnamod_seven:unknown_ingot_block", "amount": 1 }, { "type": "custommachinery:item", "mode": "input", "slot": "input_focus_entangled2", "item": "ragnamod_seven:unknown_ingot_block", "amount": 1 }, { "type": "custommachinery:item", "mode": "input", "slot": "input_focus_entangled3", "item": "ragnamod_seven:unknown_ingot_block", "amount": 1 }, { "type": "custommachinery:item", "mode": "input", "slot": "input_focus_entangled4", "item": "ragnamod_seven:unknown_ingot_block", "amount": 1 }, { "type": "custommachinery:item", "mode": "input", "slot": "input_focus_entangled_focus", "item": "ars_nouveau:summon_focus", "amount": 1 }, { "type": "custommachinery:item", "mode": "input", "slot": "input_focus_entangled_box", "item": "evilcraft:box_of_eternal_closure", "nbt": "{spiritTag:{innerEntity:\"" + inputbox + "\"}}", "amount": 1 }, { "type": "custommachinery:energy", "mode": "input", "amount": 1000000 }, { "type": "custommachinery:item", "mode": "output", "slot": "output_focus_entangled", "item": outputblock, "amount": 4 }, { "type": "custommachinery:item", "mode": "output", "slot": "output_focus_entangled_box", "item": "evilcraft:box_of_eternal_closure", "amount": 1 }, { "type": "custommachinery:structure", "pattern": [["     ", "     ", "  A  ", "   C ", "     "], ["     ", "  A  ", " ABAC", "  AC ", "  C  "], ["     ", "  AC ", " ABA ", " Cm  ", "     "], ["  C  ", " CA  ", "CABA ", "  A  ", "     "], ["     ", " C   ", "  A  ", "     ", "     "]], "keys": { "A": "gemsnjewels:kunzite_block", "B": "ars_nouveau:source_gem_block", "C": "forbidden_arcanus:arcane_golden_glass" } }] }) }
  focusEntangled("warden_and_sculk:warden", "ragnamod_seven:sculk_metal")
  focusEntangled("occultism:shub_niggurath_familiar", "ragnamod_seven:shub_niggurath_ingot_block")

  //Simulation Matrix Block
  e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"ragnamod_7:simulation_matrix"}'), ['ABA', 'BCD', 'ABA'], { A: 'ftbic:iridium_circuit', B: 'spirit:soul_steel_block', C: 'xnet:controller', D: 'rftoolsutility:screen' })
  //Simulation Matrix
  function simulMatrix(output, pedestal) { e.custom({ "type": "custommachinery:custom_machine", "machine": "ragnamod_7:simulation_matrix", "time": 20, "requirements": [{ "type": "custommachinery:energy", "mode": "input", "amount": 10000 }, { "type": "custommachinery:item", "mode": "output", "item": "hostilenetworks:prediction", "nbt": "{data_model:{id:\"hostilenetworks:" + output + "\"}}", "amount": 2 }, { "type": "custommachinery:block", "mode": "output", "action": "check", "pos": [0, 0, 0, 0, 1, 0], "whitelist": true, "filter": ["spirit:pedestal{item:{Count:1b,id:'hostilenetworks:" + pedestal + "_complete_prediction'}}"] }, { "type": "custommachinery:structure", "pattern": [[" C ", "CmC"], [" A ", "BDB"]], "keys": { "A": "architects_palette:lit_withered_osseous_skull", "B": "decorative_blocks:soul_brazier", "C": "create:scorchia_pillar", "D": "spirit:pedestal" } }] }) }
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
  simulMatrix("thermal/basalz", 'basalz')
  simulMatrix("thermal/blitz", 'blitz')
  simulMatrix("thermal/blizz", 'blizz')
  simulMatrix("vindicator", 'vindicator')
  simulMatrix("twilightforest/alpha_yeti", 'alpha_yeti')
  simulMatrix("twilightforest/carminite_golem", 'carminite_golem')
  simulMatrix("twilightforest/death_tome", 'death_tome')
  simulMatrix("twilightforest/deer", 'deer')
  simulMatrix("twilightforest/fire_beetle", 'fire_beetle')
  simulMatrix("twilightforest/giant", 'twilight_giant')
  simulMatrix("twilightforest/goblin", 'twilight_goblin')
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
  simulMatrix("twilightforest/stable_ice_core", 'twilight_ice')
  simulMatrix("twilightforest/towerwood_borer", 'towerwood_borer')
  simulMatrix("twilightforest/troll", 'troll')
  simulMatrix("twilightforest/ur_ghast", 'ur_ghast')
  simulMatrix("twilightforest/winter_wolf", 'winter_wolf')
  simulMatrix("twilightforest/wraith", 'wraith')
  simulMatrix("twilightforest/yeti", 'yeti')
  simulMatrix("artifacts/mimic", 'mimic')

  //Singulatiries Catalyst Block
  e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"ragnamod_7:singularity_catalyst"}'), ['ABA', 'BCD', 'ABA'], { A: 'ftbic:iridium_circuit', B: 'architects_palette:unobtanium_block', C: 'xnet:controller', D: 'rftoolsutility:screen' })
  //Singulatiries Catalyst
  function singCata(singu1, singu2, singu3, singu4, singu5, matter) { e.custom({ "type": "custommachinery:custom_machine", "machine": "ragnamod_7:singularity_catalyst", "time": 20, "requirements": [{ "type": "custommachinery:item", "mode": "input", "item": "ragnamod_seven:" + singu1 + "_singularity", "amount": 1 }, { "type": "custommachinery:item", "mode": "input", "item": "ragnamod_seven:" + singu2 + "_singularity", "amount": 1 }, { "type": "custommachinery:item", "mode": "input", "item": "ragnamod_seven:" + singu3 + "_singularity", "amount": 1 }, { "type": "custommachinery:item", "mode": "input", "item": "ragnamod_seven:" + singu4 + "_singularity", "amount": 1 }, { "type": "custommachinery:item", "mode": "input", "item": "ragnamod_seven:" + singu5 + "_singularity", "amount": 1 }, { "type": "custommachinery:item", "mode": "output", "item": "ragnamod_seven:agglomerate_matter_" + matter, "amount": 1 }, { "type": "custommachinery:structure", "pattern": [["BCB", "CXC", "BmB"], ["BGB", "GZG", "BGB"], ["BCB", "CDC", "ACB"], ["B A", " X ", "  B"], ["B  ", "   ", "  A"], ["A  ", "   ", "   "]], "keys": { "A": "forbidden_arcanus:eternal_obsidian_skull", "B": "forbidden_arcanus:arcane_polished_darkstone_rod", "X": "ragnamod_seven:singularity_silent", "C": "architects_palette:unobtanium_block", "D": "simplylight:illuminant_magenta_block_on", "G": "byg:purple_bulbis_shell", "Z": "forbidden_arcanus:black_hole" } }] }) }
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

  //PSI STabilizer Block
  e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"ragnamod_7:psi_stabilizer"}'), ['ABA', 'BCD', 'ABA'], { A: 'ftbic:iridium_circuit', B: 'psi:lit_black_psimetal_plate', C: 'xnet:controller', D: 'rftoolsutility:screen' })
  //PSI Stabilizer
  function psiStab(item) { e.custom({ "type": "custommachinery:custom_machine", "machine": "ragnamod_7:psi_stabilizer", "time": 10, "requirements": [{ "type": "custommachinery:energy", "mode": "input", "amount": 10000 }, { "type": "custommachinery:item_transform", "input": item, "output": item, "slot": "inout" }, { "type": "custommachinery:item", "mode": "output", "item": item, "amount": 1, "slot": "output" }, { "type": "custommachinery:structure", "pattern": [["m"], ["A"], ["B"], ["C"]], "keys": { "A": "psi:cad_assembler", "B": "ragnamod_seven:psi_stabilizer", "C": "psi:psigem_block", } }] }) }
  psiStab("psi:psidust")
  psiStab("psi:psimetal")
  psiStab("psi:psigem")
  psiStab("psi:ebony_substance")
  psiStab("psi:ivory_substance")

  //Ars Imprégnation
  e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"ragnamod_7:ars_impregnation"}'), ['ABA', 'BCD', 'ABA'], { A: 'ftbic:iridium_circuit', B: 'ars_nouveau:arcane_core', C: 'xnet:controller', D: 'rftoolsutility:screen' })
  //Ars Omprégnation
  function arsImpre(time, output) { e.custom({ "type": "custommachinery:custom_machine", "machine": "ragnamod_7:ars_impregnation", "time": time, "requirements": [{ "type": "custommachinery:item", "mode": "output", "item": output, "amount": 1 }, { "type": "custommachinery:structure", "pattern": [["BCB", " m "], ["ABA", " I "], [" A ", "   "]], "keys": { "A": "ars_nouveau:arcane_pedestal", "B": "ars_nouveau:arcane_core", "C": "ars_nouveau:source_gem_block", "I": "ars_nouveau:source_jar[fill=11]" } }, { "type": "custommachinery:block", "mode": "output", "action": "check", "pos": [-1, 0, 0, 1, 2, -1], "whitelist": true, "amount": 3, "comparator": "==", "filter": ["ars_nouveau:arcane_pedestal{itemStack:{Count:1b,id:\"" + output + "\"}}"] }] }) }
  arsImpre(5, 'ars_nouveau:air_essence')
  arsImpre(5, 'ars_nouveau:manipulation_essence')
  arsImpre(5, 'ars_nouveau:abjuration_essence')
  arsImpre(5, 'ars_nouveau:water_essence')
  arsImpre(5, 'ars_nouveau:earth_essence')
  arsImpre(5, 'ars_nouveau:conjuration_essence')
  arsImpre(5, 'ars_nouveau:fire_essence')
  arsImpre(5, 'ars_nouveau:source_gem')
  arsImpre(40, 'ars_nouveau:source_gem_block')

  //Advanced Neutron Collector
  e.custom({ "type": "custommachinery:custom_machine", "machine": "ragnamod_7:advanced_neutron_collector", "time": 20, "requirements": [{ "type": "custommachinery:item", "mode": "output", "item": 'avaritia:neutron_pile', "amount": 1 }] })

  //Black Sphere Block
  e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"ragnamod_7:black_sphere"}'), ['ABA', 'BCD', 'ABA'], { A: 'ftbic:iridium_circuit', B: 'ragnamod_seven:noisy_neutronium', C: 'xnet:controller', D: 'rftoolsutility:screen' })
  //Black Sphere
  e.custom({
    "type": "custommachinery:custom_machine",
    "machine": "ragnamod_7:black_sphere",
    "time": 200,
    "requirements": [
      { "type": "custommachinery:item", "mode": "input", "slot": "input1", "item": "ragnamod_seven:neutronium_nutritious_compound", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "input2", "item": "avaritia:infinity_catalyst", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "input3", "item": "ragnamod_seven:portal_activator", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "input4", "item": "ragnamod_seven:infinity_gem", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "input5", "item": "ragnamod_seven:condensed_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "input6", "item": "avaritia:ultimate_stew", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "input7", "item": "avaritia:endest_pearl", "amount": 1 },
      {
        "type": "custommachinery:item",
        "mode": "output",
        "item": "ragnamod_seven:sphere",
        "amount": 1
      },
      {
        "type": "custommachinery:structure",
        "pattern": [
          [
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "         AAA         ",
            "        AAAAA        ",
            "       AAAAAAA       ",
            "       AAAAAAA       ",
            "       AAAAAAA       ",
            "        AAAAA        ",
            "         AAA         ",
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "                     "
          ],
          [
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "        AAAAA        ",
            "       AAAAAAA       ",
            "      AAA   AAA      ",
            "     AAA     AAA     ",
            "     AA       AA     ",
            "     AA       AA     ",
            "     AA       AA     ",
            "     AAA     AAA     ",
            "      AAA   AAA      ",
            "       AAAAAAA       ",
            "        AAAAA        ",
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "                     "
          ],
          [
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "       AAAAAAA       ",
            "      AA     AA      ",
            "     AA       AA     ",
            "    AA         AA    ",
            "    A           A    ",
            "    A           A    ",
            "    A           A    ",
            "    A           A    ",
            "    A           A    ",
            "    AA         AA    ",
            "     AA       AA     ",
            "      AA     AA      ",
            "       AAAAAAA       ",
            "                     ",
            "                     ",
            "                     ",
            "                     "
          ],
          [
            "                     ",
            "                     ",
            "                     ",
            "       AAAAAAA       ",
            "     AA       AA     ",
            "    AA         AA    ",
            "    A           A    ",
            "   A             A   ",
            "   A             A   ",
            "   A             A   ",
            "   A             A   ",
            "   A             A   ",
            "   A             A   ",
            "   A             A   ",
            "    A           A    ",
            "    AA         AA    ",
            "     AA       AA     ",
            "       AAAAAAA       ",
            "                     ",
            "                     ",
            "                     "
          ],
          [
            "                     ",
            "                     ",
            "       AAAAAAA       ",
            "     AA       AA     ",
            "    A           A    ",
            "   A             A   ",
            "   A             A   ",
            "  A               A  ",
            "  A               A  ",
            "  A               A  ",
            "  A               A  ",
            "  A               A  ",
            "  A               A  ",
            "  A               A  ",
            "   A             A   ",
            "   A             A   ",
            "    A           A    ",
            "     AA       AA     ",
            "       AAAAAAA       ",
            "                     ",
            "                     "
          ],
          [
            "                     ",
            "        AAAAA        ",
            "      AA     AA      ",
            "    AA         AA    ",
            "   A             A   ",
            "   A             A   ",
            "  A               A  ",
            "  A               A  ",
            " A                 A ",
            " A                 A ",
            " A                 A ",
            " A                 A ",
            " A                 A ",
            "  A               A  ",
            "  A               A  ",
            "   A             A   ",
            "   A             A   ",
            "    AA         AA    ",
            "      AA     AA      ",
            "        AAAAA        ",
            "                     "
          ],
          [
            "                     ",
            "       AAAAAAA       ",
            "     AA       AA     ",
            "    A           A    ",
            "   A             A   ",
            "  A               A  ",
            "  A               A  ",
            " A                 A ",
            " A                 A ",
            " A                 A ",
            " A                 A ",
            " A                 A ",
            " A                 A ",
            " A                 A ",
            "  A               A  ",
            "  A               A  ",
            "   A             A   ",
            "    A           A    ",
            "     AA       AA     ",
            "       AAAAAAA       ",
            "                     "
          ],
          [
            "         AAA         ",
            "      AAA   AAA      ",
            "    AA         AA    ",
            "   A             A   ",
            "  A               A  ",
            "  A               A  ",
            " A                 A ",
            " A                 A ",
            " A                 A ",
            "A        BBB        A",
            "A        BBB        A",
            "A        BBB        A",
            " A                 A ",
            " A                 A ",
            " A                 A ",
            "  A               A  ",
            "  A               A  ",
            "   A             A   ",
            "    AA         AA    ",
            "      AAA   AAA      ",
            "         AAA         "
          ],
          [
            "        AAAAA        ",
            "     AAA     AAA     ",
            "    A           A    ",
            "   A             A   ",
            "  A               A  ",
            " A                 A ",
            " A                 A ",
            " A                 A ",
            "A        BBB        A",
            "A       BCCCB       A",
            "A       BCCCB       A",
            "A       BCCCB       A",
            "A        BBB        A",
            " A                 A ",
            " A                 A ",
            " A                 A ",
            "  A               A  ",
            "   A             A   ",
            "    A           A    ",
            "     AAA     AAA     ",
            "        AAAAA        "
          ],
          [
            "       AAAAAAA       ",
            "     AA       AA     ",
            "    A           A    ",
            "   A             A   ",
            "  A               A  ",
            " A                 A ",
            " A                 A ",
            "A        BBB        A",
            "A       BCCCB       A",
            "A      BCDDDCB      A",
            "A      BCDDDCB      A",
            "A      BCDDDCB      A",
            "A       BCCCB       A",
            "A        BBB        A",
            " A                 A ",
            " A                 A ",
            "  A               A  ",
            "   A             A   ",
            "    A           A    ",
            "     AA       AA     ",
            "       AAAAAAA       "
          ],
          [
            "       AAAAAAA       ",
            "     AA       AA     ",
            "    A           A    ",
            "   A             A   ",
            "  A               A  ",
            " A                 A ",
            " A                 A ",
            "A        BBB        A",
            "A       BCCCB       A",
            "A      BCDDDCB      A",
            "A      BCDXDCB      A",
            "A      BCDDDCB      A",
            "A       BCCCB       A",
            "A        BBB        A",
            " A                 A ",
            " A                 A ",
            "  A               A  ",
            "   A             A   ",
            "    A           A    ",
            "     AA       AA     ",
            "       AAAAAAA       "
          ],
          [
            "       AAAAAAA       ",
            "     AA       AA     ",
            "    A           A    ",
            "   A             A   ",
            "  A               A  ",
            " A                 A ",
            " A                 A ",
            "A        BBB        A",
            "A       BCCCB       A",
            "A      BCDDDCB      A",
            "A      BCDDDCB      A",
            "A      BCDDDCB      A",
            "A       BCCCB       A",
            "A        BBB        A",
            " A                 A ",
            " A                 A ",
            "  A               A  ",
            "   A             A   ",
            "    A           A    ",
            "     AA       AA     ",
            "       AAAAAAA       "
          ],
          [
            "        AAAAA        ",
            "     AAA     AAA     ",
            "    A           A    ",
            "   A             A   ",
            "  A               A  ",
            " A                 A ",
            " A                 A ",
            " A                 A ",
            "A        BBB        A",
            "A       BCCCB       A",
            "A       BCCCB       A",
            "A       BCCCB       A",
            "A        BBB        A",
            " A                 A ",
            " A                 A ",
            " A                 A ",
            "  A               A  ",
            "   A             A   ",
            "    A           A    ",
            "     AAA     AAA     ",
            "        AAAAA        "
          ],
          [
            "         AAA         ",
            "      AAA   AAA      ",
            "    AA         AA    ",
            "   A             A   ",
            "  A               A  ",
            "  A               A  ",
            " A                 A ",
            " A                 A ",
            " A                 A ",
            "A        BBB        A",
            "A        BmB        A",
            "A        BBB        A",
            " A                 A ",
            " A                 A ",
            " A                 A ",
            "  A               A  ",
            "  A               A  ",
            "   A             A   ",
            "    AA         AA    ",
            "      AAA   AAA      ",
            "         AAA         "
          ],
          [
            "                     ",
            "       AAAAAAA       ",
            "     AA       AA     ",
            "    A           A    ",
            "   A             A   ",
            "  A               A  ",
            "  A               A  ",
            " A                 A ",
            " A                 A ",
            " A                 A ",
            " A                 A ",
            " A                 A ",
            " A                 A ",
            " A                 A ",
            "  A               A  ",
            "  A               A  ",
            "   A             A   ",
            "    A           A    ",
            "     AA       AA     ",
            "       AAAAAAA       ",
            "                     "
          ],
          [
            "                     ",
            "        AAAAA        ",
            "      AA     AA      ",
            "    AA         AA    ",
            "   A             A   ",
            "   A             A   ",
            "  A               A  ",
            "  A               A  ",
            " A                 A ",
            " A                 A ",
            " A                 A ",
            " A                 A ",
            " A                 A ",
            "  A               A  ",
            "  A               A  ",
            "   A             A   ",
            "   A             A   ",
            "    AA         AA    ",
            "      AA     AA      ",
            "        AAAAA        ",
            "                     "
          ],
          [
            "                     ",
            "                     ",
            "       AAAAAAA       ",
            "     AA       AA     ",
            "    A           A    ",
            "   A             A   ",
            "   A             A   ",
            "  A               A  ",
            "  A               A  ",
            "  A               A  ",
            "  A               A  ",
            "  A               A  ",
            "  A               A  ",
            "  A               A  ",
            "   A             A   ",
            "   A             A   ",
            "    A           A    ",
            "     AA       AA     ",
            "       AAAAAAA       ",
            "                     ",
            "                     "
          ],
          [
            "                     ",
            "                     ",
            "                     ",
            "       AAAAAAA       ",
            "     AA       AA     ",
            "    AA         AA    ",
            "    A           A    ",
            "   A             A   ",
            "   A             A   ",
            "   A             A   ",
            "   A             A   ",
            "   A             A   ",
            "   A             A   ",
            "   A             A   ",
            "    A           A    ",
            "    AA         AA    ",
            "     AA       AA     ",
            "       AAAAAAA       ",
            "                     ",
            "                     ",
            "                     "
          ],
          [
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "       AAAAAAA       ",
            "      AA     AA      ",
            "     AA       AA     ",
            "    AA         AA    ",
            "    A           A    ",
            "    A           A    ",
            "    A           A    ",
            "    A           A    ",
            "    A           A    ",
            "    AA         AA    ",
            "     AA       AA     ",
            "      AA     AA      ",
            "       AAAAAAA       ",
            "                     ",
            "                     ",
            "                     ",
            "                     "
          ],
          [
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "        AAAAA        ",
            "       AAAAAAA       ",
            "      AAA   AAA      ",
            "     AAA     AAA     ",
            "     AA       AA     ",
            "     AA       AA     ",
            "     AA       AA     ",
            "     AAA     AAA     ",
            "      AAA   AAA      ",
            "       AAAAAAA       ",
            "        AAAAA        ",
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "                     "
          ],
          [
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "         AAA         ",
            "        AAAAA        ",
            "       AAAAAAA       ",
            "       AAAAAAA       ",
            "       AAAAAAA       ",
            "        AAAAA        ",
            "         AAA         ",
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "                     "
          ]
        ],
        "keys": {
          "A": "miniutilities:black_lapis_caelestis",
          "B": "ragnamod_seven:noisy_neutronium",
          "C": "avaritia:infinity_block",
          "D": "avaritia:crystal_matrix_block",
          "X": "minecraft:cake",
        }
      }
    ]
  })

  //Model Evolution
  e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"ragnamod_7:model_evolution"}'), [' A ', 'BCB', 'DED'], { A: '#forge:glass_panes', B: 'hostilenetworks:polymer_clay', C: 'hostilenetworks:sim_chamber', D: 'redstone_arsenal:flux_plating', E: 'thermal:redstone_servo' })

  // //Enchanter
  // function enchanter(input, inputamount, lvl, enchant) {
  //   const xp_array = [3160, 6240, 10760, 17760, 26780]
  //   const xp = xp_array[lvl - 1]
  //   e.custom({
  //     "type": "custommachinery:custom_machine",
  //     "machine": "ragnamod_7:enchanter",
  //     "time": 1,
  //     "requirements": [
  //       {
  //         "type": "custommachinery:fluid",
  //         "mode": "input",
  //         "fluid": "#forge:experience",
  //         "amount": xp,
  //       },
  //       {
  //         "type": "custommachinery:item",
  //         "mode": "input",
  //         "slot": "book",
  //         "item": "minecraft:writable_book",
  //         "amount": 1
  //       },
  //       {
  //         "type": "custommachinery:item",
  //         "mode": "input",
  //         "slot": "lapis",
  //         "item": "minecraft:lapis_lazuli",
  //         "amount": lvl * 9
  //       },
  //       {
  //         "type": "custommachinery:item",
  //         "mode": "input",
  //         "slot": "ingredient",
  //         "item": input,
  //         "amount": inputamount
  //       },
  //       {
  //         "type": "custommachinery:item",
  //         "mode": "output",
  //         "slot": "enchanted_book",
  //         "item": "minecraft:enchanted_book",
  //         "nbt": `{StoredEnchantments:[{lvl: ${lvl}s, id:"${enchant}"}]}`,
  //         "amount": 1
  //       }
  //     ],
  //     "priority": lvl,
  //     "jeiPriority": lvl
  //   })
  // }
  // function enchanterAll(input, inputamount, lvlmax, enchant) {
  //   for (let i = 1; i <= lvlmax; i++)
  //     enchanter(input, inputamount * i, i, enchant)
  // }
  // enchanterAll("minecraft:magma_cream", 4, 4, "minecraft:fire_protection")
  // enchanterAll("minecraft:feather", 4, 4, "minecraft:feather_falling")
  // enchanterAll("minecraft:gunpowder", 4, 4, "minecraft:blast_protection")
  // enchanterAll("minecraft:leather", 4, 4, "minecraft:projectile_protection")
  // enchanterAll("minecraft:netherite_ingot", 1, 4, "minecraft:protection")
  // enchanterAll("minecraft:glass_bottle", 3, 3, "minecraft:respiration")
  // enchanterAll("minecraft:lily_pad", 1, 1, "minecraft:aqua_affinity")
  // enchanterAll("minecraft:prismarine_shard", 3, 3, "minecraft:depth_strider")
  // enchanterAll("minecraft:ice", 5, 2, "minecraft:frost_walker")
  // enchanterAll("minecraft:rose_bush", 3, 3, "minecraft:thorns")
  // enchanterAll("minecraft:quartz", 10, 5, "minecraft:sharpness")
  // enchanterAll("minecraft:rotten_flesh", 10, 5, "minecraft:smite")
  // enchanterAll("minecraft:spider_eye", 10, 5, "minecraft:bane_of_arthropods")
  // enchanterAll("minecraft:piston", 1, 2, "minecraft:knockback")
  // enchanterAll("minecraft:blaze_rod", 4, 2, "minecraft:fire_aspect")
  // enchanterAll("#forge:heads", 1, 3, "minecraft:looting")
  // enchanterAll("minecraft:redstone", 10, 5, "minecraft:efficiency")
  // enchanterAll("tconstruct:silky_cloth", 5, 1, "minecraft:silk_touch")
  // enchanterAll("minecraft:obsidian", 15, 3, "minecraft:unbreaking")
  // enchanterAll("minecraft:emerald", 10, 3, "minecraft:fortune")
  // enchanterAll("minecraft:flint", 10, 5, "minecraft:power")
  // enchanterAll("minecraft:string", 15, 2, "minecraft:punch")
  // enchanterAll("minecraft:fire_charge", 5, 1, "minecraft:flame")
  // enchanterAll("minecraft:lapis_lazuli", 7, 3, "minecraft:luck_of_the_sea")
  // enchanterAll("minecraft:soul_sand", 5, 3, "minecraft:soul_speed")
  // enchanterAll("minecraft:lead", 1, 3, "minecraft:loyalty")
  // enchanterAll("minecraft:firework_rocket", 3, 3, "minecraft:riptide")
  // enchanterAll("minecraft:sugar", 5, 3, "minecraft:quick_charge")
  // enchanterAll("minecraft:lightning_rod", 1, 1, "minecraft:channeling")
  // enchanterAll("minecraft:arrow", 15, 1, "minecraft:multishot")
  // enchanterAll("create:super_glue", 1, 1, "minecraft:binding_curse")
  // enchanterAll("forbidden_arcanus:xpetrified_orb", 42, 1, "minecraft:mending")
  // enchanterAll("supplementaries:quiver", 1, 1, "minecraft:infinity")
  // enchanterAll("minecraft:chain", 5, 3, "minecraft:sweeping")
  // enchanterAll("minecraft:end_rod", 3, 5, "minecraft:impaling")
  // enchanterAll("minecraft:cactus", 6, 4, "minecraft:piercing")
  // enchanterAll("trashcans:item_trash_can", 1, 1, "minecraft:vanishing_curse")
  // enchanterAll("thermal:aquachow", 3, 3, "minecraft:lure")

})