import * as Require from '~/utils/request';
// async / await https://www.w3schools.com/js/js_async.asp
export const search = async (q, type = 'less') => {
    // try catch https://www.w3schools.com/js/js_errors.asp
    try {
        const res = await Require.get(`users/search`,
            {
                params: {
                    q,
                    type
                }
            })
        return res.data;

    } catch (error) {
        // handle when have error
    }
}