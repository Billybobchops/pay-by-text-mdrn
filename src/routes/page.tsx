import PayByText from '@components/PayByText';
import { Helmet } from '@modern-js/runtime/head';
import './index.scss';

const Index = () => (
    <div className="main">
        <Helmet title="Pay by Text" />
        <main>
            <p>test</p>
            <PayByText />
        </main>
    </div>
);

export default Index;
