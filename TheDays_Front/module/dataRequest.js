import request from "./request";


export const requestData = (title) => request.post('api/request_data',
    JSON.stringify({
        title: title,
}),{
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});

export const requestArea = (area_num) => request.post('api/request_area',
    JSON.stringify({
        area_num: area_num          
}),{
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});