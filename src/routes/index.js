import Home from '~/Page/Home';
import Following from '~/Page/Following';
import Upload from '~/Page/Upload';
import VideoDetail from '~/Page/VideoDetail';
import profile from '~/Page/profile';
import { LayoutFull, LayoutNotSidebar, DetailVideoLayout } from '~/components/Layout';
import routesConfig from '~/config/routes';
// contains the page not login
const publicRoute = [
    {
        path: routesConfig.home,
        component: Home,
    },
    {
        path: routesConfig.following,
        component: Following,
    },
    {
        path: routesConfig.upload,
        component: Upload,
        layout: LayoutNotSidebar,
    },
    {
        path: routesConfig.profile,
        component: profile,
        layout: LayoutFull,
    },
    {
        path: routesConfig.detailVideo,
        component: VideoDetail,
        layout: DetailVideoLayout,
    },
];
// contains the page has login
const privateRoute = [];
export { publicRoute, privateRoute };
