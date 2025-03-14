import PayByText from '@components/PayByText';
import { Helmet } from '@modern-js/runtime/head';
import './index.scss';
import 'remoteDesignSystem/DesignSystemRootStyles';

const Index = () => (
    <div className="main">
        <Helmet title="Pay by Text" />
        <main>
            <PayByText />
        </main>
    </div>
);

export default Index;
