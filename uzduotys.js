//1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. 
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let a = 41;
let b = 10;
let res = '';
if (a > b) {
    res = a;
} else {
    if (a < b) {
        res = b;
    } else {
        res = 'skaičiai lygūs';
    }
}
console.log(`1 uzd. ${res}`)


// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10.

for (let i = 1; i <= 10; i++) {
    console.log(`2 uzd. ${i}`);
};


// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. 

for (let even = 0; even <= 10; even++) {

    if (even % 2 === 0) {
        console.log(`3 uzd. ${even}`);
    }
};


// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje.

for (let random = 0; random < 5; random++) {
    let n = rand(1, 10);
    console.log(`4 uzd. ${n}`);
}


// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5.
let number = ''
let result = '';

while (true) {
    number = rand(1, 10);
    result += number;
    if (number === 5) {
        break;
    }

}
console.log(`5 uzd. ${result}`);


// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų.

let length = rand(10, 30);
let maxL = 0;
const array = [];

for (let m = 0; m < length; m++) {
    let rn = rand(10, 30);
    array.push(rn);
    if (maxL < array[m]) {
        maxL = array[m];
    }
}
console.log(`6 uzd. Masyvas:  ${array} didžiausia reikšmė: ${maxL}`);

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės.

let arrayL = 100;
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
const letter = ['A', 'B', 'C', 'D']
const arrayLetter = []
for (let l = 0; l < arrayL; l++) {
    const index = rand(0, 3)
    arrayLetter.push(letter[index])
    if (letter[index] === 'A') {
        counter1++
    }
    if (letter[index] === 'B') {
        counter2++
    }
    if (letter[index] === 'C') {
        counter3++
    }
    if (letter[index] === 'D') {
        counter4++
    }
}
console.log(`7 uzd. Masyvas: ${arrayLetter}`);
console.log(`A: ${counter1}, B: ${counter2}, C: ${counter3}, D: ${counter4}`);

// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas). Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė.

function lygineSuma(var1, var2) {
    let sum = 0;
    let odd = false;
  
    if (typeof var1 === 'number' && typeof var2 === 'number') {
      sum = var1 + var2;
    } else if (Array.isArray(var1) && Array.isArray(var2)) {
      sum = var1.length + var2.length;
    } else {
      return 'nesutampa tipai';
    }
  
    if (sum % 2 !== 0) {
      odd = true;
    }
  
    if (odd) {
      return 'Suma nelyginė'
    } else {
      return `Suma: ${sum}`;
    }
  }
  const testArr = [1, 2, 3]
  const testArr1 = [2, 3, 5]
  console.log(`8 uzd. ${lygineSuma(testArr, testArr1)}`);

// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu -
// "(XXX) XXX-XXXX".