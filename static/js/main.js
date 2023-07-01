var mainListDiv = document.getElementById("mainListDiv"),
	mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
	"use strict";

	mainListDiv.classList.toggle("show_list");
	mediaButton.classList.toggle("active");
};

submitbtn.addEventListener("click", (e) => {
	const loadingGif = document.getElementById("loadingGif");
	const tempbg = document.getElementById("tempbg");
	loadingGif.style.display = "block";
	tempbg.style.display = "none";
	e.preventDefault();
	const promptTxt = imgprompt.value;
	fetch("/generateimages/" + promptTxt)
		.then((response) => response.json())
		.then((data) => {
			loadingGif.style.display = "none";
			console.log(data);
			const images = data.data;
			const container = document.querySelector(".imageCont");
			let totalHtml = "";

			images.forEach((image) => {
				let html = `<div class="colum">
            <img width="340" src="${image.url}" class="img-responsive">
        </div>`;
				totalHtml += html;
			});
			container.innerHTML = totalHtml;
		});
});
