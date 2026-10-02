// Bài 1: Tạo hàm createCharacters
const characters = [
    {name: "Nguyen Van A", level: 5, health: 200},
    {name: "Tran Thi B", level: 3, health: 350},
    {name: "Ly Thi C", level: 100, health: 500},
    {name: "Mai The D", level: 24, health: 120},
];

function createCharacters(arrayObject) {
    // Tạo mảng mới
    const charactersPowerUp = arrayObject.map(item => ({
        name: item.name.toUpperCase(),
        level: item.level*2,
        health: item.health*3
    }))
    console.log(charactersPowerUp);
    // Lọc các phần tử có chỉ số health > 1000
    const possibleWinners = charactersPowerUp.filter(character => character.health > 1000);
    console.log(possibleWinners);
}

// Test
createCharacters(characters);



// Bài 2: Tạo hàm printLeaderboard
const players = [
    {name: "Yoshi", score: 800},
    {name: "Mario", score: 1000},
    {name: "Luigi", score: 900},
    {name: "Peach", score: 850},
    {name: "Phong", score: 500},
];

function printLeaderboard(arrayObject) {
     const newArray = arrayObject.sort((a,b) => b.score - a.score);
     console.log("Bảng xếp hạng")
     console.log(newArray);
     for (let i = 0; i < newArray.length; i++) {
        if (i+1 === 1) {
            console.log("🥇 1. " + newArray[i].name + " - " + newArray[i].score + " pts");
        } else if (i+1 === 2) {
            console.log("🥈 2. " + newArray[i].name + " - " + newArray[i].score + " pts");
        } else if (i+1 === 3) {
            console.log("🥉 3. " + newArray[i].name + " - " + newArray[i].score + " pts");
        } else {
            let j = i + 1;
            console.log("   " + j + ". " + newArray[i].name + " - " + newArray[i].score + " pts");
        }
     }     
};

// Test
printLeaderboard(players);

