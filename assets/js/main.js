function fn_double_it_up(x) {
    x = x * 2;
    console.log(x);
    document.getElementById('idOutput').value = x;
}

// Arrow 
let arrow_fn_double_it_up = (x) => {
    x = x * 2;
    console.log(x);
    document.getElementById('idOutput').value = x;
}