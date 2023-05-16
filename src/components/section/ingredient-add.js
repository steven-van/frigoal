import React, { useState } from "react";  
import DatePicker from "react-datepicker";  
  
import "react-datepicker/dist/react-datepicker.css"; 

//npm install react-datepicker --save

const IngredientAdd = () => {

    const font = "font-montserrat";

    const [startDate, setStartDate] = useState(new Date());  

    return (
        <div className={`${font}`}>
           <div className="ml-36 mr-15 mt-10 mb-20">
                <h1 className="text-[25px]">
                    Add a new ingredient
                </h1>
                <br></br>
                <div className="mt-1">
                    <form className="space-y-1" action="#" method="POST">
                        <div>
                            <label htmlFor="ingredientItemsName" className={`text-[16px] block font-medium leading-6 text-zinc-500 ${font}`}>
                                Ingredient Name
                            </label>
                            <div className="mt-1">
                                <input
                                id="ingredientItemsName"
                                name="ingredientItemsName"
                                type="text"
                                required
                                pattern="[0-9]*"
                                className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <br></br>
                        <div className="flex">
                            <div className="flex-1">
                                <label htmlFor="quantity" className={`text-[16px] block font-medium leading-6 text-zinc-500 ${font}`}>
                                    Quantity
                                </label>
                                <div className="mt-7 mr-5">
                                    <input
                                    id="quantity"
                                    name="quantity"
                                    type="number"
                                    required
                                    className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                    
                            <div className="flex-1 ml-5">
                                <label htmlFor="expiration" className={`text-[16px] block font-medium leading-6 text-zinc-500 ${font}`}>
                                    Expiration Date
                                </label>
                                <br></br>

                                <DatePicker dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} /> 

                            </div>
                        </div>

                        <br></br>
                        <div className="flex">
                            <div className="flex-1">
                                <button className="bg-[#fa6161] text-white text-bold rounded-full px-5 py-2 md:py-1 mt-7 md:mt-7 hover:bg-red-600">Clear Input</button>
                            </div>

                            <div className="flex-1 ml-5">
                                <button className="bg-[#24B26E] text-white text-bold rounded-full px-5 py-2 md:py-1 mt-7 md:mt-7 hover:bg-green-700">Add List</button>
                            </div>
                        </div>
                    </form>
                </div>
           </div>
        </div>
    );
};
  

export default IngredientAdd;