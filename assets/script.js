const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let slideActive = 0
// Variable à modifier pour changer image + texte + dot

const btnNext = document.querySelector(".arrow_right")
const btnPrev = document.querySelector(".arrow_left")

btnPrev.addEventListener('click', function(){
	console.log("Test clic précédent")
})
// Évènement au clic sur la flèche de gauche

btnNext.addEventListener('click', function(nextSlide){
	console.log("Test clic suivant")
	function nextSlide (slideActive) {
		slideActive = slideActive++
		return slideActive
	}
})
// Évènement au clic sur la flèche de droite

const imageActive = document.querySelector(".banner-img")
imageActive.setAttribute("src", slides[slideActive].image)
// image affichée sur la bannière

const tagLineActive = document.querySelector(".banner-description")
tagLineActive.innerHTML = slides[slideActive].tagLine
// texte affiché sur la bannière 

const dotContainer = document.querySelector(".dots")
for (let i = 0; i < slides.length; i++) {
	const newDot = document.createElement("div")
	newDot.classList.add("dot")
	dotContainer.appendChild(newDot)
}
// ajout des dots en fonction de la longueur du tableau slides

let dotActive = document.getElementsByClassName("dot")
dotActive[slideActive].classList.add("dot_selected")
// dot sélectionné sur la bannière