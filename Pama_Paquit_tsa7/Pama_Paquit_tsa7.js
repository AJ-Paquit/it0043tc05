let flexContainer = document.getElementById("flexbox-container");

let resetButton = document.getElementById("resetFlexbox");
let gapInput = document.getElementById("gap");

let flexDirectionButtons = document.querySelectorAll(".flex-direction");
let justifyContentButtons = document.querySelectorAll(".justify-content");
let alignItemsButtons = document.querySelectorAll(".align-items");

let growAllButton = document.getElementById("growAll");
let resetGrowButton = document.getElementById("resetGrow");
let box1GrowInput = document.getElementById("box1Grow");
let box2GrowInput = document.getElementById("box2Grow");
let box3GrowInput = document.getElementById("box3Grow");

function resetFlexbox() {
    flexContainer.style.flexDirection = "row";
    flexContainer.style.justifyContent = "flex-start";
    flexContainer.style.alignItems = "flex-start";
    flexContainer.style.gap = "0px";

    let boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.flexGrow = "0";
    }

    gapInput.value = 0;
    box1GrowInput.value = 0;
    box2GrowInput.value = 0;
    box3GrowInput.value = 0;
}

function setGap() {
    flexContainer.style.gap = gapInput.value + "px";
}

function setFlexDirection(direction) {
    if (direction == "row") {
        flexContainer.style.flexDirection = "row";
    } else if (direction == "column") {
        flexContainer.style.flexDirection = "column";
    }
}

function setJustifyContent(justify) {
    if (justify == "flex-start") {
        flexContainer.style.justifyContent = "flex-start";
    } else if (justify == "center") {
        flexContainer.style.justifyContent = "center";
    } else if (justify == "flex-end") {
        flexContainer.style.justifyContent = "flex-end";
    } else if (justify == "space-between") {
        flexContainer.style.justifyContent = "space-between";
    } else if (justify == "space-around") {
        flexContainer.style.justifyContent = "space-around";
    } else if (justify == "space-evenly") {
        flexContainer.style.justifyContent = "space-evenly";
    }
}

function setAlignItems(align) {
    if (align == "flex-start") {
        flexContainer.style.alignItems = "flex-start";
    } else if (align == "center") {
        flexContainer.style.alignItems = "center";
    } else if (align == "flex-end") {
        flexContainer.style.alignItems = "flex-end";
    } else if (align == "stretch") {
        flexContainer.style.alignItems = "stretch";
    }
}

function growAllBoxes() {
    let boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.flexGrow = "1";
    }
    box1GrowInput.value = 1;
    box2GrowInput.value = 1;
    box3GrowInput.value = 1;
}

function resetGrow() {
    let boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.flexGrow = "0";
    }
    box1GrowInput.value = 0;
    box2GrowInput.value = 0;
    box3GrowInput.value = 0;
}

function setBoxGrow(boxId, value) {
    document.getElementById(boxId).style.flexGrow = value;
}

resetButton.onclick = resetFlexbox;
gapInput.oninput = setGap;

for (let i = 0; i < flexDirectionButtons.length; i++) {
    flexDirectionButtons[i].onclick = function () {
        setFlexDirection(this.dataset.direction);
    }
}

for (let i = 0; i < justifyContentButtons.length; i++) {
    justifyContentButtons[i].onclick = function () {
        setJustifyContent(this.dataset.justify);
    }
}

for (let i = 0; i < alignItemsButtons.length; i++) {
    alignItemsButtons[i].onclick = function () {
        setAlignItems(this.dataset.align);
    }
}

growAllButton.onclick = growAllBoxes;
resetGrowButton.onclick = resetGrow;

box1GrowInput.oninput = function () {
    setBoxGrow("box1", this.value);
}

box2GrowInput.oninput = function () {
    setBoxGrow("box2", this.value);
}

box3GrowInput.oninput = function () {
    setBoxGrow("box3", this.value);
}