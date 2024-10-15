const products = [

    {
        id:"1",
        name:"Latte",
        price: 2600,
        description: "",
        stock: 3 ,
        img:"/img/latte.jpg",
        category:"Bebidas",
    },
        
    {
        id:"2",
        name:"Cappuccino",
        price: 3000,
        description: "",
        stock: 2 ,
        img:"/img/cappuccino.jpg",
        category:"Bebidas",
    },
        
    {
        id:"3",
        name:"Jamon crudo y rúcula",
        price: 8000,
        description: "",
        stock: 5 ,
        img:"/img/SandJCyR.jpg",
        category:"Sandwichs",
    },
   
    {
        id:"4",
        name:"Croissant con dulce de leche",
        price: 4500,
        description: "",
        stock: 7 ,
        img:"/img/CdeDDL.jpg",
        category:"Facturas",
    },
        
    {
        id:"5",
        name:"Lemon pie",
        price: 7000,
        description: "",
        stock: 9 ,
        img:"/img/Lemon pie.jpg",
        category:"Tortas",
    }
    /*          
    {
        id:"6",
        name:"",
        price:,
        img:"",
        category:"",
    }
        
    {
        id:"7",
        name:"",
        price:,
        img:"",
        category:"",
    }
        
    {
        id:"8",
        name:"",
        price:,
        img:"",
        category:"",
    }
        
    {
        id:"9",
        name:"",
        price:,
        img:"",
        category:"",
    }
        
    {
        id:"10",
        name:"",
        price:,
        img:"",
        category:"",
    }
        
    {
        id:"11",
        name:"",
        price:,
        img:"",
        category:"",
    }
        
    {
        id:"12",
        name:"",
        price:,
        img:"",
        category:"",
    }
        
    {
        id:"13",
        name:"",
        price:,
        img:"",
        category:"",
    }
        
    {
        id:"14",
        name:"",
        price:,
        img:"",
        category:"",
    }
        
    {
        id:"15",
        name:"",
        price:,
        img:"",
        category:"",
    }
        
    {
        id:"16",
        name:"",
        price:,
        img:"",
        category:"",
    }
        
    {
        id:"17",
        name:"",
        price:,
        img:"",
        category:"",
    }
        
    {
        id:"18",
        name:"",
        price:,
        img:"",
        category:"",
    }
        
    {
        id:"19",
        name:"",
        price:,
        img:"",
        category:"",
    }
        
    {
        id:"20",
        name:"",
        price:,
        img:"",
        category:"",
    }
    
    */
]


const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(products)
        }, 1800)
    })
}

export { getProducts }