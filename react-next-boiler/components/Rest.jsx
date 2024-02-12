 async function fetchData(url, method , newData) {
    method = method || "GET";
    const res = await fetch(url);
    const data = await res.json();
    return data;
    //console.log(data);
  }

  export default fetchData;