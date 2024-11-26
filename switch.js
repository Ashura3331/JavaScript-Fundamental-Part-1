
const day = 'wednesday' + 'thursday';

switch(day) {
    case 'monday':
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case  'tuesday':
        console.log("Prepare theory vidoes");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Write code example");
        break
    case 'friday':
        console.log("Record videoes");
        break
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend :)")
        break;
    default:
        console.log("Not a valid day");
}

if (day === 'wednesday' || 'thursday') {
    console.log("Write code example");
}