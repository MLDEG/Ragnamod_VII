scoreboard players operation DistanceMinX HephaestusRitual = PartMinX HephaestusRitual
scoreboard players operation DistanceMinY HephaestusRitual = PartMinY HephaestusRitual
scoreboard players operation DistanceMinZ HephaestusRitual = PartMinZ HephaestusRitual
scoreboard players operation DistanceMaxX HephaestusRitual = PartMaxX HephaestusRitual
scoreboard players operation DistanceMaxY HephaestusRitual = PartMaxY HephaestusRitual
scoreboard players operation DistanceMaxZ HephaestusRitual = PartMaxZ HephaestusRitual
scoreboard players operation DistanceMinX HephaestusRitual -= EyesX HephaestusRitual
scoreboard players operation DistanceMinY HephaestusRitual -= EyesY HephaestusRitual
scoreboard players operation DistanceMinZ HephaestusRitual -= EyesZ HephaestusRitual
scoreboard players operation DistanceMaxX HephaestusRitual -= EyesX HephaestusRitual
scoreboard players operation DistanceMaxY HephaestusRitual -= EyesY HephaestusRitual
scoreboard players operation DistanceMaxZ HephaestusRitual -= EyesZ HephaestusRitual
scoreboard players operation DistanceMinX HephaestusRitual *= 1000 HephaestusRitual
scoreboard players operation DistanceMinY HephaestusRitual *= 1000 HephaestusRitual
scoreboard players operation DistanceMinZ HephaestusRitual *= 1000 HephaestusRitual
scoreboard players operation DistanceMaxX HephaestusRitual *= 1000 HephaestusRitual
scoreboard players operation DistanceMaxY HephaestusRitual *= 1000 HephaestusRitual
scoreboard players operation DistanceMaxZ HephaestusRitual *= 1000 HephaestusRitual
scoreboard players operation DistanceMinX HephaestusRitual /= LengthX HephaestusRitual
scoreboard players operation DistanceMinY HephaestusRitual /= LengthY HephaestusRitual
scoreboard players operation DistanceMinZ HephaestusRitual /= LengthZ HephaestusRitual
scoreboard players operation DistanceMaxX HephaestusRitual /= LengthX HephaestusRitual
scoreboard players operation DistanceMaxY HephaestusRitual /= LengthY HephaestusRitual
scoreboard players operation DistanceMaxZ HephaestusRitual /= LengthZ HephaestusRitual

scoreboard players operation TMinX HephaestusRitual = DistanceMinX HephaestusRitual
scoreboard players operation TMinY HephaestusRitual = DistanceMinY HephaestusRitual
scoreboard players operation TMinZ HephaestusRitual = DistanceMinZ HephaestusRitual
scoreboard players operation TMaxX HephaestusRitual = DistanceMaxX HephaestusRitual
scoreboard players operation TMaxY HephaestusRitual = DistanceMaxY HephaestusRitual
scoreboard players operation TMaxZ HephaestusRitual = DistanceMaxZ HephaestusRitual
execute if score DistanceMinX HephaestusRitual > DistanceMaxX HephaestusRitual run scoreboard players operation TMinX HephaestusRitual = DistanceMaxX HephaestusRitual
execute if score DistanceMinY HephaestusRitual > DistanceMaxY HephaestusRitual run scoreboard players operation TMinY HephaestusRitual = DistanceMaxY HephaestusRitual
execute if score DistanceMinZ HephaestusRitual > DistanceMaxZ HephaestusRitual run scoreboard players operation TMinZ HephaestusRitual = DistanceMaxZ HephaestusRitual
execute if score DistanceMinX HephaestusRitual > DistanceMaxX HephaestusRitual run scoreboard players operation TMaxX HephaestusRitual = DistanceMinX HephaestusRitual
execute if score DistanceMinY HephaestusRitual > DistanceMaxY HephaestusRitual run scoreboard players operation TMaxY HephaestusRitual = DistanceMinY HephaestusRitual
execute if score DistanceMinZ HephaestusRitual > DistanceMaxZ HephaestusRitual run scoreboard players operation TMaxZ HephaestusRitual = DistanceMinZ HephaestusRitual

scoreboard players operation TMin HephaestusRitual = TMinX HephaestusRitual
execute if score TMinY HephaestusRitual < TMin HephaestusRitual run scoreboard players operation TMin HephaestusRitual = TMinY HephaestusRitual
execute if score TMinZ HephaestusRitual < TMin HephaestusRitual run scoreboard players operation TMin HephaestusRitual = TMinZ HephaestusRitual

scoreboard players operation TMax HephaestusRitual = TMaxX HephaestusRitual
execute if score TMaxY HephaestusRitual < TMax HephaestusRitual run scoreboard players operation TMax HephaestusRitual = TMaxY HephaestusRitual
execute if score TMaxZ HephaestusRitual < TMax HephaestusRitual run scoreboard players operation TMax HephaestusRitual = TMaxZ HephaestusRitual

execute if score TMin HephaestusRitual <= TMax HephaestusRitual run tag @s add ForgeFound
