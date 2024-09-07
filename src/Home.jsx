import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import rasm1 from "/rasm1.svg"
import rasm2 from "/rasm2.svg"
import rasm3 from "/rasm3.svg"
import rasm4 from "/rasm4.svg"
// import bg from "/bg.png"
const Home = () => {
    const BOT_TOKEN = "7402892314:AAH3f3kHVMT6ERR8GbUk8W0eL7UoWnSRrhQ"
    const MY_ID = "6536476991"
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        window.location.reload();
        axios
            .post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                chat_id: MY_ID,
                text: `New person:
 Name : ${data.ism}
 Number : ${data.number}     
 Email : ${data.email}
 SMS : ${data.sms}
                `,
            })
            .then((response) => {
                console.log("Message sent:", response.data);
            })
            .catch((error) => {
                console.error("Error sending message:", error);
            });
            
    }
    return (
        <div className=''>

            <div className="flex justify-center flex-col bg-black h-full  p-20 items-center">
                <div className="flex flex-col gap-5 ">
                    <h1 className='text-[#00B3B3] text-xl'>СВЯЗАТЬСЯ СЕЙЧАС</h1>
                    <h1 className='text-5xl text-white' >Оставьте нам сообщение</h1>
                    <div className="w-[340px]">
                        <p className='text-gray-700'>Наши сотрудники ответят на все ваши
                            вопросы. Если вам нужна консультация,
                            наши специалисты вам помогут.</p>
                    </div>
                    <div className="flex flex-row gap-3">
                        <button className='bg-[#00B3B3] p-[12px] rounded-full hover:bg-blue-700 duration-300 cursor-pointer'>
                            <img src={rasm1} width={25} alt="logo" />
                        </button>
                        <button className='bg-[#00B3B3] p-[12px] rounded-full hover:bg-blue-700 duration-300 cursor-pointer'>
                            <img src={rasm2} alt="logo" />
                        </button>
                        <button className='bg-[#00B3B3] p-[12px] rounded-full hover:bg-pink-700 duration-300 cursor-pointer'>
                            <img src={rasm3} alt="logo" />
                        </button>
                        <button className='bg-[#00B3B3] p-[12px] rounded-full hover:bg-red-700 duration-300 cursor-pointer'>
                            <img src={rasm4} width={30} alt="logo" />
                        </button>
                    </div>
                    {/* <div className="flex bg-[#00B3B3]  flex-row">
                   <img src={bg} alt="logo" width={500} />
                    </div> */}
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 ">
                    <div className="flex flex-row gap-5 ">
                        <div className="flex flex-col gap-2">
                            <h1 className='text-white'>Имя:</h1>
                            <input {...register("ism")} type="text" className='border border-solid text-white rounded-xl border-[#00B3B3] bg-black pl-2' placeholder='Имя' />
                        </div>
                        <div className="flex flex-col gap-2">
                            {/* <h1></h1> */}
                            <h1 className='text-white'>Телефон:</h1>
                            <input type='text' {...register("number")} className='border border-solid text-white rounded-xl border-[#00B3B3] pl-2 bg-black' placeholder='+998' />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className='text-white'>Email:</h1>
                        <input type="text" {...register("email")} className='border w-[439px] text-white border-solid rounded-xl border-[#00B3B3] pl-2 bg-black' placeholder='email@gmail.com' />
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <h1 className='text-white'>SMS:</h1>
                        <input type="text" {...register("sms")} className='border w-[439px] text-white h-16 border-solid rounded-xl border-[#00B3B3] pl-2 bg-black' />
                    </div>

                    <button type='submit' className='bg-[#00B3B3] w-[439px] h-10 text-white'>
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Home