const departTripTicket = {
    name: "Mohamed Issa",
    from: "London Heathrow Airport",
    to: "Dakar Blaise Diagne International Airport",
    businessClass:false,
    leaveTime: 18,
    arriveTime: 23,
    upgrade() {
        if (this.businessClass === false) {
            this.businessClass = true;
        }
        else {
            console.log("Your ticket is already business class!");
        }
    },
    flightTime(){
        const flightDuration = this.arriveTime - this.leaveTime;
        console.log("Departing Flight Duration: " + flightDuration + " hours");
    }

}
const returnTripTicket = {
    name: "Mohamed Issa",
    from: "Dakar Blaise Diagne International Airport",
    to: "London Heathrow Airport",
    businessClass:false,
    leaveTime: 13,
    arriveTime: 18,
    upgrade() {
        if (this.businessClass === false) {
            this.businessClass = true;
        }
        else {
            console.log("Your ticket is already business class!");
        }
    },
    flightTime(){
        const flightDuration = this.arriveTime - this.leaveTime;
        console.log("Returning Flight Duration: " + flightDuration + " hours");
    }
}


returnTripTicket.upgrade();
departTripTicket.flightTime();
returnTripTicket.flightTime();
console.log(departTripTicket);
console.log(returnTripTicket);