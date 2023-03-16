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

const productImageContainer = document.querySelector(".product-image-container");
const productImage = document.querySelector(".product-image");
const zoomedImage = document.querySelector(".zoomed-image");

productImageContainer.addEventListener("mousemove", (e) => {
  const imageWidth = productImage.offsetWidth;
  const imageHeight = productImage.offsetHeight;
  const x = e.pageX - productImageContainer.offsetLeft;
  const y = e.pageY - productImageContainer.offsetTop;
  const bgPosX = (x / imageWidth) * 100;
  const bgPosY = (y / imageHeight) * 100;

  zoomedImage.style.backgroundImage = `url(${productImage.src})`;
  zoomedImage.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
  zoomedImage.style.visibility = "visible";
});

productImageContainer.addEventListener("mouseleave", () => {
  zoomedImage.style.visibility = "hidden";
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