// UMUMIT 21 misol
// Boolean11. Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son uch xonali toq".
let number = 373;

uchHonali = 100 <= number <= 999;
toq = number % 2 != 0;

javob = number + toq;
console.log("Berilgan son uch xonali toq:", javob);

// Boolean12. Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bo'lmaganda bir jufti o'zaro qarama-qarshi".
const a = 8;
const b = 10;
const c = -8;

if (a + b === 0 || a + c === 0 || b + c === 0) {
  console.log(
    "Berilgan uchta butun sonlarning hech bo'lmaganda bir jufti o'zaro qarama-qarshi"
  );
} else {
  console.log("Hato");
}

// Boolean13. Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan".
let uchHonaliSon = 249;

let birinchiSon = Math.floor(uchHonaliSon / 100);
let ikkinchiSon = Math.floor((uchHonaliSon % 100) / 10);
let uchinchiSon = uchHonaliSon % 10;

if (birinchiSon < ikkinchiSon && ikkinchiSon < uchinchiSon) {
  console.log("Ushbu sonning raqamlari ketma-ket o'suvchi bo'lib joylashgan");
} else {
  console.log("Hato");
}

// Boolean14. Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan yoki kamayuvchi ketma-ketlikka ega".
let uchHonaliSon2 = 976;

let birinchiSon2 = Math.floor(uchHonaliSon2 / 100);
let ikkinchiSon2 = Math.floor((uchHonaliSon2 % 100) / 10);
let uchinchiSon2 = uchHonaliSon2 % 10;

if (birinchiSon2 < ikkinchiSon2 && ikkinchiSon2 < uchinchiSon2) {
  console.log("Ushbu sonning raqamlari ketma-ket o'suvchi bo'lib joylashgan");
} else if (birinchiSon2 > ikkinchiSon2 && ikkinchiSon2 > uchinchiSon2) {
  console.log("Ushbu sonning raqamlari kamayuvchi ketma-ketlikka ega");
} else {
  console.log("Hato");
}

// Boolean15. Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonni chapdan o'qiganda ham, o'ngdan o'qiganda ham bir xil".
let son = 111;

let son1 = Math.floor(son / 100);
let son2 = Math.floor((son % 100) / 10);
let son3 = son % 10;

if (son1 == son2 && son2 == son3) {
  console.log(
    "Ushbu sonni chapdan o'qiganda ham, o'ngdan o'qiganda ham bir xil"
  );
} else {
  console.log("Hato");
}

// SHAXMATGA OID MASALARNI ISHLAY OLMADIM!

// Begin11. x ning qiymati berilganda y funksiyaning qiymati aniqlansin.y = 4 * (x - 3)^6 - 7 * (x - 3)^3 + 2

let x = 1;

let y = 4 * (x - 3) ** 6 - 7 * (x - 3 ** 3) + 2;
console.log("Y: " + y);

// Begin12. A soni berilgan. A ning darajalarini aniqlovchi programma tuzilsin. A^3‚ A^6‚ A^9, A^15

let sonA = 2;

let sonA3 = sonA ** 3;
let sonA6 = sonA ** 6;
let sonA9 = sonA ** 9;
let sonA15 = sonA ** 15;

console.log(`A^3: ${sonA3}, A^6: ${sonA6}, A^9: ${sonA9}, A^15: ${sonA15}`);

// Begin13. Temperatura Tf (farengeyt) da berilgan. Temperatura qiymatini Tc (gradus selsiy) ga o`tkazuvchi programma tuzilsin. Tc = (Tf - 32) * 5/9

let Tf = 42;

let Tc = ((Tf - 32) * 5) / 9;

console.log(`Gradus selsiy: ${Tc}`);

// Begin14. X kg shokolad A so`m turadi va Y kg konfet B so`m turadi. 1 kg shokolad 1 kg konfetdan qancha qimmat turishini aniqlovchi programma tuzilsin.

let shokoladX = 10000;
let konfetY = 1100;
if (shokoladX > konfetY) {
  console.log(
    `1 kg shokolad 1 kg konfetdan ${shokoladX - konfetY} so'm qimmat`
  );
} else {
  console.log(
    `1 kg konfet 1 kg shokolladdan ${konfetY - shokoladX} so'm qimmatroq`
  );
}

// Begin15. Abdulaziz X kg olmani A so’mdan, Y kg olmani B so’mdan sotib oldi. Abdulaziz jami qancha savdo qilgan?

let olma1 = 12000;
let olma2 = 10000;

console.log(
  `Abdulaziz 3 kg olmani ${olma1} so'mdan olgan va 10 kg olmani esa ${olma2} so'mdan olgan. Jami u ${
    olma1 * 3 + olma2 * 10
  } so'm sarflagan`
);

// Integer1. Uch xonali son berilgan. Oldin uni birliklar xonasidagi raqamni so`ng o`nliklar xonasidagi raqamni chiqaruvchi programma tuzilsin.

let sonUchHonali_1 = 123;

let sonUchHonali_1_1 = Math.floor(sonUchHonali_1 / 100);
let sonUchHonali_1_2 = Math.floor((sonUchHonali_1 % 100) / 10);
let sonUchHonali_1_3 = sonUchHonali_1 % 10;

console.log(
  `1-son: ${sonUchHonali_1_1}, 2-son: ${sonUchHonali_1_2}, 3-son: ${sonUchHonali_1_3}`
);

// Integer2. Uch xonali son berilgan. Uning raqamlar yig`indisini aniqlovchi programma tuzilsin.

let sonUchHonali_2 = 921;

let sonUchHonali_2_1 = Math.floor(sonUchHonali_2 / 100);
let sonUchHonali_2_2 = Math.floor((sonUchHonali_2 % 100) / 10);
let sonUchHonali_2_3 = sonUchHonali_2 % 10;

console.log(
  `Raqamlar yigindisini: ${
    sonUchHonali_2_1 + sonUchHonali_2_2 + sonUchHonali_2_3
  }`
);
// Integer3. Uch xonali son berilgan. Uning raqamlarini teskari tartibda yozishdan hosil bo`lgan sonni aniqlovchi program tuzilsin.

let sonUchHonali_3 = 678;

let sonUchHonali_3_1 = Math.floor(sonUchHonali_3 / 100);
let sonUchHonali_3_2 = Math.floor((sonUchHonali_3 % 100) / 10);
let sonUchHonali_3_3 = sonUchHonali_3 % 10;

console.log(
  `Raqamlarini teskari tartibi: ${sonUchHonali_3_3}${sonUchHonali_3_2}${sonUchHonali_3_1}`
);

// Integer4. Uch xonali son berilgan. Uning o`nliklar xonasidagi raqam bilan yuzliklar xonasidagi raqamni almashtirishdan hosil bo`lgan sonni aniqlovchi programma tuzilsin. Input: 123 Output: 213

let sonUchHonali_4 = 123;

let sonUchHonali_4_1 = Math.floor(sonUchHonali_4 / 100);
let sonUchHonali_4_2 = Math.floor((sonUchHonali_4 % 100) / 10);
let sonUchHonali_4_3 = sonUchHonali_4 % 10;

console.log(
  `Raqamlarini teskari tartibi: ${sonUchHonali_4_2}${sonUchHonali_4_1}${sonUchHonali_4_3}`
);

// Integer5. Uch xonali son berilgan. Uning o`nliklar xonasidagi raqam bilan birliklar xonasidagi raqamni almashtirishdan hosil bo`lgan sonni aniqlovchi programma tuzilsin. Input: 123 Output: 132

let sonUchHonali_5 = 123;

let sonUchHonali_5_1 = Math.floor(sonUchHonali_5 / 100);
let sonUchHonali_5_2 = Math.floor((sonUchHonali_5 % 100) / 10);
let sonUchHonali_5_3 = sonUchHonali_5 % 10;

console.log(
  `Raqamlarini teskari tartibi: ${sonUchHonali_5_1}${sonUchHonali_5_3}${sonUchHonali_5_2}`
);

// Integer6. 999 dan katta bo`lgan son berilgan. Bir marta bo`lib butunni va bo`lib qoldiqni olish operatsiyasidan foydalanib berilgan sonni mingliklar xonasidagi sonni aniqlovchi programma tuzilsin. Input: 98123

let turHonaliSon = 98123;

let turHonaliSon_2 = Math.floor((turHonaliSon / 1000) % 10);

console.log(`Input: ${turHonaliSon}, Output: ${turHonaliSon_2}`);

// Integer7. Kun boshidan boshlab N sekund vaqt o'tti. Kun boshidan boshlab qancha minut to'la o`tganligini aniqlovchi programma tuzilsin.

let sekund = 24000;

let min = Math.floor(sekund / 60);

console.log(`Kun boshidan boshlab ${min} minut utdi`);

// Integer8. Kun boshidan boshlab N sekund vaqt o'tti. Kun boshidan boshlab qancha to'la soat o`tganligini aniqlovchi programma tuzilsin.
let sekund_2 = 24000;

let soat = Math.floor(sekund_2 / 3600);

console.log(`Kun boshidan boshlab ${soat} soat utdi`);

// Integer9. Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab qancha minut va sekund o'tganini aniqlovchi programma tuzilsin.
let sekund_3 = 25000;

let min_2 = Math.floor(sekund_3 / 60);

console.log(
  `Kun boshidan boshlab ${min_2} minut va ${sekund_3 - min_2 * 60} sekund utdi`
);

// Integer10. Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab qancha soat va sekund o'tganini aniqlovchi programma tuzilsin.
let sekund_4 = 36040;

let soat_2 = Math.floor(sekund_4 / 3600);

console.log(
  `Kun boshidan boshlab ${soat_2} soat va ${
    sekund_4 - soat_2 * 3600
  } sekund utdi`
);

// Integer11. Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab qancha soat, minut va sekund o'tganini aniqlovchi programma tuzilsin.

let sekund_5 = 100000;

let soat_3 = Math.floor(sekund_5 / 3600);
let min_3 = Math.floor((sekund_5 - soat_3 * 3600) / 60);
let qolganSekund_5 = Math.floor(sekund_5 - soat_3 * 3600) - min_3 * 60;

console.log(
  `Kun boshidan boshlab ${soat_3} soat ${min_3} minut va ${qolganSekund_5} sekund utdi`
);
