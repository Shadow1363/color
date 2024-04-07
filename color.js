fetch("./followers.json")
  .then((response) => response.json())
  .then((JSON) => {
    console.log(JSON);
    for (let i = 0; i < JSON.followers.length; i++) {
      const USERNAME = JSON.followers[i].username;
      const PRI_COLOR = usernameColorChecker(USERNAME);
      const COM_COLOR = getComplementaryColor(PRI_COLOR);
      addName(USERNAME, PRI_COLOR, COM_COLOR);
    }
  })
  .catch((error) => console.error("Error:", error));

function stringToColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    console.log(hash);
  }
  let color = "#";
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    color += ("00" + value.toString(16)).substr(-2);
  }
  console.log(str, hash, color);
  return color;
}

function getComplementaryColor(hexColor) {
  hexColor = hexColor.replace("#", "");

  let r = parseInt(hexColor.substring(0, 2), 16);
  let g = parseInt(hexColor.substring(2, 4), 16);
  let b = parseInt(hexColor.substring(4, 6), 16);

  r = 255 - r;
  g = 255 - g;
  b = 255 - b;

  const COMP_COLOR =
    "#" +
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0");

  return COMP_COLOR;
}

function addName(username, color, compColor) {
  const ANIMAL = document.createElement("div");

  ANIMAL.setAttribute(
    "style",
    `color: ${color}; background-color: ${compColor}`
  );
  ANIMAL.textContent = username;

  document.body.appendChild(ANIMAL);
}

function usernameColorChecker(str) {
  if (str.match(/red/)) {
  } else if (str.match(/blue/)) {
    str =
      "#" +
      "0000" +
      Math.floor(Math.random() * 256)
        .toString(16)
        .padStart(2, "0");
  } else if (str.match(/green/)) {
  } else if (str.match(/purple/)) {
  } else if (str.match(/orange/)) {
  } else if (str.match(/yellow/)) {
  } else if (str.match(/black/)) {
  } else if (str.match(/white/)) {
  } else if (str.match(/lime/)) {
  } else if (str.match(/grey/) || str.match(/gray/)) {
  } else if (str.match(/pink/)) {
  } else if (str.match(/cyan/)) {
  } else if (str.match(/color/)) {
  } else {
    str = stringToColor(str);
  }
  return str;
}
