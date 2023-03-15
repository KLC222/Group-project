function changeTextColor() {
	if (document.getElementById("paratxt").style.color == "red") {
		document.getElementById("paratxt").style.color = "blue";
	} else {
		document.getElementById("paratxt").style.color = "red";
	}   
}

//PRODUCTS PAGE SCRIPT

const filter1 = document.getElementById('filter1');
	const filter2 = document.getElementById('filter2');
	const searchInput = document.getElementById('search-input');
	const searchButton = document.getElementById('search-button');
	const productCards = document.querySelectorAll('.product-card');

	searchButton.addEventListener('click', () => {
		const searchTerm = searchInput.value.toLowerCase();
		productCards.forEach(card => {
			if (card.querySelector('h3').textContent.toLowerCase().includes(searchTerm)) {
				card.style.display = 'inline-block';
			} else {
				card.style.display = 'none';
			}
		});
	});

	filter1.addEventListener('change', () => {
		const selectedCategory = filter1.value;
		productCards.forEach(card => {
			if (!selectedCategory || card.getAttribute('data-category') === selectedCategory) {
				card.style.display = 'inline-block';
			} else {
				card.style.display = 'none';
			}
		});
	});

	filter2.addEventListener('change', () => {
		const selectedPrice = filter2.value;
		productCards.forEach(card => {
			if (!selectedPrice || parseInt(card.getAttribute('data-price')) <= selectedPrice) {
				card.style.display = 'inline-block';
			} else {
				card.style.display = 'none';
			}
		});
	});


	const card = document.querySelector(".product-card");
const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD = 15;

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/a-3d-hover-effect-using-css-transforms
 */
function handleHover(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
  const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

  card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles(e) {
  card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia.matches) {
  card.addEventListener("mousemove", handleHover);
  card.addEventListener("mouseleave", resetStyles);
}




/* Store the elements with class "tilt" in elements */
let elements = Array.from(document.getElementsByClassName("product-card"));

/* For each 'item' in the "elements" array... */
elements.forEach((item) => {
  /* Assign each 'item' in the "elements" array to a variable called "el" */
  let el = item;

  /*
   * Add a listener for mousemove event
   * Which will trigger function 'handleMove'
   * On mousemove
   */
  el.addEventListener("mousemove", handleMove);

  /* Get the height and width of the element */
  const height = el.clientHeight;
  const width = el.clientWidth;

  /* Define function a */
  function handleMove(e) {
    /*
     * Get position of mouse cursor
     * With respect to the element
     * On mouseover
     */
    /* Store the x position */
    const xVal = e.layerX;
    /* Store the y position */
    const yVal = e.layerY;

    /*
     * Calculate rotation valuee along the Y-axis
     * Here the multiplier 20 is to
     * Control the rotation
     * You can change the value and see the results
     */
    const yRotation = 0 * ((xVal - width / 2) / width);

    /* Calculate the rotation along the X-axis */
    const xRotation = -0 * ((yVal - height / 2) / height);

    /* Generate string for CSS transform property */
    const string =
      "perspective(500px) scale(1.1) rotateX(" +
      xRotation +
      "deg) rotateY(" +
      yRotation +
      "deg)";

    /* Apply the calculated transformation */
    el.style.transform = string;
  }

  /* Add listener for mouseout event, remove the rotation */
  el.addEventListener("mouseout", function () {
    el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
  });


  /* Add listener for mouseup, simulate release of mouse click */
  el.addEventListener("mouseup", function () {
    el.style.transform = "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
  });
})



const plusBtn = document.querySelector(".plus-btn");
const minusBtn = document.querySelector(".minus-btn");
const inputField = document.querySelector(".counter-input");

// Add an event listener to the plus button
plusBtn.addEventListener("click", () => {
  // Increment the value of the input field by 1
  inputField.value = parseInt(inputField.value) + 1;
});

// Add an event listener to the minus button
minusBtn.addEventListener("click", () => {
  // Decrement the value of the input field by 1, but not below 1
  if (inputField.value > 1) {
    inputField.value = parseInt(inputField.value) - 1;
  }
});

//PRODUCTS PAGE SCRIPT END