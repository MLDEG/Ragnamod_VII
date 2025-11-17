onEvent('recipes', e => {

  //Blastbrick
  e.custom({
    "type": "hexerei:mixingcauldron",
    "liquid": {
      "fluid": "minecraft:lava"
    },
    "ingredients": [
      {
        "item": "twilightforest:mazestone_brick"
      },
      {
        "item": "minecraft:brick"
      },
      {
        "item": "minecraft:brick"
      },
      {
        "item": "minecraft:brick"
      },
      {
        "item": "minecraft:brick"
      },
      {
        "item": "minecraft:brick"
      },
      {
        "item": "minecraft:brick"
      },
      {
        "item": "minecraft:brick"
      }
    ],
    "output": {
      "item": "immersiveengineering:blastbrick"
    },
    "liquidOutput": {
      "fluid": "minecraft:lava"
    },
    "fluidLevelsConsumed": 1500
  })

  //Portal Activator
  e.custom({
    "type": "hexerei:mixingcauldron",
    "liquid": {
      "fluid": "minecraft:lava"
    },
    "ingredients": [
      {
        "type": "forge:nbt", "item": "naturesaura:aura_bottle", "count": 1, "nbt": "{stored_type:\"naturesaura:end\"}"
      },
      {
        "item": "twilightforest:naga_scale"
      },
      {
        "item": "twilightforest:magic_map_focus"
      },
      {
        "item": "twilightdelight:raw_insect"
      },
      {
        "item": "twilightforest:borer_essence"
      },
      {
        "item": "twilightforest:arctic_fur"
      },
      {
        "item": "twilightforest:raw_ironwood"
      },
      {
        "item": "forbidden_arcanus:arcane_crystal"
      }
    ],
    "output": {
      "item": "ragnamod_seven:portal_activator"
    },
    "liquidOutput": {
      "fluid": "minecraft:lava"
    },
    "fluidLevelsConsumed": 1500
  })

  //Ultimate Stew
  e.custom({
    "type": "hexerei:mixingcauldron",
    "liquid": {
      "fluid": "create_confectionery:caramel"
    },
    "ingredients": [
      {
        "item": "ragnamod_seven:infinity_shard"
      },
      {
        "item": "farmersdelight:roasted_mutton_chops"
      },
      {
        "item": "farmersdelight:pasta_with_meatballs"
      },
      {
        "item": "farmersdelight:stuffed_pumpkin_block"
      },
      {
        "item": "farmersdelight:shepherds_pie_block"
      },
      {
        "item": "farmersdelight:nether_salad"
      },
      {
        "item": "farmersdelight:squid_ink_pasta"
      },
      {
        "item": "farmersdelight:hamburger"
      }
    ],
    "output": {
      "item": "avaritia:ultimate_stew"
    },
    "liquidOutput": {
      "fluid": "undergarden:virulent_mix_source"
    },
    "fluidLevelsConsumed": 1000
  })

})