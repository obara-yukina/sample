// 非同期処理
export async function ajax(url, type, params, headers) {

    try {

        if (type = 'POST') {

            // axiosでhttp通信(サーバーとのやり取り)可能
            // awaitで戻り値取得可能
            let res = await axios.post(url, params, headers);

            return res;
            
        }

    } catch (error) {

        alert(error);

    }

}

export function getCookie(name) {

    var cookieValue = null;

    if (document.cookie && document.cookie !== '') {

        var cookies = document.cookie.split(';');

        for (var i = 0; i < cookies.length; i++) {

            var cookie = cookies[i].trim();

            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {

                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;

            }

        }

    }

    return cookieValue;

}
