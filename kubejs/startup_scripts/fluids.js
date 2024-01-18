onEvent('fluid.registry', e => {
    e.create('ragnamod_seven:aureal')
        .thinTexture(0xa19fc9)
        .bucketColor(0xa19fc9)
        .displayName('Aureal')

    e.create('ichor')
        .displayName('Ichor')
        .stillTexture('tconstruct:ichor_still')
        .flowingTexture('tconstruct:ichor_flowing')
        .bucketColor(0xcc4100)
})