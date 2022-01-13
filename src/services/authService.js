import API from './interceptor';

export function setLogin(payload) {
    var bodyFormData = new URLSearchParams();
    bodyFormData.append('username', `${payload.username}`);
    bodyFormData.append('password', `${payload.password}`);
    bodyFormData.append('grant_type', 'password');
    bodyFormData.append('scope', 'admin');
    return API({
        method: 'POST',
        url: '/auth/token',
        headers: {
            "Authorization": `Basic dGdwLWFkbWluLXBvcnRhbDpCSUdGT09UT05USEVMT09TRSMxNTI=`,
            "content-Type": 'application/x-www-form-urlencoded'
        },
        data: bodyFormData
    })
}