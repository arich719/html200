let firstName = "Anthony";
let lastName = "Richardson";
let age = 40; // 
let drivingAge = 16;

if (age >= drivingAge) {
    console.log(`${firstName} ${lastName} can drive.`);
    console.log(`They have been driving for ${age - drivingAge} years.`);
} else {
    let countdown = 5;
    while (countdown > 0) {
        console.log(countdown);
        countdown--;
    }
    console.log(countdown); 
}
