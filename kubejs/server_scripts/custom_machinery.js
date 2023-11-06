onEvent('recipes', e => {

  //Will Factory
  e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"ragnamod_7:will_factory"}'), ['ABA', 'BCD', 'ABA'], { A: 'ftbic:iridium_circuit', B: 'bloodmagic:ritualstone', C: 'xnet:controller', D: 'rftoolsutility:screen' })
  //Extreme Crafting Table
  e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"ragnamod_7:extreme_table"}'), ['AAA', 'ABA', 'AAA'], { A: 'avaritia:crystal_matrix_ingot', B: 'avaritia:compressed_crafting_table' })

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

  //Focus Entangled

  function focusEntangled(inputbox, outputblock) {
    e.custom({
      "type": "custommachinery:custom_machine",
      "machine": "ragnamod_7:focus_entangled",
      "time": 20,
      "requirements": [
        {
          "type": "custommachinery:item",
          "mode": "input",
          "slot": "input_focus_entangled1",
          "item": "ragnamod_seven:unknown_ingot_block",
          "amount": 1
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "slot": "input_focus_entangled2",
          "item": "ragnamod_seven:unknown_ingot_block",
          "amount": 1
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "slot": "input_focus_entangled3",
          "item": "ragnamod_seven:unknown_ingot_block",
          "amount": 1
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "slot": "input_focus_entangled4",
          "item": "ragnamod_seven:unknown_ingot_block",
          "amount": 1
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "slot": "input_focus_entangled_focus",
          "item": "ars_nouveau:summon_focus",
          "amount": 1
        },
        {
          "type": "custommachinery:item",
          "mode": "input",
          "slot": "input_focus_entangled_box",
          "item": "evilcraft:box_of_eternal_closure",
          "nbt": "{spiritTag:{innerEntity:\"" + inputbox + "\"}}",
          "amount": 1
        },
        {
          "type": "custommachinery:energy",
          "mode": "input",
          "amount": 1000000
        },
        {
          "type": "custommachinery:item",
          "mode": "output",
          "slot": "output_focus_entangled",
          "item": outputblock,
          "amount": 4
        },
        {
          "type": "custommachinery:item",
          "mode": "output",
          "slot": "output_focus_entangled_box",
          "item": "evilcraft:box_of_eternal_closure",
          "amount": 1
        },
        {
          "type": "custommachinery:structure",
          "pattern": [
            [
              "     ",
              "     ",
              "  A  ",
              "   C ",
              "     "
            ],
            [
              "     ",
              "  A  ",
              " ABAC",
              "  AC ",
              "  C  "
            ],
            [
              "     ",
              "  AC ",
              " ABA ",
              " Cm  ",
              "     "
            ],
            [
              "  C  ",
              " CA  ",
              "CABA ",
              "  A  ",
              "     "
            ],
            [
              "     ",
              " C   ",
              "  A  ",
              "     ",
              "     "
            ]
          ],
          "keys": {
            "A": "gemsnjewels:kunzite_block",
            "B": "ars_nouveau:source_gem_block",
            "C": "forbidden_arcanus:arcane_golden_glass"
          }
        }
      ]
    })
  }

  focusEntangled("warden_and_sculk:warden", "ragnamod_seven:sculk_metal")
  focusEntangled("occultism:shub_niggurath_familiar", "ragnamod_seven:shub_niggurath_ingot_block")



})