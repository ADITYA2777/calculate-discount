

const audio = new Audio("./alert.mp3")
const discountBtn = document.getElementById("dis-btn");
discountBtn.addEventListener("click", () => {
    let OriginalPrice = document.querySelector("#actualPrice").value
    let DiscountPrice = document.querySelector("#actualDiscount").value;

    if (OriginalPrice ===""|| DiscountPrice ==="") {
        audio.play();
        alert("please enter all the input field")
    }
    else {
        const discount = OriginalPrice - DiscountPrice;
        const percentageDiscount = 100 * (Number(discount/OriginalPrice));
        document.querySelector(".output").innerHTML =
            `Congrualtions 🚀 aditya jain  you got <span class="DiscountPercentage">
            ${percentageDiscount.toFixed(2)}</span>
    discount on  this product`;
        document.querySelector(".img-gif").style.display="flex";
    }
});