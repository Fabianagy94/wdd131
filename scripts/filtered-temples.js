

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "images/abanigeriatemple.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "images/mantiutahtemple.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "images/paysonutahtemple.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "images/yigoguamtemple.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "images/washingtond.c.temple.jpg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "images/limaperutemple.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "images/mexicocitymexicotemple.jpg"
    },
    {
        templeName: "Montreal Quebec",
        location: "Longueuil, Quebec, Canada",
        dedicated: "2000, June, 4",
        area: 11550,
        imageUrl: "images/montrealquebectemple.jpg"
    },
    {
        templeName: "Curitiba Brazil",
        location: "Curitiba, Paraná, Brazil",
        dedicated: "2008, June, 1",
        area: 27850,
        imageUrl: "images/curitibabraziltemple.jpg"
    },
    {
        templeName: "Okinawa Japan",
        location: "Okinawa, Japan",
        dedicated: "2023, November, 12",
        area: 12437,
        imageUrl: "images/okinawajapantemple.jpg"
    }
];

// Get the HTML elements
const templeContainer = document.querySelector("#temple-container");
const galleryTitle = document.querySelector("#gallery-title");
const navLinks = document.querySelectorAll("nav a");

// Display all temples when the page loads
displayTemples(temples);

// Create and display the temple cards
function displayTemples(templeList) {
    templeContainer.innerHTML = "";

    templeList.forEach((temple) => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML = `<strong>Size:</strong> ${temple.area.toLocaleString("en-US")} sq ft`;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} temple`;
        image.loading = "lazy";
        image.width = 400;
        image.height = 250;

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        templeContainer.appendChild(card);
    });
}

// Get the dedication year from the temple data
function getDedicationYear(temple) {
    return Number(temple.dedicated.split(",")[0]);
}

// Filter temples according to the selected navigation link
function filterTemples(filter) {
    let filteredTemples = [];

    switch (filter) {
        case "old":
            filteredTemples = temples.filter((temple) =>
                getDedicationYear(temple) < 1900
            );
            galleryTitle.textContent = "Old Temples";
            break;

        case "new":
            filteredTemples = temples.filter((temple) =>
                getDedicationYear(temple) > 2000
            );
            galleryTitle.textContent = "New Temples";
            break;

        case "large":
            filteredTemples = temples.filter((temple) =>
                temple.area > 90000
            );
            galleryTitle.textContent = "Large Temples";
            break;

        case "small":
            filteredTemples = temples.filter((temple) =>
                temple.area < 10000
            );
            galleryTitle.textContent = "Small Temples";
            break;

        default:
            filteredTemples = temples;
            galleryTitle.textContent = "Home";
    }

    displayTemples(filteredTemples);
}

// Add click events to the navigation links
navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const filter = link.dataset.filter;

        filterTemples(filter);

        navLinks.forEach((navLink) => {
            navLink.classList.remove("active");
        });

        link.classList.add("active");
    });
});

// Set the current year in the footer
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

// Set the last modified date in the footer
document.querySelector("#lastModified").textContent =
    document.lastModified;
