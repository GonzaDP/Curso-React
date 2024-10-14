const products = [

    {
        id:"1",
        name:"Latte",
        price: 2600,
        img:"/img/latte.jfif",
        category:"Bebidas",
    },
        
    {
        id:"2",
        name:"Cappuccino",
        price: 3000,
        img:"/img/cappuccino.jfif",
        category:"Bebidas",
    },
        
    {
        id:"3",
        name:"Jamon crudo y rúcula",
        price: 8000,
        img:"/img/SandJCyR.jfif",
        category:"Sandwichs",
    },
   
    {
        id:"4",
        name:"Croissant con dulce de leche",
        price: 4500,
        img:"/img/CdeDDL.jfif",
        category:"Facturas",
    },
        
    {
        id:"5",
        name:"Lemon pie",
        price: 7000,
        img:"/img/Lemon pie.jfif",
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