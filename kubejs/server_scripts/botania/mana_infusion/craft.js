onEvent('recipes', e => {

  //fishes
  function manaInfusion(input, output, mana, group) { e.custom({ "type": "botania:mana_infusion", "input": { "item": input }, "output": { "item": output }, "mana": mana, "group": group, "catalyst": { "type": "block", "block": "botania:alchemy_catalyst" } }) }

  manaInfusion('minecraft:pufferfish', 'blue_skies:grittle_flatfish', 200, 'botania:fish_cycle')
  manaInfusion('blue_skies:grittle_flatfish', 'blue_skies:municipal_monkfish', 200, 'botania:fish_cycle')
  manaInfusion('blue_skies:municipal_monkfish', 'blue_skies:charscale_moki', 200, 'botania:fish_cycle')
  manaInfusion('blue_skies:charscale_moki', 'blue_skies:horizofin_tunid', 200, 'botania:fish_cycle')
  manaInfusion('blue_skies:horizofin_tunid', 'croptopia:anchovy', 200, 'botania:fish_cycle')
  manaInfusion('croptopia:anchovy', 'croptopia:tuna', 200, 'botania:fish_cycle')
  manaInfusion('croptopia:tuna', 'undergarden:raw_gwibling', 200, 'botania:fish_cycle')
  manaInfusion('undergarden:raw_gwibling', 'minecraft:cod', 200, 'botania:fish_cycle')

})