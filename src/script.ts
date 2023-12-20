import "./scripts/interfaces.ts";

import Flickity from "../node_modules/flickity/dist/flickity.pkgd.min.js";
import "../node_modules/flickity/dist/flickity.min.css";

import "./styles/styles.scss";

function sleepFor(sleepDuration) {
	var now = new Date().getTime();
	while (new Date().getTime() < now + sleepDuration) {
		/* Do nothing */
	}
}

let num = 1;
for (let index = 0; index < 1; index++) {
	let $gallery = $([`<div class="carousel">`, `</div>`].join("\n"));

	// let $gallery = $(".carousel");

	for (let index = 1; index < 10; index++) {
		$gallery.append(
			'<div class="carousel-cell"><img id="image" src="./assets/img(' +
				num +
				').jpg" alt="" /></div>'
		);
		num++;
	}

	$(".gallery-container").append($gallery);
}

$("body").waitForImages(function () {
	// All descendant images have loaded, now slide up.
	// We previously tried using setTimeout to let the images to load first

	console.log("Images have been loaded");
	$(".carousel").each(function (index, element) {
		console.log(element);
		let odd_or_even = index % 2 == 0;
		$(element).flickity({
			wrapAround: true,
			percentPosition: false,
			autoPlay: odd_or_even ? 2000 : 1500,
			imagesLoaded: true,
			rightToLeft: odd_or_even ? true : false,
			prevNextButtons: false,
			pageDots: false,
			pauseAutoPlayOnHover: false,
		});
	});
});
