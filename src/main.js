const shop = document.querySelector("#shop")
let basket= JSON.parse(localStorage.getItem("data")) || []

let generateShop = ()=>{
    return shop.innerHTML = (shopItemsData.map((x)=>{
        //the map will target each object in the array and will execute the function one by one
        let{id,img,name,desc,price}=x
        let search = basket.find((x)=>x.id===id) || []
        return `<div id=product-id-${id} class="item">
                <img  src="${img}" alt="img">
                <div class="details">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="price-section">
                        <h2>$${price}</h2>
                        <div class="buttons">
                            <i onclick='decrement(${id})' class="fa-solid fa-minus"></i>
                            <div id=${id} class="quantity">${search.item===undefined? 0: search.item}</div>
                            <i onclick='increment(${id})' class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
            </div>`
    }).join(""))
}
generateShop()

let increment = (id)=>{
    let selectedItem = id
    let search = basket.find((x)=>x.id===selectedItem.id)
    if(search===undefined){
        basket.push({
            id:selectedItem.id,
            item:1
        })
    }else{
        search.item+=1
    }
    localStorage.setItem("data",JSON.stringify(basket))
    update(selectedItem.id)
    //  console.log(basket);

}

let decrement = (id)=>{
    let selectedItem = id
    let search = basket.find((x)=>x.id===selectedItem.id)
    if(search.item===0){
        return
    }else{
        search.item-=1
    }
    localStorage.setItem("data",JSON.stringify(basket))
    update(selectedItem.id)
    // console.log(basket);
}

let update = (id)=>{
    let search = basket.find((x)=>x.id===id)
    document.getElementById(id).innerHTML=search.item
    // console.log(search.item);
    calculation()

}

let calculation = ()=>{
    let cartCount=document.getElementById("cartCount")
    cartCount.innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
}
calculation()

function sideBarToggle(){
    const sideBarToggle = document.querySelector(".sideBarToggle")
const closeBtn = document.querySelector(".closeBtn")
const sidebar = document.querySelector(".sidebar")
sideBarToggle.addEventListener("click",()=>{
    console.log("he");
    sidebar.classList.toggle("toShowSideBar")

})
closeBtn.addEventListener("click",()=>{
    console.log("hi");
    sidebar.classList.remove("toShowSideBar")

})
}
sideBarToggle()
