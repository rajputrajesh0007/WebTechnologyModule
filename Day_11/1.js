async function httpGetDemo() {
    const url = "https://reqres.in/api/users";
  
    const res = await axios.get(url);
    console.log(res);
  }
  
  async function httpPostDemo() {
    const url = "https://reqres.in/api/users";
  
    const data = {
      name: "morpheus matrix",
      job: "zion resident",
    };
    const res = await axios.post(url, data);
    console.log(res);
  }
  
  async function httpPutDemo() {
    const url = "https://reqres.in/api/users/2";
  
    const data = {
      name: "morpheus matrix",
      job: "zion resident",
    };
    const res = await axios.put(url, data);
    console.log(res);
  }