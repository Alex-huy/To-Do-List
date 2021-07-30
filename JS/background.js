const images = ["0.jfif", "1.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)]
let img = new Image();
console.log(chosenImage)
img.loading = "lazy"
img.src = `../img/${chosenImage}`
img.classList.add("backgound")

document.body.appendChild(img)

export {chosenImage}