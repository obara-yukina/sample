import React, { Component } from "react"
import { render } from "react-dom"
import { ajax, getCookie } from "../js/common.js"

export default class CmpLogin extends Component {
    constructor(props) {
        super(props);
    }

    login() {

        let inputEmployeeNo = document.getElementById('employeeNo').value;
        let inputPassword = document.getElementById('password').value;

        let param = {
            'employeeNo': inputEmployeeNo,
            'name': "",
            'password': inputPassword
        }

        let params = {
            'params': param
        }

        try {

            // いれないと403エラー
            // csrf…正規フロントエンドから要求されているか確認するモノ
            let csrftoken = getCookie('csrftoken');

            alert(csrftoken);

            let header = {
                'X-CSRFToken': csrftoken
            };

            let headers = {
                'headers': header
            }

            let url = 'login/'

            let type = 'POST'

            let res = ajax(url, type, params, headers);
            
            alert(res.data['existsFlg']);
            // alert(res.data.password);

            window.location = 'home/';

        } catch (error) {

            alert(error);

        }
    }

    render() {
        return (
            <div class="container">
                <div class="card">
                    <div><h1>人財管理システム</h1></div>
                    <div class="card-body">
                        <form>
                            <div className="form-item">
                                <input type="number" id="employeeNo" required="required" placeholder="社員番号" min="0"></input>
                            </div>
                            <div className="form-item">
                                <input type="password" id="password" required="required" placeholder="パスワード"></input>
                            </div>
                            <div className="button-panel">
                                <button className="button" onClick={() => { this.login() }}>ログイン</button>
                            </div>
                        </form >
                        <div className="form-footer">
                            <a href="" className="">パスワードを忘れた場合</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

render(<CmpLogin />, document.getElementById("formBody"));
