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

})