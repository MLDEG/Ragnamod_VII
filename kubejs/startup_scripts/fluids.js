onEvent('fluid.registry', e => {
    e.create('ragnamod_seven:aureal')
        .thinTexture(0xa19fc9)
        .bucketColor(0xa19fc9)
        .displayName('Aureal')

    e.create('ichor')
        .displayName('Ichor')
        .stillTexture('tconstruct:fluid/ichor_still')
        .flowingTexture('tconstruct:fluid/ichor_flowing')
        .bucketColor(0xcc4100)

    e.create('chaos_liquid')
        .displayName('Chaos Liquid')
        .stillTexture('ragnamod_seven:fluid/chaos_still')
        .flowingTexture('ragnamod_seven:fluid/chaos_flowing')
        .bucketColor(0x0d0d0d)
})