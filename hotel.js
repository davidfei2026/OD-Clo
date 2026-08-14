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
2. In `script.js`, add the code to interact with the simulator:
```javascript
// Get the hotel instance
const hotel = new Hotel();

// Add event listeners to the UI elements
document.getElementById("add-room").addEventListener("click", () => {
    hotel.addRoom("single");
    updateUI();
});

document.getElementById("add-guest").addEventListener("click", () => {
    hotel.addGuest("economy");
    updateUI();
});

document.getElementById("simulate-day").addEventListener("click", () => {
    hotel.simulateDay();
    updateUI();
});
```
3. In `style.css`, add the CSS styles for the UI:
```css
body {
    font-family: Arial, sans-serif;
}

#hotel-name {
    font-size: 24px;
    font-weight: bold;
}

#funds {
    font-size: 18px;
}

#reputation {
    font-size: 18px;
}

#rooms {
    margin-top: 20px;
}

#guests {
    margin-top: 20px;
}

#add-room, #add-guest, #simulate-day {
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #4CAF50;
    color: #fff;
    cursor: pointer;
}

#add-room:hover, #add-guest:hover, #simulate-day:hover {
    background-color: #3e8e41;
}


