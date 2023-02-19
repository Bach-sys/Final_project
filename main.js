function hello() {
    setTimeout((e) => {
        e = "hi"
        return e
    }, 2000);
}

function hi(){
    console,log("hello")
    const result = hello()
    console.log(result)
}