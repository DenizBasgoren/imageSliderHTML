let images=["https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2125_20210802112802.png/format:webp", "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2087_20210527101722.png/format:webp", "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2120_20210730172127.png/format:webp", "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2088_20200911202947.png/format:webp", "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2138_20210729151500.png/format:webp", "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2106_20210531120758.png/format:webp", "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2097_20210729171458.png/format:webp", "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2138_20210705155753.png/format:webp", "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2095_20210708133102.png/format:webp", "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2140_20210730233620.png/format:webp", "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2115_20210730181801.png/format:webp", "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2127_20210730172347.png/format:webp", "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2124_20210730133323.png/format:webp", "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2180_20210730195255.png/format:webp", "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2160_20210730183754.png/format:webp", "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2177_20210730195649.png/format:webp", "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2128_20210730173523.png/format:webp", "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2145_20210730165627.png/format:webp"]

let thumbnailsElement = document.querySelector('.thumbnails')
let currentImageIndex = 0


for (let i = 0; i< images.length; i++) {
	let address = images[i]

	thumbnailsElement.innerHTML += `<div onclick=";currentImageIndex=${i};changeImage(${i})" >
	<img src="${address}" alt="Cannot download image">
	</div>`
}

function changeImage(index) {
	let imageElement = document.querySelector('.big-image > img')
	imageElement.src = images[index]

	let imageArray = document.querySelectorAll('.thumbnails img')

	// remove class 'activeImage' from all images
	for (let i = 0; i<imageArray.length; i++) {
		imageArray[i].classList.remove('activeImage')
	}

	let activeImage = imageArray[currentImageIndex]
	activeImage.classList.add('activeImage') // su andaki resimden kaldir

}


function back() {
	currentImageIndex--
	if (currentImageIndex == -1) {
		currentImageIndex = images.length - 1
	}
	changeImage(currentImageIndex)
}

function next() {
	currentImageIndex++
	if (currentImageIndex == images.length) {
		currentImageIndex = 0
	}
	changeImage(currentImageIndex)
}
