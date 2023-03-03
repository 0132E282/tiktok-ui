import * as Req from '~/utils/request';

export const getCurrentUser = async (currentToKen) => {
    try {
        const res = await Req.get('auth/me',{
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${currentToKen}`,
            },
        });
        return res.data;
    } catch (error) {
        // handle when have error
    }
};

export const updateAccount = async (
    currentToKen,
    { first_name, last_name, avatar, gender, bio, date_of_birth, website_url },
) => {
    try {
        const res = await Req.post(
            'auth/me?_method=PATCH',
            { first_name, last_name, avatar, gender, bio, date_of_birth, website_url },
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Accept: 'application/json',
                    Authorization: `Bearer ${currentToKen}`,
                },
            },
        );
        return res.data;
    } catch (error) {
        // handle when have error
    }
};
