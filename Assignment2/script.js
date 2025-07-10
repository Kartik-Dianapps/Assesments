let total = 0;

let arr = [];
let set = new Set();

function addToList(price,id,name) {
  if(!set.has(id))
  {
    set.add(id);
    total += price;
    arr.push(name);
    let element = document.getElementById('wishlist')
    element.querySelector('p').innerHTML = `Your Wishlist Total: SEK ${total}`;
    let p = document.createElement("p");
    p.setAttribute('id',"items");
    element.append(p);
    arr.forEach((item)=>{
      p.innerHTML += `${item}<button class="btn_remove" onclick="remove(${id},${price})">Remove</button><br>` 
    })    
    arr = [];
  }
  else
  {
    alert("This item is already added in the list...");
  }
}

function remove(id,price)
{
  if(total>0){
  set.delete(id);
  total = total - price;
  let element = document.getElementById('wishlist')
  element.querySelector('p').innerHTML = `Your Wishlist Total: SEK ${total}`;
  }

}

