const donationBtn = document.getElementById("donationBtn");
const historyBtn = document.getElementById("historyBtn");


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
