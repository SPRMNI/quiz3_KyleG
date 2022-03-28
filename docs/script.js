/*Load all the place code in below function*/
window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

/*load the latitude and longtitude*/
function staticLoadPlaces() {
    return [
        {
            name: 'MyModel',
            location: {
                lat: <your-latitude>,
                lng: <your-longitude>,
            }
        },
    ];
}



function renderPlaces(places) {
    let scene = document.querySelector('a-scene');
    /*use a-scene in html*/
    places.forEach((place) => {
        /*use latitude and longtitude*/
        let latitude = place.location.lat;
        let longitude = place.location.lng;
        /*load model createElement a-entity*/
        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        /*load model*/
        model.setAttribute('gltf-model', './assets/MyModel/scene.gltf');
        /*change model rotate*/
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        /*change model scale*/
        model.setAttribute('scale', '0.5 0.5 0.5');
        /*Load gps to addEventListener*/
        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}