import * as Req from '~/utils/request';
export const getCurrentUser = async (currentToKen) => {
    try {
        const res = await Req.get('auth/me', {
            headers: { Authorization: `Bearer ${currentToKen}` },
        });
        return res.data;
    } catch (error) {
        // handle when have error
    }
};
