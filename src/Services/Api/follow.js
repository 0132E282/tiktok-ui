import * as Require from '~/utils/request';

export const search = async ({ id }) => {
    // try catch https://www.w3schools.com/js/js_errors.asp
    try {
        const res = await Require.get(`api/users/${id}/follow`);
        return res.data;
    } catch (error) {
        // handle when have error
    }
};
