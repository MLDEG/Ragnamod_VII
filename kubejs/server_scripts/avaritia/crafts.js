onEvent('recipes', e => {

    //Neutronium Food
    function neutronFood(output, input){
        e.custom({
            "type": "draconicevolution:fusion_crafting",
            "result": {"item": output},
            "catalyst": {"item": input},
            "total_energy": 1000000000,
            "tier": "CHAOTIC",
            "ingredients": [
                {"item": "avaritia:neutronium_ingot"},
                {"item": "avaritia:neutronium_ingot"},
                {"item": "avaritia:neutronium_ingot"},
                {"item": "avaritia:neutronium_ingot"},
                {"item": "avaritia:neutronium_ingot"},
                {"item": "avaritia:neutronium_ingot"},
                {"item": "avaritia:neutronium_ingot"},
                {"item": "avaritia:neutronium_ingot"},
                {"item": "avaritia:neutronium_ingot"},
                {"item": "avaritia:neutronium_ingot"},
                {"item": "avaritia:neutronium_ingot"},
                {"item": "avaritia:neutronium_ingot"}
            ]
          })}

          neutronFood('avaritia:neutron_burger', 'delightful:deluxe_cheeseburger')
          neutronFood('avaritia:neutron_doughnut', 'croptopia:doughnut')
          neutronFood('avaritia:neutron_sushi', 'farmersdelight:salmon_roll')
          neutronFood('avaritia:neutron_taco', 'croptopia:taco')
          neutronFood('avaritia:neutron_pecan_pie', 'croptopia:pecan_pie')
    
        //Nutritious Compound of Neutronium
        e.custom({
            "type": "powah:energizing",
            "ingredients": [
              {"item": "ftbic:empty_can"},
              {"item": "avaritia:neutron_burger"},
              {"item": "avaritia:neutron_pecan_pie"},
              {"item": "avaritia:neutron_taco"},
              {"item": "avaritia:neutron_doughnut"},
              {"item": "avaritia:neutron_sushi"}
            ],
            "energy": 10000000000,
            "result": {
              "item": "ragnamod_seven:neutronium_nutritious_compound",
              "count": 1
            }
          })

})