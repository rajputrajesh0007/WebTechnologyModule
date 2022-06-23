window.onload = () => {
    setTimeout(() => {
        makeAjax();
    }, 5000);
};

const makeAjax = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const res = await fetch(url);

    const list = await res.json();
    let current = document.querySelector("#op");
    let newValueOuter = "";
    for (let item of list) {
        newValue = ` <h1>${item.title}</h1>
                        <p>${item.body}</p> <hr>`
        newValueOuter += newValue;
    }
    //Performance improve become fast
    current.innerHTML = newValueOuter + current.innerHTML;

}