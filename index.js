const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers() {
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
}