// Basics types 
//Primitives :  variable declarations 
let age_is: number;
age_is = 23;

let user_namee: string = 'Radhika'
let isAvailablee: boolean = true;

//complex types 
let hobbiess: string[]; // array of strings
hobbiess = ['Gym', 'Reading Books', 'Coding'];
let hobby_numberr: number[]; // array of numbers 
let hobby_donee: boolean[]; // array of boolean

// the any type 
let personsonifi: any; // shouldnt be used typically 

let personn: {
    name: string; 
    number: number;
    isPresent: boolean;
}

personn = {
    name: 'Radhika',
    number: 982206374,
    isPresent: true
}
// console.log(personn);

//type aliase
type myInfo = {
    user: string;
    pin: number;
}

let candidate : myInfo;