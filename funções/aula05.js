function recusiva(max) {
    console.log(max);
    if (max >= 1000) return

    max++;
    recusiva(max);
}

recusiva(0);

// for (let i = 0; i <= 1000; i++) {
//     console.log(i);
// }

// let count = 0;
// const max = 1000;
// while (count <= 1000) {
//     console.log(count);
//     count++;
// }