import { Buy } from "../svgs/Buy";
import { Icon } from "../svgs/Icon";
import { Live } from "../svgs/Live";

export const Card = () => {
    return (
        <>
            <div class="ml-2 mt-2 rounded-3xl bg-darkGrad max-w-md">

                <div class="flex justify-between">
                    <div class="flex justify-between">
                        <div class="flex flex-row">
                            <div class="rounded-lg m-3 bg-darkLogo"><Icon /></div>
                            <div class="flex flex-col">
                                <p class="mb-1 text-white mt-1">VedL looks weak</p>
                                <p class="text-white font-extralight">28 Jan 23</p>
                            </div>
                        </div>
                    </div>

                    <div className="mr-4 flex-row py-2 px-3 rounded-md bg-liveLogo ">
                        <div className="flex">
                            <Live/>
                        </div>
                        <span class=" text-white">Live</span>
                    </div>


                </div>
                <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div class="flex justify-evenly mt-2">
                    <p class='text-white'>Trade Name</p>
                    <p class='text-white'>Entry</p>
                    <p class='text-white'>Current</p>

                    {/* Can be changed to a single loop of array of tags */}
                </div>

                <div class="flex justify-evenly mt-2">

                    <div class="flex">
                        <Buy /> <p class='text-white ml-4'>HDFC</p>
                        {/* All this data can be from props! for being dynamic */}
                    </div>
                    <div class="flex text-white">
                        Rs 3140
                    </div>
                    <div class="flex text-white">
                        Rs 3140
                    </div>
                </div>
                <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div class="flex pb-4 justify-center mt-3">

                    <button class="bg-gray-500 rounded-3xl mr-3 border-2 border-grey w-32 h-16 bg-transparent text-white"> About Trade </button>
                    <button class="bg-greenVar rounded-3xl h-16 w-32 text-white"> Place Order </button>

                </div>
            </div>
        </>
    );
}