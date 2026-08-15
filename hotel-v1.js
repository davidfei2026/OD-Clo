// Create a new hotel instance
const hotel = new Hotel();

// Add rooms and guests to the hotel
hotel.addRoom("single");
hotel.addRoom("double");
hotel.addRoom("suite");
hotel.addGuest("economy");
hotel.addGuest("business");
hotel.addGuest("luxury");

// Simulate a day in the hotel
function simulateDay() {
    hotel.simulateDay();
    updateUI();
}

// Update the UI with the current hotel state
function updateUI() {
    const hotelName = document.getElementById("hotel-name");
    hotelName.textContent = hotel.name;

    const funds = document.getElementById("funds");
    funds.textContent = hotel.funds;

    const reputation = document.getElementById("reputation");
    reputation.textContent = hotel.reputation;

    const rooms = document.getElementById("rooms");
    rooms.innerHTML = "";
    hotel.rooms.forEach((room) => {
        const roomElement = document.createElement("div");
        roomElement.textContent = `Room: ${room.type}, Price: ${room.price}, Guests: ${room.guests}`;
        rooms.appendChild(roomElement);
    });

    const guests = document.getElementById("guests");
    guests.innerHTML = "";
    hotel.guests.forEach((guest) => {
        const guestElement = document.createElement("div");
        guestElement.textContent = `Guest: ${guest.type}, Room: ${guest.room.type}`;
        guests.appendChild(guestElement);
    });
}

// Run the simulation
setInterval(simulateDay, 1000);
```
