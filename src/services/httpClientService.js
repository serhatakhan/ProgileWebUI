import axios from "axios";

async function post(url, data, header = null) {
    var result = await axios.post(url, data, {
        headers: header,
        timeout: 30000 // 30 sn de cevap gelmezse hata döndür
    });

    return result;
}

async function get(url, data, header = null) {
    var request = axios.create({ headers: header, data: data });

    await request
        .post(url)
        .then((resp) => console.log(resp))
        .catch((err) => console.log(err));
}

export default {
    post,
    get,
};
