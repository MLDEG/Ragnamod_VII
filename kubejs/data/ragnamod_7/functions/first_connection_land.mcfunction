tag @s remove FirstConnectionFall
spawnpoint @s ~ ~ ~ ~
execute unless data storage ragnamod_7:first_connection WorldSpawnSet run setworldspawn ~ ~ ~
data modify storage ragnamod_7:first_connection WorldSpawnSet set value true
