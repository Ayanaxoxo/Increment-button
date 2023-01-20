function incrementButton() {
    var element = document.getElementById ('Text');
    var value = element.innerHTML;

    ++value;

    console.log(value);
    document.getElementById ('Text').innerHTML = value;

}

