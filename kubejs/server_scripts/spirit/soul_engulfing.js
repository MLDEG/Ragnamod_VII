  onEvent('recipes', e => {

    //Blacker Lotus
    e.custom({
        "type": "spirit:soul_engulfing",
        "input": {
          "ingredient": {
            "item": "botania:black_lotus"
          },
          "multiblock": {
            "pattern": [
              [
                "   ",
                " @ ",
                "   "
              ],
              [
                " S ",
                "S&S",
                " S "
              ]
            ],
            "keys": {
              "S": {
                "block": "botania:corporea_block"
              }
            }
          }
        },
        "duration": 40,
        "destroysStructure": false,
        "outputItem": "botania:blacker_lotus"
      })

})