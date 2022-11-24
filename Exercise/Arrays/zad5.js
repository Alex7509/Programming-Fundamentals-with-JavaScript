function solve(input) {

    let newArr = [];

    for (let i = 0; i < input.length; i++) {

        let current = Number(input[i]);

        if (current > input[i + 1]) {
            newArr.push(current);
        }

        if (i === input.length - 1) {
            newArr.push(current);
        }

    }

    console.log(newArr.join(' '));

}

solve([1, 4, 3, 2])