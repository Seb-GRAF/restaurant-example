function createCursor() {
    const body = document.querySelector("body")
    const cursor = document.createElement("div")
    cursor.setAttribute("id", "cursor")
    return cursor
}
function cursorHover(e) {
    document.getElementById("cursor").style.left = `${e.pageX}px`;
    document.getElementById("cursor").style.top = `${e.pageY}px`;
}
export {createCursor, cursorHover}