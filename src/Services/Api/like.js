import * as Req from '../../utils/request';
export const postLikeAndUnLike = async (currentToKen, { name = 'videos', id, type }) => {
    try {
        const res = await Req.post(
            `${name}/${id}/${type}`,
            { id },
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Accept: 'application/json',
                    Authorization: `Bearer ${currentToKen}`,
                },
            },
        );
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
