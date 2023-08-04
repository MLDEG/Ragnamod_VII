onEvent('recipes', e => {

    //Thermal Machine Frame
    e.custom({
    "input": [
      {
        "tag": "forge:plastic"
      },
      {
        "tag": "industrialforegoing:machine_frame/simple"
      },
      {
        "tag": "forge:plastic"
      },
      {
        "item": "minecraft:netherite_scrap"
      },
      {
        "item": "minecraft:netherite_scrap"
      },
      {
        "tag": "forge:ingots/gold"
      },
      {
        "item": "ftbic:dual_uranium_fuel_rod"
      },
      {
        "tag": "forge:ingots/gold"
      }
    ],
    "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:500}",
    "processingTime": 300,
    "output": {
      "item": "thermal:machine_frame",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })

    //Steel Casing
    e.custom({
    "input": [
      {
        "tag": "forge:plastic"
      },
      {
        "item": "industrialforegoing:machine_frame_supreme"
      },
      {
        "tag": "forge:plastic"
      },
      {
        "item": "architects_palette:unobtanium"
      },
      {
        "item": "architects_palette:unobtanium"
      },
      {
        "tag": "forge:nether_stars"
      },
      {
        "item": "thermal_extra:upgrade_augment"
      },
      {
        "tag": "forge:nether_stars"
      }
    ],
    "inputFluid": "{FluidName:\"industrialforegoing:biofuel\",Amount:500}",
    "processingTime": 300,
    "output": {
      "item": "mekanism:steel_casing",
      "count": 1
    },
    "type": "industrialforegoing:dissolution_chamber"
  })
})