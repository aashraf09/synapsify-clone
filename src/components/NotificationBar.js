import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer } from '@fortawesome/free-solid-svg-icons'

const NotificationBar = () => {
    return (
        <div className="text-[#ededed] min-h-[48px] flex bg-[#1a1a1a] flex-col md:flex-row items-center justify-center gap-3 w-full py-3 px-4">
            <p className="p2-paragraph">Available Soon</p>
            <div className="flex flex-row items-center justify-between gap-3">
                <FontAwesomeIcon icon={faServer} size='lg' color='#8ea8ad'></FontAwesomeIcon>
                <p className="p1-paragraph font-bold text-white">H200 clusters</p>
            </div>
            <a href="/" className='p2-paragraph underline underline-offset-2'>Pre-order now</a>
        </div>
    )
}

export default NotificationBar