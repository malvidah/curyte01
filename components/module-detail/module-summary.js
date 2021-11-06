import { useRouter } from 'next/router';
import { getModuleById } from '../../lib/module-data'

function ModuleSummary(props) {
    const router = useRouter();
    const moduleId = router.query.moduleId;
    const module = getModuleById(moduleId);

  return (
    <div className=''>
    <h1>{module.title}</h1>
    <img src={'/' + module.image} />
    </div>
  );
}

export default ModuleSummary;