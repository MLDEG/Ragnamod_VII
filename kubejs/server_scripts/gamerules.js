onEvent('server.load', e => {
    e.server.runCommandSilent('gamerule tfEnforcedProgression false');
})
