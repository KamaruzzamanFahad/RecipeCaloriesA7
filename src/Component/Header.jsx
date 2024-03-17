import { CiSearch } from "react-icons/ci";
const Header = () => {
    return (
        <div className="flex justify-between items-center py-8">
            <div>
            <h1 className="font-extrabold text-[#150B2B] text-2xl">Recipe Calories</h1>
            </div>
             <div>
             <ul className="dnone sm:flex md:flex lg:flex xl:flex gap-10 text-[#150b2bc2] text-sm font-[500]">
                <li>Home</li>
                <li>Recipes</li>
                <li>About</li>
                <li>Search</li>
             </ul>
             </div>
             <div className="flex items-center">
                <div className="bg-[#150b2b12] dnone sm:flex md:flex lg:flex xl:flex items-center p-2 rounded-full pl-5">
                <CiSearch className="text-xl"/>
             <input type="text" placeholder="Search"  className="bg-transparent ml-2 outline-none"/>
                </div>
             <img src="images/profile.png" alt="loding" className="ml-3 w-10" />
             </div>
        </div>
    );
};

export default Header;