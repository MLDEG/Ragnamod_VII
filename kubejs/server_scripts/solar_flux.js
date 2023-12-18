onEvent('recipes', e => {

  //PSI Solar
  e.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "reagent": [{ "item": "solarflux:sp_8" }],
    "pedestalItems": [
      { "item": { "item": "solarflux:photovoltaic_cell_7" } },
      { "item": { "item": "solarflux:photovoltaic_cell_7" } },
      { "item": { "item": "psi:psigem_block" } },
      { "item": { "item": "psi:psigem_block" } },
      { "item": { "item": "psi:psigem_block" } },
      { "item": { "item": "solarflux:photovoltaic_cell_7" } }
    ],
    "output": { "item": "solarflux:sp_custom_psi" },
    "sourceCost": 5000,
    "keepNbtOfReagent": false
  })
  //Alfsteel Solar
  e.custom({
    "type": "mythicbotany:infusion",
    "group": "infuser",
    "output": { "item": "solarflux:sp_custom_alfsteel", "count": 1 },
    "mana": 2000000,
    "ingredients": [
      { "item": "mythicbotany:alfsteel_block" },
      { "item": "solarflux:sp_custom_psi" },
      { "item": "solarflux:photovoltaic_cell_8" }
    ],
    "fromColor": 16096479,
    "toColor": 16296225
  })
  //Wyvern Solar
  e.custom({
    "type": "draconicevolution:fusion_crafting",
    "result": { "item": "solarflux:sp_custom_wyvern" },
    "catalyst": { "item": "solarflux:sp_custom_alfsteel" },
    "total_energy": 10000000,
    "tier": "WYVERN",
    "ingredients": [
      { "item": "solarflux:photovoltaic_cell_9" },
      { "item": "draconicevolution:wyvern_wireless_crystal" },
      { "item": "solarflux:photovoltaic_cell_9" },
      { "item": "draconicevolution:wyvern_wireless_crystal" },
      { "item": "solarflux:photovoltaic_cell_9" },
      { "item": "draconicevolution:wyvern_wireless_crystal" },
      { "item": "solarflux:photovoltaic_cell_9" },
      { "item": "draconicevolution:wyvern_wireless_crystal" },
    ]
  })
  //Draconic Solar
  e.custom({
    "type": "draconicevolution:fusion_crafting",
    "result": { "item": "solarflux:sp_custom_draconic" },
    "catalyst": { "item": "solarflux:sp_custom_wyvern" },
    "total_energy": 100000000,
    "tier": "DRACONIC",
    "ingredients": [
      { "item": "solarflux:photovoltaic_cell_10" },
      { "item": "draconicevolution:draconic_wireless_crystal" },
      { "item": "solarflux:photovoltaic_cell_10" },
      { "item": "draconicevolution:draconic_wireless_crystal" },
      { "item": "solarflux:photovoltaic_cell_10" },
      { "item": "draconicevolution:draconic_wireless_crystal" },
      { "item": "solarflux:photovoltaic_cell_10" },
      { "item": "draconicevolution:draconic_wireless_crystal" },
    ]
  })
  //Chaotic Solar
  e.custom({
    "type": "draconicevolution:fusion_crafting",
    "result": { "item": "solarflux:sp_custom_chaotic" },
    "catalyst": { "item": "solarflux:sp_custom_draconic" },
    "total_energy": 1000000000,
    "tier": "CHAOTIC",
    "ingredients": [
      { "item": "solarflux:photovoltaic_cell_11" },
      { "item": "draconicevolution:chaos_shard" },
      { "item": "solarflux:photovoltaic_cell_11" },
      { "item": "draconicevolution:chaos_shard" },
      { "item": "solarflux:photovoltaic_cell_11" },
      { "item": "draconicevolution:chaos_shard" },
      { "item": "solarflux:photovoltaic_cell_11" },
      { "item": "draconicevolution:chaos_shard" },
    ]
  })
  //Neutronium Solar
  e.custom({
    "type": "custommachinery:custom_machine",
    "machine": "ragnamod_7:extreme_table",
    "time": 1,
    "requirements": [
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_2", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_3", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_5", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_6", "item": "avaritia:neutronium_ingot", "amount": 1 },

      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_10", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_11", "item": "avaritia:crystal_matrix_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_12", "item": "avaritia:crystal_matrix_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_13", "item": "avaritia:neutronium_block", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_14", "item": "avaritia:crystal_matrix_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_15", "item": "avaritia:crystal_matrix_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_16", "item": "avaritia:neutronium_ingot", "amount": 1 },

      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_18", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_19", "item": "avaritia:crystal_matrix_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_22", "item": "avaritia:neutron_nugget", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_25", "item": "avaritia:crystal_matrix_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_26", "item": "avaritia:neutronium_ingot", "amount": 1 },

      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_27", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_28", "item": "avaritia:crystal_matrix_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_30", "item": "avaritia:neutron_pile", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_31", "item": "solarflux:photovoltaic_cell_12", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_32", "item": "avaritia:neutron_pile", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_34", "item": "avaritia:crystal_matrix_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_35", "item": "avaritia:neutronium_ingot", "amount": 1 },

      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_37", "item": "avaritia:neutronium_block", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_38", "item": "avaritia:neutron_nugget", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_39", "item": "solarflux:photovoltaic_cell_12", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_40", "item": "solarflux:sp_custom_chaotic", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_41", "item": "solarflux:photovoltaic_cell_12", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_42", "item": "avaritia:neutron_nugget", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_43", "item": "avaritia:neutronium_block", "amount": 1 },

      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_45", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_46", "item": "avaritia:crystal_matrix_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_48", "item": "avaritia:neutron_pile", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_49", "item": "solarflux:photovoltaic_cell_12", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_50", "item": "avaritia:neutron_pile", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_52", "item": "avaritia:crystal_matrix_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_53", "item": "avaritia:neutronium_ingot", "amount": 1 },

      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_54", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_55", "item": "avaritia:crystal_matrix_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_58", "item": "avaritia:neutron_nugget", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_61", "item": "avaritia:crystal_matrix_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_62", "item": "avaritia:neutronium_ingot", "amount": 1 },

      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_64", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_65", "item": "avaritia:crystal_matrix_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_66", "item": "avaritia:crystal_matrix_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_67", "item": "avaritia:neutronium_block", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_68", "item": "avaritia:crystal_matrix_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_69", "item": "avaritia:crystal_matrix_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_70", "item": "avaritia:neutronium_ingot", "amount": 1 },

      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_74", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_75", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_77", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_78", "item": "avaritia:neutronium_ingot", "amount": 1 },
      {
        "type": "custommachinery:item",
        "mode": "output",
        "item": "solarflux:sp_custom_neutronium",
        "amount": 1
      }
    ]
  })
  //Ultimate Solar
  e.custom({
    "type": "custommachinery:custom_machine",
    "machine": "ragnamod_7:extreme_table",
    "time": 1,
    "requirements": [
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_2", "item": "avaritia:infinity_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_3", "item": "avaritia:infinity_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_5", "item": "avaritia:infinity_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_6", "item": "avaritia:infinity_ingot", "amount": 1 },

      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_10", "item": "avaritia:infinity_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_11", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_12", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_13", "item": "avaritia:infinity_block", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_14", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_15", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_16", "item": "avaritia:infinity_ingot", "amount": 1 },

      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_18", "item": "avaritia:infinity_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_19", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_22", "item": "ragnamod_seven:infinity_gem", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_25", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_26", "item": "avaritia:infinity_ingot", "amount": 1 },

      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_27", "item": "avaritia:infinity_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_28", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_30", "item": "avaritia:infinity_catalyst", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_31", "item": "solarflux:photovoltaic_cell_13", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_32", "item": "avaritia:infinity_catalyst", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_34", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_35", "item": "avaritia:infinity_ingot", "amount": 1 },

      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_37", "item": "avaritia:infinity_block", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_38", "item": "ragnamod_seven:infinity_gem", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_39", "item": "solarflux:photovoltaic_cell_13", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_40", "item": "solarflux:sp_custom_neutronium", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_41", "item": "solarflux:photovoltaic_cell_13", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_42", "item": "ragnamod_seven:infinity_gem", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_43", "item": "avaritia:infinity_block", "amount": 1 },

      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_45", "item": "avaritia:infinity_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_46", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_48", "item": "avaritia:infinity_catalyst", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_49", "item": "solarflux:photovoltaic_cell_13", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_50", "item": "avaritia:infinity_catalyst", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_52", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_53", "item": "avaritia:infinity_ingot", "amount": 1 },

      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_54", "item": "avaritia:infinity_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_55", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_58", "item": "ragnamod_seven:infinity_gem", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_61", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_62", "item": "avaritia:infinity_ingot", "amount": 1 },

      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_64", "item": "avaritia:infinity_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_65", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_66", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_67", "item": "avaritia:infinity_block", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_68", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_69", "item": "avaritia:neutronium_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_70", "item": "avaritia:infinity_ingot", "amount": 1 },

      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_74", "item": "avaritia:infinity_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_75", "item": "avaritia:infinity_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_77", "item": "avaritia:infinity_ingot", "amount": 1 },
      { "type": "custommachinery:item", "mode": "input", "slot": "ect_input_78", "item": "avaritia:infinity_ingot", "amount": 1 },
      {
        "type": "custommachinery:item",
        "mode": "output",
        "item": "solarflux:sp_custom_ultimate",
        "amount": 1
      }
    ]
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