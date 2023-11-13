onEvent('recipes', e => {

  //Nether Bricks
  e.custom({
    "type": "hexerei:mixingcauldron",
    "liquid": {
      "fluid": "hexerei:quicksilver_fluid"
    },
    "ingredients": [
      {
        "item": "hexerei:dried_belladonna_flowers"
      },
      {
        "item": "minecraft:spider_eye"
      },
      {
        "item": "malum:eldritch_spirit"
      },
      {
        "item": "occultism:spirit_attuned_gem"
      },
      {
        "item": "malum:hex_ash"
      },
      {
        "item": "malum:unholy_sap"
      },
      {
        "item": "evilcraft:dark_gem_crushed"
      },
      {
        "item": "ars_nouveau:source_berry"
      }
    ],
    "output": {
      "item": "malum:unholy_sapball"
    },
    "liquidOutput": {
      "fluid": "undergarden:virulent_mix_source"
    },
    "fluidLevelsConsumed": 0
  })

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

})