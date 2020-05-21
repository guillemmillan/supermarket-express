const express = require("express")
const router =express.Router()

const verduras =[{
    id: 1, 
    nombre: "Pumpkin",
    precio: "3€",
    img_url: "https://images.unsplash.com/photo-1459260216545-994dda21d51a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
    id: 2,
    nombre: "CUCUMBER",
    precio: "0'50€",
    img_url: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
    },
    {
    id: 3,    
    nombre: "Pepper",
    precio: "1€",
    img_url: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
    },
    { id: 4,
      nombre: "Carrot",
      precio: "2€",
      img_url: "https://images.unsplash.com/photo-1582515073490-39981397c445?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" 
    } 
]

router.get("/", (req, res, next) => {
    res.render("verduras", verduras)
    })   
    
router.get("/:id", (req, res, next)=>{

    const filterVeg = verduras.filter((elem) => req.params.id == elem.id);
    res.render("verduras", ) 
})
module.exports = router;
