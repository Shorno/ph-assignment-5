const getElement = (id) => document.getElementById(id);
const parseFloatFromElement = (id) => parseFloat(getElement(id).innerText);
const updateElementText = (id, value) => getElement(id).innerText = value.toFixed(2);
const getInputValue = (id) => getElement(id).value;

let mainBalance = parseFloatFromElement("mainBalance");
let receivedDonationAmount = parseFloatFromElement("receivedDonationAmount");

const toggleButton = (activeBtn, inactiveBtn) => {
    activeBtn.classList.remove("bg-base-200", "text-gray-500");
    activeBtn.classList.add("bg-lime-400", "text-black");
    inactiveBtn.classList.remove("bg-lime-400", "text-black");
    inactiveBtn.classList.add("bg-base-200", "text-gray-500");
};

const handleDonation = (inputId, receivedAmountId) => {
    const donationAmountString = getInputValue(inputId)
    if (donationAmountString === "" || isNaN(donationAmountString)) {
        alert("Please enter a valid amount");
        return;
    }

    const donationInputAmount = parseFloat(getElement(inputId).value);
    const modal = getElement("my_modal_5");

    if (donationInputAmount > 0 && donationInputAmount <= mainBalance) {
        receivedDonationAmount += donationInputAmount;
        mainBalance -= donationInputAmount;
        updateElementText("mainBalance", mainBalance);
        updateElementText(receivedAmountId, receivedDonationAmount);
        modal.showModal();
    } else {
        alert("Insufficient balance");
    }
};


const donationBtn = getElement("donationBtn");
const historyBtn = getElement("historyBtn");
const donateBtn = getElement("donateBtn");

historyBtn.addEventListener("click", () => {
    toggleButton(historyBtn, donationBtn);
});

donationBtn.addEventListener("click", () => {
    toggleButton(donationBtn, historyBtn);
});

donateBtn.addEventListener("click", () => {
    handleDonation("donationInputAmount", "receivedDonationAmount");
});