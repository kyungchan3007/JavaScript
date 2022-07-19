//callback 함수

function add (x, y, callback){
	let result = x * y
	callback(result)
}

function result (data) {
	console.log(data, "콜백함수 실행")
}

add(5, 10, result)

function repeat(n,f){
  for(var i=0; i<n;i++){
  f(i);
      
  }
}

var logAll = function(i){
  console.log(i);
}

repeat(5,logAll);

var logOdds = function(i){
  if ( i % 2 ) console.log(i);
}

repeat(5,logOdds);