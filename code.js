let first_number=15;
let second_number=17;

// method one
[first_number, second_number] = [17, 15]
console.log(first_number);
console.log(second_number);

// method two
[first_number, second_number] = [second_number, first_number]
console.log(first_number);
console.log(second_number);

// method three
first_number += 2
second_number -= 2
console.log(first_number);
console.log(second_number);
