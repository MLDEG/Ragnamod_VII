onEvent('recipes', e => {

  //Draconium Dust
  e.custom({
    "type": "alchemistry:compactor",
    "group": "alchemistry:compactor",
    "input": {
      "ingredient": {
        "item": "chemlib:draconium_compound"
      },
      "count": 4
    },
    "result": {
      "item": "draconicevolution:draconium_dust"
    }
  })

  //Plutonium Pellet
  e.custom({
    "type": "alchemistry:compactor",
    "group": "alchemistry:compactor",
    "input": {
      "ingredient": {
        "item": "chemlib:plutonium"
      },
      "count": 16
    },
    "result": {
      "item": "mekanism:pellet_plutonium"
    }
  })

  //Polonium Pellet
  e.custom({
    "type": "alchemistry:compactor",
    "group": "alchemistry:compactor",
    "input": {
      "ingredient": {
        "item": "chemlib:polonium"
      },
      "count": 16
    },
    "result": {
      "item": "mekanism:pellet_polonium"
    }
  })

})