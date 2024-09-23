const getElement = (id) => document.getElementById(id);
const parseFloatFromElement = (id) => parseFloat(getElement(id).innerText);
const updateElementText = (id, value) => getElement(id).innerText = value.toFixed(2);
const getInputValue = (id) => getElement(id).value;

let mainBalance = parseFloatFromElement("mainBalance");
let receivedDonationAmount1 = parseFloatFromElement("receivedDonationAmount");
let receivedDonationAmount2 = parseFloatFromElement("receivedDonationAmount2");
let receivedDonationAmount3 = parseFloatFromElement("receivedDonationAmount3");

const toggleButton = (activeBtn, inactiveBtn) => {
    activeBtn.classList.remove("bg-base-200", "text-gray-500");
    activeBtn.classList.add("bg-lime-400", "text-black");
    inactiveBtn.classList.remove("bg-lime-400", "text-black");
    inactiveBtn.classList.add("bg-base-200", "text-gray-500");
};

let donationHeading = getElement("donationHeading");
let donationHeading2 = getElement("donationHeading2");
let donationHeading3 = getElement("donationHeading3");

const handleDonationHistory = (donationAmount, donationHeading) => {
    const text = donationHeading.innerText.split(" ").slice(1).join(" ");
    const finalTitle = `${donationAmount} Taka is Donated ${text}`;
    const time = `Date : ${new Date().toString()}`;

    const historyCard = getElement("historyCard");

    const historyEntry = document.createElement("div");
    historyEntry.classList.add("card", "bg-base-100", "w-full", "border");

    historyEntry.innerHTML = `
<div class="card-body">
    <h2 class="card-title font-bold">${finalTitle}</h2>
    <p>${time}</p>
</div>
`;

    historyCard.appendChild(historyEntry);
};

const handleDonation = (inputId, receivedAmountId, donationHeading, receivedDonationAmount) => {
    const donationAmountString = getInputValue(inputId);
    if (donationAmountString === "" || isNaN(donationAmountString)) {
        alert("Please enter a valid amount");
        return;
    }

    const donationInputAmount = parseFloat(donationAmountString);
    const modal = getElement("my_modal_5");

    if (donationInputAmount > 0 && donationInputAmount <= mainBalance) {

        const currentReceivedAmount = parseFloatFromElement(receivedAmountId);
        const newReceivedAmount = currentReceivedAmount + donationInputAmount;

        mainBalance -= donationInputAmount;
        updateElementText("mainBalance", mainBalance);
        updateElementText(receivedAmountId, newReceivedAmount);

        if (receivedAmountId === "receivedDonationAmount") {
            receivedDonationAmount1 = newReceivedAmount;
        } else if (receivedAmountId === "receivedDonationAmount2") {
            receivedDonationAmount2 = newReceivedAmount;
        } else if (receivedAmountId === "receivedDonationAmount3") {
            receivedDonationAmount3 = newReceivedAmount;
        }

        modal.showModal();
        handleDonationHistory(donationInputAmount, donationHeading);
    } else if (donationInputAmount < 0) {
        alert("Donation amount cannot be negative");
    } else {
        alert("Insufficient balance");
    }
};

const donationBtn = getElement("donationBtn");
const historyBtn = getElement("historyBtn");

const donateBtn = getElement("donateBtn");
const donateBtn2 = getElement("donateBtn2");
const donateBtn3 = getElement("donateBtn3");

const history = getElement("history");
const donation = getElement("donation");

historyBtn.addEventListener("click", () => {
    toggleButton(historyBtn, donationBtn);
    history.classList.remove("hidden");
    donation.classList.add("hidden");
});

donationBtn.addEventListener("click", () => {
    toggleButton(donationBtn, historyBtn);
    history.classList.add("hidden");
    donation.classList.remove("hidden");
});

donateBtn.addEventListener("click", () => {
    handleDonation("donationInputAmount", "receivedDonationAmount", donationHeading, receivedDonationAmount1);
});
donateBtn2.addEventListener("click", () => {
    handleDonation("donationInputAmount2", "receivedDonationAmount2", donationHeading2, receivedDonationAmount2);
});
donateBtn3.addEventListener("click", () => {
    handleDonation("donationInputAmount3", "receivedDonationAmount3", donationHeading3, receivedDonationAmount3);
});