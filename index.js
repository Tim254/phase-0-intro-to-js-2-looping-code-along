const starGift = [];
const starWarriors = ["Boba", "CadBane", "Mandalorian"];

function writeCards(starWarriors, Victory) {
    for (let i = 0; i < starWarriors.length; i++) {
        starGift.push(`Thank you, ${starWarriors[i]}, for the wonderful ${Victory} gift!`);
    }
    return starGift;
}
function countDown() {
    let i = 10;
    while (i >= 0) {
        console.log(i)
        i--;
    }
}