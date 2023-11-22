const link = document.querySelector("a");

link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoed ride";
sect.appendChild(para);

const text = document.createTextNode(
    " — the premier source for web development knowledge.",
);
const linkPara = document.querySelector("p");
linkPara.appendChild(text)

sect.appendChild(linkPara);

para.setAttribute("class", "highlight")