tag @s remove FirstConnectionFall
execute unless data storage subathon:first_connection WorldSpawnSet run setworldspawn ~ ~ ~
data modify storage subathon:first_connection WorldSpawnSet set value true