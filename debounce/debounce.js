const input = document.querySelector("#input")

const debounce = (fn,delay = 1000) => {
    let timer;
    return (...args)=>{
        clearTimeout(timer)
        timer = setTimeout(()=>{
                console.log(...args);
                fn(...args)
        },delay)
    }
}

handler = (e) =>{
    const value = e.target.value
    fetch(`https://dummyjson.com/products/search?q=${value}`)
    .then(async (res)=>{
        const json = await res.json()
    })
}

const debounced = debounce(handler,1000)

input.addEventListener('input',debounced)