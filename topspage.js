console.log('my js')
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
console.log(data)

let html = ``
data.forEach(function(item){
	console.log(item)
   html += `
   <div class="item" data-details=${item.details}> 
   	<div>${item.Title}</div>
    <img src=${item.image} />
    <div class="item-details hidden">
    ${item.details.price}
    ${item.details.size}
    ${item.details.color}
    </div>
    </div>
   	`
})
$('.results').html(html)
$('.item').on('click', function(){
	//$('.item-details').toggleClass('hidden')
	$(this).find('.item-details').toggleClass('hidden')
})