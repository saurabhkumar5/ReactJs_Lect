
import BoxImage from "./BoxImage";
import './Box.css'
// function Box(){
//     return <div className = "boxConatiner">
//         <img width="90px" height="90px" src="https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"/>
//         <span className='boxText'>top offers</span>

//         <img width="90px" height="90px" src="https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"/>
//         <span className='boxText'>top offers</span>

//         <img width="90px" height="90px" src="https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"/>
//         <span className='boxText'>top offers</span>

//         <img width="90px" height="90px" src="https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"/>
//         <span className='boxText'>top offers</span>

//         <img width="90px" height="90px" src="https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"/>
//         <span className='boxText'>top offers</span>

//     </div>
    
// }



// function Box(){
//     return <div className = "boxConatiner">
//         <BoxImage/>
//         <span className='boxText'>top offers</span>

//         <BoxImage/>
//         <span className='boxText'>top offers</span>

//         <BoxImage/>
//         <span className='boxText'>top offers</span>

       
//     </div>
    
// }






function Box(){
    
       const data = [
        {
            sourceImg: "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
            text: "top offers"
        },
        {
            sourceImg: "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
            text: "top offers"
        },
        {
            sourceImg: "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
            text: "top offers"
        },
        {
            sourceImg: "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
            text: "top offers"
        }
       ]
    return <div className = "boxContainer">
            {data.map(title=>{
                return <div>
                    <BoxImage source = {title.sourceImg}/>
                    <span className = "boxText">{title.text}</span>
                </div>
            })

            }
    </div>
    
}


export default Box;