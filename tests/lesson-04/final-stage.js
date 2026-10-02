let test = [];
for (let i = 1; i < 101; i++) {
    test.push(i);
}
//console.log(test);

function findPairsDivisibleBy17(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if ((arr[i] + arr[j]) % 17 === 0) {
                count++;
                total = arr[i] + arr[j];
                console.log(`(${arr[i]}, ${arr[j]}) = ${total}`);
            }
        };
    }
    console.log(`Tổng cộng: ${count} cặp số`);
}

findPairsDivisibleBy17(test);
