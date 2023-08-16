import { Buy } from "../svgs/Buy";
import { Live } from "../svgs/Live";
import logo from '../../assets/logo.svg'
export const Card = ({ name, author, tradeName, entry, current, target, sl }) => {



    return (
        <>
            <div class="ml-2 mt-2 rounded-3xl bg-darkGrad max-w-md">

                <div class="flex pt-6 justify-between">
                    <div class="flex justify-between">
                        <div class="flex items-center flex-row">
                            <div class="w-[3.125rem] rounded-lg m-3 bg-darkLogo">
                                <img src={logo} alt='logo' />
                            </div>
                            <div class="flex flex-col">
                                <p class="mb-1 text-white mt-1">{name} looks weak</p>
                                <div className="flex flex-row">
                                    <p class="text-white font-extralight">28 Jan 23 | 13:18 |</p>
                                    <p className="text-textColor">&nbsp;By: {author} </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mr-4 flex  items-center px-4 py-0 rounded-[44.372px]  bg-liveLogo ">
                        <div className="flex items-center my-0 ">
                            <Live />
                            <span class="ml-1 text-textColor">Live</span>
                        </div>
                    </div>


                </div>
                <hr class="h-px mt-4 mb-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div class="flex justify-evenly mt-2">
                    <p class='text-white mr-[7rem]'>Trade Name</p>
                    <p class='text-white'>Entry</p>
                    <p class='text-white'>Current</p>

                    {/* Can be changed to a single loop of array of tags */}
                </div>

                <hr class="h-px mt-2 mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div class="flex justify-evenly mt-2">

                    <div class="flex">
                        <Buy />
                        <div className="flex ml-4 flex-col">
                            <p class='text-white text-xl '>{tradeName}</p>
                            <div className="flex flex-row space-x-1">
                                <p className="text-[0.5rem] text-priceText">Target:<span className="text-[#EBECEC] text-sm">&nbsp;Rs {entry} |</span> </p>
                                <p className="text-[0.5rem] text-priceText">S/L:<span className="text-[#EBECEC] text-sm">&nbsp;Rs {current} |</span> </p>
                            </div>
                        </div>
                        {/* All this data can be from props! for being dynamic */}
                    </div>
                    <div class="flex text-white">
                        Rs {target}
                    </div>
                    <div class="flex text-white">
                        Rs {sl}
                    </div>
                </div>
                <div class="flex mt-8 pb-4 justify-center mt-3">

                    <button class="bg-gray-500 rounded-2xl px-8 mr-3 border-2 border-grey  py-4 bg-transparent text-white"> About Trade </button>
                    <button class="bg-greenVar rounded-2xl px-8 py-4  text-white"> Place Order </button>

                </div>
                <div className="bg-[#1B3C37] rounded-b-3xl py-2 flex justify-center">
                    <p className="text-textColor">
                        Signal active till 28 August 23 | 11:50
                    </p>
                </div>
            </div>
        </>
    );
}