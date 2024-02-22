const spaceContainer = document.getElementById("space-container");
const title = document.createElement("h2");
const planetsContainer = document.createElement("div");
const planetsListTitle = document.createElement("h3");
const planetsList = document.createElement("ul");
const universeImg = document.createElement("img");

spaceContainer.appendChild(title);
spaceContainer.appendChild(universeImg);
spaceContainer.appendChild(planetsContainer);

planetsContainer.appendChild(planetsListTitle);
planetsContainer.appendChild(planetsList);


universeImg.src = "https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP-1200-80.jpg";

title.textContent = "The Universe";
title.style.color = "purple";
planetsListTitle.textContent = "Our Planets.";

planetsContainer.setAttribute("style", "border: 1px solid black; width: 100%; padding: 20px;background-color: lightgray ");


planetsList.innerHTML = "<li>Mars</li><li>Venus</li><li>Earth</li>"

