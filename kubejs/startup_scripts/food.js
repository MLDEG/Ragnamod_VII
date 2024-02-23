onEvent('item.registry', e => {

  //Neutron Burger
  e.create('avaritia:neutron_burger').displayName('§bNeutron Burger').food(foodConsumer => {
    foodConsumer.hunger(20)
      .saturation(20.0)
      .eaten(eatenEvent => {
        eatenEvent.getEntity().getPotionEffects().add("minecraft:levitation", 200, 1, false, false)
      });
  });
  //Neutron Doughnut
  e.create('avaritia:neutron_doughnut').displayName('§bNeutron Doughnut').food(foodConsumer => {
    foodConsumer.hunger(20)
      .saturation(20.0)
      .eaten(eatenEvent => {
        eatenEvent.getEntity().getPotionEffects().add("minecraft:levitation", 200, 1, false, false)
      });
  });
  //Neutron Taco
  e.create('avaritia:neutron_taco').displayName('§bNeutron Taco').food(foodConsumer => {
    foodConsumer.hunger(20)
      .saturation(20.0)
      .eaten(eatenEvent => {
        eatenEvent.getEntity().getPotionEffects().add("minecraft:levitation", 200, 1, false, false)
      });
  });
  //Neutron Sushi
  e.create('avaritia:neutron_sushi').displayName('§bNeutron Sushi').food(foodConsumer => {
    foodConsumer.hunger(20)
      .saturation(20.0)
      .eaten(eatenEvent => {
        eatenEvent.getEntity().getPotionEffects().add("minecraft:levitation", 200, 1, false, false)
      });
  });
  //Neutron Pecan Pie
  e.create('avaritia:neutron_pecan_pie').displayName('§bNeutron Pecan Pie').food(foodConsumer => {
    foodConsumer.hunger(20)
      .saturation(20.0)
      .eaten(eatenEvent => {
        eatenEvent.getEntity().getPotionEffects().add("minecraft:levitation", 200, 1, false, false)
      });
  });
  //Neutronium Nutritious Compound
  e.create('ragnamod_seven:neutronium_nutritious_compound').displayName('Nutritious Compound of Neutronium').food(foodConsumer => {
    foodConsumer.hunger(20)
      .saturation(20.0)
      .eaten(eatenEvent => {
        eatenEvent.player.tell("Holy Freak !");
        eatenEvent.getEntity().getPotionEffects().add("minecraft:speed", 200, 1, false, false)
        eatenEvent.getEntity().getPotionEffects().add("minecraft:slowness", 200, 1, false, false)
        eatenEvent.getEntity().getPotionEffects().add("minecraft:strength", 200, 41, false, false)
        eatenEvent.getEntity().getPotionEffects().add("minecraft:jump_boost", 200, 1, false, false)
        eatenEvent.getEntity().getPotionEffects().add("minecraft:regeneration", 200, 1, false, false)
        eatenEvent.getEntity().getPotionEffects().add("minecraft:fire_resistance", 200, 1, false, false)
        eatenEvent.getEntity().getPotionEffects().add("minecraft:water_breathing", 200, 1, false, false)
        eatenEvent.getEntity().getPotionEffects().add("minecraft:invisibility", 200, 1, false, false)
        eatenEvent.getEntity().getPotionEffects().add("minecraft:night_vision", 200, 1, false, false)
        eatenEvent.getEntity().getPotionEffects().add("minecraft:weakness", 200, 1, false, false)
        eatenEvent.getEntity().getPotionEffects().add("minecraft:poison", 200, 1, false, false)
        eatenEvent.getEntity().getPotionEffects().add("minecraft:wither", 200, 1, false, false)
        eatenEvent.getEntity().getPotionEffects().add("minecraft:haste", 200, 1, false, false)
        eatenEvent.getEntity().getPotionEffects().add("minecraft:mining_fatigue", 200, 1, false, false)
        eatenEvent.getEntity().getPotionEffects().add("minecraft:levitation", 200, 1, false, false)
        eatenEvent.getEntity().getPotionEffects().add("minecraft:glowing", 200, 1, false, false)
        eatenEvent.getEntity().getPotionEffects().add("minecraft:absorption", 200, 1, false, false)
        eatenEvent.getEntity().getPotionEffects().add("minecraft:hunger", 200, 1, false, false)
        eatenEvent.getEntity().getPotionEffects().add("minecraft:nausea", 200, 1, false, false)
        eatenEvent.getEntity().getPotionEffects().add("minecraft:resistance", 200, 1, false, false)
        eatenEvent.getEntity().getPotionEffects().add("minecraft:slow_falling", 200, 1, false, false)
        eatenEvent.getEntity().getPotionEffects().add("minecraft:conduit_power", 200, 1, false, false)
        eatenEvent.getEntity().getPotionEffects().add("minecraft:dolphins_grace", 200, 1, false, false)
        eatenEvent.getEntity().getPotionEffects().add("minecraft:blindness", 200, 1, false, false)
        eatenEvent.getEntity().getPotionEffects().add("minecraft:bad_omen", 200, 1, false, false)
        eatenEvent.getEntity().getPotionEffects().add("minecraft:hero_of_the_village", 200, 1, false, false)
      });
  });
  /*******************HOLY DRINK*******************/
  function holy(range, product, name, effect, fruits) {
    e.create(product).displayName(range + " " + name)
    e.create(product + "_bottle")
      .displayName("Bottle of " + range + " " + fruits)
      .tooltip("§5HOLY " + range)
      .useAnimation("drink")
      .useDuration((itemstack) => 34)
      .use((level, player, hand) => true)
      .finishUsing((itemstack, level, entity) => {
        let effects = entity.potionEffects;
        effects.add(effect, 600 * 20)
        itemstack.itemStack.shrink(1)
        if (entity.player) {
          entity.minecraftPlayer.addItem(Item.of("minecraft:glass_bottle").itemStack)
        }
        return itemstack;
      })
  }
  /*******************Hydration*******************/
  holy('Hydration®', 'ragnamod_seven:hydration_white_peach', 'White Peach', 'minecraft:strength', 'White Peach')
  holy('Hydration®', 'ragnamod_seven:hydration_strawberry_kiwi', 'Strawberry x Kiwi', 'minecraft:strength', 'Strawberry x Kiwi')
  holy('Hydration®', 'ragnamod_seven:hydration_pink_grapefruit', 'Pink Grapefruit', 'minecraft:strength', 'Pink Grapefruit')
  holy('Hydration®', 'ragnamod_seven:hydration_cranberry', 'Cranberry', 'minecraft:strength', 'Cranberry')
  holy('Hydration®', 'ragnamod_seven:hydration_pear', 'Pear', 'minecraft:strength', 'Pear')
  /*******************Iced Tea*******************/
  holy('Iced Tea®', 'ragnamod_seven:iced_tea_acai_hibiscus_tea', 'Acai x Hibiscus Tea', 'minecraft:regeneration', 'Acai x Hibiscus Tea')
  holy('Iced Tea®', 'ragnamod_seven:iced_tea_apple_green_tea', 'Apple x Green Tea', 'minecraft:regeneration', 'Apple x Green Tea')
  holy('Iced Tea®', 'ragnamod_seven:iced_tea_blackberry_black_tea', 'Blackberry x Black Tea', 'minecraft:regeneration', 'Blackberry x Black Tea')
  holy('Iced Tea®', 'ragnamod_seven:iced_tea_lime_matcha_mint_green_tea', 'Lime x Matcha x Mint x Green Tea', 'minecraft:regeneration', 'Lime x Matcha x Mint x Green Tea')
  holy('Iced Tea®', 'ragnamod_seven:iced_tea_mango_passion_fruit', 'Mango x Passion Fruit', 'minecraft:regeneration', 'Mango x Passion Fruit')
  holy('Iced Tea®', 'ragnamod_seven:iced_tea_peach_black_tea', 'Peach x Black Tea', 'minecraft:regeneration', 'Peach x Black Tea')
  holy('Iced Tea®', 'ragnamod_seven:iced_tea_raspberry_vanilla', 'Raspberry x Vanilla', 'minecraft:regeneration', 'Raspberry x Vanilla')
  holy('Iced Tea®', 'ragnamod_seven:iced_tea_red_grapes_hibiscus', 'Red Grapes x Hibiscus', 'minecraft:regeneration', 'Red Grapes x Hibiscus')
  /*******************Energy*******************/
  holy('Energy®', 'ragnamod_seven:energy_apple_alligator', 'Apple Alligator', 'minecraft:speed', 'Acidic apple')
  holy('Energy®', 'ragnamod_seven:energy_blueberry_bear', 'Blueberry Bear', 'minecraft:speed', 'Blueberry x Coconut')
  holy('Energy®', 'ragnamod_seven:energy_cactus_camel', 'Cactus Camel', 'minecraft:speed', 'Prickly Pear')
  holy('Energy®', 'ragnamod_seven:energy_cherry_cheetah', 'Cheery Cheetah', 'minecraft:speed', 'Cherry')
  holy('Energy®', 'ragnamod_seven:energy_citrus_cobra', 'Citrus Cobra', 'minecraft:speed', 'Citrus x Calamansi')
  holy('Energy®', 'ragnamod_seven:energy_fruity_frog', 'Fruity Frog', 'minecraft:speed', 'Mango x Maracuja x Pineapple')
  holy('Energy®', 'ragnamod_seven:energy_gorrillas_grape', 'Gorrilla\'s Grape', 'minecraft:speed', 'Green Grape')
  holy('Energy®', 'ragnamod_seven:energy_lemon_lizard', 'Lemon Lizard', 'minecraft:speed', 'Lemon x Cucumber')
  holy('Energy®', 'ragnamod_seven:energy_lions_lemonade', 'Lion\'s Lemonade', 'minecraft:speed', 'Mango x Kiwi')
  holy('Energy®', 'ragnamod_seven:energy_peach_panther', 'Peach Panther', 'minecraft:speed', 'Peach x Apricot')
  holy('Energy®', 'ragnamod_seven:energy_peacock_punch', 'Peacock Punch', 'minecraft:speed', 'Orange x Lemon x Coconut')
  holy('Energy®', 'ragnamod_seven:energy_pomegranate_piranha', 'Pomegranate Piranha', 'minecraft:speed', 'Pomegranate')
  holy('Energy®', 'ragnamod_seven:energy_raspberry_raptor', 'Raspberry Raptor', 'minecraft:speed', 'Raspberry x Yuzu')
  holy('Energy®', 'ragnamod_seven:energy_strawberry_shark', 'Strawberry Shark', 'minecraft:speed', 'Strawberry x Mandarin')
  holy('Energy®', 'ragnamod_seven:energy_tropical_tiger', 'Tropical Tiger', 'minecraft:speed', 'Maracuja x Pineapple')
  holy('Energy®', 'ragnamod_seven:energy_thai_lime_toucan', 'Thai Lime Toucan', 'minecraft:speed', 'Thai Lime')
  holy('Energy®', 'ragnamod_seven:energy_watermelon_whale', 'Watermelon Whale', 'minecraft:speed', 'Whatermelon')

})
