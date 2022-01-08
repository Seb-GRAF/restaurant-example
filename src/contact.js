import { createBtn, createDiv, createImg } from "./module";
import "../styles/contact.scss"

function createContact() {
    content.appendChild(createDiv("", "contact", ""))

    contact.appendChild(createDiv("", "ctc1", ""))
    ctc1.style.backgroundImage = `url(${require("./assets/ctc-img1.jpg")})`
    
    contact.appendChild(createDiv("", "ctc2", ""));
    
    ctc2.appendChild(createDiv("", "ctc2Left", ""));
    ctc2Left.appendChild(createDiv("", "ctc2Map", ""))
    ctc2Map.innerHTML = `
    <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.635931162731!2d6.638405551333324!3d46.515316579024905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c2fb56734e7d9%3A0xeb173ddc525ce4b0!2sAv.%20Eglantine%205%2C%201006%20Lausanne!5e0!3m2!1sen!2sch!4v1641588203148!5m2!1sen!2sch" cursor="none" loading="lazy"></iframe>`;
    

    ctc2.appendChild(createDiv("","ctc2Right",""))
    ctc2Right.appendChild(createDiv("", "ctc2Form", ""));
    ctc2Form.innerHTML = 
    `<form id ="ctcForm">
    
        <span id="ctcUs">CONTACT US</span>
        <label class ="formLabel" for="fName">First name</label>
        <input required class ="formText" type ="text" id="fName">
    
        <label class ="formLabel" for="lName">Last name</label>
        <input required class ="formText"type ="text" id="lName">
    
        <label class ="formLabel" for="email">Email address</label>
        <input required class ="formText" type ="text" id="email">
    
        <label class ="formLabel" for="phone">Phone number</label>
        <input required class ="formText" type ="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}" id="phone" placeholder="+41 21 123 45 67">
    
        <label class ="formLabel" for="msg">Message</label>
        <textarea required type ="text" id="msg"></textarea>
    
        <button type="submit" id="submit">Submit</button>
    </form>`
    
    submit.addEventListener("click", (e)=> {
        e.preventDefault()
    })
}


export {createContact}