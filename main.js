const links = [
  {
    label: "Portafolio / Website",
    url: "https://www.vicentejorquera.dev/",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/vicentejorquera/",
  },
  {
    label: "GitHub",
    url: "https://www.github.com/VicenteJ20",
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/jvicente_20",
  },
];

const socialLinks = document.getElementById("social-links");

links.forEach((link) => {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.textContent = link.label;
  a.href = link.url;
  a.target = "_blank";
  a.classList.add("social-link-a");

  li.classList.add("social-link-li");
  li.appendChild(a);
  socialLinks.appendChild(li);
});