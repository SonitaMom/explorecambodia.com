const tabs = document.querySelectorAll(".day-btn");
const panels = document.querySelectorAll(".day-panel");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const day = tab.getAttribute("data-day");
    tabs.forEach((t) => t.classList.remove("active"));
    panels.forEach((p) => p.classList.remove("active"));
    tab.classList.add("active");
    document
      .querySelector('.day-panel[data-day="' + day + '"]')
      .classList.add("active");
  });
});
