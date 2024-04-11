import React, { useEffect, useState } from 'react'

export const Card = ({ title }) => {
    const [userdata, setuserData] = useState(null)


    useEffect(() => {
        getResponse_model(title)
    }, [title])



    const getResponse_model = async (title) => {
        try {
            const formData = new FormData();
            formData.append('query', title);
            const response = await fetch('http://192.168.59.7:5001/process_text', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            console.log(data.message)
            setuserData(data.message)


        }
        catch (err) {
            console.log(err)
        }
    }


    const handleData = () => {
        setData(prev => [...prev, prev.length + 1])
    }

    return (
        <div className=''>
            <div className='pb-2 flex justify-center shadow-md w-full'><span className='text-2xl font-bold bg-gradient-to-r from-blue-500 
                via-blue-800 
                to-red-600
                truncate
                text-transparent bg-clip-text pr-1
                p-1
                '>{title.slice(0,1).toUpperCase()+ title.slice(1)}</span>
                <span className=''>{userdata?.length}</span></div>


            <ul className='pt-8 h-96 overflow-y-auto'>
                {userdata !== null ? (
                    userdata.map((item, index) => (
                        <li key={index} className={` ${index === 0 ? "bg-blue-400 text-white" : ""} truncate mb-3 rounded-lg pl-2 hover:bg-blue-300 hover:border-0 hover:text-white p-1`}>
                            <CardItem item={item} />
                        </li>
                    ))
                ) : (
                    Array.from({ length: 11 }, (_, index) => (
                        <div key={index} className="h-6 animate-pulse my-3 bg-slate-500 rounded"></div>
                    ))
                )}
            </ul>


        </div>
    )
}





const CardItem = ({ item }) => {
    return (

        <span className="truncate">
            {item}
        </span>
    )
}





