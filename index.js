const containers = document.querySelectorAll(".project_container");

function clearActiveClass() {
	for (i = 0; i < containers.length; i++) {
		containers[i].classList.remove("active_container");
	}
}

function addClickListener() {
	containers.forEach((container) => {
		container.addEventListener("click", () => {
			if (!container.classList.contains("active_container")) {
				clearActiveClass();
				container.classList.add("active_container");
			} else {
				clearActiveClass();
			}
		});
	});
}

function main() {
	addClickListener();
}

main();
