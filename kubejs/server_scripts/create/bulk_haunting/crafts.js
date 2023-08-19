// priority: 1

onEvent('recipes', e => {

    //Petrified Log
    e.custom({
        "type": "create:haunting",
        "ingredients": [
          {
            "item": "minecraft:oak_log"
          }
        ],
        "results": [
          {
            "item": "darkerdepths:petrified_log"
          }
        ]
      })

})