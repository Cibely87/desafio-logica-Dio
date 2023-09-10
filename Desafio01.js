const NomeHeroi = "Cibely_Legend";
var PontoXP = 98765;
var NivelHeroi;

if (PontoXP < 1000) {
    NivelHeroi = "Ferro"
} else if (PontoXP >= 1001 && PontoXP <= 2000) {
    NivelHeroi = "Bronze"
} else if (PontoXP >= 2001 && PontoXP <= 5000) {
    NivelHeroi = "Prata"
} else if (PontoXP >= 5001 && PontoXP <= 7000) {
    NivelHeroi = "Ouro"
} else if (PontoXP >= 7001 && PontoXP <= 8000) {
    NivelHeroi = "Platina"
} else if (PontoXP >= 8001 && PontoXP <= 9000) {
    NivelHeroi = "Ascendente"
} else if (PontoXP >= 9001 && PontoXP <= 10000) {
    NivelHeroi = "Imortal"
} else { NivelHeroi = "Radiante" }

console.log(`O Herói de nome ${NomeHeroi} está no nível de ${NivelHeroi}`)