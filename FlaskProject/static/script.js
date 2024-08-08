function page(aaa){
    const a = document.getElementById("box1");
    const b = document.getElementById("page1");
    const image = document.getElementById("img");
    const nav = document.getElementById("navbar");
    nav.style.display="none";
    a.style.display="none";
    b.style.display="block";
    if(aaa == 1){
        image.setAttribute("src", "/static/image1.avif");
    }
    else if(aaa == 2){
        image.setAttribute("src", "/static/Photo1.avif");
    }
    else if(aaa == 3){
        image.setAttribute("src", "/static/Photo.avif");
    }
    else if(aaa == 4){
        image.setAttribute("src", "/static/photo2.avif");
    }
    else if(aaa == 5){
        image.setAttribute("src", "/static/img.avif");
    }
    else if(aaa == 6){
        image.setAttribute("src", "/static/img1.avif");
    }
    


}
function webpage(){
    const a = document.getElementById("box1");
    const b = document.getElementById("page1");
    const nav = document.getElementById("navbar");
    b.style.display="none";
    nav.style.display="block";
    a.style.display="block";

    
}
function pages(a,b){
    const inputElement = document.getElementById("input");
    const inputValue = parseInt(inputElement.value);
    const priceElement = document.getElementById("price1");
    let priceValue = parseInt(priceElement.value);

    if (a === '+') {
      inputElement.value++;
      priceValue += b;
      if( inputElement.value == 9){
        alert("limit reached");
    
      }
    } else {
      if (inputValue > 1) {
        inputElement.value--;
        priceValue -= b;
      }
    }
    priceElement.value = priceValue;
}

