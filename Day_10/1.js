const makeAjax=async ()=>{
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const res= await fetch(url);
    const list= await res.json();
    for(let item of list){
        let current = document.querySelector("#op");
        let newValue = ` <h1>${item.title}</h1>
                            <p>${item.body}</p>`
        current.innerHTML=newValue+current.innerHTML;
    }
}