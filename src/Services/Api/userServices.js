import * as Req from '~/utils/request';
// async / await https://www.w3schools.com/js/js_async.asp
export const getSuggested = async ({ page = 1, perPage = 12 }) => {
    // try catch https://www.w3schools.com/js/js_errors.asp
    try {
        const res = await Req.get(`/users/suggested`, {
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
export const getAnUser = async ({ nickname, currentToKen }) => {
    // try catch https://www.w3schools.com/js/js_errors.asp
    try {
        const res = await Req.get(`users/@${nickname}`, {
            params: { nickname },
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
export const getFlowingUsers = async ({ page = 1 }) => {
    try {
        const currentToKen = localStorage.getItem('success_token');
        const res = await Req.get(`me/followings`, {
            param: {
                page,
            },
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

export const postLogin = async ({ email, password }) => {
    try {
        const res = await Req.post('auth/login', {
            email,
            password,
        });

        return res;
    } catch (error) {
        // handle when have error
    }
};
