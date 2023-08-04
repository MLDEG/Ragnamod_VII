onEvent('recipes', e => {

    //Tiny Machine Frame
    e.custom({
        "type": "pneumaticcraft:assembly_laser",
        "input": {
          "item": "rftoolsbase:machine_frame"
        },
        "result": {
          "item": "industrialforegoing:machine_frame_pity"
        },
        "program": "laser"
      })

})