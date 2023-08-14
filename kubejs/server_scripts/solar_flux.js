onEvent('recipes', e => {

  //PSI Solar
  e.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "reagent": [{"item": "solarflux:sp_8"}],
    "pedestalItems": [
      {"item": {"item": "solarflux:photovoltaic_cell_7"}},
      {"item": {"item": "solarflux:photovoltaic_cell_7"}},
      {"item": {"item": "psi:psigem_block"}},
      {"item": {"item": "psi:psigem_block"}},
      {"item": {"item": "psi:psigem_block"}},
      {"item": {"item": "solarflux:photovoltaic_cell_7"}}
    ],
    "output": {"item": "solarflux:sp_custom_psi"},
    "sourceCost": 5000,
    "keepNbtOfReagent": false
  })
  //Alfsteel Solar
  e.custom({
    "type": "mythicbotany:infusion",
    "group": "infuser",
    "output": {"item": "solarflux:sp_custom_alfsteel","count": 1},
    "mana": 1000000,
    "ingredients": [
      {"item": "solarflux:photovoltaic_cell_8"},
      {"item": "solarflux:photovoltaic_cell_8"},
      {"item": "solarflux:sp_custom_psi"},
      {"item": "solarflux:photovoltaic_cell_8"}
    ],
    "fromColor": 16711821,
    "toColor": 16750080
  })
  //Wyvern Solar
  e.custom({
    "type": "draconicevolution:fusion_crafting",
    "result": {"item": "solarflux:sp_custom_wyvern"},
    "catalyst": {"item": "solarflux:sp_custom_alfsteel"},
    "total_energy": 10000000,
    "tier": "WYVERN",
    "ingredients": [
      {"item": "solarflux:photovoltaic_cell_9"},
      {"item": "draconicevolution:wyvern_wireless_crystal"},
      {"item": "solarflux:photovoltaic_cell_9"},
      {"item": "draconicevolution:wyvern_wireless_crystal"},
      {"item": "solarflux:photovoltaic_cell_9"},
      {"item": "draconicevolution:wyvern_wireless_crystal"},
      {"item": "solarflux:photovoltaic_cell_9"},
      {"item": "draconicevolution:wyvern_wireless_crystal"},
    ]
  })
  //Draconic Solar
  e.custom({
    "type": "draconicevolution:fusion_crafting",
    "result": {"item": "solarflux:sp_custom_draconic"},
    "catalyst": {"item": "solarflux:sp_custom_wyvern"},
    "total_energy": 100000000,
    "tier": "DRACONIC",
    "ingredients": [
      {"item": "solarflux:photovoltaic_cell_10"},
      {"item": "draconicevolution:draconic_wireless_crystal"},
      {"item": "solarflux:photovoltaic_cell_10"},
      {"item": "draconicevolution:draconic_wireless_crystal"},
      {"item": "solarflux:photovoltaic_cell_10"},
      {"item": "draconicevolution:draconic_wireless_crystal"},
      {"item": "solarflux:photovoltaic_cell_10"},
      {"item": "draconicevolution:draconic_wireless_crystal"},
    ]
  })
  //Chaotic Solar
  e.custom({
    "type": "draconicevolution:fusion_crafting",
    "result": {"item": "solarflux:sp_custom_chaotic"},
    "catalyst": {"item": "solarflux:sp_custom_draconic"},
    "total_energy": 1000000000,
    "tier": "CHAOTIC",
    "ingredients": [
      {"item": "solarflux:photovoltaic_cell_11"},
      {"item": "draconicevolution:chaos_shard"},
      {"item": "solarflux:photovoltaic_cell_11"},
      {"item": "draconicevolution:chaos_shard"},
      {"item": "solarflux:photovoltaic_cell_11"},
      {"item": "draconicevolution:chaos_shard"},
      {"item": "solarflux:photovoltaic_cell_11"},
      {"item": "draconicevolution:chaos_shard"},
    ]
  })
  //Neutronium Solar
  e.custom({
    "type": "avaritia:extreme_shaped",
    "result": {"item": "solarflux:sp_custom_neutronium"},
    "pattern": [
      "  22 22  ",
      " 2CC3CC2 ",
      "2C  1  C2",
      "2C 0P0 C2",
      " 31PSP13 ",
      "2C 0P0 C2",
      "2C  1  C2",
      " 2CC3CC2 ",
      "  22 22  "
    ],
    "key": {
      "S": {"item": "solarflux:sp_custom_chaotic"},
      "C": {"item": "avaritia:crystal_matrix_ingot"},
      "P": {"item": "solarflux:photovoltaic_cell_12"},
      "0": {"item": "avaritia:neutron_pile"},
      "1": {"item": "avaritia:neutron_nugget"},
      "2": {"item": "avaritia:neutronium_ingot"},
      "3": {"item": "avaritia:neutronium_block"}
    }
  })
  //Ultimate Solar
  e.custom({
    "type": "avaritia:extreme_shaped",
    "result": {"item": "solarflux:sp_custom_ultimate"},
    "pattern": [
      "  22 22  ",
      " 2CC3CC2 ",
      "2C  1  C2",
      "2C 0P0 C2",
      " 31PSP13 ",
      "2C 0P0 C2",
      "2C  1  C2",
      " 2CC3CC2 ",
      "  22 22  "
    ],
    "key": {
      "S": {"item": 'solarflux:sp_custom_neutronium'},
      "C": {"item": 'avaritia:neutronium_ingot'},
      "P": {"item": 'solarflux:photovoltaic_cell_13'},
      "0": {"item": 'avaritia:infinity_catalyst'},
      "1": {"item": 'ragnamod_seven:infinity_gem'},
      "2": {"item": 'avaritia:infinity_ingot'},
      "3": {"item": 'avaritia:infinity_block'}
    }
  })

  //Photovoltaic Cell 7
  e.shaped('2x solarflux:photovoltaic_cell_7', [
    'AAA',
    'BCB',
    'DED'
  ], {
    A: 'forbidden_arcanus:runic_glass_pane',
    B: 'minecraft:glowstone',
    C: 'psi:psimetal_block',
    D: 'solarflux:photovoltaic_cell_6',
    E: 'botania:red_quartz'
  })

  //Photovoltaic Cell 8
  e.shaped('2x solarflux:photovoltaic_cell_8', [
    'AAA',
    'BCB',
    'DED'
  ], {
    A: 'forbidden_arcanus:arcane_golden_glass_pane',
    B: 'minecraft:shroomlight',
    C: 'forbidden_arcanus:arcane_gold_block',
    D: 'solarflux:photovoltaic_cell_7',
    E: 'botania:sunny_quartz'
  })

  //Photovoltaic Cell 9
  e.shaped('2x solarflux:photovoltaic_cell_9', [
    'AAA',
    'BCB',
    'DED'
  ], {
    A: 'forbidden_arcanus:dark_runic_glass_pane',
    B: 'minecraft:sea_lantern',
    C: 'draconicevolution:draconium_block',
    D: 'solarflux:photovoltaic_cell_8',
    E: 'botania:lavender_quartz'
  })
    
  //Photovoltaic Cell 10
  e.shaped('2x solarflux:photovoltaic_cell_10', [
    'AAA',
    'BCB',
    'DED'
  ], {
    A: 'thermal:signalum_glass',
    B: 'dustrial_decor:orange_neon_light',
    C: 'draconicevolution:awakened_draconium_block',
    D: 'solarflux:photovoltaic_cell_9',
    E: 'botania:blaze_quartz'
  })
    
  //Photovoltaic Cell 11
  e.shaped('2x solarflux:photovoltaic_cell_11', [
    'AAA',
    'BCB',
    'DED'
  ], {
    A: 'thermal_extra:dragonsteel_glass',
    B: 'miniutilities:black_lapis_caelestis',
    C: 'draconicevolution:chaotic_core',
    D: 'solarflux:photovoltaic_cell_10',
    E: 'botania:dark_quartz'
  })
    
  //Photovoltaic Cell 12
  e.shaped('2x solarflux:photovoltaic_cell_12', [
    'AAA',
    'BCB',
    'DED'
  ], {
    A: 'ftbic:iridium_neutron_reflector',
    B: 'miniutilities:white_lapis_caelestis',
    C: 'avaritia:neutronium_block',
    D: 'solarflux:photovoltaic_cell_11',
    E: 'botania:mana_quartz'
  })
    
  //Photovoltaic Cell 13
  e.shaped('2x solarflux:photovoltaic_cell_13', [
    'AAA',
    'BCB',
    'DED'
  ], {
    A: 'botania:bifrost_pane',
    B: 'dustrial_decor:rainbow_neon_light',
    C: 'avaritia:infinity_catalyst',
    D: 'solarflux:photovoltaic_cell_12',
    E: 'botania:elf_quartz'
  })

})