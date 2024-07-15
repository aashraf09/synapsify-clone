import React from 'react'

const Card = (props) => {
    const { image, heading, description, buttonText, buttonHref } = props
    return (
        <div className="flex flex-col items-center text-center justify-between gap-5 dark-gradient px-5 py-10 md:p-10 rounded-lg w-full">
            <div className='px-5' >
                <img src={image} alt="" className='max-h-[176px]' />
            </div>
            <h4 className='text-white'>{heading}</h4>
            <p className="p2-paragraph text-[#c6ced0]">{description}</p>
            <a href={buttonHref} className="btn text-white bg-[#4a5557]">{buttonText}</a>
        </div >
    )
}

export default Card