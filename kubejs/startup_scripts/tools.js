onEvent('item.registry', event => {

    event.create('ragnamod_seven:war_weapon', 'sword').displayName('War Battle Axe').tier('horsmen').maxDamage(10000).attackDamageBaseline(42.0)
    .speedBaseline(10.0)

    event.create('ragnamod_seven:death_weapon', 'sword').displayName('Death Scythe').tier('horsmen').maxDamage(10000).attackDamageBaseline(42.0)
    .speedBaseline(10.0)

    event.create('ragnamod_seven:famine_weapon', 'sword').displayName('Famine Sword').tier('horsmen').maxDamage(10000).attackDamageBaseline(42.0)
    .speedBaseline(10.0)
    
  })

  onEvent('item.registry.tool_tiers', event => {
    event.add('horsmen', tier => {
      tier.uses = 250
      tier.speed = 42.0
      tier.attackDamageBonus = 50.0
      tier.level = 5
      tier.enchantmentValue = 20
      tier.repairIngredient = 'kubejs:horsmen_ingot'
    })
  })