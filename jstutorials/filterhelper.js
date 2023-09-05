// this can return objects from an array 

let products=[
    {name:"apple",type:'fruit'},
    {name:"celery",type:'vegetable'},
    {name:"banana",type:'fruit'},
    {name:"brocolli",type:'vegetable'}
]

products.filter((product)=>{
    return product.name==="vegetable"
})
