onEvent('recipes', e => {

  //Condensed Blood
  e.custom({
    "type": "evilcraft:blood_infuser",
    "item": "minecraft:honeycomb",
    "fluid": {
      "fluid": "evilcraft:blood",
      "amount": 250
    },
    "result": {
      "item": "evilcraft:condensed_blood"
    },
    "duration": 2,
    "xp": 5,
    "tier": 0
  })

})