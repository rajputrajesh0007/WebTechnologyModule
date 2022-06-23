window.onload = () => {
    makeAjax();
};

const makeAjax = async () => {
    try {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        const res = await fetch(url);

        // ===for proper error message start===========
        if (res.status != 200) {
            throw new Error(`Error:${res.status}`);
        }
        // ===for proper error message end===========

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

    } catch (e) {
        console.log(e);
        let excp = document.querySelector("#op");
        excp.innerHTML = `<p style="color:red">excption occur!!</p>`
    }
}