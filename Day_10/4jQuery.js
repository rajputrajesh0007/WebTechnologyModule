const makeAjax = () => {
    const url = `https://jsonplaceholder.typicode.com/posts`;

    jQuery.get(url).done((data) => {

        newValueOuter = "";
        for (let item of data) {
            let newValue = `<div style="background-color:orange">
                                        <h3>${item.title}</h3>
                                        <p >${item.body}</p>
                                    </div>`;
            newValueOuter += newValue;
        }
        $("#op").html(newValueOuter);
        //*** OR***
        // document.querySelector("#op").innerHTML = newValueOuter;
    });
}