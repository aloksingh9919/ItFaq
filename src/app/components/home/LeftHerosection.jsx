import Bignews from "./Bignews"
import Bottomsmallnews from "./Bottomsmallnews"
import Smallnews from "./Smallnews"


const LeftHerosection = () => {
    return (
        <>
            <div className='w-[75%] max-xl:w-full h-full flex flex-col '>
                <div className='w-full h-[65%] max-md:h-full max-xl:h-full flex max-md:flex-col'>
                    <div className='w-[60%] max-md:w-full h-[full] '>
                        <Bignews />
                    </div>
                    <div className='w-[40%] max-md:w-full grid grid-col-1 '>
                        <Smallnews />
                        <Smallnews />
                        <Smallnews />
                        <Smallnews />
                        <Smallnews />

                    </div>
                </div>
                <div className='w-full  h-[35%] max-md:h-full  grid grid-cols-2 gap-2 max-md:grid-cols-1 max-md:gap-1'>
                    <Bottomsmallnews />
                    <Bottomsmallnews />
                    <Bottomsmallnews />
                    <Bottomsmallnews />

                </div>
            </div>
        </>
    )
}

export default LeftHerosection