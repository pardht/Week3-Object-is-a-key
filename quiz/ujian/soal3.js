function highestScore(students) {
    // Code disini
    if(students.length < 1) {
        return {};
    }

    let highests = [];

    for (let i = 0; i < students.length; i++) {
        let highestStudent = -1;
        let amountStudent = 0;
        for (let i2 = 0; i2 < students.length; i2++) {
            if (students[i].class === students[i2].class) {
                amountStudent++;
                if (students[i2].score > students[i].score) {
                    highestStudent = i2;
                }
            }
        }
        if (highestStudent >= 0) {
            highests.push(students[highestStudent]);
        } 
        if (amountStudent === 1) {
            highests.push(students[i]);
        }
    }

    return highests;
}

// TEST CASE
console.log(highestScore([
    {
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
    {
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}