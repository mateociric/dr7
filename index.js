// Zadatak 1. 
// Napisi program koji ovisno o varijabli time mogucih vrijednosti ZORA, JUTRO, POSLIJEPODNE, POPODNE, PRIJEPODNE, PREDVECER, NOC ispisuje Dobro jutro, Dobar dan ili Dobra vecer. Unos time varijable neka bude preko konzole, te ako korisnik nije unio ni jednu od mogucnosti neka ispis bude: Koje je to doba dana? Program napisi uz pomoc if-a i switch case-a. 

let time = process.argv.slice(2)[0];

if (time === `ZORA` || time === `JUTRO` || time === `PRIJEPODNE`) {
    console.log(`Dobro jutro`);
} else if (time === `POPODNE` || time === `POSLIJEPODNE`) {
    console.log(`Dobar dan`);
} else if (time === `PREDVECER` || time === `NOC`) {
    console.log(`Dobro vecer`);
} else {
    console.log(`Koje je to doba dana?`);
}

switch(time) {
    case `ZORA`:
    case `JUTRO`:
    case `PRIJEPODNE`:
        console.log(`Dobro jutro`);
        break;
    case `POPODNE`:
    case `POSLIJEPODNE`:
        console.log(`Dobar dan`);
        break;
    case `PREDVECER`:
    case `NOC`:
        console.log(`Dobro vecer`);
        break;
    default:
        console.log(`Koje je to doba dana?`);
}

// Zadatak 2. 
// Napisi program koji omogucava unos proizvoljnog broja godina preko konzole, te napisi ternarni izraz koji bira vrijednosti MALOLJETAN i PUNOLJETAN. Potom za MALOLJETAN ispisi "Korisnik je maloljentan", a za punoljetan "Korisnik je punoljetan". Ako korisnik nije unio broj napisi "Pogresan unos!". 

let year = Number(process.argv.slice(2)[0]);

isNaN(year) ? console.log(`Pogresan unos!`) : year < 18 ? console.log(`MALOLJETAN`) : console.log(`PUNOLJETAN`);

// Zadatak 3.
// Napisi program u kojem korisnik unosi broj preko konzole. Ako korisnik nije unio broj, program racuna da je korisnik unio broj 7. Program zatim ispisuje "Tvoj sretni broj je ___" i potom preko Math.random funkcije izvlaci cijeli broj od 0 do 9. Ukoliko je izvuceni broj identican korisnikovom sretnom broju ispisi "Jackpot!", a u suprotnom "Vise srece drugi put!". 
// Napomena: Ukoliko ne znate koristiti Math.random pokusajte guglati kako se koristi.

let num, rnd;

num = Number(process.argv.slice(2)[0]);
rnd = Math.floor(Math.random(1) * 10);

if (isNaN(num)) {
    num = 7;
}

console.log(`Tvoj sretni broj je ${num}`);

if (num === rnd) {
    console.log(`Jackpot!`);
} else {
    console.log(`Vise srece drugi put`);
}