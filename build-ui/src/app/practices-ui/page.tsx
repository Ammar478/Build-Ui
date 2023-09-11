import { MasterCatClone } from './mastercat-clone';
import Link from 'next/link';
const PracticesUi: React.FC = () => {
  return (
    <div>
      {'projects ui'}
      <Link href={'practices-ui/mastercat-clone'}> master cat clone</Link>
    </div>
  );
};

export default PracticesUi;
