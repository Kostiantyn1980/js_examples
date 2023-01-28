
function getDetails(appartment_object) {
    let result = "The appartment on " + appartment_object.street +
        ", " + appartment_object.city + " costs " + appartment_object.price +
        " dollars and has " + appartment_object.rooms.length + " rooms in total ";
    return result;
}

const appartment = {
    city: "Calgary",
    street: "1stStreetave",
    rooms: ["bathrooms", "guestroom", "bedrooms", "kitchen", "children room"],
    price: 1900,
    // getDetails: function(){
    //    let result = "The appartment on " + this.street + 
    //   ", " + this.city + " costs " + this.price + 
    //    " dollars and has " + this.rooms.length + " rooms in total ";
    //   return result;
    //  }
}

const appartment1 = {
    city: "Edmonton",
    street: "1stStreetave",
    rooms: ["bathrooms", "guestroom", "bedrooms", "kitchen", "children room"],
    price: 1900,

}

console.log(getDetails(appartment));
console.log(getDetails(appartment1));





