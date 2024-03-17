
import { IoMdTime } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";
import { useEffect, useState } from "react";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = () => {

    const [recipe, setrecipe] = useState([])
    const [coocklist, setcoocklist] = useState([])
    const [preparing, setPreparing] = useState([])
    const [totaltime, settotaltime] = useState(0)
    const [totalcal, settotalcal] = useState(0)

    useEffect(() => {
        fetch('Recipe.json')
            .then(res => res.json())
            .then(data => setrecipe(data))
    }, [])



    function recipeClick(item) {

        if (coocklist.find(items => items.recipe_id == item.recipe_id)) {
            toast("This Item Already Aded !");
        }
        else {
            const newcoocklist = [...coocklist, item]
            setcoocklist(newcoocklist);
        }


    }

    function PreparingClick(preitem) {
        const newpreper = [...preparing, preitem]
        setPreparing(newpreper);

        const remaincoocklist = coocklist.filter(ditem => ditem !== preitem)
        setcoocklist(remaincoocklist);


        const newtime = totaltime + parseInt(preitem.preparing_time.replace('minutes', ''));
        settotaltime(newtime);

        const newcal = totalcal + parseInt(preitem.calories.replace('calories', ''));
        settotalcal(newcal);

        
    }
   




    return (
        <div className="mt-20 w-[100%]">
            <ToastContainer />
            <h1 className="font-bold text-3xl mb-5">Our Recipes</h1>
            <p className='text-[#000000aa] px-[12%]'>Discover culinary delights with Our Recipes. From savory mains to delectable desserts, find inspiration for every mealtime adventure.</p>

            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between mt-10">

                <div className="w-[100%] md:w-[60%] lg:w-[60%] xl:w-[60%] grid grid-cols-2 gap-4 mr-[2%]">

                    {
                        recipe.map((item, i) => (
                            <div key={i} className="flex flex-col p-5 border-[1px] border-[#00000029] rounded-xl text-left">
                                <img src={item.recipe_image} alt="" className="rounded-xl" />
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
                                <div className="flex mt-4 text-sm gap-1 mb-4 ">
                                    <IoMdTime />
                                    <p className="mr-3">{item.preparing_time}</p>
                                    <AiOutlineFire />
                                    <p>{item.calories}</p>
                                </div>
                                <button onClick={() => recipeClick(item)} className='bg-[#0BE58A] rounded-full font-bold px-4 text-sm my-[2px] w-[100%] md:w-[65%] lg:w-[65%] xl:w-[65%]'>Want to Cook</button>
                            </div>



                        ))
                    }

                </div>


                <div className="w-[100%] md:w-[39%] lg:w-[39%] xl:w-[39%]  pb-24 rounded-xl border-[1px] border-[#00000027] py-8">
                    <h3 className="font-bold mb-3">Want to cook: {coocklist.length}</h3>
                    <hr />
                    <div className="flex gap-14 pl-8 hdrp mt-3">
                        <p>Name</p>
                        <div className="flex gap-9 ml-2">
                            <p>Time</p>
                            <p>Calories</p>
                        </div>
                    </div>
                    <div>

                        {
                            coocklist.map((item, i) => (
                                <div key={i} className="flex gap-3 text-left pl-4 bg-[#dedede4d] py-4 mt-2 pr-3">
                                    <p>{i + 1}</p>
                                    <p>{item.recipe_name}</p>
                                    <p>{item.preparing_time}</p>
                                    <p>{item.calories}</p>
                                    <button onClick={() => PreparingClick(item)} className='bg-[#0BE58A] rounded-full font-bold px-4 text-sm my-[2px]'>Preparing</button>
                                </div>

                            ))
                        }




                    </div>

                    <h3 className="font-bold mb-3 mt-5">Currently cooking: {preparing.length}</h3>
                    <hr />
                    <div className="flex justify-between text-left pl-4 py-4 mt-2 pr-7 hdrp">
                        <p className="ml-[30px]">Name</p>
                        <p>Time</p>
                        <p>Calories</p>
                    </div>

                    <div>


                        {
                            preparing.map((item, i) => (
                                <div key={i} className="flex justify-between text-left pl-4 bg-[#dedede4d] py-4 pr-7 mb-3">
                                    <p>{i + 1}</p>
                                    <p className="ml-[-20px]">{item.recipe_name}</p>
                                    <p>{item.preparing_time}</p>
                                    <p>{item.calories}</p>
                                </div>
                            ))
                        }

                    </div>

                    <div className="flex justify-end hdrp p-5 gap-4 text-left">
                        <div>
                            <p>Total Time = </p>
                            <p>{totaltime} minutes</p>
                        </div>
                        <div>
                            <p>Total Calories = </p>
                            <p>{totalcal} calories</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Recipes;