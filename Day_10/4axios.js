const makeAjax = async () => {
    try {
        const url = `https://jsonplaceholder.typicode.com/postsas`;

        let res = await axios.get(url);
        console.log(res);

        let current = document.querySelector("#op");
        newValueOuter = "";
        for (let item of res.data) {
            let newValue = `<div style="background-color:orange">
                                <h3>${item.title}</h3>
                                <p >${item.body}</p>
                            </div>`;
            newValueOuter += newValue;
        }
        current.innerHTML = newValueOuter + current.innerHTML;
    } catch (e) {
        let error = document.querySelector(".err");
        error.innerHTML = `<h4 style="color:red">Exception occur!!!!</h4>`;
    }
}