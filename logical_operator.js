
const hasDriversLicense = true; // A 
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(hasDriversLicense && !hasGoodVision); // I use two logical operator in this operatoin


const shouldDrive = hasDriversLicense && hasGoodVision;

if(shouldDrive) {
    console.log("Sarah is able to drive!");
}else {
    console.log("Some else should drive...");
}