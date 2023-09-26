const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const btnNext = document.querySelector(".arrow_right")
const btnPrev = document.querySelector(".arrow_left")

btnPrev.addEventListener('click', function(){
	console.log("Clic précédent effectué")
})

btnNext.addEventListener('click', function(){
	console.log("Clic suivant effectué")
})

let dotContainer = document.querySelector(".dots")
for (let i = 0; i < slides.length; i++) {
	let newDot = document.createElement("div")
	newDot.classList.add("dot")
	dotContainer.appendChild(newDot)
}

let dotActive = document.getElementsByClassName("dot")
dotActive[0].classList.add("dot_selected")