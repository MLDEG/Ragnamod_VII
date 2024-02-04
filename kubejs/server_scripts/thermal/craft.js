onEvent('recipes', e => {

  //Machine Frame
  e.custom({
    "type": "thermal:smelter",
    "input": [
      { "item": "immersiveengineering:sheetmetal_iron" },
      { "item": "immersiveengineering:sheetmetal_steel" },
      { "item": "industrialforegoing:machine_frame_simple" }
    ],
    "result": [{ "item": "thermal:machine_frame", "count": 1 }],
    "energy": 3200
  }
  )

})