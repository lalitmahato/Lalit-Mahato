window.onload = function() {
    alert("Hello TEJ!");
};

var add_samosa_btn = document.getElementById("add-samosa-quantity");
var remove_samosa_btn = document.getElementById("remove-samosa-quantity");
var add_tea_btn = document.getElementById("add-tea-quantity");
var remove_tea_btn = document.getElementById("remove-tea-quantity");
var calculate_grand_total_btn = document.getElementById("calculate-grand-total");

function add_samosa(){
    var samosa = document.getElementById("samosa-quantity");
    var samosa_quantity = parseInt(samosa.textContent);
    samosa_quantity = samosa_quantity + 1;
    samosa.innerHTML = samosa_quantity;
}

function remove_samosa(){
    samosa = document.getElementById("samosa-quantity");
    samosa_quantity = parseInt(samosa.textContent);
    if (samosa_quantity > 0) {
        samosa_quantity = samosa_quantity - 1;
        samosa.innerHTML = samosa_quantity;
    }
}

function add_tea(){
    var tea = document.getElementById("tea-quantity");
    var tea_quantity = parseInt(tea.textContent);
    tea_quantity = tea_quantity + 1;
    tea.innerHTML = tea_quantity;
}

function remove_tea(){
    tea = document.getElementById("tea-quantity");
    tea_quantity = parseInt(tea.textContent);
    if (tea_quantity > 0) {
        tea_quantity = tea_quantity - 1;
        tea.innerHTML = tea_quantity;
    }
}

function calculate_grand_total(){
    var samosa_price = document.getElementById("samosa-price");
    var samosa = document.getElementById("samosa-quantity");
    var samosa_total = document.getElementById("samosa-total");
    var tea_price = document.getElementById("tea-price");
    var tea = document.getElementById("tea-quantity");
    var tea_total = document.getElementById("tea-total");
    var total = document.getElementById("total-price");
    var vat = document.getElementById("vat");
    var tip = document.getElementById('tip');
    var grand_total = document.getElementById("grand-total");

    var samosa_price_value = parseInt(samosa_price.value);
    var samosa_quantity = parseInt(samosa.textContent);
    var tea_price_value = parseInt(tea_price.value);
    var tea_quantity = parseInt(tea.textContent);

    var samosa_total_price = samosa_price_value * samosa_quantity;
    var tea_total_price = tea_price_value * tea_quantity;
    var total_price = samosa_total_price + tea_total_price;
    var vat_value = total_price * 0.13;
    var tip_value = total_price * 0.1;
    var grand_total_value = total_price + vat_value + tip_value;

    samosa_total.innerHTML = samosa_total_price;
    tea_total.innerHTML = tea_total_price;
    total.innerHTML = total_price;
    vat.innerHTML = vat_value;
    tip.innerHTML = tip_value;
    grand_total.innerHTML = grand_total_value;
}


add_samosa_btn.addEventListener("click", add_samosa);
remove_samosa_btn.addEventListener("click", remove_samosa);
add_tea_btn.addEventListener("click", add_tea);
remove_tea_btn.addEventListener("click", remove_tea);
calculate_grand_total_btn.addEventListener("click", calculate_grand_total);