function createDiv(divName, divId, divClass) {
    const div = document.createElement("div");
    if (divId !== "") div.setAttribute("id", divId);
    if (divName !== "") div.textContent = divName;
    if (divClass !== "") div.classList.add(divClass);
    return div;
  }
  
  function createImg(imgId, imgClass, imgSource) {
    const img = document.createElement("img");
    if (imgSource !== "") img.setAttribute("src", imgSource);
    if (imgId !== "") img.setAttribute("id", imgId)
    if (imgClass !== "") img.classList.add(imgClass);
    return img;
  }

  function createBtn(btnName, btnId, btnClass) {
    const btn = document.createElement("button");
    btn.setAttribute("id", btnId);
    btn.textContent = btnName;
    if (btnClass !== "") btn.classList.add(btnClass);
    return btn;
  }

  export {createDiv, createImg, createBtn }