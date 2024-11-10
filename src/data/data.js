const products = [

    {
        id:"1",
        name:"Latte",
        price: 2600,
        description: "Cafe de especialidad con leche descremada",
        stock: 3 ,
        img:"/img/latte.jpg",
        category:"Bebidas",
    },
        
    {
        id:"2",
        name:"Cappuccino",
        price: 3000,
        description: "Cafe de especialidad con cacao en polvo",
        stock: 2 ,
        img:"/img/cappuccino.jpg",
        category:"Bebidas",
    },
        
    {
        id:"3",
        name:"Jamon crudo y rúcula",
        price: 8000,
        description: "Sandwich de jamon crudo de alta calidad con rúcula fresca",
        stock: 5 ,
        img:"/img/SandJCyR.jpg",
        category:"Sandwichs",
    },
   
    {
        id:"4",
        name:"Croissant con dulce de leche",
        price: 4500,
        description: "Fractura casera rellena con dulce de leche",
        stock: 7 ,
        img:"/img/CdeDDL.jpg",
        category:"Facturas",
    },
        
    {
        id:"5",
        name:"Lemon pie",
        price: 7000,
        description: "Torta de limón y merengue con una masa casera",
        stock: 9 ,
        img:"/img/Lemon pie.jpg",
        category:"Tortas",
    },
         
    {
        id:"6",
        name:"Brownie",
        price: 5000,
        description:"Torta de chocolate",
        stock: 6,
        img:"",
        category:"Tortas",
    },

    {
        id:"7",
        name:"Brownie",
        price: 5000,
        description:"Torta de chocolate",
        stock: 6,
        img:"",
        category:"Tortas",
    },
        
    {
        id:"8",
        name:"Brownie",
        price: 5000,
        description:"Torta de chocolate",
        stock: 6,
        img:"",
        category:"Tortas",
    },
        
    {
        id:"9",
        name:"Brownie",
        price: 5000,
        description:"Torta de chocolate",
        stock: 6,
        img:"",
        category:"Bebidas",
    },
        
    {
        id:"10",
        name:"Brownie",
        price: 5000,
        description:"Torta de chocolate",
        stock: 6,
        img:"",
        category:"Tortas",
    },
/*
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
        }, 1000)
    })
}

const getProduct = (idProduct) => {
    return new Promise((resolve) => {
        setTimeout( () => {
            const product = products.find((product) => product.id === idProduct )
            resolve(product)
        }, 1000)
    })
}

export { getProducts, getProduct }