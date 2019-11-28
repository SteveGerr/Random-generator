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
    result = document.querySelector('#random-num');

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