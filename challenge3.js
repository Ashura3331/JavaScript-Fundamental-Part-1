
let dolphin1 = 96;
let dolphin2 = 108;
let dolphin3 = 89;

let koalas1 = 88;
let koalas2 = 91;
let koalas3 = 110;

const scoreDolphins = (dolphin1 + dolphin2 + dolphin3) / 3;
const scoreKoalas = (koalas1 + koalas2 + koalas3) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
}else if (scoreDolphins < scoreKoalas) {
    console.log("Koalas win the trophy");
}else {
    console.log("Both win the trophy");
}