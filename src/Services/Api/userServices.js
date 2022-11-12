import * as Require from '~/utils/request';
// async / await https://www.w3schools.com/js/js_async.asp
export const getSuggested = async ({ page = 1, perPage = 1 }) => {
    // try catch https://www.w3schools.com/js/js_errors.asp
    try {
        const res = await Require.get(`users/suggested`, {
            params: {
                page,
                per_page: perPage,
            },
        });
        return res.data;
    } catch (error) {
        // handle when have error
    }
};
export const getFlowingUsers = async ({ page = 1 }) => {
    try {
        const res = await Require.get(`me/followings`, {
            params: {
                page,
            },
        });

        return res.data;
    } catch (error) {
        // handle when have error
    }
}
