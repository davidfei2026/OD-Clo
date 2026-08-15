class Hotel {
  constructor() {
    this.name = "The Perfect Hotel";
    this.rooms = [];
    this.guests = [];
    this.funds = 1000;
    this.reputation = 50;
  }

  addRoom(roomType) {
    const room = {
      type: roomType,
      price: 0,
      guests: 0,
    };

    if (roomType === "single") {
      room.price = 50;
    } else if (roomType === "double") {
      room.price = 100;
    } else if (roomType === "suite") {
      room.price = 200;
    }

    this.rooms.push(room);
  }

  addGuest(guestType) {
    const guest = {
      type: guestType,
      room: null,
    };

    if (guestType === "economy") {
      guest.room = this.rooms.find((room) => room.type === "single");
    } else if (guestType === "business") {
      guest.room = this.rooms.find((room) => room.type === "double");
    } else if (guestType === "luxury") {
      guest.room = this.rooms.find((room) => room.type === "suite");
    }

    this.guests.push(guest);
  }

  simulateDay() {
    // Simulate guest arrivals and departures
    this.guests.forEach((guest) => {
      if (Math.random() < 0.2) {
        guest.room.guests -= 1;
        this.guests.splice(this.guests.indexOf(guest), 1);
      } else if (Math.random() < 0.3) {
        guest.room.guests += 1;
        this.guests.push({
          type: guest.type,
          room: guest.room,
        });
      }
    });

    // Simulate room prices and revenue
    this.rooms.forEach((room) => {
      room.price += Math.floor(Math.random() * 10) - 5;
      if (room.price < 0) {
        room.price = 0;
      }
      this.funds += room.price * room.guests;
    });

    // Simulate reputation changes
    this.reputation += Math.floor(Math.random() * 5) - 2;
    if (this.reputation < 0) {
      this.reputation = 0;
    } else if (this.reputation > 100) {
      this.reputation = 100;
    }
  }

  updateUI() {
    const hotelName = document.getElementById("hotel-name");
    hotelName.textContent = this.name;

    const funds = document.getElementById("funds");
    funds.textContent = this.funds;

    const reputation = document.getElementById("reputation");
    reputation.textContent = this.reputation;

    const rooms = document.getElementById("rooms");
    rooms.innerHTML = "";
    this.rooms.forEach((room) => {
      const
