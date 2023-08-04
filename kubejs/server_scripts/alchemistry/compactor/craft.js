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

})