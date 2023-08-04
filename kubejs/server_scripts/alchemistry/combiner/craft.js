onEvent('recipes', e => {

    //Draconium Compound
    e.custom({
        "type": "alchemistry:combiner",
        "group": "alchemistry:combiner",
        "input": [
          {
            "ingredient": {
              "item": "chemlib:radon"
            },
            "count": 24
          },
          {
            "ingredient": {
              "item": "chemlib:xenon"
            },
            "count": 8
          },
          {
            "ingredient": {
              "item": "chemlib:oganesson"
            },
            "count": 16
          },
          {
            "ingredient": {
              "item": "chemlib:lutetium"
            },
            "count": 32
          }
        ],
        "result": {
          "item": "chemlib:draconium_compound"
        }
      })

})