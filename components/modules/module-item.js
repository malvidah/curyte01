import React from 'react'
import Link from 'next/link';

function ModuleItem(props) {
    const { title, image, date, description, role, id, tags } = props;

    const exploreLink = `/learn/${id}`

    return (
    <Link href={exploreLink}>
    <div className='card'>
            <div className=''>
            </div>
            <img class='object-cover rounded-t-lg w-full h-3/5' src={'/' + image} alt="" />
            <div className='text-white font-bold px-2 pt-2 absolute top-0'>
                <p>{title}</p>
            </div>
            <div>
                <div className=''>
                    <time className='px-2 text-xs'>{role}</time>
                </div>
                <div>
                    <span><h5 className="px-2 text-xs text-gray-400">{date}</h5></span>
                </div>
                <div className='badge'>
                    <span>{tags}</span>
                </div>
            </div>
    </div>
    </Link>
    )
}

export default ModuleItem
