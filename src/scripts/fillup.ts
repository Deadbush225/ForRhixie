import $ from "jquery";

let num = 0;

document.querySelectorAll(".gallery").forEach((element, index, parent) => {
	let gallery = $(element);

	console.log(gallery);

	for (let i = 1; i < 10; i++) {
		num++;
		gallery.append(
			'<div class="gallery-cell"><img src="./assets/img(' +
				num +
				').jpg" alt=""/></div>'
		);
	}
});

// import "../assets/img(0).jpg";
import "../assets/img(1).jpg";
import "../assets/img(2).jpg";
import "../assets/img(3).jpg";
import "../assets/img(4).jpg";
import "../assets/img(5).jpg";
import "../assets/img(6).jpg";
import "../assets/img(7).jpg";
import "../assets/img(8).jpg";
import "../assets/img(9).jpg";
import "../assets/img(10).jpg";
// import "../assets/img(11).jpg";
// import "../assets/img(12).jpg";
// import "../assets/img(13).jpg";
// import "../assets/img(14).jpg";
// import "../assets/img(15).jpg";
// import "../assets/img(16).jpg";
// import "../assets/img(17).jpg";
// import "../assets/img(18).jpg";
// import "../assets/img(19).jpg";
// import "../assets/img(20).jpg";
// import "../assets/img(21).jpg";
// import "../assets/img(22).jpg";
// import "../assets/img(23).jpg";
// import "../assets/img(24).jpg";
// import "../assets/img(25).jpg";
// import "../assets/img(26).jpg";
// import "../assets/img(27).jpg";
// import "../assets/img(28).jpg";
// import "../assets/img(29).jpg";
// import "../assets/img(30).jpg";
// import "../assets/img(31).jpg";
// import "../assets/img(32).jpg";
// import "../assets/img(33).jpg";
// import "../assets/img(34).jpg";
// import "../assets/img(35).jpg";
// import "../assets/img(36).jpg";
// import "../assets/img(37).jpg";
// import "../assets/img(38).jpg";
// import "../assets/img(39).jpg";
