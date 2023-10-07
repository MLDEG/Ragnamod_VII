onEvent('item.registry', event => {
    
  //Conquest Armor
    event.create('ragnamod_seven:conquest_helmet', 'helmet').displayName('Conquest Helmet').tier('conquest').maxDamage(10000)
    event.create('ragnamod_seven:conquest_chestplate', 'chestplate').displayName('Conquest Chestplate').tier('conquest').maxDamage(10000)
    event.create('ragnamod_seven:conquest_leggings', 'leggings').displayName('Conquest Leggings').tier('conquest').maxDamage(10000)
    event.create('ragnamod_seven:conquest_boots', 'boots').displayName('Conquest Boots').tier('conquest').maxDamage(10000)
    
  //War Armor
    event.create('ragnamod_seven:war_helmet', 'helmet').displayName('War Helmet').tier('war').maxDamage(10000)
    event.create('ragnamod_seven:war_chestplate', 'chestplate').displayName('War Chestplate').tier('war').maxDamage(10000)
    event.create('ragnamod_seven:war_leggings', 'leggings').displayName('War Leggings').tier('war').maxDamage(10000)
    event.create('ragnamod_seven:war_boots', 'boots').displayName('War Boots').tier('war').maxDamage(10000)
    
  //Famine Armor
    event.create('ragnamod_seven:famine_helmet', 'helmet').displayName('Famine Helmet').tier('famine').maxDamage(10000)
    event.create('ragnamod_seven:famine_chestplate', 'chestplate').displayName('Famine Chestplate').tier('famine').maxDamage(10000)
    event.create('ragnamod_seven:famine_leggings', 'leggings').displayName('Famine Leggings').tier('famine').maxDamage(10000)
    event.create('ragnamod_seven:famine_boots', 'boots').displayName('Famine Boots').tier('famine').maxDamage(10000)
    
  //Death Armor
    event.create('ragnamod_seven:death_helmet', 'helmet').displayName('Death Helmet').tier('death').maxDamage(10000)
    event.create('ragnamod_seven:death_chestplate', 'chestplate').displayName('Death Chestplate').tier('death').maxDamage(10000)
    event.create('ragnamod_seven:death_leggings', 'leggings').displayName('Death Leggings').tier('death').maxDamage(10000)
    event.create('ragnamod_seven:death_boots', 'boots').displayName('Death Boots').tier('death').maxDamage(10000)

  })

  onEvent('item.registry.armor_tiers', event => {
    event.add('conquest', tier => {
      tier.durabilityMultiplier = 15
      tier.slotProtections = [5, 10, 8, 4]
      tier.enchantmentValue = 20
      tier.equipSound = 'minecraft:item.armor.equip_netherite'
      tier.repairIngredient = 'minecraft:iron'
      tier.toughness = 20.0
      tier.knockbackResistance = 1.5
    })
    event.add('war', tier => {
      tier.durabilityMultiplier = 15
      tier.slotProtections = [5, 10, 8, 4]
      tier.enchantmentValue = 20
      tier.equipSound = 'minecraft:item.armor.equip_netherite'
      tier.repairIngredient = 'minecraft:iron'
      tier.toughness = 20.0
      tier.knockbackResistance = 1.5
    })
    event.add('famine', tier => {
      tier.durabilityMultiplier = 15
      tier.slotProtections = [5, 10, 8, 4]
      tier.enchantmentValue = 20
      tier.equipSound = 'minecraft:item.armor.equip_netherite'
      tier.repairIngredient = 'minecraft:iron'
      tier.toughness = 20.0
      tier.knockbackResistance = 1.5
    })
    event.add('death', tier => {
      tier.durabilityMultiplier = 15
      tier.slotProtections = [5, 10, 8, 4]
      tier.enchantmentValue = 20
      tier.equipSound = 'minecraft:item.armor.equip_netherite'
      tier.repairIngredient = 'minecraft:iron'
      tier.toughness = 20.0
      tier.knockbackResistance = 1.5
    })
  })