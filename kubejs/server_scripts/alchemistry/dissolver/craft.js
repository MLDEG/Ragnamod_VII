onEvent('recipes', e => {

  function dissolver(input, proba, output, outamount) { e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": input }, "count": 1 }, "output": { "rolls": 1, "weighted": false, "groups": [{ "probability": proba, "results": [{ "item": output, "count": outamount }] }] } }) }
  function dissolverBlock(input, proba, output, outamount, outamount2) { e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "item": input }, "count": 1 }, "output": { "rolls": 1, "weighted": false, "groups": [{ "probability": proba, "results": [{ "item": output, "count": outamount }, { "item": output, "count": outamount }, { "item": output, "count": outamount2 }] }] } }) }

  //Lead
  dissolver('forge:gears/lead', 100.0, 'chemlib:lead', 64)
  dissolver('forge:crushed/lead', 100.0, 'chemlib:lead', 16)
  dissolver('forge:ingots/lead', 100.0, 'chemlib:lead', 16)
  dissolver('forge:raw_materials/lead', 100.0, 'chemlib:lead', 16)
  dissolver('forge:plates/lead', 100.0, 'chemlib:lead', 16)
  dissolver('forge:dusts/lead', 100.0, 'chemlib:lead', 16)
  dissolver('forge:rods/lead', 100.0, 'chemlib:lead', 8)
  dissolver('forge:wires/lead', 100.0, 'chemlib:lead', 8)
  dissolver('forge:nuggets/lead', 100.0, 'chemlib:lead', 1)
  dissolver('forge:coins/lead', 100.0, 'chemlib:lead', 3)
  dissolverBlock('thermal:lead_block', 100.0, 'chemlib:lead', 64, 16)
  dissolverBlock('thermal:raw_lead_block', 100.0, 'chemlib:lead', 64, 16)
  dissolverBlock('mekanism:block_raw_lead', 100.0, 'chemlib:lead', 64, 16)
  dissolverBlock('mekanism:block_lead', 100.0, 'chemlib:lead', 64, 16)
  dissolverBlock('immersiveengineering:storage_lead', 100.0, 'chemlib:lead', 64, 16)
  dissolverBlock('immersiveengineering:raw_block_lead', 100.0, 'chemlib:lead', 64, 16)
  dissolverBlock('chemlib:lead_metal_block', 100.0, 'chemlib:lead', 64, 16)

  //Silver
  dissolver('forge:gears/silver', 100.0, 'chemlib:silver', 64)
  dissolver('forge:crushed/silver', 100.0, 'chemlib:silver', 16)
  dissolver('forge:ingots/silver', 100.0, 'chemlib:silver', 16)
  dissolver('forge:raw_materials/silver', 100.0, 'chemlib:silver', 16)
  dissolver('forge:plates/silver', 100.0, 'chemlib:silver', 16)
  dissolver('forge:dusts/silver', 100.0, 'chemlib:silver', 16)
  dissolver('forge:rods/silver', 100.0, 'chemlib:silver', 8)
  dissolver('forge:nuggets/silver', 100.0, 'chemlib:silver', 1)
  dissolver('forge:coins/silver', 100.0, 'chemlib:lead', 3)
  dissolverBlock('thermal:silver_block', 100.0, 'chemlib:silver', 64, 16)
  dissolverBlock('thermal:raw_silver_block', 100.0, 'chemlib:silver', 64, 16)
  dissolverBlock('occultism:silver_block', 100.0, 'chemlib:silver', 64, 16)
  dissolverBlock('immersiveengineering:storage_silver', 100.0, 'chemlib:silver', 64, 16)
  dissolverBlock('immersiveengineering:raw_block_silver', 100.0, 'chemlib:silver', 64, 16)
  dissolverBlock('darkerdepths:raw_silver_block', 100.0, 'chemlib:silver', 64, 16)
  dissolverBlock('chemlib:silver_metal_block', 100.0, 'chemlib:silver', 64, 16)
  dissolverBlock('darkerdepths:silver_block', 100.0, 'chemlib:silver', 64, 16)

  //Iridium
  dissolver('forge:gears/iridium', 100.0, 'chemlib:iridium', 64)
  dissolver('forge:ingots/iridium', 100.0, 'chemlib:iridium', 16)
  dissolver('forge:raw_materials/iridium', 100.0, 'chemlib:iridium', 16)
  dissolver('forge:plates/iridium', 100.0, 'chemlib:iridium', 16)
  dissolver('forge:dusts/iridium', 100.0, 'chemlib:iridium', 16)
  dissolver('forge:rods/iridium', 100.0, 'chemlib:iridium', 8)
  dissolver('forge:nuggets/iridium', 100.0, 'chemlib:iridium', 1)
  dissolverBlock('chemlib:iridium_metal_block', 100.0, 'chemlib:iridium', 64, 16)

  //Nickel
  dissolver('forge:gears/nickel', 100.0, 'chemlib:nickel', 64)
  dissolver('forge:crushed/nickel', 100.0, 'chemlib:nickel', 16)
  dissolver('forge:ingots/nickel', 100.0, 'chemlib:nickel', 16)
  dissolver('forge:raw_materials/nickel', 100.0, 'chemlib:nickel', 16)
  dissolver('forge:plates/nickel', 100.0, 'chemlib:nickel', 16)
  dissolver('forge:dusts/nickel', 100.0, 'chemlib:nickel', 16)
  dissolver('forge:rods/nickel', 100.0, 'chemlib:nickel', 8)
  dissolver('forge:nuggets/nickel', 100.0, 'chemlib:nickel', 1)
  dissolver('forge:coins/nickel', 100.0, 'chemlib:lead', 3)
  dissolverBlock('chemlib:nickel_metal_block', 100.0, 'chemlib:nickel', 64, 16)
  dissolverBlock('immersiveengineering:raw_block_nickel', 100.0, 'chemlib:nickel', 64, 16)
  dissolverBlock('immersiveengineering:storage_nickel', 100.0, 'chemlib:nickel', 64, 16)
  dissolverBlock('thermal:raw_nickel_block', 100.0, 'chemlib:nickel', 64, 16)
  dissolverBlock('thermal:nickel_block', 100.0, 'chemlib:nickel', 64, 16)

  //Osmium
  dissolver('forge:crushed/osmium', 100.0, 'chemlib:osmium', 16)
  dissolver('forge:ingots/osmium', 100.0, 'chemlib:osmium', 16)
  dissolver('forge:raw_materials/osmium', 100.0, 'chemlib:osmium', 16)
  dissolver('forge:plates/osmium', 100.0, 'chemlib:osmium', 16)
  dissolver('forge:dusts/osmium', 100.0, 'chemlib:osmium', 16)
  dissolver('forge:nuggets/osmium', 100.0, 'chemlib:osmium', 1)
  dissolverBlock('chemlib:osmium_metal_block', 100.0, 'chemlib:osmium', 64, 16)
  dissolverBlock('mekanism:block_raw_osmium', 100.0, 'chemlib:osmium', 64, 16)

  //Aluminum (Bauxite)
  dissolver('forge:gears/aluminum', 100.0, 'chemlib:aluminum', 64)
  dissolver('forge:crushed/aluminum', 100.0, 'chemlib:aluminum', 16)
  dissolver('forge:ingots/aluminum', 100.0, 'chemlib:aluminum', 16)
  dissolver('forge:raw_materials/aluminum', 100.0, 'chemlib:aluminum', 16)
  dissolver('forge:plates/aluminum', 100.0, 'chemlib:aluminum', 16)
  dissolver('forge:dusts/aluminum', 100.0, 'chemlib:aluminum', 16)
  dissolver('forge:rods/aluminum', 100.0, 'chemlib:aluminum', 8)
  dissolver('forge:nuggets/aluminum', 100.0, 'chemlib:aluminum', 1)
  dissolverBlock('immersiveengineering:raw_block_aluminum', 100.0, 'chemlib:aluminum', 64, 16)
  dissolverBlock('tinkers_reforged:raw_aluminum_block', 100.0, 'chemlib:aluminum', 64, 16)
  dissolverBlock('chemlib:aluminum_metal_block', 100.0, 'chemlib:aluminum', 64, 16)
  dissolverBlock('ftbic:aluminum_block', 100.0, 'chemlib:aluminum', 64, 16)
  dissolverBlock('tinkers_reforged:aluminum_block', 100.0, 'chemlib:aluminum', 64, 16)

  //Tin
  dissolver('forge:gears/tin', 100.0, 'chemlib:tin', 64)
  dissolver('forge:crushed/tin', 100.0, 'chemlib:tin', 16)
  dissolver('forge:ingots/tin', 100.0, 'chemlib:tin', 16)
  dissolver('forge:raw_materials/tin', 100.0, 'chemlib:tin', 16)
  dissolver('forge:plates/tin', 100.0, 'chemlib:tin', 16)
  dissolver('forge:dusts/tin', 100.0, 'chemlib:tin', 16)
  dissolver('forge:rods/tin', 100.0, 'chemlib:tin', 8)
  dissolver('forge:nuggets/tin', 100.0, 'chemlib:tin', 1)
  dissolver('forge:coins/tin', 100.0, 'chemlib:tin', 3)
  dissolverBlock('ftbic:tin_block', 100.0, 'chemlib:tin', 64, 16)
  dissolverBlock('mekanism:block_raw_tin', 100.0, 'chemlib:tin', 64, 16)
  dissolverBlock('mekanism:block_tin', 100.0, 'chemlib:tin', 64, 16)
  dissolverBlock('thermal:tin_block', 100.0, 'chemlib:tin', 64, 16)
  dissolverBlock('thermal:raw_tin_block', 100.0, 'chemlib:tin', 64, 16)

  //uranium
  dissolver('forge:gears/uranium', 100.0, 'chemlib:uranium', 64)
  dissolver('forge:crushed/uranium', 100.0, 'chemlib:uranium', 16)
  dissolver('forge:ingots/uranium', 100.0, 'chemlib:uranium', 16)
  dissolver('forge:raw_materials/uranium', 100.0, 'chemlib:uranium', 16)
  dissolver('forge:plates/uranium', 100.0, 'chemlib:uranium', 16)
  dissolver('forge:dusts/uranium', 100.0, 'chemlib:uranium', 16)
  dissolver('forge:rods/uranium', 100.0, 'chemlib:uranium', 8)
  dissolver('forge:nuggets/uranium', 100.0, 'chemlib:uranium', 1)
  dissolverBlock('chemlib:uranium_metal_block', 100.0, 'chemlib:uranium', 64, 16)
  dissolverBlock('mekanism:block_raw_uranium', 100.0, 'chemlib:uranium', 64, 16)
  dissolverBlock('immersiveengineering:storage_uranium', 100.0, 'chemlib:uranium', 64, 16)
  dissolverBlock('ftbic:uranium_block', 100.0, 'chemlib:uranium', 64, 16)
  dissolverBlock('immersiveengineering:raw_block_uranium', 100.0, 'chemlib:uranium', 64, 16)
  dissolverBlock('mekanism:block_uranium', 100.0, 'chemlib:uranium', 64, 16)

  //Iron
  dissolver('forge:coins/iron', 100.0, 'chemlib:iron', 3)
  dissolver('forge:wires/iron', 100.0, 'chemlib:iron', 16)
  dissolver('forge:crushed/iron', 100.0, 'chemlib:iron', 16)
  dissolver('forge:plates/iron', 100.0, 'chemlib:iron', 16)
  dissolver('forge:dusts/iron', 100.0, 'chemlib:iron', 16)
  dissolver('forge:gears/iron', 100.0, 'chemlib:iron', 64)
  dissolver('forge:rods/iron', 100.0, 'chemlib:iron', 8)

  //Zinc
  dissolver('forge:plates/zinc', 100.0, 'chemlib:zinc', 16)
  dissolver('forge:ingots/zinc', 100.0, 'chemlib:zinc', 16)
  dissolver('forge:raw_materials/zinc', 100.0, 'chemlib:zinc', 16)
  dissolver('forge:nuggets/zinc', 100.0, 'chemlib:zinc', 1)
  dissolverBlock('create:raw_zinc_block', 100.0, 'chemlib:zinc', 64, 16)
  dissolver('forge:crushed/zinc', 100.0, 'chemlib:zinc', 16)

  //Gold
  dissolver('forge:gears/gold', 100.0, 'chemlib:gold', 64)
  dissolver('forge:crushed/gold', 100.0, 'chemlib:gold', 16)
  dissolver('forge:wires/gold', 100.0, 'chemlib:gold', 16)
  dissolver('forge:plates/gold', 100.0, 'chemlib:gold', 16)
  dissolver('forge:dusts/gold', 100.0, 'chemlib:gold', 16)
  dissolver('forge:rods/gold', 100.0, 'chemlib:gold', 8)
  dissolver('forge:coins/gold', 100.0, 'chemlib:lead', 3)

  //Copper
  dissolver('forge:gears/copper', 100.0, 'chemlib:copper', 64)
  dissolver('forge:crushed/copper', 100.0, 'chemlib:copper', 16)
  dissolver('forge:wires/copper', 100.0, 'chemlib:copper', 16)
  dissolver('forge:plates/copper', 100.0, 'chemlib:copper', 16)
  dissolver('forge:dusts/copper', 100.0, 'chemlib:copper', 16)
  dissolver('forge:rods/copper', 100.0, 'chemlib:copper', 8)
  dissolver('forge:coins/copper', 100.0, 'chemlib:lead', 3)
  dissolver('forge:nuggets/copper', 100.0, 'chemlib:copper', 1)
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "item": "ftbic:dense_copper_plate" }, "count": 1 }, "output": { "rolls": 1, "weighted": false, "groups": [{ "probability": 100.0, "results": [{ "item": "chemlib:copper", "count": 64 }, { "item": "chemlib:copper", "count": 64 }] }] } })

  //Sulfur
  dissolver('forge:dusts/sulfur', 100.0, 'chemlib:sulfur', 1)

  //cobalt
  dissolver('forge:ingots/cobalt', 100.0, 'chemlib:cobalt', 16)
  dissolver('forge:raw_materials/cobalt', 100.0, 'chemlib:cobalt', 16)
  dissolver('forge:nuggets/cobalt', 100.0, 'chemlib:cobalt', 1)
  dissolverBlock('tconstruct:cobalt_block', 100.0, 'chemlib:cobalt', 64, 16)
  dissolverBlock('chemlib:cobalt_metal_block', 100.0, 'chemlib:cobalt', 64, 16)
  dissolverBlock('tconstruct:raw_cobalt_block', 100.0, 'chemlib:cobalt', 64, 16)

  //Constantan
  //ingot
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:ingots/constantan" }, "count": 1 }, "output": { "rolls": 16, "weighted": true, "groups": [{ "probability": 1.0, "results": [{ "item": "chemlib:nickel" }] }, { "probability": 1.0, "results": [{ "item": "chemlib:copper" }] }] } })
  //rod
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:rods/constantan" }, "count": 1 }, "output": { "rolls": 8, "weighted": true, "groups": [{ "probability": 1.0, "results": [{ "item": "chemlib:nickel" }] }, { "probability": 1.0, "results": [{ "item": "chemlib:copper" }] }] } })
  //gear
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:gears/constantan" }, "count": 1 }, "output": { "rolls": 16, "weighted": true, "groups": [{ "probability": 1.0, "results": [{ "item": "chemlib:nickel", "count": 4 }] }, { "probability": 1.0, "results": [{ "item": "chemlib:copper", "count": 4 }] }] } })
  //nugget
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:nuggets/constantan" }, "count": 1 }, "output": { "rolls": 1, "weighted": true, "groups": [{ "probability": 1.0, "results": [{ "item": "chemlib:nickel" }] }, { "probability": 1.0, "results": [{ "item": "chemlib:copper" }] }] } })
  //coin
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:coins/constantan" }, "count": 1 }, "output": { "rolls": 3, "weighted": true, "groups": [{ "probability": 1.0, "results": [{ "item": "chemlib:nickel" }] }, { "probability": 1.0, "results": [{ "item": "chemlib:copper" }] }] } })
  //plate
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:plates/constantan" }, "count": 1 }, "output": { "rolls": 16, "weighted": true, "groups": [{ "probability": 1.0, "results": [{ "item": "chemlib:nickel" }] }, { "probability": 1.0, "results": [{ "item": "chemlib:copper" }] }] } })
  //dusts
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:dusts/constantan" }, "count": 1 }, "output": { "rolls": 16, "weighted": true, "groups": [{ "probability": 1.0, "results": [{ "item": "chemlib:nickel" }] }, { "probability": 1.0, "results": [{ "item": "chemlib:copper" }] }] } })
  //block
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:storage_blocks/constantan" }, "count": 1 }, "output": { "rolls": 16, "weighted": true, "groups": [{ "probability": 1.0, "results": [{ "item": "chemlib:nickel", "count": 9 }] }, { "probability": 1.0, "results": [{ "item": "chemlib:copper", "count": 9 }] }] } })

  //Bronze
  //ingot
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:ingots/bronze" }, "count": 1 }, "output": { "rolls": 16, "weighted": false, "groups": [{ "probability": 75.0, "results": [{ "item": "chemlib:copper" }] }, { "probability": 25.0, "results": [{ "item": "chemlib:tin" }] }] } })
  //rod
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:rods/bronze" }, "count": 1 }, "output": { "rolls": 16, "weighted": false, "groups": [{ "probability": 75.0, "results": [{ "item": "chemlib:copper" }] }, { "probability": 25.0, "results": [{ "item": "chemlib:tin" }] }] } })
  //dust
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:dusts/bronze" }, "count": 1 }, "output": { "rolls": 16, "weighted": false, "groups": [{ "probability": 75.0, "results": [{ "item": "chemlib:copper" }] }, { "probability": 25.0, "results": [{ "item": "chemlib:tin" }] }] } })
  //coin
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:coins/bronze" }, "count": 1 }, "output": { "rolls": 3, "weighted": false, "groups": [{ "probability": 75.0, "results": [{ "item": "chemlib:copper" }] }, { "probability": 25.0, "results": [{ "item": "chemlib:tin" }] }] } })
  //nugget
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:nuggets/bronze" }, "count": 1 }, "output": { "rolls": 1, "weighted": false, "groups": [{ "probability": 75.0, "results": [{ "item": "chemlib:copper" }] }, { "probability": 25.0, "results": [{ "item": "chemlib:tin" }] }] } })
  //plate
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:plates/bronze" }, "count": 1 }, "output": { "rolls": 16, "weighted": false, "groups": [{ "probability": 75.0, "results": [{ "item": "chemlib:copper" }] }, { "probability": 25.0, "results": [{ "item": "chemlib:tin" }] }] } })
  //gear
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:gears/bronze" }, "count": 1 }, "output": { "rolls": 16, "weighted": false, "groups": [{ "probability": 75.0, "results": [{ "item": "chemlib:copper", "count": 4 }] }, { "probability": 25.0, "results": [{ "item": "chemlib:tin", "count": 4 }] }] } })
  //block
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:storage_blocks/bronze" }, "count": 1 }, "output": { "rolls": 16, "weighted": false, "groups": [{ "probability": 75.0, "results": [{ "item": "chemlib:copper", "count": 9 }] }, { "probability": 25.0, "results": [{ "item": "chemlib:tin", "count": 9 }] }] } })

  //Enderium
  //ingot
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:ingots/enderium" }, "count": 1 }, "output": { "rolls": 16, "weighted": true, "groups": [{ "probability": 6.0, "results": [{ "item": "chemlib:lead" }] }, { "probability": 2.0, "results": [{ "item": "chemlib:graphite" }] }, { "probability": 1.0, "results": [{ "item": "chemlib:mercury", "count": 2 }] }, { "probability": 1.0, "results": [{ "item": "chemlib:neodymium", "count": 2 }] }] } })
  //rod
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:rods/enderium" }, "count": 1 }, "output": { "rolls": 8, "weighted": true, "groups": [{ "probability": 6.0, "results": [{ "item": "chemlib:lead" }] }, { "probability": 2.0, "results": [{ "item": "chemlib:graphite" }] }, { "probability": 1.0, "results": [{ "item": "chemlib:mercury", "count": 2 }] }, { "probability": 1.0, "results": [{ "item": "chemlib:neodymium", "count": 2 }] }] } })
  //wire
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:wires/enderium" }, "count": 1 }, "output": { "rolls": 8, "weighted": true, "groups": [{ "probability": 6.0, "results": [{ "item": "chemlib:lead" }] }, { "probability": 2.0, "results": [{ "item": "chemlib:graphite" }] }, { "probability": 1.0, "results": [{ "item": "chemlib:mercury", "count": 2 }] }, { "probability": 1.0, "results": [{ "item": "chemlib:neodymium", "count": 2 }] }] } })
  //dust
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:dusts/enderium" }, "count": 1 }, "output": { "rolls": 16, "weighted": true, "groups": [{ "probability": 6.0, "results": [{ "item": "chemlib:lead" }] }, { "probability": 2.0, "results": [{ "item": "chemlib:graphite" }] }, { "probability": 1.0, "results": [{ "item": "chemlib:mercury", "count": 2 }] }, { "probability": 1.0, "results": [{ "item": "chemlib:neodymium", "count": 2 }] }] } })
  //nugget
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:nuggets/enderium" }, "count": 1 }, "output": { "rolls": 1, "weighted": true, "groups": [{ "probability": 6.0, "results": [{ "item": "chemlib:lead" }] }, { "probability": 2.0, "results": [{ "item": "chemlib:graphite" }] }, { "probability": 1.0, "results": [{ "item": "chemlib:mercury", "count": 2 }] }, { "probability": 1.0, "results": [{ "item": "chemlib:neodymium", "count": 2 }] }] } })
  //coin
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:coins/enderium" }, "count": 1 }, "output": { "rolls": 3, "weighted": true, "groups": [{ "probability": 6.0, "results": [{ "item": "chemlib:lead" }] }, { "probability": 2.0, "results": [{ "item": "chemlib:graphite" }] }, { "probability": 1.0, "results": [{ "item": "chemlib:mercury", "count": 2 }] }, { "probability": 1.0, "results": [{ "item": "chemlib:neodymium", "count": 2 }] }] } })
  //plate
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:plates/enderium" }, "count": 1 }, "output": { "rolls": 16, "weighted": true, "groups": [{ "probability": 6.0, "results": [{ "item": "chemlib:lead" }] }, { "probability": 2.0, "results": [{ "item": "chemlib:graphite" }] }, { "probability": 1.0, "results": [{ "item": "chemlib:mercury", "count": 2 }] }, { "probability": 1.0, "results": [{ "item": "chemlib:neodymium", "count": 2 }] }] } })
  //block
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:storage_blocks/enderium" }, "count": 1 }, "output": { "rolls": 16, "weighted": true, "groups": [{ "probability": 6.0, "results": [{ "item": "chemlib:lead", "count": 9 }] }, { "probability": 2.0, "results": [{ "item": "chemlib:graphite", "count": 9 }] }, { "probability": 1.0, "results": [{ "item": "chemlib:mercury", "count": 18 }] }, { "probability": 1.0, "results": [{ "item": "chemlib:neodymium", "count": 18 }] }] } })
  //gear
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:gears/enderium" }, "count": 1 }, "output": { "rolls": 16, "weighted": true, "groups": [{ "probability": 6.0, "results": [{ "item": "chemlib:lead", "count": 4 }] }, { "probability": 2.0, "results": [{ "item": "chemlib:graphite", "count": 4 }] }, { "probability": 1.0, "results": [{ "item": "chemlib:mercury", "count": 8 }] }, { "probability": 1.0, "results": [{ "item": "chemlib:neodymium", "count": 8 }] }] } })

  //Electrum
  //ingot
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:ingots/electrum" }, "count": 1 }, "output": { "rolls": 16, "weighted": true, "groups": [{ "probability": 1.0, "results": [{ "item": "chemlib:gold" }] }, { "probability": 1.0, "results": [{ "item": "chemlib:silver" }] }] } })
  //rod
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:rods/electrum" }, "count": 1 }, "output": { "rolls": 8, "weighted": true, "groups": [{ "probability": 1.0, "results": [{ "item": "chemlib:gold" }] }, { "probability": 1.0, "results": [{ "item": "chemlib:silver" }] }] } })
  //wire
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:wires/electrum" }, "count": 1 }, "output": { "rolls": 8, "weighted": true, "groups": [{ "probability": 1.0, "results": [{ "item": "chemlib:gold" }] }, { "probability": 1.0, "results": [{ "item": "chemlib:silver" }] }] } })
  //nugget
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:nuggets/electrum" }, "count": 1 }, "output": { "rolls": 1, "weighted": true, "groups": [{ "probability": 1.0, "results": [{ "item": "chemlib:gold" }] }, { "probability": 1.0, "results": [{ "item": "chemlib:silver" }] }] } })
  //coin
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:coins/electrum" }, "count": 1 }, "output": { "rolls": 3, "weighted": true, "groups": [{ "probability": 1.0, "results": [{ "item": "chemlib:gold" }] }, { "probability": 1.0, "results": [{ "item": "chemlib:silver" }] }] } })
  //plate
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:plates/electrum" }, "count": 1 }, "output": { "rolls": 16, "weighted": true, "groups": [{ "probability": 1.0, "results": [{ "item": "chemlib:gold" }] }, { "probability": 1.0, "results": [{ "item": "chemlib:silver" }] }] } })
  //block
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:storage_blocks/electrum" }, "count": 1 }, "output": { "rolls": 16, "weighted": true, "groups": [{ "probability": 1.0, "results": [{ "item": "chemlib:gold", "count": 9 }] }, { "probability": 1.0, "results": [{ "item": "chemlib:silver", "count": 9 }] }] } })
  //gear
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:gears/electrum" }, "count": 1 }, "output": { "rolls": 16, "weighted": true, "groups": [{ "probability": 1.0, "results": [{ "item": "chemlib:gold", "count": 4 }] }, { "probability": 1.0, "results": [{ "item": "chemlib:silver", "count": 4 }] }] } })
  //dust
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:dusts/electrum" }, "count": 1 }, "output": { "rolls": 16, "weighted": true, "groups": [{ "probability": 1.0, "results": [{ "item": "chemlib:gold" }] }, { "probability": 1.0, "results": [{ "item": "chemlib:silver" }] }] } })

  //Other
  dissolver('forge:pellets/plutonium', 100.0, 'chemlib:plutonium', 16)
  dissolver('forge:pellets/polonium', 100.0, 'chemlib:polonium', 16)
  dissolver('forge:workbenches', 100.0, 'chemlib:cellulose', 1)
  //Bitumen
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:bitumen" }, "count": 1 }, "output": { "rolls": 1, "weighted": true, "groups": [{ "probability": 5.0, "results": [{ "item": "chemlib:carbon", "count": 26 }] }, { "probability": 5.0, "results": [{ "item": "chemlib:oxygen" }] }, { "probability": 5.0, "results": [{ "item": "chemlib:hydrogen", "count": 32 }] }, { "probability": 1.0, "results": [{ "item": "chemlib:sulfur_dioxide" }] }, { "probability": 1.0, "results": [{ "item": "chemlib:vanadium" }] }, { "probability": 1.0, "results": [{ "item": "chemlib:nickel" }] }] } })
  //Bitumen Block
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:storage_blocks/bitumen" }, "count": 1 }, "output": { "rolls": 9, "weighted": true, "groups": [{ "probability": 5.0, "results": [{ "item": "chemlib:carbon", "count": 26 }] }, { "probability": 5.0, "results": [{ "item": "chemlib:oxygen" }] }, { "probability": 5.0, "results": [{ "item": "chemlib:hydrogen", "count": 32 }] }, { "probability": 1.0, "results": [{ "item": "chemlib:sulfur_dioxide" }] }, { "probability": 1.0, "results": [{ "item": "chemlib:vanadium" }] }, { "probability": 1.0, "results": [{ "item": "chemlib:nickel" }] }] } })
  //Nether Wart Block Quark
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "item": "quark:nether_wart_sack" }, "count": 1 }, "output": { "rolls": 1, "weighted": false, "groups": [{ "probability": 100.0, "results": [{ "item": "chemlib:chitin", "count": 9 }, { "item": "chemlib:germanium", "count": 36 }, { "item": "chemlib:selenium", "count": 36 }] }] } })
  //Slag
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:slag" }, "count": 1 }, "output": { "rolls": 1, "weighted": true, "groups": [{ "probability": 20.0, "results": [{ "item": "minecraft:air" }] }, { "probability": 20.0, "results": [{ "item": "chemlib:silicon_dioxide" }] }, { "probability": 3.0, "results": [{ "item": "chemlib:magnesium_oxide" }] }, { "probability": 3.0, "results": [{ "item": "chemlib:iron_oxide" }] }, { "probability": 2.0, "results": [{ "item": "chemlib:manganese_oxide" }] }, { "probability": 2.0, "results": [{ "item": "chemlib:aluminum_oxide" }] }, { "probability": 1.0, "results": [{ "item": "chemlib:phosphate" }] }] } })
  //Slag Block
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:storage_blocks/slag" }, "count": 1 }, "output": { "rolls": 4, "weighted": true, "groups": [{ "probability": 20.0, "results": [{ "item": "minecraft:air" }] }, { "probability": 20.0, "results": [{ "item": "chemlib:silicon_dioxide" }] }, { "probability": 3.0, "results": [{ "item": "chemlib:magnesium_oxide" }] }, { "probability": 3.0, "results": [{ "item": "chemlib:iron_oxide" }] }, { "probability": 2.0, "results": [{ "item": "chemlib:manganese_oxide" }] }, { "probability": 2.0, "results": [{ "item": "chemlib:aluminum_oxide" }] }, { "probability": 1.0, "results": [{ "item": "chemlib:phosphate" }] }] } })
  //Stick
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:rods/wooden" }, "count": 1 }, "output": { "rolls": 1, "weighted": false, "groups": [{ "probability": 10.0, "results": [{ "item": "chemlib:cellulose" }] }, { "probability": 90.0, "results": [{ "item": "minecraft:air" }] }] } })
  //Lithium Dust
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:dusts/lithium" }, "count": 1 }, "output": { "rolls": 1, "weighted": false, "groups": [{ "probability": 100.0, "results": [{ "item": "chemlib:lithium", "count": 16 }] }] } })
  //Charcoal Block
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:storage_blocks/charcoal" }, "count": 1 }, "output": { "rolls": 1, "weighted": false, "groups": [{ "probability": 100.0, "results": [{ "item": "chemlib:graphite", "count": 18 }] }] } })
  //Coalcoke
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:coal_coke" }, "count": 1 }, "output": { "rolls": 1, "weighted": false, "groups": [{ "probability": 100.0, "results": [{ "item": "chemlib:graphite", "count": 2 }] }] } })
  //Coalcoke Block
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:storage_blocks/coal_coke" }, "count": 1 }, "output": { "rolls": 1, "weighted": false, "groups": [{ "probability": 100.0, "results": [{ "item": "chemlib:graphite", "count": 18 }] }] } })
  //Cellulose Dust
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "item": "chemlib:cellulose_dust" }, "count": 1 }, "output": { "rolls": 1, "weighted": false, "groups": [{ "probability": 100.0, "results": [{ "item": "chemlib:cellulose", "count": 8 }] }] } })
  //Reprocessed Fissile
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "item": "mekanism:reprocessed_fissile_fragment" }, "count": 1 }, "output": { "rolls": 1, "weighted": false, "groups": [{ "probability": 100.0, "results": [{ "item": "chemlib:sodium_chloride", "count": 20 }, { "item": "chemlib:plutonium", "count": 4 }] }] } })
  //Salt
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "item": "mekanism:salt" }, "count": 1 }, "output": { "rolls": 1, "weighted": false, "groups": [{ "probability": 100.0, "results": [{ "item": "chemlib:sodium_chloride", "count": 4 }] }] } })
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "item": "croptopia:salt" }, "count": 1 }, "output": { "rolls": 1, "weighted": false, "groups": [{ "probability": 100.0, "results": [{ "item": "chemlib:sodium_chloride", "count": 4 }] }] } })
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "item": "mekanism:block_salt" }, "count": 1 }, "output": { "rolls": 1, "weighted": false, "groups": [{ "probability": 100.0, "results": [{ "item": "chemlib:sodium_chloride", "count": 16 }] }] } })
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "item": "croptopia:salt_ore" }, "count": 1 }, "output": { "rolls": 1, "weighted": false, "groups": [{ "probability": 100.0, "results": [{ "item": "chemlib:sodium_chloride", "count": 32 }] }] } })

  //Netherite
  //gear
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:gears/netherite" }, "count": 1 }, "output": { "rolls": 1, "weighted": false, "groups": [{ "probability": 100.0, "results": [{ "item": "chemlib:tungsten", "count": 64 }, { "item": "chemlib:carbon", "count": 64 }, { "item": "chemlib:gold", "count": 64 }, { "item": "chemlib:tungsten", "count": 64 }, { "item": "chemlib:carbon", "count": 64 }, { "item": "chemlib:gold", "count": 64 }, { "item": "chemlib:tungsten", "count": 64 }, { "item": "chemlib:carbon", "count": 64 }, { "item": "chemlib:gold", "count": 64 }] }] } })
  //dust
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:dusts/netherite" }, "count": 1 }, "output": { "rolls": 1, "weighted": false, "groups": [{ "probability": 100.0, "results": [{ "item": "chemlib:tungsten", "count": 64 }, { "item": "chemlib:carbon", "count": 64 }, { "item": "chemlib:gold", "count": 64 }] }] } })
  //plate
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:plates/netherite" }, "count": 1 }, "output": { "rolls": 1, "weighted": false, "groups": [{ "probability": 100.0, "results": [{ "item": "chemlib:tungsten", "count": 64 }, { "item": "chemlib:carbon", "count": 64 }, { "item": "chemlib:gold", "count": 64 }] }] } })
  //nugget
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:nuggets/netherite" }, "count": 1 }, "output": { "rolls": 1, "weighted": false, "groups": [{ "probability": 100.0, "results": [{ "item": "chemlib:tungsten", "count": 4 }, { "item": "chemlib:carbon", "count": 4 }, { "item": "chemlib:gold", "count": 4 }] }] } })
  //coin
  e.custom({ "type": "alchemistry:dissolver", "group": "alchemistry:dissolver", "input": { "ingredient": { "tag": "forge:coins/netherite" }, "count": 1 }, "output": { "rolls": 1, "weighted": false, "groups": [{ "probability": 100.0, "results": [{ "item": "chemlib:tungsten", "count": 12 }, { "item": "chemlib:carbon", "count": 12 }, { "item": "chemlib:gold", "count": 12 }] }] } })


})