//Tooltips
onEvent('item.tooltip', tooltip => {
	function chemLib(name, text1, text2) {
		tooltip.addAdvanced(['#forge:ingots/' + name, '#forge:nuggets/' + name, '#forge:dusts/' + name, '#forge:plates/' + name, '#forge:storage_blocks/' + name], (item, advanced, text) => {
			text.add(1, Text.of('§3' + text1))
			text.add(2, Text.of('§7' + text2))
		})
	}
	chemLib('silver', 'Ag (47)', 'Transition Metals')
	chemLib('iridium', 'Ir (77)', 'Transition Metals')
	chemLib('nickel', 'Ni (28)', 'Transition Metals')
	chemLib('osmium', 'Os (76)', 'Transition Metals')
	chemLib('aluminum', 'Al (13)', 'Post-Transition Metals')
	chemLib('lead', 'Pb (82)', 'Post-Transition Metals')
	chemLib('tin', 'Sn (50)', 'Post-Transition Metals')
	chemLib('uranium', 'U (92)', 'Actinides')
	chemLib('iron', 'Fe (26)', 'Transition Metals')
	chemLib('gold', 'Au (79)', 'Transition Metals')
	chemLib('copper', 'Cu (29)', 'Transition Metals')
	chemLib('sulfur', 'S (16)', 'Reactive Non-Metals')
	//Tooltips Chicken
	tooltip.addAdvanced('chickens:chicken_item', (item, advanced, text) => {
		if (!item.nbt?.ChickenType?.id.match(/chickens:(red|orange|yellow|lime|green|blue|light_blue|cyan|pink|magenta|purple|brown|black|white|light_gray|gray)_chicken/)) {
			text.add(1, Text.of('§3Made in the "Spirit" Soul Pedestal'))
		}
	})
	//Unbreakable
	tooltip.addAdvanced(Ingredient.all, (item, advanced, text) => {
		if (item.nbt?.Modifier == 'forbidden_arcanus:eternal')
			text.add(Component.translate('item.unbreakable').blue())
	})
	//Draco Compound
	tooltip.addAdvanced('chemlib:draconium_compound', (item, advanced, text) => {
		text.add(1, Text.of('§3Rn₂₄Xe₈Og₁₆Lu₃₂'))
	})
	//Lithium
	tooltip.addAdvanced('mekanism:dust_lithium', (item, advanced, text) => {
		text.add(1, Text.of('§3Li (3)'))
		text.add(2, Text.of('§7Alkali Metals'))
	})
	//Zinc
	tooltip.addAdvanced(['create:zinc_ingot', 'create:zinc_nugget', 'createaddition:zinc_sheet'], (item, advanced, text) => {
		text.add(1, Text.of('§3Zn (30)'))
		text.add(2, Text.of('§7Transition Metals'))
	})
	//Cobalt
	tooltip.addAdvanced(['tconstruct:cobalt_block', 'tconstruct:cobalt_ingot', 'tconstruct:cobalt_nugget'], (item, advanced, text) => {
		text.add(1, Text.of('§3Co (27)'))
		text.add(2, Text.of('§7Transition Metals'))
	})
	//Soul Pedestal Fake
	tooltip.addAdvanced('custommachinery:custom_machine_item', (item, advanced, text) => {
		if (item.nbt?.machine.match("ragnamod_7:soul_pedestal")) {
			text.add(1, Text.of('§cUse the Soul Pedestal from Spirit.'))
		}
	})
	//Excavator Fake
	tooltip.addAdvanced('custommachinery:custom_machine_item', (item, advanced, text) => {
		if (item.nbt?.machine.match("ragnamod_7:excavator")) {
			text.add(1, Text.of('§cUse the Excavator from Immersive Engineering.'))
		}
	})
	//Gems and Jewels
	tooltip.addAdvanced(['gemsnjewels:peridot_ore_block', 'gemsnjewels:topaz_ore_block', 'gemsnjewels:garnet_ore_block', 'gemsnjewels:opal_ore_block', 'gemsnjewels:amethyst_ore_block', 'gemsnjewels:sapphire_ore_block', 'gemsnjewels:ruby_ore_block', 'gemsnjewels:emerald_ore_block', 'gemsnjewels:pale_diamond_ore_block', 'gemsnjewels:bright_opal_ore_block', 'gemsnjewels:iolite_ore_block', 'gemsnjewels:kunzite_ore_block', 'gemsnjewels:ametrine_ore_block', 'gemsnjewels:morganite_ore_block', 'gemsnjewels:citrine_ore_block', 'gemsnjewels:black_opal_ore_block', 'gemsnjewels:spinel_ore_block', 'gemsnjewels:tourmaline_ore_block', 'gemsnjewels:tanzanite_ore_block', 'gemsnjewels:alexandrite_ore_block', 'gemsnjewels:zircon_ore_block', 'gemsnjewels:aquamarine_ore_block'], (item, advanced, text) => {
		text.add(1, Text.of('§5§oGet it in Occultism Miners'))
	})
	//Dimensional Shard Ore
	tooltip.addAdvanced(['rftoolsbase:dimensionalshard_overworld', 'rftoolsbase:dimensionalshard_nether', 'rftoolsbase:dimensionalshard_end'], (item, advanced, text) => {
		text.add(1, Text.of('§5§oDoesn\'t spawn in world'))
	})
	//Horsmen Essence
	tooltip.addAdvanced('ragnamod_seven:conquest_essence', (item, advanced, text) => {
		text.add(1, Text.of('§5§oDrop when killing Conquest'))
	})
	tooltip.addAdvanced('ragnamod_seven:death_essence', (item, advanced, text) => {
		text.add(1, Text.of('§5§oDrop when killing Death'))
	})
	tooltip.addAdvanced('ragnamod_seven:famine_essence', (item, advanced, text) => {
		text.add(1, Text.of('§5§oDrop when killing Famine'))
	})
	tooltip.addAdvanced('ragnamod_seven:war_essence', (item, advanced, text) => {
		text.add(1, Text.of('§5§oDrop when killing War'))
	})
	//Echo Shard
	tooltip.addAdvanced('warden_and_sculk:echo_shard', (item, advanced, text) => {
		text.add(1, Text.of('§5§oLoot in chests from Ancient City'))
	})
	//Dawn Tool
	tooltip.addAdvanced('bloodmagic:dawnscribetool', (item, advanced, text) => {
		text.add(1, Text.of('§7The writing is on the wall...'))
	})
})