import * as Req from '~/utils/request';
export const getCommentList = async ({ id_video, token }) => {
    // try catch https://www.w3schools.com/js/js_errors.asp
    try {
        const res = await Req.get(`videos/${id_video}/comments`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    } catch (error) {
        // handle when have error
    }
};
export const createComment = async ({ id_video, token, text_comment }) => {
    // try catch https://www.w3schools.com/js/js_errors.asp
    try {
        const res = await Req.post(
            `videos/${id_video}/comments`,
            { comment: text_comment },
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
export const deleteComment = async ({ id_comment, token }) => {
    // try catch https://www.w3schools.com/js/js_errors.asp
    try {
        await Req.deletes(`comments/${id_comment}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: { id_comment },
        });
        return true;
    } catch (error) {
        // handle when have error
    }
};
