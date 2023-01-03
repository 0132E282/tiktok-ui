import * as Req from '../../utils/request';
export const getVideo = async ({ type = 'for-you', page = 1, currentToKen }) => {
    try {
        const res = await Req.get('/videos', {
            params: {
                page,
                type,
            },
            headers: { Authorization: `Bearer ${currentToKen}` },
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
