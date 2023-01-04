var arr = [{value : ""} ]


function onLoad(){
    render()
    console.log("heello")
    console.log("test")
}

function handleInputs(index){

    var val =  document.getElementById(`inp${index}`).value;
    arr[index].value =  val
   

}

function onRemove(index){
    arr.splice( index,1)
    render(index)
}

function addMore(){
    arr.push({value : ""})
    render()

}


function render(index){
    let space  =  "";
    for(let i  = 0  ;  i < arr.length ; i++)
    {
        space = space + `<div class="row">
        <div class="col-1">
         <input id="inp${i}" value="${arr[i].value}"  oninput="handleInputs(${i})" placeholder="Enter Your Skill" class="inpt" id="inp"  />   
        </div>
        <div class="col-2">
         <button class="btn" onclick=${ arr.length -1 === i ?  `addMore()` : `onRemove(${i})`  }>${arr.length -1 === i ? "Add More" :  "Remove"}</button>
        </div>
    </div>`
    }

    document.getElementById('sp').innerHTML =  space
}
