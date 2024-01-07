'use strict';

const userYearOfBirth = prompt( 'В якому році ти народився?');
const userCityResidence = prompt( 'В якому місті ти живеш?');
const userKindSport = prompt( 'Який твій улюблений вид спорту?');

if (userYearOfBirth === null || userCityResidence === null || userKindSport === null) {
    alert("Шкода, що ти не захотів ввести свій(ю): " + (userYearOfBirth === null ? "рік народження " : "") +
        (userCityResidence === null ? (userYearOfBirth === null ? "" : ", ") + "місто проживання" : "") +
        (userKindSport === null ? ((userYearOfBirth === null || userCityResidence === null) ? ", " : "") +
            "улюблений вид спорту" : "") + ".");
} else {
    const userAge = new Date().getFullYear() - parseInt(userYearOfBirth);

    let message = "Твій вік: " + userAge + " р.\n";

    if (userCityResidence === "Київ" || userCityResidence === "Вашингтон" || userCityResidence === "Лондон") {
        message += "Ти живеш у столиці " + getCountry(userCityResidence) + ".\n";
    } else {
        message += "Ти живеш у місті " + userCityResidence + ".\n";
    }

    const champions = {
        "футбол": "Ліонель Мессі",
        "формула-1": "Міхаель Шумахер",
        "баскетбол": "Майкл Джордан"
    };

    if (champions.hasOwnProperty(userKindSport)) {
        message += "Круто! Хочеш стати як " + champions[userKindSport] + "?";
    } else {
        message += "Твій улюблений вид спорту: " + userKindSport + ".";
    }

    alert(message);
}

function getCountry(capital) {
    switch (capital) {
        case "Київ":
            return "України";
        case "Вашингтон":
            return "США";
        case "Лондон":
            return "Великої Британії";
    }
}


