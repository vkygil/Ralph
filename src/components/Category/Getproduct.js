let giveMeAccessKey = async () => {
    let res = await fetch('https://api.kroger.com/v1/connect/oauth2/token', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' +  process.env.REACT_APP_SECRETTING 
        },
        body: "grant_type=client_credentials&scope=product.compact",
    })
        .then(response => response.json())
        // .then(data => {
        //     console.log('Success:', data);
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        // });
    return res.access_token;
}

async function giveMeProductos(text) {
    let accessToken = await giveMeAccessKey()
    // let accessToken = "eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2…M4FMOeoadvGfDvZq1YY2YlDsBmgtBE3wR3c2eUro5xJlv3r8w";
    let productsUrl = `${"https://api.kroger.com"}/v1/products?filter.term=${text}&filter.limit=50`;
    // let productsUrl = `${process.env.REACT_APP_API_BASE_URL}/v1/products?filter.term=${"milk"}`;

    let productsResponse = fetch(productsUrl, {
        method: "GET",
        cache: "no-cache",
        headers: {
            Authorization: `bearer ${accessToken}`,
            "Content-Type": "application/json; charset=utf-8"
        }
    }).then(response => response.json())
        .then(data => {
            console.log('Success:', data.data);
            // setProductos(data.data)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

export default giveMeProductos;