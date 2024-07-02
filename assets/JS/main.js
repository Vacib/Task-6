                               //? DOM AID TAKT1 

//! 1. Sadə kalkulyator
/*
function call(x) {
      let result=0
    let deyer1=+document.querySelector("#deyer1").value;
    let deyer2=+document.querySelector("#deyer2").value;
    if (x.innerText == "+") {
      result=deyer1+deyer2;
    }else if (x.innerText == "-") {
      result=deyer1-deyer2;
    }else if (x.innerText=="*") {
      result=deyer1*deyer2
    }else if (x.innerText=="/") {
      result=deyer1/deyer2
       
    }
    document.querySelector("span").innerHTML=result;
   document.querySelector("#deyer1").value=""
   document.querySelector("#deyer2").value=""

}*/ // todo   Sadə kalkulyator js kodun sonu


//! 2 Inputa daxil edilmiş sözü tərsinə çevirən proqram js kodu
/*

function Ters() {
      let tersMetin=document.querySelector("#tersMetin").value;
      let result=""
      for (let i = tersMetin.length-1; i >=0 ; i--) {
           result+=tersMetin[i]  
      }
document.querySelector("#result2").innerText=result;
document.querySelector("input").value="";
}*/// todo  2 Inputa daxil edilmiş sözü tərsinə çevirən proqram js kodun sonu


//! 3. Divin dizaynını dəyişin js kodu
/* 
function changeDiv() {
    div1.style.width=inputwidth.value+ "px";
    div1.style.height=inputheight.value+ "px";
    div1.style.borderWidth=borderwidth.value+ "px"
    div1.style.borderStyle=selectborderStyle.value
    div1.style.borderColor=selecetBorderColor.value
    div1.style.color=color.value
    div1.style.backgroundColor=backgroundColor.value
}*/// todo  3. Divin dizaynını dəyişin js kodun sonu


//! Div-in width-i 200 px-dir. Width üçün təyin olunan inputa daxil olunan qiymət qədər divi-in width-ni artırın. Məs: inputa 50 daxil olunarsa divin width-i 250px olmalıdır. js kodu
/*
function changeDiv() {
      div1.style.width=parseInt(div1.style.width)+(+inputwidth.value)+ "px";
      div1.style.height=parseInt( div1.style.height)+ (+inputheight.value)+ "px";
      div1.style.borderWidth=parseInt(div1.style.borderWidth)+(+borderwidth.value)+ "px"
      // inputwidth.value=""
      // inputheight.value=""
      // borderwidth.value=""
      document.querySelector('input').values=""
  }*/// todo  Div-in width-i 200 px-dir. Width üçün təyin olunan inputa daxil olunan qiymət qədər divi-in width-ni artırın. Məs: inputa 50 daxil olunarsa divin width-i 250px olmalıdır. js kodun sounu

 

 //! 5.  kalkulyator js kodu
/*function buttonKal(x) {
      displayInput.value+=x.innerText 
}
function equal() {
      let result=0;
      if(displayInput.value.includes("+")) {
        let deyer=displayInput.value.split("+")
        for (let i = 0; i < deyer.length; i++) {
          result+=(+deyer[i]);
                       
        }
      }else if (displayInput.value.includes("-")) {
          let deyer=displayInput.value.split("-")  
          result=(+deyer[0])
          for (let i = 1; i < deyer.length; i++) {
            result-=(+deyer[i]);
            
          }
      }else if (displayInput.value.includes("*")) {
            let deyer=displayInput.value.split("*")  
            result=(+deyer[0])
            for (let i = 1; i < deyer.length; i++) {
              result*=(+deyer[i]);
              
            } 
      }else if (displayInput.value.includes("/")) {
           let deyer=displayInput.value.split("/") 
           result=(+deyer[0])
           for (let i = 1; i < deyer.length; i++) {
           result/=(+deyer[i])
            
           }
      }
      displayInput.value=result
}

function sil() {
   displayInput.value=""   
}

function silTek() {
      displayInput.value=displayInput.value.slice(0,-1)
}*/ // todo   5.  kalkulyator js kodun sonu sonu 



//! Dom taks 1-cisi 8 odalin js kodlari
/*let modal=document.querySelector(".mymodals")
// let modalImg=document.querySelector(".mymodals .img img")//bu gurde yaza bilerik
let modalImg=modal.querySelector(".modal-img img")
 let modalTitel=modal.querySelectorAll(" .content p ")[1].children[0]
  let modalText=modal.querySelectorAll(".content p ")[2].children[0]

      // console.log(modalText);
function openModal(x) {
  //  console.log(x.children[1].children[1].innerText); 
   modalImg.src=x.children[0].children[1].src
  modalTitel.innerText=x.children[1].children[0].innerText

modalText.innerText=x.children[1].children[1].innerText

modal.style.display="block"
}
function closeModal() {
  modal.style.display="none"
}*/ //todo  Dom taks 1-cisi 8 odalin js kodlarinin sonu

//! Dom taks 1-cisi 11 ACCORDIUM MENU js kodlari 
/*let fags=document.querySelectorAll(".fag");
fags.forEach(fagss=>{
  fagss.addEventListener("click",()=> {
    fags.forEach(item => {
      if (item!==fagss) {
        item.classList.remove("active")
      }
    })
    fagss.classList.toggle("active")
  })
})*///TODO  Dom taks 1-cisi 11 ACCORDIUM MENU js kodlari SONU

//! TODO List  js kodlari
/*function addList() {
  listUL.innerHTML+=` <li>${inpDeyer.value}<button class="btn3" onclick=xetCek(this)><i class="fa-solid fa-check"></i></button> <button class="btn2" onclick=sil(this)><i class="fa-solid fa-trash sil"></i></button></li>`
  inpDeyer.value=""
}
function xetCek(x) {
  x.parentElement.style.textDecoration="line-through"
}
function sil(x) {
  x.parentElement.remove()
}*///todo  TODO List  js kodlari


// ! NAVBARIN JS KODU
/*let menu=document.querySelector("aside");
    let menuBar=document.getElementsByClassName("menu-bar")[0]
    menuBar.addEventListener('click',function () {
      menu.classList.add("active")
      menu.style.backgroundColor="rgb(2, 2, 15)"
      menuBar.classList.add('bagla')
      document.querySelectorAll("ul li").forEach((x)=>{
    x.children[1].classList.add("bagla")
    x.children[0].style.transform="scaleX(1)"
    
      })
    })
    document.querySelector(".menu-close").addEventListener('click',function () {
      menu.classList.remove('active')
    
      menuBar.classList.remove("bagla")
     
      document.querySelectorAll("ul li").forEach((x)=>{
    x.children[1].classList.remove("bagla")
    x.children[0].style.transform="scaleX(0)"
    })
    menu.style.backgroundColor="rgb(34, 80, 248)"
    })
    
    document.querySelectorAll("ul li i").forEach((x)=>{
      x.addEventListener("mouseover",function () {
        x.previousElementSibling.classList.add("hoverIcon")
      })
      x.addEventListener("mouseout",function () {
        x.previousElementSibling.classList.remove("hoverIcon")
      })
    })*///TODO  NAVBARIN JS KODUN SONU



    //! ! DOM TASK 2. MELUMATLARI BUTONLARLA AYRI AYRI DIV MELUMATLRI KOCURMEK JS KODU 
/*let input=document.querySelector("#inpDeyer");
let ulList1=document.querySelector("#ulList1")
let ulList2=document.querySelector("#ulList2")
let ulList3=document.querySelector("#ulList3")
addList.addEventListener('click',function (){
  ulList1.innerHTML+=`<li onclick="MOveList(this)">${input.value}</li>`
 
  input.value=""
})


let chooseList;

function MOveList(x) {
  // console.log(x);
  document.querySelectorAll("ul li").forEach(y=>{
    y.style.backgroundColor=""
  })
  x.style.backgroundColor="blue"
  chooseList=x
}
function sag1() {
  ulList2.appendChild(chooseList)
  chooseList.style.backgroundColor=""
}

function sol1() {
  ulList1.appendChild(chooseList)
}


function sag2() {
  ulList3.appendChild(chooseList)
  chooseList.style.backgroundColor=""
}

function sol2() {
  ulList2.appendChild(chooseList)
}*///TODO  ! DOM TASK 2. MELUMATLARI BUTONLARLA AYRI AYRI DIV MELUMATLRI KOCURMEK JS KODUN SONU


// ! DOM TASK 2. Filter Product js KODU
/*let electronics=[

  {catagory:"notebook", name:"Asuse" ,source:"./assets/image/note-2.jpg"},
  {catagory:"notebook",name:"Apple",source:"./assets/image/note-2.jpg"},
  {catagory:"notebook",name:"Samsung",source:"./assets/image/note-2.jpg"},
  {catagory:"notebook",name:"Xiaomi Mi Notebook Pro",source:"./assets/image/note-2.jpg"},

  {catagory:"telefon",name:"Xiaomi",source:"./assets/image/tel-1.jpg"},
  {catagory:"telefon",name:"Apple",source:"./assets/image/tel-1.jpg"},
  {catagory:"telefon",name:"Samsung",source:"./assets/image/tel-1.jpg"},
  {catagory:"telefon",name:"Honor",source:"./assets/image/tel-1.jpg"},
  
  {catagory:"planshet",name:"Xiaomi",source:"./assets/image/planset-1.jpg"},
  {catagory:"planshet",name:"Apple",source:"./assets/image/planset-1.jpg"},
  {catagory:"planshet",name:"Samsung",source:"./assets/image/planset-1.jpg"},
  {catagory:"planshet",name:"Honor",source:"./assets/image/planset-1.jpg"},

  {catagory:"printer",name:"Xiaomi",source:"./assets/image/printer-1.jpg"},
  {catagory:"printer",name:"Apple",source:"./assets/image/printer-1.jpg"},
  {catagory:"printer",name:"Samsung",source:"./assets/image/printer-1.jpg"},
  {catagory:"printer",name:"Honor",source:"./assets/image/printer-1.jpg"}

]
let btn=document.querySelectorAll("ul li");
 filterData(electronics)

//! eger bizim resimlerimiz olda gelmeyecekse biz asagida komente aldigimiz kodlari yazmaliyiq
// let defaultAll=document.querySelector("ul li.selected").innerText.toLowerCase()
// let defaultData=electronics.filter(x=>x.catagory==defaultAll);
// //  console.log(defaultData);
// if (defaultData.length==0) {
  
// }else{
//  filterData(defaultData); 
// }

//  console.log(defaultAll);
//! eger bizim resimlerimiz olda gelmeyecekse biz asagida komente aldigimiz kodlari yazmaliyiq bura kimi olanlar


btn.forEach(x=>{
  x.addEventListener("click",function () {
    btn.forEach(y=>{
      y.classList.remove("selected")
    })
    x.classList.add("selected")
   let cate=x.innerText.toLowerCase() 

   let fillterProduct=electronics.filter(j=>j.catagory==cate)
   if (fillterProduct==0) {
    filterData(electronics)
   }else{
     filterData(fillterProduct)
   }
  
  })

})

function filterData(data) {
  document.querySelector(".elemets").innerHTML=""
  data.forEach(x=>{
    document.querySelector(".elemets").innerHTML+=`
    <div class="images">
    <img src="${x.source}" alt="">
    <p>${x.name}</p>
  </div>`
  
  })
   
}*/// TODO   DOM TASK 2. Filter Product JS KODUN SONU







