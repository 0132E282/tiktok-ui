import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoute } from '~/routes';
import ProviderGlobal from './Services/provider/ProviderGlobal';
import { DefaultLayout } from '~/components/Layout';

function App() {
    return (
        <ProviderGlobal>
            <Router>
                <div className="app">
                    <Routes>
                        {publicRoute.map((router, index) => {
                            let Layout = DefaultLayout;
                            if (router.layout) {
                                Layout = router.layout;
                            } else if (router.layout === null) {
                                Layout = Fragment;
                            }
                            const Page = router.component;
                            return (
                                <Route
                                    key={index}
                                    path={router.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </ProviderGlobal>
    );
}

export default App;
