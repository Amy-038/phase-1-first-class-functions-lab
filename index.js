const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function() {
    return drivers.slice(0,2)
}
/*const returnFirstTwoDrivers = function(array) {
    return array.slice(0,2)
}
returnFirstTwoDrivers(drivers);*/

const returnLastTwoDrivers = function() {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    return function(fare) {
        return fare * int;
    }
}

const fareDoubler = createFareMultiplier(2);

console.log(fareDoubler(5));

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, anyfn) {
    return anyfn();
}
selectDifferentDrivers(drivers, returnFirstTwoDrivers);


/*function returnFirstTwoDrivers() {
    return drivers.slice(0,2);
}

function returnLastTwoDrivers() {
    return drivers.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers];

selectingDrivers.push(returnLastTwoDrivers);

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(selectingDrivers, driver) {
    return driver();
}*/