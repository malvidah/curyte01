import React from 'react'
import Head from 'next/head'
import { Modules } from '../../lib/module-data';
import { getFeaturedModules } from '../../lib/module-data';
import ModuleList from '../../components/modules/module-list';
function LearnPage() {
    const featuredModules = getFeaturedModules();
    return (
    <div className="center">
        <div>
            <div className="mt-5 font-bold text-xl"><h1>Learn</h1></div>
        </div>
        <div>
            <div className="mt-5 font-bold"><h1>Biology</h1></div>
            <ModuleList items={featuredModules} />
        </div>
        <div>
            <div className="mt-5 font-bold"><h1>Chemistry</h1></div>
            <ModuleList items={featuredModules} />
        </div>
    </div>
    )
}

export default LearnPage