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
      document.querySelector(".modal-content").style.transform =
        "translateY(25%)";
      document.querySelector(".modal-content").style.opacity = "1";
    }, 1);
  };

  span.onclick = function () {
    document.querySelector(".modal-content").style.transform =
      "translateY(-100%)";
    document.querySelector(".modal-content").style.opacity = "0";
    setTimeout(function () {
      modal.style.display = "none";
    }, 300);
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      document.querySelector(".modal-content").style.transform =
        "translateY(-100%)";
      document.querySelector(".modal-content").style.opacity = "0";
      setTimeout(function () {
        modal.style.display = "none";
      }, 300);
    }
  };
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function toggleToTopBtnVisibility() {
  const toTopBtn = document.querySelector('.toTopBtn');
  if (window.scrollY > 1200) {
    toTopBtn.style.display = 'block';
  } else {
    toTopBtn.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const toTopBtn = document.querySelector('.toTopBtn');
  toTopBtn.addEventListener('click', scrollToTop);
  window.addEventListener('scroll', toggleToTopBtnVisibility);
});

//PRODUCTS PAGE SCRIPT END

//PRODUCTS BOLTS PAGE SCRIPT

function addImageZoom() {
  const imageWrapper = document.querySelector(".product-image-wrapper");
  const productImage = document.querySelector(".product-image");

  if (!imageWrapper || !productImage) {
    return;
  }

  imageWrapper.addEventListener("mousemove", (e) => {
    const rect = imageWrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const zoomLevel = 2;
    const offsetX = -Math.round((x / rect.width) * (zoomLevel - 1) * 100);
    const offsetY = -Math.round((y / rect.height) * (zoomLevel - 1) * 100);
    productImage.style.transformOrigin = `${x}px ${y}px`;
    productImage.style.transform = `scale(${zoomLevel})`;
  });

  imageWrapper.addEventListener("mouseleave", () => {
    productImage.style.transform = "";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  
  addImageZoom();


});

function handleForm() {
  document.querySelector(".enquire-btn").addEventListener("click", () => {
    const formContainer = document.querySelector(".form-container");
    formContainer.classList.remove("hidden");
    formContainer.style.opacity = "0";
    setTimeout(() => {
      formContainer.style.opacity = "1";
    }, 50);
  });

  document.querySelector(".cancel-btn").addEventListener("click", () => {
    const formContainer = document.querySelector(".form-container");
    formContainer.style.opacity = "0";
    setTimeout(() => {
      formContainer.classList.add("hidden");
    }, 300);
  });

  document
    .querySelector(".enquiry-form")
    .addEventListener("submit", (event) => {
      event.preventDefault();



      const formContainer = document.querySelector(".form-container");
      formContainer.style.opacity = "0";
      setTimeout(() => {
        formContainer.classList.add("hidden");
      }, 300);
    });
}

document.addEventListener("DOMContentLoaded", function () {
 
  handleForm();

  // ... (your existing code)
});




//PRODUCTS BOLTS PAGE END

//About Page

function changeBackgroundColor() {
  var body = document.getElementsByTagName("body")[0];
  body.style.backgroundColor = "#ff9800";
}
//End About Page

// Service page start
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
});

for (const imgScroll of document.querySelectorAll(".img-scroll")) {
  observer.observe(imgScroll);
}

// Service page end

//LINKS PAGE START



//LINKS PAGE END
