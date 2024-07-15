import React from 'react'
import FooterLinks from '../data/FooterLinks'

const Footer = () => {
    return (
        <footer className='flex flex-col items-center justify-between gap-5 w-full py-10 bg-[#f5f9fa]'>
            {/* 
                Top header in the Footer, showing a statement and call-to-action buttons.
                In mobile devices, this div is flexed column, aligned center and justified between
                In tablets, this div is flexed column, but the items are aligned to the start
                In desktop view, this div is flexed row, items are center aligned and the content is justified between.
            */}
            <div className="flex flex-col items-center md:items-start lg:flex-row lg:items-center justify-between gap-5 w-[90%] text-center md:text-left">
                <h3 style={{ color: 'var(--primary-btn-bg-color)' }}>Start your ML journey today</h3>
                <div className="flex flex-row items-center justify-center gap-5">
                    <a href={'/'} className='btn text-white px-5 py-2 outline-none' style={{ backgroundColor: 'var(--primary-btn-bg-color)' }}>
                        Sign up
                    </a>
                    <a href={'/'} className='btn text-white px-5 py-2 outline-none border' style={{ color: 'var(--primary-btn-bg-color)', borderColor: 'var(--primary-btn-bg-color)' }}>
                        Contact Us
                    </a>
                </div>
            </div>

            {/*
                Instead of manually writing JSX, I've add all the footer links content into an array of objects, and then maping through the array to render the links. It has reduces my JSX and increased the understanding and readability of the code. Further, it has put ease in updating/adding the links because I don't need to manually review where I've to put the link and create a div soup. I just need to add an object in the data and all done!
             */}

            <div className="flex flex-col items-center justify-between gap-5 md:flex-row md:flex-wrap md:items-start md:justify-start md:gap-20 py-10 w-[90%] border-t border-t-slate-300 lg:flex-nowrap">
                {
                    FooterLinks.map((footerLink, index) => {
                        const hasContent = footerLink.image || footerLink.descriptionParagraphs?.length > 0 || footerLink.heading || footerLink.links;
                        if (!hasContent) return null;

                        return (
                            <div key={index} className="flex flex-col items-center md:items-start justify-between gap-2">
                                {
                                    footerLink.image && <img src={footerLink.image} alt="logo" className='w-[250px] h-auto' />
                                }
                                {
                                    footerLink.descriptionParagraphs && footerLink.descriptionParagraphs.length > 0 && (
                                        <div className="flex flex-col items-center md:items-start justify-between gap-1 py-2">
                                            {
                                                footerLink.descriptionParagraphs.map((paragraph, index) => {
                                                    return (
                                                        <p key={index} className='p2-paragraph secondary-text'>{paragraph}</p>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                }
                                {
                                    footerLink.heading && <h5 className='text-center'>{footerLink.heading}</h5>
                                }
                                {
                                    footerLink.links && <div className="flex flex-col items-center md:items-start gap-1 secondary-text">
                                        {
                                            Object.keys(footerLink.links).map((link, index) => {
                                                return (
                                                    <a key={index} href={footerLink.links[link]} className='p2-paragraph hover:underline underline-offset-3 hover:text-black'>{link}</a>
                                                )
                                            })
                                        }
                                    </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <p className='p2-paragraph secondary-text'>2024 All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
