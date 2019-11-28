function putToCache(elem, cache){
    if(cache.indexOf(elem) != -1){
        return;
    }
    var i = Math.floor(Math.random()*(cache.length + 1));
    cache.splice(i, 0, elem);
}
function madness(){
    var cache = [];
    return function(a, b){
        putToCache(a, cache);
        putToCache(b, cache);
        return cache.indexOf(b) - cache.indexOf(a);
    }
}
function shuffle(arr){
    var compare = madness();
    return arr.sort(compare);
}
childs = [];
for(var i = 1; i < 351; i++){
	childs.push(i);
}

let btn = document.querySelector('#btn'),
    by = document.createElement("span"),
    result = document.querySelector('#random-num');
    document.body.appendChild(by);
    by.innerHTML = "Development and Design by SteveGerr";
    by.style.color = "#82ceeb";
    by.style.margin = "auto";
    by.style.display = "flex";
    by.style.justifyContent = "center";


btn.addEventListener('click', ()=>{
	let interval = setInterval(()=>{
		childs = shuffle(childs);
		result.textContent = childs[0];	
	}, 50);
	setTimeout(()=>{
	clearInterval(interval);
	childs = shuffle(childs);
	result.textContent = childs[0];
	}, 2000);
	
});