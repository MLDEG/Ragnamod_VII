onEvent('recipes', e => {

  //Will Factory
  e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"ragnamod_7:will_factory"}'), ['ABA','BCD', 'ABA'], {A: 'ftbic:iridium_circuit', B: 'bloodmagic:ritualstone', C: 'xnet:controller', D: 'rftoolsutility:screen'})
  //Extreme Crafting Table
  e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"ragnamod_7:extreme_table"}'), ['AAA','ABA','AAA'], {A: 'avaritia:crystal_matrix_ingot', B: 'avaritia:compressed_crafting_table'})

    //Will Crystals
    e.custom({
      "type": "custommachinery:custom_machine",
      "machine": "ragnamod_7:will_factory",
      "time": 20,
      "requirements": [
        {
            "type": "custommachinery:item",
            "mode": "input",
            "item": "bloodmagic:reagentbinding",
            "amount": 1
        },
        {
            "type": "custommachinery:fluid",
            "mode": "input",
            "fluid": "bloodmagic:life_essence_fluid",
            "amount": 1000,
        },
        {
          "type": "custommachinery:energy",
          "mode": "input",
          "amount": 10000
      },
      {
        "type": "custommachinery:item",
        "mode": "output",
        "item": "bloodmagic:defaultcrystal",
        "amount": 4
      },
      {
        "type": "custommachinery:item",
        "mode": "output",
        "item": "bloodmagic:corrosivecrystal",
        "amount": 4
      },
      {
        "type": "custommachinery:item",
        "mode": "output",
        "item": "bloodmagic:vengefulcrystal",
        "amount": 4
      },
      {
        "type": "custommachinery:item",
        "mode": "output",
        "item": "bloodmagic:destructivecrystal",
        "amount": 4
      },
      {
        "type": "custommachinery:item",
        "mode": "output",
        "item": "bloodmagic:steadfastcrystal",
        "amount": 4
      },
      {
        "type": "custommachinery:structure",
        "pattern": [
            [
                " A A ",
                "A   A",
                "     ",
                "A   A",
                " A A "
            ],
            [
                "  B  ",
                " BWB ",
                "BEBIB",
                " BFB ",
                "  m  "
            ],
            [
                "     ",
                "  1  ",
                " 234 ",
                "  5  ",
                "     "
            ]
        ],
        "keys": {
            "A": "bloodmagic:duskritualstone",
            "B": "bloodmagic:ritualstone",
            "W": "bloodmagic:waterritualstone",
            "I": "bloodmagic:airritualstone",
            "E": "bloodmagic:earthritualstone",
            "F": "bloodmagic:fireritualstone",
            "1": "bloodmagic:steadfastdemoncrystal[age=6]",
            "2": "bloodmagic:corrosivedemoncrystal[age=6]",
            "3": "bloodmagic:rawdemoncrystal[age=6]",
            "4": "bloodmagic:destructivedemoncrystal[age=6]",
            "5": "bloodmagic:vengefuldemoncrystal[age=6]"
        }
    }
    ]
  })

})