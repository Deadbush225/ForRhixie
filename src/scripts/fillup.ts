import $ from "jquery";

let num = 0;

document.querySelectorAll(".gallery").forEach((element, index, parent) => {
	let gallery = $(element);

	console.log(gallery);

	for (let i = 1; i < 10; i++) {
		num++;
		gallery.append(
			'<div class="gallery-cell"><img src="./assets/img (' +
				num +
				').jpg" alt=""/></div>'
		);
	}
});
