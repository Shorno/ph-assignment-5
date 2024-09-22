const donationBtn = document.getElementById("donationBtn");
const historyBtn = document.getElementById("historyBtn");
let receivedDonationAmount = parseFloat(document.getElementById("receivedDonationAmount").innerText);
const donateBtn = document.getElementById("donateBtn");
let mainBalance = parseFloat(document.getElementById("mainBalance").innerText);


function toggleButton(activeBtn, inactiveBtn) {
    activeBtn.classList.remove("bg-base-200", "text-gray-500");
    activeBtn.classList.add("bg-lime-400", "text-black");
    inactiveBtn.classList.remove("bg-lime-400", "text-black");
    inactiveBtn.classList.add("bg-base-200", "text-gray-500");
}

historyBtn.addEventListener("click", () => {
    toggleButton(historyBtn, donationBtn);
})

donationBtn.addEventListener("click", () => {
    toggleButton(donationBtn, historyBtn);
})

donateBtn.addEventListener("click", () => {
    makeDonation();
})

const makeDonation = () => {
    const donationInputAmount = parseFloat(document.getElementById("donationInputAmount").value);
    const modal = document.getElementById("my_modal_5");

    if (donationInputAmount > 0 && donationInputAmount <= mainBalance) {
        receivedDonationAmount += donationInputAmount;
        mainBalance -= donationInputAmount;
        document.getElementById("mainBalance").innerText = mainBalance.toFixed(2);
        document.getElementById("receivedDonationAmount").innerText = receivedDonationAmount.toFixed(2);
        modal.showModal();
    } else {
        alert("Insufficient balance");
    }
}



