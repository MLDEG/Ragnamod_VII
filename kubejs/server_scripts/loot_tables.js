onEvent('entity.loot_tables', e => {

  //Ignis
  e.modifyEntity('cataclysm:ignis', table => {
    table.addPool(pool => {
      pool.addItem('ragnamod_seven:ignis_soul')
    })
  })
  //Netherite Monstrosity
  e.modifyEntity('cataclysm:netherite_monstrosity', table => {
    table.addPool(pool => {
      pool.addItem('ragnamod_seven:netherite_monstrosity_soul')
    })
  })
  //Ender Golem
  e.modifyEntity('cataclysm:ender_golem', table => {
    table.addPool(pool => {
      pool.addItem('ragnamod_seven:ender_golem_soul')
    })
  })
  //Ender Guardian
  e.modifyEntity('cataclysm:ender_guardian', table => {
    table.addPool(pool => {
      pool.addItem('ragnamod_seven:ender_guardian_soul')
    })
  })
  //Ignited Revenant
  e.modifyEntity('cataclysm:ignited_revenant', table => {
    table.addPool(pool => {
      pool.addItem('ragnamod_seven:revenant_soul')
    })
  })
  //Ghast Cow
  e.modifyEntity('ghastcow:ghast_cow', table => {
    table.addPool(pool => {
      pool.addItem('ragnamod_seven:ghast_cow_tear')
    })
  })

  //Red Heart
  var mobRH = ["minecraft:cow", "minecraft:pig", "minecraft:chicken", "minecraft:sheep", "minecraft:horse", "minecraft:donkey", "minecraft:mule", "minecraft:rabbit", "minecraft:squid", "minecraft:mooshroom", "minecraft:bat", "minecraft:parrot", "minecraft:ocelot", "minecraft:turtle", "minecraft:bee", "minecraft:cat", "minecraft:wolf", "minecraft:fox", "minecraft:strider", "minecraft:wandering_trader", "minecraft:cod", "minecraft:dolphine", "minecraft:llama", "minecraft:llama_trader", "minecraft:panda", "minecraft:polar_bear", "minecraft:pufferfish", "minecraft:salmon", "minecraft:tropical_fish", "minecraft:villager", "quark:crab", "quark:frog", "quark:stoneling", "quark:shiba", "quark:toretoise", "twilightforest:bighorn_sheep", "twilightforest:tiny_bird", "twilightforest:squirrel", "twilightforest:raven", "twilightforest:quest_ram", "twilightforest:penguin", "twilightforest:dwarf_rabbit", "twilightforest:deer", "twilightforest:boar"]
  function lootTableRH(mobRH) { e.modifyEntity(mobRH, table => { table.addPool(pool => { pool.addItem('bhc:red_heart', 1).randomChance(0.05) }) }) }
  mobRH.forEach(M => { lootTableRH(M) })

  //Yellow Heart
  var mobYH = [
    "cataclysm:ignis",
    "cataclysm:netherite_monstrosity",
    "cataclysm:ender_golem",
    "cataclysm:ender_guardian",
    "ghastcow:ghast_cow",
    "minecraft:wither",
    "botania:doppleganger",
    "botania:pink_wither"
  ]
  function lootTableYH(mobYH) { e.modifyEntity(mobYH, table => { table.addPool(pool => { pool.addItem('bhc:yellow_heart', 1) }) }) }
  mobYH.forEach(M => { lootTableYH(M) })

  //Blue Heart
  e.modifyEntity('mythicbotany:alf_pixie', table => {
    table.addPool(pool => {
      pool.addItem('bhc:blue_heart').randomChance(0.1)
    })
  })

})