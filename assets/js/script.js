document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.querySelector("form");
    if (orderForm) {
        orderForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Thank you for your order! We will process it soon.");
        });
    }
});
