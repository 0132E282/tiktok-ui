import Home from "~/Page/Home";
import Following from "~/Page/Following";
import Upload from "~/Page/Upload";
import { HeaderOnly } from "~/components/Layout";
// contains the page not login
const publicRoute = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/following',
        component: Following
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    }
]
// contains the page has login 
const privateRoute = [

]
export { publicRoute, privateRoute };