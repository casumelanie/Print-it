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

// Variables flèches slider
const btnPrev = document.querySelector(".arrow_left")
const btnNext = document.querySelector(".arrow_right")

// Variable à modifier pour changer image + texte + dot affiché
let slideActive = 0

// image affichée sur la bannière
const imageActive = document.querySelector(".banner-img")
imageActive.setAttribute("src", slides[slideActive].image)

// texte affiché sur la bannière 
const tagLineActive = document.querySelector(".banner-description")
tagLineActive.innerHTML = slides[slideActive].tagLine

// ajout des dots en fonction de la longueur du tableau slides
const dotContainer = document.querySelector(".dots")
for (let i = 0; i < slides.length; i++) {
	const newDot = document.createElement("div")
	newDot.classList.add("dot")
	dotContainer.appendChild(newDot)
}

// dot sélectionné sur la bannière
let dotActive = document.getElementsByClassName("dot")
dotActive[slideActive].classList.add("dot_selected")

// Évènement au clic sur la flèche de gauche
btnPrev.addEventListener('click', function(){
	//console.log("Test clic précédent")
	if (slideActive === 0) {
		slideActive = slides.length - 1
		updateSlide()
	}else {
		slideActive--
		updateSlide()
	}
})

// Évènement au clic sur la flèche de droite
btnNext.addEventListener('click', function(){
	//console.log("Test clic suivant")
	if (slideActive === slides.length - 1) {
		slideActive = 0
		updateSlide()
	}else {
		slideActive++
		updateSlide()
	}
})

// Fonction qui permet d'actualiser la valeur de slideActive dans les éléments concernés
function updateSlide() {
	imageActive.setAttribute("src", slides[slideActive].image)
	tagLineActive.innerHTML = slides[slideActive].tagLine
	dotActive[slideActive].classList.add("dot_selected")
}

// --> supprimer la classe selected du dot précédemment actif
// --> manque l'attribut alt sur les images à rajouter