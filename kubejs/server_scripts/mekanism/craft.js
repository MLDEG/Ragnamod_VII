onEvent('recipes', e => {

  //Steel Casing
  e.custom({
    "type": "mekanism:combining",
    "mainInput": { "amount": 1, "ingredient": { "item": "industrialforegoing:machine_frame_supreme" } },
    "extraInput": { "ingredient": { "item": "beyond_earth:steel_block" } },
    "output": { "item": "mekanism:steel_casing" }
  })

})