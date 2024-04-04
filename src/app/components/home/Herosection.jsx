import LeftHerosection from "./LeftHerosection"
import RightHerosection from "./RightHerosection"


const Herosection = () => {
    return (
        <div className='w-full max-xl:h-full  flex max-xl:flex-col gap-2'>
            <LeftHerosection/>
            <RightHerosection/>
        </div>
    )
}

export default Herosection