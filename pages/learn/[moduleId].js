import React from 'react'
import { Fragment } from 'react'
import { useRouter } from 'next/router';

import { getModuleById } from '../../lib/module-data'
import ModuleSummary from '../../components/module-detail/module-summary';
import ModuleLogistics from '../../components/module-detail/module-logistics';
import ModuleContent from '../../components/module-detail/module-content';

function ModuleDetailPage(props) {
    const router = useRouter();

    const moduleId = router.query.moduleId;
    const module = getModuleById(moduleId);

    if (!module) {
        return <p>No Module Found</p>
    }

    return (
        <Fragment> <ModuleSummary title={module.title} />
            <ModuleLogistics />
            <ModuleContent>
            <p>{module.content}</p>
            </ModuleContent>
            <ModuleContent>
            <p>{module.content}</p>
            </ModuleContent>
            <ModuleContent>
            <p>{module.content}</p>
            </ModuleContent>
            <ModuleContent>
            <p>{module.content}</p>
            </ModuleContent>
        </Fragment>
    )
}

export default ModuleDetailPage
