  onEvent('recipes', e => {

    e.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft",
        "activation_item": {
          "item": "minecraft:skeleton_skull"
        },
        "pentacle_id": "occultism:craft_marid",
        "duration": 60,
        "ritual_dummy": {
          "item": "occultism:ritual_dummy/craft_stabilizer_tier4"
        },
        "ingredients": [
          {
            "item": "chickens:chicken_shell"
          },
          {
            "item": "forbidden_arcanus:soul"
          },
          {
            "item": "minecraft:feather"
          },
          {
            "item": "minecraft:feather"
          },
          {
            "item": "occultism:spirit_attuned_crystal"
          },
          {
            "item": "occultism:spirit_attuned_crystal"
          }
        ],
        "result": 
        {
            "type": "forge:nbt", "item": "minecraft:player_head", "count": 1, "nbt": "{SkullOwner:{Id:[I;2100988622,-532328774,-1418628645,-182068495],Properties:{textures:[{Value:\"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMTYzODQ2OWE1OTljZWVmNzIwNzUzNzYwMzI0OGE5YWIxMWZmNTkxZmQzNzhiZWE0NzM1YjM0NmE3ZmFlODkzIn19fQ==\"}]}},display:{Name:\'{\"text\":\"Chicken\"}\'}}"
        }
      })
    })