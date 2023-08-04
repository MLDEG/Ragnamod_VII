onEvent('item.registry', e => {

    e.create('avaritia:neutron_burger').displayName('§bNeutron Burger').food(foodConsumer => {
        foodConsumer.hunger(20)
                    .saturation(20.0)
                    .eaten(eatenEvent => {
                      eatenEvent.getEntity().getPotionEffects().add("minecraft:levitation",200,1,false,false)
                    });
      });
    e.create('avaritia:neutron_doughnut').displayName('§bNeutron Doughnut').food(foodConsumer => {
        foodConsumer.hunger(20)
                    .saturation(20.0)
                    .eaten(eatenEvent => {
                      eatenEvent.getEntity().getPotionEffects().add("minecraft:levitation",200,1,false,false)
                    });
      });
    e.create('avaritia:neutron_taco').displayName('§bNeutron Taco').food(foodConsumer => {
        foodConsumer.hunger(20)
                    .saturation(20.0)
                    .eaten(eatenEvent => {
                      eatenEvent.getEntity().getPotionEffects().add("minecraft:levitation",200,1,false,false)
                    });
      });
    e.create('avaritia:neutron_sushi').displayName('§bNeutron Sushi').food(foodConsumer => {
        foodConsumer.hunger(20)
                    .saturation(20.0)
                    .eaten(eatenEvent => {
                      eatenEvent.getEntity().getPotionEffects().add("minecraft:levitation",200,1,false,false)
                    });
      });
    e.create('avaritia:neutron_pecan_pie').displayName('§bNeutron Pecan Pie').food(foodConsumer => {
        foodConsumer.hunger(20)
                    .saturation(20.0)
                    .eaten(eatenEvent => {
                      eatenEvent.getEntity().getPotionEffects().add("minecraft:levitation",200,1,false,false)
                    });
      });
})