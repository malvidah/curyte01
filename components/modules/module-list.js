import React from 'react'
import ModuleItem from './module-item';

function ModuleList(props) {
    const { items } = props;

    return (
        <ul className='pagecontainer'>
            {items.map(module => <ModuleItem
                key={module.id}
                id={module.id}
                title={module.title}
                description={module.description}
                date={module.date}
                image={module.image}
                role={module.role}
                tags={module.tags}
            />)}
        </ul>
    )
}

export default ModuleList
