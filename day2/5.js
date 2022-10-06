const vehicle= {
    vehicleid : 5454,
    brand:"audi",
    model:"2015",
    variant:"one year",
    specification: {
        firstgear: function(){
            console.log('it is in firstgear');
        },
        secondgear: function(){
            console.log('it is in secondgear');
        },
        maxspeed:78,
        changegear: function(){
            return (this.firstgear(), this.secondgear());

        },
    },
}
console.log(`The vehicleid is:${vehicle.vehicleid}`);
console.log(`The vehicle brand is:${vehicle.brand}`);
console.log(`The vehicle model is:${vehicle.model}`);
console.log(`The vehicle variant is:${vehicle.variant}`);
vehicle.specification.changegear();
console.log(vehicle.specification.maxspeed);
