const dropdown = document.getElementById("dropdown__themes");

const setTheme = () => {
  const theme = sessionStorage.getItem("theme");
  if (theme === "night") {
    document.getElementById("body__theme").className = "sailor__night";
  } else {
    document.getElementById("body__theme").className = "sailor__day";
  }
};

const themeChange = () => {
  document.getElementById("theme__button").onclick = (event) => {
    dropdown.style.display = "flex";
    event.stopPropagation();
    window.onclick = (ev) => {
      dropdown.style.display = "none";
    };
  };
  document.getElementById("theme__button_dpd").onclick = (event) => {
    dropdown.style.display = "flex";
    event.stopPropagation();
    window.onclick = (ev) => {
      dropdown.style.display = "none";
    };
  };
  document.getElementById("theme__button__nite").onclick = () => {
    document.getElementById("body__theme").className = "sailor__night";
    dropdown.style.display = "none";
    sessionStorage.setItem("theme", "night");
  };
  document.getElementById("theme__button__day").onclick = () => {
    document.getElementById("body__theme").className = "sailor__day";
    dropdown.style.display = "none";
    sessionStorage.setItem("theme", "day");
  };
};
