const API_KEY = "d01b52607b6268014fcf997e439e6e1a"
const weather = document.querySelector("#weather span:last-child");
const city = document.querySelector("#weather span:first-child");

function onGeoOK(position) {
    //? when this function is running, it returns Geolocation object with coords property
    //* coords property has two more properties is latitide (vĩ độ) and longitude (kinh độ)
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log ("you is living at", latitude, longitude)
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    // console.log(url)
    //* fecth gửi và nhận request bằng js 
    //* Phương thức fetch () nhận đầu vào là url để truy vấn rồi trả về response của request đó.
    //* Phương thức fetch() trả về một promise có trạng thái resolves với giá trị là response cho request đó.
    //? Promise means something is not gonna happen ummediae, it is going to take some time because the server take some minutes to replied, so we need to wait for the server.
    //? Khi promise resolves, response được truyền tới .then. Đây là nơi mà có thể sử dụng response. Nếu request không thành công, thì sẽ chuyển tới .catch với tham số là lỗi tương ứng.
    fetch(url)
    .then (response => response.json())
    .then (data => {
        console.log(city)
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} degree`;
    })
}

function onGeoError() {
    alert ("you won't get any things about weather and location");
}


//* the first argument in getCurrentPosition will be run when we allow the browser access our location by wifi
//* the second one will be run if we din't allow browser access our location
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);