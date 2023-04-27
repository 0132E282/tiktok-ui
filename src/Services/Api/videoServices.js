import * as Req from '../../utils/request';
export const getVideo = async ({ type = 'for-you', page = 1, currentToKen }) => {
    try {
        const res = await Req.get('videos', {
            params: {
                page,
                type,
            },
            headers: {
                'Content-Type': 'multipart/form-data',
                Accept: 'application/json',
                Authorization: `Bearer ${currentToKen}`,
            },
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
export const getAVideo = async ({ id, currentToKen }) => {
    try {
        const res = await Req.get('videos/' + id + '', {
            headers: {
                'Content-Type': 'multipart/form-data',
                Accept: 'application/json',
                Authorization: `Bearer ${currentToKen}`,
            },
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
export const postUploadVideo = async (currentToKen, { data, onUploadProgress }) => {
    try {
        const res = await Req.post(
            'videos',
            { currentToKen, ...data },
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Accept: 'application/json',
                    Authorization: `Bearer ${currentToKen}`,
                },
                onUploadProgress: onUploadProgress,
            },
        );
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
export const deleteVideo = async (currentToKen, { id }) => {
    try {
        const res = await Req.deletes(`videos/${id}`, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Accept: 'application/json',
                Authorization: `Bearer ${currentToKen}`,
            },
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
