console.log('my js')
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
console.log(data)

let html = ``
data.forEach(function(item){
	console.log(item)
   html += `
   <a href=${item.urllink} >
   	<div>${item.Title}</div>
    <img src=${item.image} />
    </a>
   	`
})
$('.results').html(html)