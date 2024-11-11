const products = [

    {
        id:"1",
        name:"Latte",
        price: 2600,
        description: "Cafe de especialidad con leche descremada.",
        stock: 3 ,
        img:"/img/latte.jpg",
        category:"Bebidas",
    },
        
    {
        id:"2",
        name:"Cappuccino",
        price: 3000,
        description: "Cafe de especialidad con cacao en polvo.",
        stock: 2 ,
        img:"/img/cappuccino.jpg",
        category:"Bebidas",
    },
        
    {
        id:"3",
        name:"Sándwich de jamon crudo y rúcula",
        price: 8000,
        description: "Sandwich de jamon crudo de alta calidad con rúcula fresca.",
        stock: 5 ,
        img:"/img/SandJCyR.jpg",
        category:"Sandwichs",
    },
   
    {
        id:"4",
        name:"Croissant con dulce de leche",
        price: 4500,
        description: "Fractura casera rellena con dulce de leche.",
        stock: 7 ,
        img:"/img/CdeDDL.jpg",
        category:"Facturas",
    },
        
    {
        id:"5",
        name:"Lemon pie",
        price: 7000,
        description: "Torta de limón y merengue con una masa casera.",
        stock: 9 ,
        img:"/img/Lemon pie.jpg",
        category:"Tortas",
    },
         
    {
        id:"6",
        name:"Brownie",
        price: 5000,
        description:"Pastel denso y húmedo, con un intenso sabor a chocolate y una textura suave pero ligeramente crujiente en la superficie.",
        stock: 6,
        img:"/img/Brownie.jpg",
        category:"Tortas",
    },

    {
        id:"7",
        name:"Red velvet",
        price: 7500,
        description:"Pastel esponjoso y suave, de color rojo intenso con un toque de cacao, cubierto con un glaseado cremoso de queso.",
        stock: 7,
        img:"/img/Red velvet.jpg",
        category:"Tortas",
    },
        
    {
        id:"8",
        name:"Carrot cake",
        price: 6500,
        description:"Bizcocho suave y especiado, con zanahorias ralladas que aportan humedad.",
        stock: 2,
        img:"/img/Carrot cake.jpg",
        category:"Tortas",
    },
        
    {
        id:"9",
        name:"Cheesecake",
        price: 8000,
        description:"Pastel cremoso hecho con queso crema, sobre una base de galleta.",
        stock: 5,
        img:"/img/Cheesecake.jpg",
        category:"Tortas",
    },
       
    {
        id:"10",
        name:"Espresso",
        price: 2200,
        description:"Café puro y concentrado, con un sabor intenso y una capa de crema en la superficie.",
        stock: 30,
        img:"/img/Espresso.jpg",
        category:"Bebidas",
    },

    {
        id:"11",
        name:"Americano",
        price: 2500,
        description:"Espresso diluido con agua caliente, creando un café suave pero con el sabor profundo del espresso.",
        stock: 30,
        img:"/img/Americano.jpg",
        category:"Bebidas",
    },

    {
        id:"12",
        name:"Macchiato",
        price: 3500,
        description:"Espresso manchado con un toque de espuma de leche, resaltando el sabor fuerte del café con solo un toque de suavidad.",
        stock: 15,
        img:"/img/Macchiato.jpg",
        category:"Bebidas",
    },

    {
        id:"13",
        name:"Medialuna de manteca",
        price: 2000,
        description:"Bollito suave y esponjoso, con un toque dulce y un sabor delicado a manteca.",
        stock: 60,
        img:"/img/Medialuna de manteca.jpg",
        category:"Facturas",
    },

    {
        id:"14",
        name:"Roll de canela",
        price: 7000,
        description:"Masa suave y esponjosa con canela y azúcar.",
        stock: 7,
        img:"/img/Roll de canela.jpg",
        category:"Facturas",
    },

    {
        id:"15",
        name:"Churro",
        price: 2500,
        description:"Masa frita y crocante espolvereada con azúcar y rellena con dulce de leche.",
        stock: 20,
        img:"/img/Churro.jpg",
        category:"Facturas",
    },

    {
        id:"16",
        name:"Pain au chocolat",
        price: 4000,
        description:"Masa hojaldrada con una barra de chocolate en su interior.",
        stock: 6,
        img:"/img/Pain au chocolat.jpg",
        category:"Facturas",
    }, 

    {
        id:"17",
        name:"Chipa",
        price: 2500,
        description:"El chipá es un panecillo suave y esponjoso, hecho con almidón de mandioca y queso, con un sabor ligeramente salado.",
        stock: 30,
        img:"/img/Chipa.jpg",
        category:"Facturas",
    },

    {
        id:"18",
        name:"Tiramisu",
        price: 6700,
        description:"Postre italiano con capas de bizcocho de café y crema de mascarpone, espolvoreado con cacao para un toque suave y elegante.",
        stock: 15,
        img:"/img/Tiramisu.jpg",
        category:"Tortas",
    },

    {
        id:"19",
        name:"Mocha",
        price: 3000,
        description:"Mezcla de espresso, leche al vapor y chocolate, que crea un sabor dulce y achocolatado.",
        stock: 15,
        img:"/img/Mocha.jpg",
        category:"Bebidas",
    },

    {
        id:"20",
        name:"Sándwich de pollo y palta",
        price: 8000,
        description: "Pollo desmenuzado con palta y hojas verdes en pan integral, fresco y saludable",
        stock: 5 ,
        img:"/img/Sándwich de pollo y palta.jpg",
        category:"Sandwichs",
    },

    {
        id:"21",
        name:"Sándwich de atún",
        price: 8000,
        description: "Mezcla de atún con mayonesa y vegetales frescos en pan de campo, para un bocado suave y sabroso.",
        stock: 5 ,
        img:"/img/Sándwich de atún.jpg",
        category:"Sandwichs",
    },

    {
        id:"22",
        name:"Sándwich vegetariano",
        price: 8000,
        description: "Vegetales frescos como tomate, lechuga, zanahoria y palta en pan multicereal.",
        stock: 5 ,
        img:"/img/Sándwich vegetariano.jpg",
        category:"Sandwichs",
    },
    
    {
        id:"23",
        name:"Sándwich de huevo y queso",
        price: 8000,
        description: "uevo revuelto con queso fundido en pan suave o bagel.",
        img:"/img/Sándwich de huevo y queso.jpg",
        category:"Sandwichs",
    },
    
    {
        id:"24",
        name:"Panini de mozzarella,tomate y pesto",
        price: 8000,
        description: "Mozzarella derretida con pesto y tomate en pan tostado, crujiente y aromático.",
        stock: 5 ,
        img:"/img/Panini de mozzarella,tomate y pesto.jpg",
        category:"Sandwichs",
    },
   
   
/*
    {
        id:"11",
        name:"Expreso",
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