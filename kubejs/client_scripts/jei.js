onEvent('jei.hide.items', e => {
	e.hide([
		/botanypots(tiers:(elite|ultra|creative)_|:).+_(terracotta|concrete)(_hopper)?_botany_pot/,
		/chickens:liquid_egg/,
		/chickens:spawn_egg/,
		/tconstruct:part_builder/,
		/tconstruct:tinker_station/,
		/tconstruct:crafting_station/,
		/tconstruct:pickaxe/,
		/tconstruct:sledge_hammer/,
		/tconstruct:vein_hammer/,
		/tconstruct:mattock/,
		/tconstruct:pickadze/,
		/tconstruct:excavator/,
		/tconstruct:hand_axe/,
		/tconstruct:broad_axe/,
		/tconstruct:kama/,
		/tinkers_reforged:greatsword/,
		/tinkers_reforged:frying_pan/,
		/tconstruct:cleaver/,
		/tconstruct:sword/,
		/tconstruct:scythe/,
		/tconstruct:dagger/,
		/tinkers_reforged:cast/,
		/tconstruct:longbow/,
		/tconstruct:crossbow/,
		/materialis:wrench/,
		/tinker_rapier:rapier_tic/,
		/tinker_rapier:estoc_tic/,
		/ftbic:fluid_cell/,
		/evilcraft:dark_tank/,
		/ae2:facade/,
		/titanium:/,
		/trofers:/,
		Item.of('mekanism:creative_fluid_tank', '{mekData:{FluidTanks:[{Tank:0b,stored:{Amount:2147483647,FluidName:"tconstruct:honey"}}]}}'),
		Item.of('mekanism:creative_fluid_tank', '{mekData:{FluidTanks:[{Tank:0b,stored:{Amount:2147483647,FluidName:"cofh_core:honey"}}]}}'),
		Item.of('mekanism:creative_fluid_tank', '{mekData:{FluidTanks:[{Tank:0b,stored:{Amount:2147483647,FluidName:"beyond_earth:oil"}}]}}'),
		Item.of('mekanism:creative_fluid_tank', '{mekData:{FluidTanks:[{Tank:0b,stored:{Amount:2147483647,FluidName:"pneumaticcraft:oil"}}]}}'),
		Item.of('mekanism:creative_fluid_tank', '{mekData:{FluidTanks:[{Tank:0b,stored:{Amount:2147483647,FluidName:"thermal:crude_oil"}}]}}'),
		'thermal:crude_oil_bucket',
		'pneumaticcraft:oil_bucket',
		'tconstruct:honey_bucket',
		'mekanism:ingot_steel',
		'immersiveengineering:ingot_steel',
		'chemlib:osmium_ingot',
		'ftbic:enderium_ingot',
		'chemlib:iridium_ingot',
		'chemlib:zinc_ingot',
		'immersiveengineering:ingot_electrum',
		'immersiveengineering:ingot_constantan',
		'ftbic:uranium_ingot',
		'ftbic:aluminum_ingot',
		'chemlib:nickel_ingot',
		'ftbic:bronze_ingot',
		'mekanism:ingot_bronze',
		'immersiveengineering:ingot_nickel',
		'immersiveengineering:ingot_aluminum',
		'immersiveengineering:ingot_uranium',
		'mekanism:ingot_tin',
		'chemlib:aluminum_ingot',
		'chemlib:uranium_ingot',
		'chemlib:tin_ingot',
		'ftbic:tin_ingot',
		'chemlib:lead_ingot',
		'ftbic:lead_ingot',
		'mekanism:ingot_lead',
		'immersiveengineering:ingot_lead',
		'chemlib:silver_ingot',
		'darkerdepths:silver_ingot',
		'occultism:silver_ingot',
		'immersiveengineering:ingot_silver',
		'immersiveengineering:nugget_copper',
		'tconstruct:copper_nugget',
		'ftbic:copper_nugget',
		'thermal:copper_nugget',
		'chemlib:lead_nugget',
		'immersiveengineering:nugget_constantan',
		'immersiveengineering:nugget_electrum',
		'chemlib:osmium_nugget',
		'tconstruct:netherite_nugget',
		'chemlib:zinc_nugget',
		'chemlib:iridium_nugget',
		'ftbic:enderium_nugget',
		'chemlib:tin_nugget',
		'chemlib:uranium_nugget',
		'chemlib:silver_nugget',
		'ftbic:aluminum_nugget',
		'mekanism:nugget_lead',
		'chemlib:aluminum_nugget',
		'immersiveengineering:nugget_silver',
		'ftbic:tin_nugget',
		'ftbic:uranium_nugget',
		'immersiveengineering:nugget_uranium',
		'mekanism:nugget_tin',
		'occultism:silver_nugget',
		'immersiveengineering:nugget_aluminum',
		'immersiveengineering:nugget_lead',
		'mekanism:nugget_bronze',
		'immersiveengineering:nugget_steel',
		'immersiveengineering:nugget_nickel',
		'ftbic:bronze_nugget',
		'mekanism:nugget_steel',
		'chemlib:nickel_nugget',
		'ftbic:lead_nugget',
		'occultism:silver_dust',
		'ftbic:aluminum_dust',
		'ftbic:uranium_dust',
		'immersiveengineering:dust_lead',
		'chemlib:copper_dust',
		'occultism:copper_dust',
		'ftbic:gold_dust',
		'immersiveengineering:dust_iron',
		'chemlib:iron_dust',
		'chemlib:nickel_dust',
		'chemlib:iridium_dust',
		'immersiveengineering:dust_constantan',
		'immersiveengineering:dust_electrum',
		'mekanism:dust_bronze',
		'mekanism:dust_sulfur',
		'mekanism:dust_diamond',
		'createaddition:diamond_grit',
		'bloodmagic:coalsand',
		'chemlib:tin_dust',
		'ftbic:tin_dust',
		'ftbic:copper_dust',
		'chemlib:gold_dust',
		'occultism:iron_dust',
		'ftbic:iron_dust',
		'occultism:gold_dust',
		'immersiveengineering:dust_copper',
		'immersiveengineering:dust_gold',
		'ftbic:lead_dust',
		'chemlib:lead_dust',
		'chemlib:uranium_dust',
		'chemlib:aluminum_dust',
		'chemlib:silver_dust',
		'immersiveengineering:dust_uranium',
		'immersiveengineering:dust_aluminum',
		'immersiveengineering:dust_silver',
		'ftbic:coal_dust',
		'mekanism:dust_tin',
		'mekanism:dust_gold',
		'mekanism:dust_copper',
		'mekanism:dust_lead',
		'mekanism:dust_iron',
		'bloodmagic:ironsand',
		'bloodmagic:goldsand',
		'bloodmagic:coppersand',
		'immersiveengineering:dust_nickel',
		'ftbic:bronze_dust',
		'ftbic:diamond_dust',
		'chemlib:sulfur_dust',
		'mekanism:dust_quartz',
		'mekanism:dust_netherite',
		'mekanism:dust_charcoal',
		'immersiveengineering:dust_steel',
		'chemlib:osmium_dust',
		'ae2:ender_dust',
		'ftbic:ender_dust',
		'miniutilities:ender_dust',
		'ftbic:obsidian_dust',
		'mekanism:dust_obsidian',
		'occultism:obsidian_dust',
		'ftbic:enderium_dust',
		'immersiveengineering:dust_wood',
		'mekanism:sawdust',
		'mekanism:dust_emerald',
		'mekanism:dust_lapis_lazuli',
		'immersiveengineering:dust_sulfur',
		'immersiveengineering:deepslate_ore_lead',
		'immersiveengineering:deepslate_ore_aluminum',
		'occultism:silver_ore_deepslate',
		'occultism:silver_ore',
		'immersiveengineering:ore_aluminum',
		'immersiveengineering:ore_lead',
		'immersiveengineering:ore_uranium',
		'mekanism:tin_ore',
		'immersiveengineering:ore_nickel',
		'ftbic:deepslate_lead_ore',
		'darkerdepths:silver_ore',
		'ftbic:lead_ore',
		'ftbic:deepslate_tin_ore',
		'ftbic:deepslate_uranium_ore',
		'mekanism:deepslate_lead_ore',
		'ftbic:deepslate_aluminum_ore',
		'immersiveengineering:deepslate_ore_silver',
		'immersiveengineering:ore_silver',
		'ftbic:aluminum_ore',
		'mekanism:lead_ore',
		'ftbic:uranium_ore',
		'ftbic:tin_ore',
		'immersiveengineering:deepslate_ore_nickel',
		'mekanism:deepslate_tin_ore',
		'immersiveengineering:deepslate_ore_uranium',
		'mekanism:raw_lead',
		'mekanism:raw_tin',
		'ftbic:tin_chunk',
		'immersiveengineering:raw_lead',
		'ftbic:aluminum_chunk',
		'ftbic:uranium_chunk',
		'occultism:raw_silver',
		'darkerdepths:raw_silver',
		'ftbic:lead_chunk',
		'immersiveengineering:raw_silver',
		'immersiveengineering:raw_nickel',
		'immersiveengineering:raw_uranium',
		'immersiveengineering:raw_aluminum',
		'compactmachines:solid_wall',
		'compactmachines:chunkloader_upgrade',
		'thermal:tin_plate',
		'immersiveengineering:plate_nickel',
		'immersiveengineering:plate_copper',
		'chemlib:gold_plate',
		'chemlib:copper_plate',
		'chemlib:nickel_plate',
		'chemlib:aluminum_plate',
		'chemlib:zinc_plate',
		'chemlib:silver_plate',
		'immersiveengineering:plate_silver',
		'immersiveengineering:plate_electrum',
		'immersiveengineering:plate_constantan',
		'beyond_earth:iron_plate',
		'create:copper_sheet',
		'thermal:copper_plate',
		'create:iron_sheet',
		'immersiveengineering:plate_iron',
		'thermal:iron_plate',
		'thermal:gold_plate',
		'immersiveengineering:plate_gold',
		'create:golden_sheet',
		'chemlib:iron_plate',
		'chemlib:tin_plate',
		'chemlib:iridium_plate',
		'thermal:lead_plate',
		'chemlib:lead_plate',
		'chemlib:uranium_plate',
		'immersiveengineering:plate_lead',
		'thermal:bronze_plate',
		'immersiveengineering:plate_uranium',
		'immersiveengineering:plate_aluminum',
		'thermal:enderium_plate',
		'immersiveposts:stick_lead',
		'immersiveposts:stick_uranium',
		'immersiveengineering:stick_aluminum',
		'createaddition:gold_rod',
		'createaddition:iron_rod',
		'createaddition:copper_rod',
		'immersiveposts:stick_copper',
		'immersiveengineering:stick_iron',
		'immersiveposts:stick_gold',
		'createaddition:copper_wire',
		'createaddition:gold_wire',
		'ftbic:iron_gear',
		'ftbic:gold_gear',
		'ftbic:copper_gear',
		'ftbic:enderium_gear',
		'industrialforegoing:gold_gear',
		'industrialforegoing:iron_gear',
		'industrialforegoing:diamond_gear',
		'ftbic:tin_gear',
		'ftbic:lead_gear',
		'ftbic:bronze_gear',
		'immersiveengineering:wire_copper',
		'immersiveengineering:wire_aluminum',
		'avaritia:silver_singularity',
		'avaritia:lead_singularity',
		'avaritia:tin_singularity',
		'avaritia:copper_singularity',
		'avaritia:quartz_singularity',
		'avaritia:redstone_singularity',
		'avaritia:lapis_singularity',
		'avaritia:gold_singularity',
		'avaritia:iron_singularity',
		'avaritia:nickel_singularity',
		'avaritia:diamond_singularity',
		'avaritia:emerald_singularity',
		'avaritia:fluxed_singularity',
		'avaritia:platinum_singularity',
		'avaritia:iridium_singularity',
		'avaritia:netherite_singularity',
		'avaritia:amethyst_singularity',
		'immersivepetroleum:bitumen',
		'immersiveengineering:slag',
		'immersiveengineering:coal_coke',
		'avaritia:cosmic_meatballs',
		'tempad:he_who_remains_tempad',
		'reliquary:bat_wing',
		'architects_palette:withered_bone',
		'tconstruct:necrotic_bone',
		'chemlib:lithium_dust',
		'createaddition:electrum_wire',
		'createaddition:electrum_rod',
		'createaddition:electrum_ingot',
		'createaddition:electrum_sheet',
		'createaddition:electrum_nugget',
		'sophisticatedstorage:debug_tool',
		'ironfurnaces:upgrade_silver',
		'ironfurnaces:upgrade_copper',
		'ironfurnaces:upgrade_netherite',
		'ironfurnaces:upgrade_crystal',
		'ironfurnaces:upgrade_obsidian',
		'ironfurnaces:upgrade_emerald',
		'ironfurnaces:upgrade_diamond',
		'ironfurnaces:upgrade_gold',
		'ironfurnaces:upgrade_iron',
		'ironfurnaces:upgrade_gold2',
		'ironfurnaces:upgrade_silver2',
		'ironfurnaces:upgrade_iron2',
		'ironfurnaces:upgrade_obsidian2',
		'summoningrituals:indestructible_altar',
		'beyond_earth:iron_stick',
		'ftbic:advanced_powered_furnace',
		'ftbic:advanced_macerator',
		'ftbic:advanced_centrifuge',
		'ftbic:advanced_compressor',
		'ftbic:teleporter',
		'ftbic:powered_crafting_table',
		'ironfurnaces:augment_xp',
		'ae2:silicon',
		'miniutilities:gold_angel_ring',
		'miniutilities:ender_dragon_angel_ring',
		'miniutilities:feather_angel_ring',
		'miniutilities:bat_angel_ring',
		'miniutilities:peacock_angel_ring',
		'custommachinery:machine_creator_item',
		'custommachinery:structure_creator',
		'custommachinery:box_creator_item',
		'beyond_earth:oil_bucket',
		'miniutilities:cursed_earth',
		'miniutilities:blessed_earth',
		'miniutilities:blursed_earth',
		'avaritia:extreme_crafting_table',
		'ragnamod_seven:black_sphere',
		'ftbquests:missing_item',
		'pneumaticcraft:creative_upgrade',
		'modularrouters:creative_module',
		'create:creative_crate',
		'ragnamod_seven:creative_augment_base',
		'ragnamod_seven:ae2',
		'chemlib:cobalt_nugget',
		'chemlib:cobalt_ingot',
		'hostilenetworks:deep_learner',
		'chickens:soul_chicken'
	])
})

onEvent('jei.add.items', e => {
	e.add([
		Item.of('tconstruct:part_builder', '{texture:"minecraft:oak_planks"}'),
		Item.of('tconstruct:tinker_station', '{texture:"minecraft:oak_planks"}'),
		Item.of('tconstruct:crafting_station', '{texture:"minecraft:oak_log"}'),
		Item.of('ae2:facade', '{item:"minecraft:stone"}'),
		'evilcraft:dark_tank',
		'ftbic:fluid_cell',
		'tconstruct:longbow',
		'tconstruct:crossbow',
		'tconstruct:pickaxe',
		'tconstruct:sledge_hammer',
		'tconstruct:vein_hammer',
		'tconstruct:mattock',
		'tconstruct:pickadze',
		'tconstruct:excavator',
		'tconstruct:hand_axe',
		'tconstruct:broad_axe',
		'tconstruct:kama',
		'tinkers_reforged:greatsword',
		'tinkers_reforged:frying_pan',
		'tconstruct:cleaver',
		'tconstruct:sword',
		'tconstruct:scythe',
		'tconstruct:dagger',
		'materialis:wrench',
		'tinker_rapier:rapier_tic',
		'tinker_rapier:estoc_tic',
		'cataclysm:witherite_ingot',
		'cataclysm:enderite_ingot',
		'cataclysm:witherite_block',
		'cataclysm:enderite_block',
		'create:chromatic_compound',
		'create:shadow_steel',
		'create:refined_radiance',
		'minecraft:dragon_egg'
	])
})

onEvent('jei.hide.fluids', event => {
	event.hide('cofh_core:honey')
	event.hide('tconstruct:honey')
	event.hide('beyond_earth:oil')
	event.hide('pneumaticcraft:oil')
	event.hide('thermal:crude_oil')
})

onEvent('jei.remove.categories', e => {
	// console.log(e.getCategoryIds())	
	e.remove('twilightforest:uncrafting')
})

onEvent('jei.information', e => {
	e.add('chemlib:draconium_compound', ['This chemical\'s is only used to create draconium dust.'])
	e.add('bhc:red_heart', ['Drop from passive mobs'])
	e.add('bhc:yellow_heart', ['Drop from bosses'])
	e.add('bhc:green_heart', ['Drop from Piglin Bathering'])
	e.add('bhc:blue_heart', ['Drop from Pixies from Alfeim'])

	e.add('create:refined_radiance', ['Throw a Chromatic Compound through a beacon beam.'])
	e.add('create:shadow_steel', ['Throw a Chromatic Compound into the End void.'])
})

//Tooltips ChemLib
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
	chemLib('cobalt', 'Co (27)', 'Transition Metals')

	tooltip.addAdvanced('chickens:chicken_item', (item, advanced, text) => {
		if (!item.nbt?.ChickenType?.id.match(/chickens:(red|orange|yellow|lime|green|blue|light_blue|cyan|pink|magenta|purple|brown|black|white|light_gray|gray)_chicken/)) {
			text.add(1, Text.of('§3Made in the "Spirit" Soul Pedestal'))
		}
	})

	tooltip.addAdvanced(Ingredient.all, (item, advanced, text) => {
		if (item.nbt?.Modifier == 'forbidden_arcanus:eternal')
			text.add(Component.translate('item.unbreakable').blue())
	})

	tooltip.addAdvanced('chemlib:draconium_compound', (item, advanced, text) => {
		text.add(1, Text.of('§3Rn₂₄Xe₈Og₁₆Lu₃₂'))
	})

	tooltip.addAdvanced('mekanism:dust_lithium', (item, advanced, text) => {
		text.add(1, Text.of('§3Li (3)'))
		text.add(2, Text.of('§7Alkali Metals'))
	})

	tooltip.addAdvanced(['create:zinc_ingot', 'create:zinc_nugget', 'createaddition:zinc_sheet'], (item, advanced, text) => {
		text.add(1, Text.of('§3Zn (30)'))
		text.add(2, Text.of('§7Transition Metals'))
	})

	//Soul Pedestal Fake
	tooltip.addAdvanced('custommachinery:custom_machine_item', (item, advanced, text) => {
		if (item.nbt?.machine.match("ragnamod_7:soul_pedestal")) {
			text.add(1, Text.of('§cUse the Soul Pedestal from Spirit.'))
		}
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

})