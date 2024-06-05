import { ImagesFilter } from '../constants'


function Filters() {
    return (
        <div className="flex flex-wrap justify-center p-3 gap-3 gap-y-8 gap-x-3 m-1 mt-4">
            <button className="active cursor-pointer hover:opacity-100 p-1 font-semibold bg-[#24252e] text-white text-center text-[1.05rem] capitalize opacity-50 rounded-md duration-300 w-36">All</button>
            {ImagesFilter.map((name:any)=>(
                <button
                key={name.key}
                className="cursor-pointer hover:opacity-100 hover:font-bold hover:tracking-[0.6px] hover:p-2 hover:border hover:border-solid hover:border-blue-300 hp-1 font-semibold bg-[#24252e] text-white text-center text-[1.05rem] capitalize opacity-50 rounded-md duration-200 w-36"
                >
                    {name.filter}
                </button>
            ))}
        </div>
    )
}

export default Filters

/*
{data && data.map((item: any) => (
                <button 
                    onClick={()=>{setBodyPart(item);}}
                    className={bodyPart==item?'active':''}
                    key={item.id || item}
                    itemID={item.id || item}
                    title={item.id || item}
                >
                    {item}
                </button>
            ))}
*/