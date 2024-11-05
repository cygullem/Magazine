document.addEventListener("DOMContentLoaded", function () {
    var kimberlyn = document.getElementById("Kimberlyn");
    var kriszia = document.getElementById("Kriszia");
    var jamica = document.getElementById("Jamica");

    if (kimberlyn) { 
        kimberlyn.addEventListener("click", function () {
            var Kim = confirm("Visit Kimberlyn's Facebook profile?");
            if (Kim) {
                window.location.href = "https://www.facebook.com/kim.berlyn.7923";
            }
        });
    }
    if (kriszia) { 
        kriszia.addEventListener("click", function () {
            var Kri = confirm("Visit Kriszia's Facebook profile?");
            if (Kri) {
                window.location.href = "https://web.facebook.com/kriszia.gullem";
            }
        });
    }
    if (jamica) { 
        jamica.addEventListener("click", function () {
            var Jam = confirm("Visit Jamica's Facebook profile?");
            if (Jam) {
                window.location.href = "https://www.facebook.com/profile.php?id=61550861074430";
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var imgContainer = document.querySelector(".img_container");
    var enlargedImage = document.getElementById("enlargedImage");
    var popupContainer = document.querySelector(".popup_container");
    var closeBtn = document.getElementById("closeBtn");

    imgContainer.addEventListener("click", function () {
        var imgSrc = imgContainer.querySelector("img").src;
        enlargedImage.src = imgSrc;
        popupContainer.style.display = "flex";
    });

    closeBtn.addEventListener("click", function () {
        popupContainer.style.display = "none";
    });
});

