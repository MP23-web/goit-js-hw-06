const categoriesEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesEl.length}`);

for (let i=0; i< categoriesEl.length; i += 1) {
    console.log(categoriesEl[i].children[0].innerText);
    console.log(categoriesEl[i].children[1].children.length)
}