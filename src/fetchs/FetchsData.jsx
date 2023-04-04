const loaderProduct = async ()=> await fetch('https://dummyjson.com/products').then(res => res.json())

export { loaderProduct }