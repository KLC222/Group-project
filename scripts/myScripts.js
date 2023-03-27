function changeTextColor() {
	if (document.getElementById("paratxt").style.color == "red") {
		document.getElementById("paratxt").style.color = "blue";
	} else {
		document.getElementById("paratxt").style.color = "red";
	}   
}

//PRODUCTS PAGE SCRIPT

document.addEventListener("DOMContentLoaded", function () {
  const searchBar = document.getElementById("search-bar");
  const productContainer = document.getElementById("product-container");
  const productBoxes = document.querySelectorAll(".product-box");

  function onScroll() {
    const windowHeight = window.innerHeight;

    productBoxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop <= windowHeight * 0.8) {
        box.classList.add("visible");
      }
    });
  }
 
  

  function filterProducts(e) {
    const searchTerm = e.target.value.toLowerCase();

    productBoxes.forEach((box) => {
      const keywords = box.dataset.keywords.toLowerCase();
      const showBox = keywords.includes(searchTerm);
      box.style.display = showBox ? "block" : "none";
    });
  }

  searchBar.addEventListener("input", filterProducts);
  window.addEventListener("scroll", onScroll);

  // Fade in and slide in animations
  const header = document.querySelector(".brand-container");
  const shopText = document.querySelector(".shop-text");

  header.style.opacity = 0;
  shopText.style.opacity = 0;
  shopText.style.transform = "translateX(-100%)";

  setTimeout(() => {
    header.style.transition = "opacity 1s";
    header.style.opacity = 1;

    shopText.style.transition = "opacity 1s, transform 1s";
    shopText.style.opacity = 1;
    shopText.style.transform = "translateX(0)";
  }, 100);

  onScroll();
});



document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("modal");
  var btn = document.querySelector(".product-button");
  var span = document.querySelector(".close");

  btn.onclick = function () {
    modal.style.display = "block";
    setTimeout(function () {
      document.querySelector(".modal-content").style.transform = "translateY(25%)";
      document.querySelector(".modal-content").style.opacity = "1";
    }, 1);
  };
  
  span.onclick = function () {
    document.querySelector(".modal-content").style.transform = "translateY(-100%)";
    document.querySelector(".modal-content").style.opacity = "0";
    setTimeout(function () {
      modal.style.display = "none";
    }, 300);
  };
  
  window.onclick = function (event) {
    if (event.target == modal) {
      document.querySelector(".modal-content").style.transform = "translateY(-100%)";
      document.querySelector(".modal-content").style.opacity = "0";
      setTimeout(function () {
        modal.style.display = "none";
      }, 300);
    }
  };
  
});


//PRODUCTS PAGE SCRIPT END

//PRODUCTS BOLTS PAGE SCRIPT

function addImageZoom() {
  const imageWrapper = document.querySelector('.product-image-wrapper');
  const productImage = document.querySelector('.product-image');

  if (!imageWrapper || !productImage) {
    return;
  }

  imageWrapper.addEventListener('mousemove', (e) => {
    const rect = imageWrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const zoomLevel = 2;
    const offsetX = -Math.round((x / rect.width) * (zoomLevel - 1) * 100);
    const offsetY = -Math.round((y / rect.height) * (zoomLevel - 1) * 100);
    productImage.style.transformOrigin = `${x}px ${y}px`;
    productImage.style.transform = `scale(${zoomLevel})`;
  });

  imageWrapper.addEventListener('mouseleave', () => {
    productImage.style.transform = '';
  });
}

document.addEventListener('DOMContentLoaded', function () {
  // Add the following line inside the DOMContentLoaded event handler:
  addImageZoom();

  // ... (your existing code)
});

document.querySelector('.show-popup-form').addEventListener('click', function() {
  document.getElementById('popup-form').classList.remove('hidden');
});

document.getElementById('cancel-btn').addEventListener('click', function() {
  document.getElementById('popup-form').classList.add('hidden');
});


const enquiryButton = document.querySelector('.enquire-button');
const cancelButton = document.getElementById('cancelButton');
const enquiryForm = document.getElementById('enquiryForm');
const modalBackdrop = document.getElementById('modalBackdrop');

enquiryButton.addEventListener('click', () => {
  modalBackdrop.classList.add('visible');
});

cancelButton.addEventListener('click', () => {
  modalBackdrop.classList.remove('visible');
});

//PRODUCTS BOLTS PAGE END