import { useRouter } from 'next/router';
import { getModuleById } from '../../lib/module-data'

function ModuleLogistics() {
  const router = useRouter();

    const moduleId = router.query.moduleId;
    const module = getModuleById(moduleId);

  return (
    <section className=''>
      <div className='focus-within:'>
            <span>{module.description}</span>
      </div>
      <ul className=''>
      </ul>
    </section>
  );
}

export default ModuleLogistics;
