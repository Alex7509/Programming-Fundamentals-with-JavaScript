function solve(day) {

    let dayOfTheWeek = ['Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday']

    if (day >= 1 && day <= 7) {
        console.log(dayOfTheWeek[day - 1]);
    } else {
        console.log('Invalid day!');
    }
}
