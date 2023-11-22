L.mapquest.key = 'YOUR-API-KEY-HERE';

// 'map' refers to a <div> element with the ID map
const map = L.mapquest.map('map', {
    center: [53.480759, -2.242631],
    // 1. change 'map' to 'hybrid', try other type of map
    layers: L.mapquest.tileLayer('hybrid'),
    zoom: 12
});

// 2. Add control
map.addControl(L.mapquest.control());

// 3. Add icon
L.marker([53.480759, -2.242631], {
        icon: L.mapquest.icons.marker({
            primaryColor: '#22407F',
            secondaryColor: '#3B5998',
            shadow: true,
            size: 'md',
            symbol: 'A'
        })
    })
    .bindPopup('This is Manchester!')
    .addTo(map);

/*
   Next, you need to go to the Mapquest developer site, create an account, 
   and then create a developer key to use with your example. 
   (At the time of writing, it was called a "consumer key" on 
   the site, and the key creation process also asked for an optional 
   "callback URL". You don't need to fill in a URL here: just leave 
   it blank.)
*/