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
  function psiStab(item) { e.custom({ "type": "custommachinery:custom_machine", "machine": "ragnamod_7:psi_stabilizer", "time": 10, "requirements": [{ "type": "custommachinery:energy", "mode": "input", "amount": 10000 }, { "type": "custommachinery:item", "mode": "input", "slot": "input", "item": item, "amount": 1, "chance": 0 }, { "type": "custommachinery:item", "mode": "output", "item": item, "amount": 1, "slot": "output" }, { "type": "custommachinery:structure", "pattern": [["m"], ["A"], ["B"], ["C"]], "keys": { "A": "psi:cad_assembler", "B": "ragnamod_seven:psi_stabilizer", "C": "psi:psigem_block", } }] }) }
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

  //Enchanter
  let enchanterPriority = 0;
  function enchanter(input, inputamount, lvl, enchant) {
    enchanterPriority++;
    const xp_array = [3160, 6240, 10760, 17760, 26780]
    const xp = xp_array[lvl - 1]
    e.custom({
      "type": "custommachinery:custom_machine",
      "machine": "ragnamod_7:enchanter",
      "time": 1,
      "requirements": [
        {
          "type": "custommachinery:fluid",
          "mode": "input",
          "fluid": "#forge:experience",
          "amount": xp,
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "slot": "book",
          "item": "minecraft:writable_book",
          "amount": 1
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "slot": "lapis",
          "item": "minecraft:lapis_lazuli",
          "amount": lvl * 9
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "slot": "ingredient",
          "item": input,
          "amount": inputamount
        },
        {
          "type": "custommachinery:item",
          "mode": "output",
          "slot": "enchanted_book",
          "item": "minecraft:enchanted_book",
          "nbt": `{StoredEnchantments:[{lvl: ${lvl}s, id:"${enchant}"}]}`,
          "amount": 1
        }
      ],
      "priority": enchanterPriority,
      "jeiPriority": enchanterPriority
    })
  }
  function enchanterAll(input, inputamount, lvlmax, enchant) {
    for (let i = 1; i <= lvlmax; i++)
      enchanter(input, inputamount * i, i, enchant)
  }
  enchanterAll("minecraft:magma_cream", 4, 4, "minecraft:fire_protection")
  enchanterAll("minecraft:feather", 4, 4, "minecraft:feather_falling")
  enchanterAll("minecraft:gunpowder", 4, 4, "minecraft:blast_protection")
  enchanterAll("minecraft:leather", 4, 4, "minecraft:projectile_protection")
  enchanterAll("minecraft:netherite_ingot", 1, 4, "minecraft:protection")
  enchanterAll("minecraft:glass_bottle", 3, 3, "minecraft:respiration")
  enchanterAll("minecraft:lily_pad", 1, 1, "minecraft:aqua_affinity")
  enchanterAll("minecraft:prismarine_shard", 3, 3, "minecraft:depth_strider")
  enchanterAll("minecraft:ice", 5, 2, "minecraft:frost_walker")
  enchanterAll("minecraft:rose_bush", 3, 3, "minecraft:thorns")
  enchanterAll("minecraft:quartz", 10, 5, "minecraft:sharpness")
  enchanterAll("minecraft:rotten_flesh", 10, 5, "minecraft:smite")
  enchanterAll("minecraft:spider_eye", 10, 5, "minecraft:bane_of_arthropods")
  enchanterAll("minecraft:piston", 1, 2, "minecraft:knockback")
  enchanterAll("minecraft:blaze_rod", 4, 2, "minecraft:fire_aspect")
  enchanterAll("#forge:heads", 1, 3, "minecraft:looting")
  enchanterAll("minecraft:redstone", 10, 5, "minecraft:efficiency")
  enchanterAll("tconstruct:silky_cloth", 5, 1, "minecraft:silk_touch")
  enchanterAll("minecraft:obsidian", 15, 3, "minecraft:unbreaking")
  enchanterAll("minecraft:emerald", 10, 3, "minecraft:fortune")
  enchanterAll("minecraft:flint", 10, 5, "minecraft:power")
  enchanterAll("minecraft:string", 15, 2, "minecraft:punch")
  enchanterAll("minecraft:fire_charge", 5, 1, "minecraft:flame")
  enchanterAll("minecraft:lapis_lazuli", 7, 3, "minecraft:luck_of_the_sea")
  enchanterAll("minecraft:soul_sand", 5, 3, "minecraft:soul_speed")
  enchanterAll("minecraft:lead", 1, 3, "minecraft:loyalty")
  enchanterAll("minecraft:firework_rocket", 3, 3, "minecraft:riptide")
  enchanterAll("minecraft:sugar", 5, 3, "minecraft:quick_charge")
  enchanterAll("minecraft:lightning_rod", 1, 1, "minecraft:channeling")
  enchanterAll("minecraft:arrow", 15, 1, "minecraft:multishot")
  enchanterAll("create:super_glue", 1, 1, "minecraft:binding_curse")
  enchanterAll("forbidden_arcanus:xpetrified_orb", 42, 1, "minecraft:mending")
  enchanterAll("supplementaries:quiver", 1, 1, "minecraft:infinity")
  enchanterAll("minecraft:chain", 5, 3, "minecraft:sweeping")
  enchanterAll("minecraft:end_rod", 3, 5, "minecraft:impaling")
  enchanterAll("minecraft:cactus", 6, 4, "minecraft:piercing")
  enchanterAll("trashcans:item_trash_can", 1, 1, "minecraft:vanishing_curse")
  enchanterAll("thermal:aquachow", 3, 3, "minecraft:lure")
  enchanterAll("minecraft:mushroom_stew", 1, 5, 'apotheosis:miners_fervor')
  enchanterAll("forbidden_arcanus:golden_feather", 1, 1, 'apotheosis:stable_footing')
  enchanterAll("minecraft:diamond", 2, 3, 'apotheosis:scavenger')
  enchanterAll("apotheosis:common_material", 1, 3, 'apotheosis:life_mending')
  enchanterAll("minecraft:blue_ice", 3, 3, 'apotheosis:icy_thorns')
  enchanterAll("minecraft:wheat", 5, 1, 'apotheosis:tempting')
  enchanterAll("beyond_earth:steel_ingot", 3, 4, 'apotheosis:shield_bash')
  enchanterAll("solarflux:mirror", 3, 5, 'apotheosis:reflective')
  enchanterAll("minecraft:blaze_powder", 5, 3, 'apotheosis:berserkers_fury')
  enchanterAll("create:experience_nugget", 5, 3, 'apotheosis:knowledge')
  enchanterAll("create:piston_extension_pole", 3, 3, 'apotheosis:rebounding')
  enchanterAll("minecraft:bone_meal", 5, 3, 'apotheosis:natures_blessing')
  enchanterAll("minecraft:gold_ingot", 2, 5, 'apotheosis:bane_of_illagers')
  enchanterAll("minecraft:anvil", 1, 1, 'apotheosis:splitting')
  enchanterAll("minecraft:iron_block", 1, 1, 'apotheosis:obliteration')
  enchanterAll("savage_and_ravage:mischief_arrow", 2, 5, 'apotheosis:crescendo')
  enchanterAll("minecraft:spectral_arrow", 1, 1, 'apotheosis:endless_quiver')
  enchanterAll("minecraft:tropical_fish", 1, 5, 'apotheosis:spearfishing')
  enchanterAll("minecraft:shulker_shell", 1, 3, 'miningmaster:floatation')
  enchanterAll("immersiveengineering:sawblade", 1, 1, 'apotheosis:chainsaw')
  enchanterAll("#forge:ores", 10, 3, 'apotheosis:earths_boon')
  enchanterAll("botania:manasteel_shears", 1, 1, 'apotheosis:growth_serum')
  enchanterAll("reliquary:shears_of_winter", 1, 1, 'apotheosis:exploitation')
  enchanterAll("minecraft:shears", 1, 1, 'apotheosis:chromatic')
  enchanterAll("minecraft:egg", 3, 5, 'apotheosis:capturing')
  enchanterAll("ars_nouveau:source_berry_pie", 2, 3, 'ars_nouveau:mana_regen')
  enchanterAll("ars_nouveau:source_berry_roll", 2, 3, 'ars_nouveau:mana_boost')
  enchanterAll("ars_nouveau:warp_scroll", 1, 3, 'ars_nouveau:reactive')
  enchanterAll("minecraft:polished_andesite", 5, 5, 'mythicbotany:hammer_mobility')
  enchanterAll("minecraft:chest", 10, 4, 'cofh_core:holding')
  enchanterAll("create:shadow_steel", 2, 5, 'tombstone:shadow_step')
  enchanterAll("twilightforest:charm_of_keeping_1", 1, 1, 'tombstone:soulbound')
  enchanterAll("minecraft:hopper", 4, 5, 'tombstone:magic_siphon')
  enchanterAll("minecraft:poisonous_potato", 5, 5, 'tombstone:plague_bringer')
  enchanterAll("minecraft:bone", 5, 5, 'tombstone:curse_of_bones')
  enchanterAll("minecraft:golden_apple", 3, 3, 'tombstone:blessing')
  enchanterAll("minecraft:snow_block", 3, 5, 'tombstone:frostbite')
  enchanterAll("minecraft:potato", 5, 3, 'create:potato_recovery')
  enchanterAll("create:fluid_tank", 3, 3, 'create:capacity')
  enchanterAll("bhc:red_heart_canister", 1, 2, 'miningmaster:heartfelt')
  enchanterAll("miniutilities:speed_upgrade", 1, 3, 'miningmaster:runner')
  enchanterAll("functionalstorage:void_upgrade", 1, 1, 'miningmaster:stonebreaker')
  enchanterAll("minecraft:furnace", 1, 1, 'miningmaster:smelting')
  enchanterAll("draconicevolution:draconium_block", 10, 5, 'draconicevolution:reaper_enchantment')
  enchanterAll("pneumaticcraft:bandage", 1, 1, 'evilcraft:unusing')
  enchanterAll("quark:clear_shard", 5, 3, 'evilcraft:breaking')
  enchanterAll("bhc:red_heart", 5, 3, 'evilcraft:life_stealing')
  enchanterAll("evilcraft:poison_sac", 3, 3, 'evilcraft:poison_tip')
  enchanterAll("evilcraft:vengeance_essence", 1, 3, 'evilcraft:vengeance')
  enchanterAll("evilcraft:condensed_blood", 1, 3, 'farmersdelight:backstabbing')
  enchanterAll("forbidden_arcanus:edelwood_powder_snow_bucket", 1, 1, 'forbidden_arcanus:permafrost')
  enchanterAll("ars_nouveau:experience_gem", 1, 5, 'miniutilities:experience_harvester')
  enchanterAll("minecraft:snowball", 5, 3, 'miningmaster:freezing')
  enchanterAll("miningmaster:heart_rhodonite", 16, 1, 'miningmaster:leeching')
  enchanterAll("minecraft:slime_block", 3, 3, 'miningmaster:knight_jump')
  enchanterAll("minecraft:packed_ice", 1, 1, 'miningmaster:snowpiercer')
  enchanterAll("minecraft:kelp", 8, 5, 'miningmaster:grace')
  enchanterAll("naturesaura:gold_leaf", 1, 1, 'naturesaura:aura_mending')
  enchanterAll("reliquary:fertile_essence", 2, 5, 'reliquary:severing')
  enchanterAll("spirit:soul_steel_ingot", 1, 3, 'spirit:soul_reaper')
  enchanterAll("ars_nouveau:glyph_gravity", 1, 1, 'supplementaries:stasis')
  enchanterAll("ars_nouveau:fire_essence", 2, 3, 'twilightforest:fire_react')
  enchanterAll("twilightforest:ice_bomb", 1, 3, 'twilightforest:chill_aura')
  enchanterAll("twilightforest:block_and_chain", 1, 1, 'twilightforest:preservation')
  enchanterAll("twilightforest:armor_shard_cluster", 2, 3, 'twilightforest:block_strength')
  enchanterAll("twilightforest:knightmetal_block", 1, 2, 'twilightforest:destruction')
  enchanterAll("tconstruct:earth_congealed_slime", 2, 3, 'undergarden:ricochet')
  enchanterAll("botania:mana_string", 3, 3, 'undergarden:longevity')
  enchanterAll("undergarden:slingshot", 1, 1, 'undergarden:self_sling')
  enchanterAll("minecraft:ender_pearl", 1, 1, 'travel_anchors:teleportation')
  enchanterAll("travel_anchors:travel_anchor", 1, 3, 'travel_anchors:range')
  enchanterAll("warden_and_sculk:sculk_block", 5, 3, 'warden_and_sculk:swift_sneak')
  enchanterAll("beyond_earth_giselle_addon:oxygen_can", 1, 1, 'beyond_earth_giselle_addon:space_breathing')
  enchanterAll("beyond_earth:space_boots", 1, 1, 'beyond_earth_giselle_addon:gravity_normalizing')
  enchanterAll("beyond_earth:mercury_stone", 1, 1, 'beyond_earth_giselle_addon:space_fire_proof')
  enchanterAll("beyond_earth:venus_stone", 1, 1, 'beyond_earth_giselle_addon:venus_acid_proof')
  enchanterAll("reliquary:eye_of_the_storm", 8, 2, "laststand:last_stand")

  //Advanced Hephaestus Forge
  function advEphae(center, input1, input2, input3, input4, input5, input6, output, xp, aureal, blood) { e.custom({ "type": "custommachinery:custom_machine", "machine": "ragnamod_7:advanced_hephaestus_forge", "time": 200, "requirements": [{ "type": "custommachinery:energy", "mode": "input", "amount": 10000 }, { "type": "custommachinery:item", "mode": "input", "slot": "input_center", "item": center, "amount": 1 }, { "type": "custommachinery:item", "mode": "input", "slot": "input_soul", "item": 'forbidden_arcanus:dark_soul', "amount": 1 }, { "type": "custommachinery:item", "mode": "output", "item": output, "amount": 1 }, { "type": "custommachinery:item", "mode": "input", "item": input1, "amount": 1 }, { "type": "custommachinery:item", "mode": "input", "item": input2, "amount": 1 }, { "type": "custommachinery:item", "mode": "input", "item": input3, "amount": 1 }, { "type": "custommachinery:item", "mode": "input", "item": input4, "amount": 1 }, { "type": "custommachinery:item", "mode": "input", "item": input5, "amount": 1 }, { "type": "custommachinery:item", "mode": "input", "item": input6, "amount": 1 }, { "type": "custommachinery:fluid_per_tick", "mode": "input", "fluid": "#forge:experience", "amount": xp, "slot": "experience_tank" }, { "type": "custommachinery:fluid_per_tick", "mode": "input", "fluid": "ragnamod_seven:aureal", "amount": aureal, "slot": "aureal_tank" }, { "type": "custommachinery:fluid_per_tick", "mode": "input", "fluid": "#forge:blood", "amount": blood, "slot": "blood_tank" }, { "type": "custommachinery:structure", "pattern": [["    A   AA     ", "   A   A       ", "   A  AA       ", "   AA ABB  AAA ", "    ACBXCCAA  A", "A   CXCBCXC    ", "A  BCCCDCCBAA  ", " AABXBDEDBXBAA ", "  AABCCDCCCB  A", "    CXCBCXC   A", "A  AACCXBCA    ", " AAA  BBA AA   ", "       AA  A   ", "       A   A   ", "     AA   A    "], ["               ", "               ", "               ", "               ", "       G       ", "     F   F     ", "               ", "    G  m  G    ", "               ", "     F   F     ", "       G       ", "               ", "               ", "               ", "               "]], "keys": { "A": "forbidden_arcanus:dark_rune_block", "B": "forbidden_arcanus:rune_block", "C": "forbidden_arcanus:polished_darkstone", "D": "forbidden_arcanus:arcane_polished_darkstone", "E": "forbidden_arcanus:arcane_gold_block", "F": "forbidden_arcanus:arcane_crystal_obelisk", "G": "forbidden_arcanus:arcane_darkstone_pedestal", "X": "forbidden_arcanus:arcane_chiseled_polished_darkstone" } }] }) }
  //Eternal Stella
  e.custom({
    "type": "custommachinery:custom_machine",
    "machine": "ragnamod_7:advanced_hephaestus_forge",
    "time": 200,
    "requirements": [
      {
        "type": "custommachinery:energy",
        "mode": "input",
        "amount": 10000
      },
      {
        "type": "custommachinery:item",
        "mode": "input",
        "slot": "input_center",
        "item": "minecraft:diamond",
        "amount": 1
      },
      {
        "type": "custommachinery:item",
        "mode": "input",
        "slot": "input_soul",
        "item": 'forbidden_arcanus:dark_soul',
        "amount": 1
      },
      {
        "type": "custommachinery:item",
        "mode": "output",
        "item": "forbidden_arcanus:eternal_stella",
        "amount": 1
      },
      {
        "type": "custommachinery:item",
        "mode": "input",
        "item": "forbidden_arcanus:stellarite_piece",
        "amount": 1
      },
      {
        "type": "custommachinery:item",
        "mode": "input",
        "item": "forbidden_arcanus:xpetrified_orb",
        "amount": 1
      },
      {
        "type": "custommachinery:item",
        "mode": "input",
        "item": "forbidden_arcanus:xpetrified_orb",
        "amount": 1
      },
      {
        "type": "custommachinery:item",
        "mode": "input",
        "item": "forbidden_arcanus:xpetrified_orb",
        "amount": 1
      },
      {
        "type": "custommachinery:fluid_per_tick",
        "mode": "input",
        "fluid": "#forge:experience",
        "amount": 0,
        "slot": "experience_tank"
      },
      {
        "type": "custommachinery:fluid_per_tick",
        "mode": "input",
        "fluid": "ragnamod_seven:aureal",
        "amount": 5,
        "slot": "aureal_tank"
      },
      {
        "type": "custommachinery:fluid_per_tick",
        "mode": "input",
        "fluid": "#forge:blood",
        "amount": 10,
        "slot": "blood_tank"
      },
      {
        "type": "custommachinery:structure",
        "pattern": [
          [
            "    A   AA     ",
            "   A   A       ",
            "   A  AA       ",
            "   AA ABB  AAA ",
            "    ACBXCCAA  A",
            "A   CXCBCXC    ",
            "A  BCCCDCCBAA  ",
            " AABXBDEDBXBAA ",
            "  AABCCDCCCB  A",
            "    CXCBCXC   A",
            "A  AACCXBCA    ",
            " AAA  BBA AA   ",
            "       AA  A   ",
            "       A   A   ",
            "     AA   A    "
          ],
          [
            "               ",
            "               ",
            "               ",
            "               ",
            "       G       ",
            "     F   F     ",
            "               ",
            "    G  m  G    ",
            "               ",
            "     F   F     ",
            "       G       ",
            "               ",
            "               ",
            "               ",
            "               "
          ]
        ],
        "keys": {
          "A": "forbidden_arcanus:dark_rune_block",
          "B": "forbidden_arcanus:rune_block",
          "C": "forbidden_arcanus:polished_darkstone",
          "D": "forbidden_arcanus:arcane_polished_darkstone",
          "E": "forbidden_arcanus:arcane_gold_block",
          "F": "forbidden_arcanus:arcane_crystal_obelisk",
          "G": "forbidden_arcanus:arcane_darkstone_pedestal",
          "X": "forbidden_arcanus:arcane_chiseled_polished_darkstone"
        }
      }
    ]
  })
  advEphae("chickens:chicken_skin", "reliquary:phoenix_down", "twilightforest:borer_essence", "create_sa:heap_of_experience", "gemsnjewels:spinel", "ars_nouveau:manipulation_essence", "botania:spark", "chickens:chicken_shell", 10, 10, 0)
  advEphae('hostilenetworks:machine_frame', 'hostilenetworks:overworld_prediction', 'hostilenetworks:nether_prediction', 'hostilenetworks:end_prediction', 'hostilenetworks:twilight_prediction', 'hostilenetworks:blueskies_prediction', 'hostilenetworks:undergarden_prediction', 'alchemistry:machine_frame', 10, 10, 10)
  advEphae('miniutilities:stable_ingot', 'cataclysm:ignitium_ingot', 'ragnamod_seven:shub_niggurath_ingot', 'ragnamod_seven:sculk_ingot', 'ragnamod_seven:chemical_draconium_ingot', 'cataclysm:enderite_ingot', 'cataclysm:witherite_ingot', 'ragnamod_seven:condensed_ingot', 10, 10, 10)
  advEphae('forbidden_arcanus:arcane_crystal_block', 'minecraft:blaze_powder', 'minecraft:blaze_powder', 'minecraft:blaze_powder', 'minecraft:blaze_powder', 'minecraft:coal', 'minecraft:coal', 'forbidden_arcanus:smelter_prism', 0, 10, 5)

  //Auto Salvaging Table
  e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"ragnamod_7:auto_salvaging_table"}'), ['AAA', 'BCD', 'EFE'], { A: 'more_immersive_wires:ftbic_energy_alloy', B: 'byg:pendorite_pickaxe', C: 'apotheosis:salvaging_table', D: 'byg:pendorite_axe', E: 'apotheosis:gem_dust', F: 'minecraft:lava_bucket' })
  function autoSalvage(affix) { e.custom({ "type": "custommachinery:custom_machine", "machine": "ragnamod_7:auto_salvaging_table", "time": 1, "requirements": [{ "type": "custommachinery:item", "mode": "input", "item": "#apotheosis:nbt", "nbt": "{affix_data:{rarity:\"" + affix + "\"}}", "amount": 1 }, { "type": "custommachinery:item", "mode": "output", "item": "apotheosis:" + affix + "_material", "amount": 1 }, { "type": "custommachinery:item", "mode": "output", "item": "apotheosis:" + affix + "_material", "amount": 1, "chance": 0.5 }, { "type": "custommachinery:item", "mode": "output", "item": "apotheosis:" + affix + "_material", "amount": 1, "chance": 0.4 }, { "type": "custommachinery:item", "mode": "output", "item": "apotheosis:" + affix + "_material", "amount": 1, "chance": 0.4 }], "hidden": true }) }
  autoSalvage("common")
  autoSalvage("uncommon")
  autoSalvage("rare")
  autoSalvage("epic")
  autoSalvage("mythic")

  //Digital Mob Agonizer
  function digitalAgonizer(catalyst, amount) {
    //Both
    e.custom({
      "type": "custommachinery:custom_machine",
      "machine": "ragnamod_7:digital_mob_agonizer",
      "time": 85,
      "priority": 3,
      "requirements": [
        {
          "type": "custommachinery:energy_per_tick",
          "mode": "input",
          "amount": 10000
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "slot": "catalyst",
          "item": catalyst,
          "amount": 1
        },
        { "type": "custommachinery:item", "mode": "input", "slot": "data", "item": "ragnamod_seven:blood_data_model", "amount": 1, "chance": 0 },
        {
          "type": "custommachinery:fluid_per_tick",
          "mode": "output",
          "tank": "evilcraft_fluid",
          "fluid": "evilcraft:blood",
          "amount": amount
        },
        {
          "type": "custommachinery:fluid_per_tick",
          "mode": "output",
          "tank": "bloodmagic_fluid",
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": amount
        },
        {
          "type": "custommachinery:block",
          "mode": "input",
          "action": "check",
          "pos": [0, 0, 0, 1, 0, 0],
          "whitelist": true,
          "amount": 1,
          "filter": ["custommachinery:custom_machine_block{machineID:\"ragnamod_7:digital_mob_agonizer_addon_evilcraft\"}"]
        },
        {
          "type": "custommachinery:block",
          "mode": "input",
          "action": "check",
          "pos": [-1, 0, 0, 0, 0, 0],
          "whitelist": true,
          "amount": 1,
          "filter": ["custommachinery:custom_machine_block{machineID:\"ragnamod_7:digital_mob_agonizer_addon_bloodmagic\"}"]
        }
      ]
    })
    //Evilcraft
    e.custom({
      "type": "custommachinery:custom_machine",
      "machine": "ragnamod_7:digital_mob_agonizer",
      "time": 85,
      "priority": 2,
      "requirements": [
        {
          "type": "custommachinery:energy_per_tick",
          "mode": "input",
          "amount": 5000
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "slot": "catalyst",
          "item": catalyst,
          "amount": 1
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "slot": "data",
          "item": "ragnamod_seven:blood_data_model",
          "amount": 1,
          "chance": 0
        },
        {
          "type": "custommachinery:fluid_per_tick",
          "mode": "output",
          "tank": "evilcraft_fluid",
          "fluid": "evilcraft:blood",
          "amount": amount
        },
        {
          "type": "custommachinery:block",
          "mode": "input",
          "action": "check",
          "pos": [0, 0, 0, 1, 0, 0],
          "whitelist": true,
          "amount": 1,
          "filter": ["custommachinery:custom_machine_block{machineID:\"ragnamod_7:digital_mob_agonizer_addon_evilcraft\"}"]
        }
      ]
    })
    //Bloodmagic
    e.custom({
      "type": "custommachinery:custom_machine",
      "machine": "ragnamod_7:digital_mob_agonizer",
      "time": 85,
      "priority": 1,
      "requirements": [
        {
          "type": "custommachinery:energy_per_tick",
          "mode": "input",
          "amount": 5000
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "slot": "catalyst",
          "item": catalyst,
          "amount": 1
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "slot": "data",
          "item": "ragnamod_seven:blood_data_model",
          "amount": 1,
          "chance": 0
        },
        {
          "type": "custommachinery:fluid_per_tick",
          "mode": "output",
          "tank": "bloodmagic_fluid",
          "fluid": "bloodmagic:life_essence_fluid",
          "amount": amount
        },
        {
          "type": "custommachinery:block",
          "mode": "input",
          "action": "check",
          "pos": [-1, 0, 0, 0, 0, 0],
          "whitelist": true,
          "amount": 1,
          "filter": ["custommachinery:custom_machine_block{machineID:\"ragnamod_7:digital_mob_agonizer_addon_bloodmagic\"}"]
        }
      ]
    })
  }
  digitalAgonizer('hostilenetworks:overworld_prediction', 12)
  digitalAgonizer('hostilenetworks:nether_prediction', 13)
  digitalAgonizer('hostilenetworks:twilight_prediction', 14)
  digitalAgonizer('hostilenetworks:end_prediction', 15)
  digitalAgonizer('hostilenetworks:undergarden_prediction', 16)
  digitalAgonizer('hostilenetworks:blueskies_prediction', 17)
  //Machine
  e.custom({
    "type": "minecraft:crafting_shaped",
    "key": {
      "A": { "item": "bloodmagic:etherealslate" },
      "B": { "item": "bloodmagic:dawnscribetool" },
      "C": { "item": "hostilenetworks:machine_frame" },
      "D": { "item": "bloodmagic:sacrificerune2" },
      "E": { "type": "forge:nbt", "item": "evilcraft:flesh_rejuvenated", "count": 1, "nbt": "{Fluid:{Amount:10000,FluidName:\"evilcraft:blood\"},capacity:10000}" }
    },
    "pattern": [' A ', 'BCB', 'DED'],
    "result": { "type": "forge:nbt", "item": "custommachinery:custom_machine_item", "count": 1, "nbt": "{machine:\"ragnamod_7:digital_mob_agonizer\"}" }
  })
  //Evil Addon
  e.custom({
    "type": "minecraft:crafting_shaped",
    "key": {
      "A": { "item": "evilcraft:environmental_accumulation_core" },
      "B": { "item": "bloodmagic:dawnscribetool" },
      "C": { "item": "hostilenetworks:machine_frame" },
      "D": { "item": "bloodmagic:sacrificerune2" },
      "E": { "item": "evilcraft:sanguinary_pedestal_1" }
    },
    "pattern": [' A ', 'BCB', 'DED'],
    "result": { "type": "forge:nbt", "item": "custommachinery:custom_machine_item", "count": 1, "nbt": "{machine:\"ragnamod_7:digital_mob_agonizer_addon_evilcraft\"}" }
  })
  //Blood Magic Addon
  e.custom({
    "type": "minecraft:crafting_shaped",
    "key": {
      "A": { "item": "bloodmagic:weakbloodorb" },
      "B": { "item": "bloodmagic:dawnscribetool" },
      "C": { "item": "hostilenetworks:machine_frame" },
      "D": { "item": "bloodmagic:sacrificerune2" },
      "E": { "item": "bloodmagic:altar" }
    },
    "pattern": [' A ', 'BCB', 'DED'],
    "result": { "type": "forge:nbt", "item": "custommachinery:custom_machine_item", "count": 1, "nbt": "{machine:\"ragnamod_7:digital_mob_agonizer_addon_bloodmagic\"}" }
  })

  //Excavator Immersive GUI JEI
  function excavatorJEI(deposit, name, in1, am1, in2, am2, in3, am3, in4, am4, in5, am5, in6, am6, in7, am7) {
    e.custom({
      "type": "custommachinery:custom_machine",
      "machine": "ragnamod_7:excavator",
      "time": 0,
      "requirements": [
        { "type": "custommachinery:item", "mode": "input", "item": "immersiveengineering:coresample", "nbt": "{display:{Name:'{\"text\":\"§9§l" + name + "§r\"}'},mineralInfo:[{mineral:\"immersiveengineering:mineral/" + deposit + "\"}]}", "amount": 1 },
        { "type": "custommachinery:item", "mode": "output", "slot": "1", "item": in1, "amount": am1 },
        { "type": "custommachinery:item", "mode": "output", "slot": "2", "item": in2, "amount": am2 },
        { "type": "custommachinery:item", "mode": "output", "slot": "3", "item": in3, "amount": am3 },
        { "type": "custommachinery:item", "mode": "output", "slot": "4", "item": in4, "amount": am4 },
        { "type": "custommachinery:item", "mode": "output", "slot": "5", "item": in5, "amount": am5 },
        { "type": "custommachinery:item", "mode": "output", "slot": "6", "item": in6, "amount": am6 },
        { "type": "custommachinery:item", "mode": "output", "slot": "7", "item": in7, "amount": am7 },
        { "type": "custommachinery:dimension", "filter": "minecraft:overworld" },
        { "type": "custommachinery:dimension", "filter": "twilightforest:twilight_forest" },
        { "type": "custommachinery:dimension", "filter": "javd:void" }
      ]
    })
  }
  function excavatorEndJEI(deposit, name, in1, am1, in2, am2, in3, am3, in4, am4, in5, am5, in6, am6, in7, am7) {
    e.custom({
      "type": "custommachinery:custom_machine",
      "machine": "ragnamod_7:excavator",
      "time": 0,
      "requirements": [
        { "type": "custommachinery:item", "mode": "input", "item": "immersiveengineering:coresample", "nbt": "{display:{Name:'{\"text\":\"§d§l" + name + "§r\"}'},mineralInfo:[{mineral:\"immersiveengineering:mineral/" + deposit + "\"}]}", "amount": 1 },
        { "type": "custommachinery:item", "mode": "output", "slot": "1", "item": in1, "amount": am1 },
        { "type": "custommachinery:item", "mode": "output", "slot": "2", "item": in2, "amount": am2 },
        { "type": "custommachinery:item", "mode": "output", "slot": "3", "item": in3, "amount": am3 },
        { "type": "custommachinery:item", "mode": "output", "slot": "4", "item": in4, "amount": am4 },
        { "type": "custommachinery:item", "mode": "output", "slot": "5", "item": in5, "amount": am5 },
        { "type": "custommachinery:item", "mode": "output", "slot": "6", "item": in6, "amount": am6 },
        { "type": "custommachinery:item", "mode": "output", "slot": "7", "item": in7, "amount": am7 },
        { "type": "custommachinery:dimension", "filter": "minecraft:the_end" }
      ]
    })
  }
  function excavatorNetherJEI(deposit, name, in1, am1, in2, am2, in3, am3, in4, am4, in5, am5, in6, am6, in7, am7) {
    e.custom({
      "type": "custommachinery:custom_machine",
      "machine": "ragnamod_7:excavator",
      "time": 0,
      "requirements": [
        { "type": "custommachinery:item", "mode": "input", "item": "immersiveengineering:coresample", "nbt": "{display:{Name:'{\"text\":\"§4§l" + name + "§r\"}'},mineralInfo:[{mineral:\"immersiveengineering:mineral/" + deposit + "\"}]}", "amount": 1 },
        { "type": "custommachinery:item", "mode": "output", "slot": "1", "item": in1, "amount": am1 },
        { "type": "custommachinery:item", "mode": "output", "slot": "2", "item": in2, "amount": am2 },
        { "type": "custommachinery:item", "mode": "output", "slot": "3", "item": in3, "amount": am3 },
        { "type": "custommachinery:item", "mode": "output", "slot": "4", "item": in4, "amount": am4 },
        { "type": "custommachinery:item", "mode": "output", "slot": "5", "item": in5, "amount": am5 },
        { "type": "custommachinery:item", "mode": "output", "slot": "6", "item": in6, "amount": am6 },
        { "type": "custommachinery:item", "mode": "output", "slot": "7", "item": in7, "amount": am7 },
        { "type": "custommachinery:dimension", "filter": "minecraft:the_nether" }
      ]
    })
  }
  function excavatorUniqueJEI(dim, deposit, name, in1, am1, in2, am2, in3, am3, in4, am4, in5, am5, in6, am6, in7, am7) {
    e.custom({
      "type": "custommachinery:custom_machine",
      "machine": "ragnamod_7:excavator",
      "time": 0,
      "requirements": [
        { "type": "custommachinery:item", "mode": "input", "item": "immersiveengineering:coresample", "nbt": "{display:{Name:'{\"text\":\"" + name + "§r\"}'},mineralInfo:[{mineral:\"immersiveengineering:mineral/" + deposit + "\"}]}", "amount": 1 },
        { "type": "custommachinery:item", "mode": "output", "slot": "1", "item": in1, "amount": am1 },
        { "type": "custommachinery:item", "mode": "output", "slot": "2", "item": in2, "amount": am2 },
        { "type": "custommachinery:item", "mode": "output", "slot": "3", "item": in3, "amount": am3 },
        { "type": "custommachinery:item", "mode": "output", "slot": "4", "item": in4, "amount": am4 },
        { "type": "custommachinery:item", "mode": "output", "slot": "5", "item": in5, "amount": am5 },
        { "type": "custommachinery:item", "mode": "output", "slot": "6", "item": in6, "amount": am6 },
        { "type": "custommachinery:item", "mode": "output", "slot": "7", "item": in7, "amount": am7 },
        { "type": "custommachinery:dimension", "filter": dim }
      ]
    })
  }
  //Overworld/Twilight/Void
  excavatorJEI("lapis", "Lapis", "minecraft:lapis_ore", 80, "thermal:sulfur_ore", 15, "mekanism:fluorite_ore", 5, "minecraft:gravel", 1, "minecraft:cobblestone", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorJEI("apatite", "Apatite", "thermal:apatite_ore", 70, "minecraft:coal_ore", 25, "minecraft:iron_ore", 5, "minecraft:gravel", 1, "minecraft:cobblestone", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorJEI("arcane", "Arcane", "forbidden_arcanus:arcane_crystal_ore", 75, "forbidden_arcanus:xpetrified_ore", 15, "forbidden_arcanus:runic_stone", 8, "minecraft:emerald_ore", 2, "minecraft:gravel", 1, "minecraft:cobblestone", 1, "minecraft:air", 1)
  excavatorJEI("bauxite", "Bauxite", "tinkers_reforged:aluminum_ore", 70, "minecraft:copper_ore", 22, "minecraft:iron_ore", 5, "tinkers_reforged:raw_aluminum_block", 3, "minecraft:gravel", 1, "minecraft:cobblestone", 1, "minecraft:air", 1)
  excavatorJEI("coal", "Coal", "minecraft:coal_ore", 85, "minecraft:diamond_ore", 10, "minecraft:emerald_ore", 5, "minecraft:gravel", 1, "minecraft:cobblestone", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorJEI("copper", "Copper", "minecraft:copper_ore", 65, "minecraft:gold_ore", 15, "create:zinc_ore", 10, "tinkers_reforged:aluminum_ore", 7, "minecraft:raw_copper_block", 3, "minecraft:gravel", 1, "minecraft:cobblestone", 1)
  excavatorJEI("dark", "Dark", "evilcraft:dark_ore", 55, "forbidden_arcanus:runic_stone", 45, "minecraft:gravel", 1, "minecraft:cobblestone", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorJEI("fluorite", "Fluorite", "mekanism:fluorite_ore", 95, "forbidden_arcanus:arcane_crystal_ore", 5, "minecraft:gravel", 1, "minecraft:cobblestone", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorJEI("gold", "Gold", "minecraft:gold_ore", 60, "minecraft:copper_ore", 20, "thermal:silver_ore", 15, "minecraft:raw_gold_block", 5, "minecraft:gravel", 1, "minecraft:cobblestone", 1, "minecraft:air", 1)
  excavatorJEI("iridium", "Iridium", "ftbic:iridium_ore", 70, "mekanism:osmium_ore", 20, "mekanism:fluorite_ore", 10, "minecraft:gravel", 1, "minecraft:cobblestone", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorJEI("iron", "Iron", "minecraft:iron_ore", 70, "thermal:nickel_ore", 25, "minecraft:raw_iron_block", 5, "minecraft:gravel", 1, "minecraft:cobblestone", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorJEI("lead", "Lead", "thermal:lead_ore", 70, "thermal:silver_ore", 24, "minecraft:diamond_ore", 1, "thermal:raw_lead_block", 5, "minecraft:gravel", 1, "minecraft:cobblestone", 1, "minecraft:air", 1)
  excavatorJEI("nickel", "Nickel", "thermal:nickel_ore", 70, "minecraft:iron_ore", 25, "thermal:raw_nickel_block", 5, "minecraft:gravel", 1, "minecraft:cobblestone", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorJEI("osmium", "Osmium", "mekanism:osmium_ore", 70, "ftbic:iridium_ore", 25, "mekanism:block_raw_osmium", 5, "minecraft:gravel", 1, "minecraft:cobblestone", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorJEI("quartz", "Certus Quartz", "ae2:quartz_ore", 70, "minecraft:gravel", 1, "minecraft:cobblestone", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorJEI("redstone", "Redstone", "minecraft:redstone_ore", 75, "thermal:cinnabar_ore", 25, "minecraft:gravel", 1, "minecraft:cobblestone", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorJEI("silver", "Silver", "thermal:silver_ore", 70, "thermal:lead_ore", 20, "minecraft:gold_ore", 5, "thermal:raw_silver_block", 5, "minecraft:gravel", 1, "minecraft:cobblestone", 1, "minecraft:air", 1)
  excavatorJEI("sulfur", "Sulfur", "thermal:sulfur_ore", 70, "thermal:niter_ore", 30, "minecraft:gravel", 1, "minecraft:cobblestone", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorJEI("tin", "Tin", "thermal:tin_ore", 70, "minecraft:copper_ore", 15, "thermal:silver_ore", 10, "thermal:raw_tin_block", 5, "minecraft:gravel", 1, "minecraft:cobblestone", 1, "minecraft:air", 1)
  excavatorJEI("uraninite", "Uraninite", "mekanism:uranium_ore", 20, "thermal:lead_ore", 20, "powah:uraninite_ore_dense", 10, "powah:uraninite_ore", 20, "powah:uraninite_ore_poor", 30, "minecraft:gravel", 1, "minecraft:cobblestone", 1)
  excavatorJEI("uranium", "Uranium", "mekanism:uranium_ore", 70, "miniutilities:ender_ore", 20, "powah:uraninite_ore_poor", 5, "mekanism:block_raw_uranium", 5, "minecraft:gravel", 1, "minecraft:cobblestone", 1, "minecraft:air", 1)
  excavatorJEI("zinc", "Zinc", "create:zinc_ore", 75, "thermal:tin_ore", 10, "minecraft:copper_ore", 10, "create:raw_zinc_block", 5, "minecraft:gravel", 1, "minecraft:cobblestone", 1, "minecraft:air", 1)
  excavatorJEI("aridrock_silver", "Aridrock Silver", "darkerdepths:aridrock_silver_ore", 50, "darkerdepths:aridrock_gold_ore", 25, "darkerdepths:aridrock_iron_ore", 25, "darkerdepths:aridrock", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorJEI("aridrock_coal", "Aridrock Coal", "darkerdepths:aridrock_coal_ore", 50, "darkerdepths:aridrock_lapis_ore", 35, "darkerdepths:aridrock_diamond_ore", 10, "darkerdepths:aridrock", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorJEI("aridrock_redstone", "Aridrock Redstone", "darkerdepths:aridrock_redstone_ore", 60, "darkerdepths:aridrock_lapis_ore", 20, "darkerdepths:aridrock_gold_ore", 20, "darkerdepths:aridrock", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorJEI("limestone_silver", "Limestone Silver", "darkerdepths:limestone_silver_ore", 50, "darkerdepths:limestone_gold_ore", 25, "darkerdepths:limestone_iron_ore", 25, "darkerdepths:limestone", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorJEI("limestone_coal", "Limestone Coal", "darkerdepths:limestone_coal_ore", 50, "darkerdepths:limestone_lapis_ore", 35, "darkerdepths:limestone_diamond_ore", 10, "darkerdepths:limestone", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorJEI("limestone_redstone", "Limestone Redstone", "darkerdepths:limestone_redstone_ore", 60, "darkerdepths:limestone_lapis_ore", 20, "darkerdepths:limestone_gold_ore", 20, "darkerdepths:limestone", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  //End
  excavatorEndJEI("ametrine", "Ametrine", "byg:ametrine_ore", 70, "byg:lignite_ore", 30, "byg:ether_stone", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorEndJEI("cryptic", "Cryptic", "byg:cryptic_redstone_ore", 70, "rftoolsbase:dimensionalshard_end", 30, "byg:cryptic_stone", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorEndJEI("kepu", "Kepu", "tinkers_reforged:kepu_ore", 70, "rftoolsbase:dimensionalshard_end", 30, "minecraft:end_stone", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  //Nether
  excavatorNetherJEI("ancient_debris", "Archaic Digsite", "minecraft:polished_blackstone_bricks", 40, "minecraft:polished_blackstone", 30, "minecraft:ancient_debris", 20, "minecraft:gilded_blackstone", 10, "minecraft:netherrack", 1, "minecraft:basalt", 1, "minecraft:gravel", 1)
  excavatorNetherJEI("byg", "BYG", "byg:emeraldite_ore", 35, "byg:pendorite_ore", 35, "minecraft:nether_quartz_ore", 30, "minecraft:netherrack", 1, "byg:scoria_stone", 1, "byg:blue_netherrack", 1, "minecraft:air", 1)
  excavatorNetherJEI("cobalt", "Cobalt", "tconstruct:cobalt_ore", 70, "minecraft:nether_quartz_ore", 15, "minecraft:nether_gold_ore", 15, "minecraft:netherrack", 1, "minecraft:basalt", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorNetherJEI("gold_nether", "Nether Gold", "minecraft:nether_gold_ore", 70, "byg:brimstone_nether_gold_ore", 15, "byg:blue_nether_gold_ore", 15, "minecraft:netherrack", 1, "byg:brimstone", 1, "byg:blue_netherrack", 1, "minecraft:air", 1)
  excavatorNetherJEI("quartz_nether", "Nether Quartz", "minecraft:nether_quartz_ore", 69, "byg:brimstone_nether_quartz_ore", 14, "byg:blue_nether_quartz_ore", 17, "minecraft:netherrack", 1, "byg:brimstone", 1, "byg:blue_netherrack", 1, "minecraft:air", 1)
  //Beyond Earth
  excavatorUniqueJEI("beyond_earth:mercury", "mercury_iron", "§7§lMercury Iron", "beyond_earth:mercury_iron_ore", 70, "beyond_earth:mercury_stone", 30, "minecraft:blackstone", 1, "minecraft:magma_block", 1, "minecraft:basalt", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorUniqueJEI("beyond_earth:moon", "moon_cheese", "§7§lMoon Cheese", "beyond_earth:moon_cheese_ore", 75, "beyond_earth:moon_iron_ore", 15, "beyond_earth:moon_ice_shard_ore", 10, "beyond_earth:moon_stone", 1, "beyond_earth:moon_sand", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorUniqueJEI("beyond_earth:moon", "moon_desh", "§7§lMoon Desh", "beyond_earth:moon_desh_ore", 75, "beyond_earth:moon_iron_ore", 15, "beyond_earth:moon_cheese_ore", 10, "beyond_earth:moon_stone", 1, "beyond_earth:moon_sand", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorUniqueJEI("beyond_earth:mars", "mars_iron", "§7§lMars Iron", "beyond_earth:mars_iron_ore", 75, "beyond_earth:mars_ice_shard_ore", 15, "beyond_earth:mars_diamond_ore", 10, "beyond_earth:mars_stone", 1, "beyond_earth:mars_sand", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorUniqueJEI("beyond_earth:mars", "mars_ostrum", "§7§lMars Ostrum", "beyond_earth:mars_ostrum_ore", 75, "beyond_earth:mars_iron_ore", 15, "beyond_earth:mars_ice_shard_ore", 10, "beyond_earth:mars_stone", 1, "beyond_earth:mars_sand", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorUniqueJEI("beyond_earth:venus", "venus_coal", "§7§lVenus Coal", "beyond_earth:venus_coal_ore", 75, "beyond_earth:venus_gold_ore", 15, "beyond_earth:venus_diamond_ore", 10, "beyond_earth:venus_stone", 1, "beyond_earth:venus_sand", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorUniqueJEI("beyond_earth:venus", "venus_calorite", "§7§lVenus Calorite", "beyond_earth:venus_calorite_ore", 55, "beyond_earth:venus_diamond_ore", 25, "beyond_earth:venus_gold_ore", 20, "beyond_earth:venus_stone", 1, "beyond_earth:venus_sand", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorUniqueJEI("beyond_earth:glacio", "glacio_unknown", "§7§lGlacio Unknown", "ragnamod_seven:unknown_ore", 50, "beyond_earth:glacio_ice_shard_ore", 50, "beyond_earth:glacio_stone", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorUniqueJEI("beyond_earth:glacio", "glacio_coal", "§7§lGlacio Coal", "beyond_earth:glacio_coal_ore", 60, "beyond_earth:glacio_copper_ore", 40, "beyond_earth:glacio_stone", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorUniqueJEI("beyond_earth:glacio", "glacio_lapis", "§7§lGlacio Lapis", "beyond_earth:glacio_lapis_ore", 60, "beyond_earth:glacio_iron_ore", 40, "beyond_earth:glacio_stone", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  //Blue Skies
  excavatorUniqueJEI("blue_skies:everbright", "everbright_ventium", "§b§lVentium", "blue_skies:ventium_ore", 60, "blue_skies:everbright_pyrope_ore", 30, "blue_skies:everbright_emerald_ore", 10, "blue_skies:turquoise_stone", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorUniqueJEI("blue_skies:everbright", "everbright_falsite", "§b§lFalsite", "blue_skies:falsite_ore", 60, "blue_skies:everbright_moonstone_ore", 25, "blue_skies:everbright_aquite_ore", 15, "blue_skies:turquoise_stone", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorUniqueJEI("blue_skies:everbright", "everbright_charoite", "§b§lCharoite", "blue_skies:everbright_charoite_ore", 60, "blue_skies:everbright_diopside_ore", 25, "blue_skies:everbright_emerald_ore", 15, "blue_skies:turquoise_stone", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorUniqueJEI("blue_skies:everdawn", "everdawn_horizonite", "§c§lHorizonite", "blue_skies:horizonite_ore", 60, "blue_skies:everdawn_moonstone_ore", 25, "blue_skies:everdawn_aquite_ore", 15, "blue_skies:lunar_stone", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorUniqueJEI("blue_skies:everdawn", "everdawn_charoite", "§c§lCharoite", "blue_skies:everdawn_charoite_ore", 60, "blue_skies:everdawn_diopside_ore", 25, "blue_skies:everdawn_emerald_ore", 15, "blue_skies:lunar_stone", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorUniqueJEI("blue_skies:everdawn", "everdawn_pyrope", "§c§lPyrope", "blue_skies:everdawn_pyrope_ore", 60, "blue_skies:everdawn_aquite_ore", 25, "blue_skies:everdawn_emerald_ore", 15, "blue_skies:lunar_stone", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  //Mythic Botany
  excavatorUniqueJEI("mythicbotany:alfheim", "mythicbotany_gold", "§6§lMythicbotany Gold", "mythicbotany:gold_ore", 90, "mythicbotany:elementium_ore", 9, "mythicbotany:dragonstone_ore", 1, "botania:livingrock", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  //Undergarden
  excavatorUniqueJEI("undergarden:undergarden", "depthrock_cloggrum", "§2§lDepthrock Cloggrum", "undergarden:depthrock_cloggrum_ore", 60, "undergarden:depthrock_coal_ore", 25, "undergarden:depthrock_iron_ore", 15, "undergarden:depthrock", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorUniqueJEI("undergarden:undergarden", "depthrock_regalium", "§2§lDepthrock Regalium", "undergarden:depthrock_regalium_ore", 45, "undergarden:depthrock_gold_ore", 45, "undergarden:depthrock_diamond_ore", 10, "undergarden:depthrock", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorUniqueJEI("undergarden:undergarden", "depthrock_utherium", "§2§lDepthrock Utherium", "undergarden:depthrock_utherium_ore", 45, "undergarden:depthrock_cloggrum_ore", 45, "undergarden:depthrock_gold_ore", 10, "undergarden:depthrock", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorUniqueJEI("undergarden:undergarden", "shiverstone_cloggrum", "§2§lShiverstone Cloggrum", "undergarden:shiverstone_cloggrum_ore", 60, "undergarden:shiverstone_coal_ore", 25, "undergarden:shiverstone_iron_ore", 15, "undergarden:shiverstone", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorUniqueJEI("undergarden:undergarden", "shiverstone_froststeel", "§2§lShiverstone Froststeel", "undergarden:shiverstone_froststeel_ore", 45, "undergarden:shiverstone_iron_ore", 45, "undergarden:shiverstone_diamond_ore", 10, "undergarden:shiverstone", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)
  excavatorUniqueJEI("undergarden:undergarden", "shiverstone_utherium", "§2§lShiverstone Utherium", "undergarden:shiverstone_utherium_ore", 45, "undergarden:shiverstone_cloggrum_ore", 45, "undergarden:shiverstone_regalium_ore", 10, "undergarden:shiverstone", 1, "minecraft:air", 1, "minecraft:air", 1, "minecraft:air", 1)

  //Honey Converter
  e.custom({
    "type": "custommachinery:custom_machine",
    "machine": "ragnamod_7:honey_convertor",
    "time": 1,
    "requirements": [
      {
        "type": "custommachinery:fluid",
        "mode": "input",
        "tank": "honey_cofh",
        "fluid": "cofh_core:honey",
        "amount": 1000
      },
      {
        "type": "custommachinery:fluid",
        "mode": "output",
        "tank": "honey_create",
        "fluid": "create:honey",
        "amount": 1000,
      }
    ]
  })
  e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"ragnamod_7:honey_convertor"}'), ['ABA'], { A: 'minecraft:bucket', B: 'thermal:device_hive_extractor' })
})