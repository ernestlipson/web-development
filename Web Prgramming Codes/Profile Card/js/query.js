const link = document.querySelector("a");
console.log(link.getAttribute("href"));

link.setAttribute('href', 'www.AppleAll.com.knust');
link.innerText = "We still Rain";

const msg = document.querySelector('p');
console.log(msg);
console.log(msg.classList);
console.log(msg.innerText);
msg.innerHTML = "@opoku-faraday-etilson";

msg.forEach(element => {
    console.log(element.innerHTML);
});