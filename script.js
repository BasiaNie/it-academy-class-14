var age = -65;

console.log(Boolean(age));

if (!Boolean(age)) {
    console.log('Falsy value provided!');
} else if (age > 60) {
    colsole.log('Age is more than 60');
} else if (age < 0) {
    console.log('Age is wrong');
}
else if (age < 60 && age > 0) {
    console.log('Age is less than 60');
}  else {
    console.log('Age is 60')
}

if (age !== 100) {
    console.log('It is not 100')
}