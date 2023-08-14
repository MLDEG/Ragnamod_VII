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
    e.create('ragnamod_seven:neutronium_nutritious_compound').displayName('Nutritious Compound of Neutronium').food(foodConsumer => {
      foodConsumer.hunger(20)
                  .saturation(20.0)
              .eaten(eatenEvent => {
                eatenEvent.player.tell("Holy Freak !");
                eatenEvent.getEntity().getPotionEffects().add("minecraft:speed",200,1,false,false)
                eatenEvent.getEntity().getPotionEffects().add("minecraft:slowness",200,1,false,false)
                eatenEvent.getEntity().getPotionEffects().add("minecraft:strength",200,41,false,false)
                eatenEvent.getEntity().getPotionEffects().add("minecraft:jump_boost",200,1,false,false)
                eatenEvent.getEntity().getPotionEffects().add("minecraft:regeneration",200,1,false,false)
                eatenEvent.getEntity().getPotionEffects().add("minecraft:fire_resistance",200,1,false,false)
                eatenEvent.getEntity().getPotionEffects().add("minecraft:water_breathing",200,1,false,false)
                eatenEvent.getEntity().getPotionEffects().add("minecraft:invisibility",200,1,false,false)
                eatenEvent.getEntity().getPotionEffects().add("minecraft:night_vision",200,1,false,false)
                eatenEvent.getEntity().getPotionEffects().add("minecraft:weakness",200,1,false,false)
                eatenEvent.getEntity().getPotionEffects().add("minecraft:poison",200,1,false,false)
                eatenEvent.getEntity().getPotionEffects().add("minecraft:wither",200,1,false,false)
                eatenEvent.getEntity().getPotionEffects().add("minecraft:haste",200,1,false,false)
                eatenEvent.getEntity().getPotionEffects().add("minecraft:mining_fatigue",200,1,false,false)
                eatenEvent.getEntity().getPotionEffects().add("minecraft:levitation",200,1,false,false)
                eatenEvent.getEntity().getPotionEffects().add("minecraft:glowing",200,1,false,false)
                eatenEvent.getEntity().getPotionEffects().add("minecraft:absorption",200,1,false,false)
                eatenEvent.getEntity().getPotionEffects().add("minecraft:hunger",200,1,false,false)
                eatenEvent.getEntity().getPotionEffects().add("minecraft:nausea",200,1,false,false)
                eatenEvent.getEntity().getPotionEffects().add("minecraft:resistance",200,1,false,false)
                eatenEvent.getEntity().getPotionEffects().add("minecraft:slow_falling",200,1,false,false)
                eatenEvent.getEntity().getPotionEffects().add("minecraft:conduit_power",200,1,false,false)
                eatenEvent.getEntity().getPotionEffects().add("minecraft:dolphins_grace",200,1,false,false)
                eatenEvent.getEntity().getPotionEffects().add("minecraft:blindness",200,1,false,false)
                eatenEvent.getEntity().getPotionEffects().add("minecraft:bad_omen",200,1,false,false)
                eatenEvent.getEntity().getPotionEffects().add("minecraft:hero_of_the_village",200,1,false,false)
              });
            });
})