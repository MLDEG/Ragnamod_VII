onEvent('recipes', e => {

    //Small Gate Catalyst
    e.shaped('gateways:catalyst_small_pearl_gate', [' A ','ASA',' A '], {A: 'bloodmagic:reagentvoid',S: 'ae2:fluix_pearl'})
    
    //Medium
    e.custom({"type": "botania:runic_altar","output": {"item": "gateways:catalyst_medium_pearl_gate"},"mana": 10000,"ingredients": [{"item": "gateways:catalyst_small_pearl_gate"},{"item": "gateways:catalyst_small_pearl_gate"},{"item": "gateways:catalyst_small_pearl_gate"},{"item": "gateways:catalyst_small_pearl_gate"},{"item": "botania:pixie_dust"}]})
    
    //Large
    e.custom({"type":"createaddition:charging","input": {"item": "gateways:catalyst_medium_pearl_gate","count": 1},"result": {"item": "gateways:catalyst_large_pearl_gate","count": 1},"energy": 100000})

})