
import { IoMdTime  } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";
import { useEffect, useState } from "react";
const Recipes = () => {

    const [recipe, setrecipe] = useState([])

    useEffect(()=>{
        fetch('Recipe.json')
        .then(res => res.json())
        .then(data => setrecipe(data))
    },[])




    return (
        <div className="mt-20 w-[100%]">
            <h1 className="font-bold text-3xl mb-5">Our Recipes</h1>
            <p className='text-[#000000aa] px-[12%]'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque.</p>

            <div className="flex justify-between mt-10">

                <div className="w-[60%] grid grid-cols-2 gap-4 mr-[2%]">

                    {
                        recipe.map((item,i)=>(
                            <div className="flex flex-col p-5 border-[1px] border-[#00000029] rounded-xl text-left">
                            <img src={item.recipe_image} alt="" />
                            <h4 className="mt-3 mb-2">{item.recipe_name}</h4>
                            <p className="mb-4">{item.short_description}</p>
                            <hr />
                            <h4 className="mt-4 text-[15px]">Ingredients: {item.ingredients.length}</h4>
                            <ul className="list-disc text-[14px] text-[#00000079] ml-7 mb-4">
                                <li>{item.ingredients[0]}</li>
                                <li>{item.ingredients[1]}</li>
                                <li>{item.ingredients[2]}</li>
                                <li>{item.ingredients[3]}</li>
                            </ul>
                            <hr />
                            <div className="flex mt-4 text-sm gap-1 mb-4">
                            <IoMdTime />
                                <p className="mr-3">{item.preparing_time}</p>
                                <AiOutlineFire />
                                <p>{item.calories}</p>
                            </div>
                            <button className='bg-[#0BE58A] rounded-full font-bold px-4 text-sm my-[2px] w-56'>Want to Cook</button>
                        </div>

                            
                        ))
                    }
                    
                </div>


                <div className="w-[39%] pb-24 rounded-xl border-[1px] border-[#00000027] py-8">
                    <h3 className="font-bold mb-3">Want to cook: 01</h3>
                    <hr />
                    <div className="flex gap-20 pl-8 hdrp mt-3">
                        <p>Name</p>
                        <div className="flex gap-9 ml-2">
                            <p>Time</p>
                            <p>Calories</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-3 text-left pl-4 bg-[#dedede4d] py-4 mt-2 pr-3">
                            <p>1</p>
                            <p>Chicken Caesar Salad</p>
                            <p>20 minutes</p>
                            <p>400 calories</p>
                            <button className='bg-[#0BE58A] rounded-full font-bold px-4 text-sm my-[2px]'>Preparing</button>
                        </div>
                    </div>

                    <h3 className="font-bold mb-3 mt-5">Currently cooking: 02</h3>
                    <hr />
                    <div className="flex justify-between text-left pl-4 py-4 mt-2 pr-7 hdrp">
                        <p className="ml-[30px]">Name</p>
                        <p>Time</p>
                        <p>Calories</p>
                    </div>

                    <div>
                        <div className="flex justify-between text-left pl-4 bg-[#dedede4d] py-4 pr-7">
                            <p>1</p>
                            <p className="ml-[-20px]">Spaghetti Bolognese</p>
                            <p>30 minutes</p>
                            <p>600 calories</p>
                        </div>
                    </div>

                    <div className="flex justify-end hdrp p-5 gap-4 text-left">
                        <div>
                            <p>Total Time = </p>
                            <p>45 minutes</p>
                        </div>
                        <div>
                        <p>Total Calories = </p>
                        <p>1050 calories</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Recipes;