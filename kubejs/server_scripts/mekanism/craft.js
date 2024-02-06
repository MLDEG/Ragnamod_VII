onEvent('recipes', e => {

  //Steel Casing
  e.custom({
    "type": "mekanism:combining",
    "mainInput": { "amount": 1, "ingredient": { "item": "industrialforegoing:machine_frame_supreme" } },
    "extraInput": { "ingredient": { "item": "beyond_earth:steel_block" } },
    "output": { "item": "mekanism:steel_casing" }
  })

  //Chaos Dust
  e.custom({ "type": "mekanism:nucleosynthesizing", "itemInput": { "ingredient": { "item": "ragnamod_seven:unpredictable_dust" } }, "gasInput": { "amount": 1, "gas": "mekanism:antimatter" }, "output": { "item": "ragnamod_seven:chaos_dust" }, "duration": 1000 })

})