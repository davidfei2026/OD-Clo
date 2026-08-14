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


