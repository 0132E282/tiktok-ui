import Home from "~/Page/Home";
import Following from "~/Page/Following";
import Upload from "~/Page/Upload";
import profile from "~/Page/profile";
import { HeaderOnly } from "~/components/Layout";
import routesConfig from "~/config/routes";
// contains the page not login
const publicRoute = [
    {
        path: routesConfig.home,
        component: Home
    },
    {
        path: routesConfig.following,
        component: Following
    },
    {
        path: routesConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routesConfig.profile,
        component: profile,
    }
]
// contains the page has login 
const privateRoute = [

]
export { publicRoute, privateRoute };