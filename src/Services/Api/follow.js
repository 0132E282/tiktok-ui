import * as Req from '~/utils/request';

export const follow = async ({ type = 'follow', id, token }) => {
    // try catch https://www.w3schools.com/js/js_errors.asp
    try {
        const res = await Req.post(
            `users/${id}/${type}`,
            { id },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            },
        );
        return res.data;
    } catch (error) {
        // handle when have error
    }
};
