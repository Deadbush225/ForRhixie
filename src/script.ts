// import "./scripts/interfaces.ts";
import "https://code.jquery.com/jquery-3.6.3.slim.js";
import "https://cdnjs.cloudflare.com/ajax/libs/jquery.waitforimages/1.5.0/jquery.waitforimages.min.js";

declare global {
	interface JQuery {
		// setJQuery(jquery: any): void;
		waitForImages(func: Function): void;
		// flickity(options: any);
	}
}

// import "../node_modules/flickity/dist/flickity.pkgd.min.js"; // //todo: make this persist on build

import jQueryBridget from "jquery-bridget";
import Flickity from "flickity"; // todo: make this persist in dev
import "../node_modules/flickity/dist/flickity.min.css";

import "./styles/styles.scss";

import TypeIt from "typeit";

function sleepFor(sleepDuration: number) {
	var now = new Date().getTime();
	while (new Date().getTime() < now + sleepDuration) {
		/* Do nothing */
	}
}

let range = Array.from({ length: 54 }, (_, i) => i + 1);
// console.log(range);

// let num = 1;
for (let index = 0; index < 6; index++) {
	let $gallery = $([`<div class="carousel">`, `</div>`].join("\n"));

	// let $gallery = $(".carousel");

	for (let index = 1; index < 10; index++) {
		let rand_index = Math.floor(Math.random() * range.length);
		console.log(rand_index);
		console.log(range[rand_index]);
		// index = rand * range.length; //(5)
		$gallery.append(
			'<div class="carousel-cell"><img id="image" src="./assets/img(' +
				range[rand_index] +
				').jpg" alt="" /></div>'
		);
		range.splice(rand_index, 1);
		// num++;
	}

	$(".gallery-container").append($gallery);
}

$("body").waitForImages(function () {
	// console.log("Images have been loaded");
	$(".carousel").each(function (index, element) {
		console.log(element);
		let odd_or_even = index % 2 == 0;

		Flickity.setJQuery($);
		jQueryBridget("flickity", Flickity, $);

		$(element).flickity({
			wrapAround: true,
			percentPosition: false,
			autoPlay: odd_or_even ? 2000 : 1500,
			imagesLoaded: true,
			rightToLeft: odd_or_even ? true : false,
			prevNextButtons: false,
			pageDots: false,
			pauseAutoPlayOnHover: false,
			cellAlign: "left",
		});
	});
});
