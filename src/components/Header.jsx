import React from 'react'

export default function Header() {
    return (
        <header className='flex justify-between bg-[#e94154] font-primary text-white p-2.5'>
            <div className='ml-10'>
                <span className='material-symbols-outlined align-middle'>phone</span>
                <a href="+27 11 546 7899" className=''>+27 11 546 7899</a>
            </div>
            <div className="header-info">
                <p>Get 50% off on Selected Items | <a href="#" className='underline'>Shop now</a></p>
            </div>
            <div className='mr-10'>
                <select name="language" id="language" className='bg-[#e94154]'>
                    <option value="english">English</option>
                    <option value="IsiXhosa">Xhosa</option>
                    <option value="IsiZulu">IsiZulu</option>
                </select>
                <select name="location" id="location" className='bg-[#e94154] ml-2.5'>
                    <option value="location">Location</option>
                    <option value="cape-town">Cape Town</option>
                    <option value="johannesburg">Johannesburg</option>
                    <option value="durban">Durban</option>
                </select>
            </div>
        </header>

    )
}