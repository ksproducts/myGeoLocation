
/**
 *
 *  $ JavaScript Library for GeoLocation API $
 *
 */


//===========================================
// GeoLocationクラス
//===========================================
//{
    var myGeoLocation = {

        // エラーを表示するエレメントID
        error_element_id: '',

        // オプション
        options: {
            enableHighAccuracy: true, // 高精度で位置情報を取得するか（true|false）
            timeout: 8000,            // タイムアウト時間（単位：ミリ秒）
            maximumAge: 5000,         // 位置情報をキャッシュしておく時間（単位：ミリ秒）
        },

        make: function() {

            // Geolocation APIに対応している
            if(navigator.geolocation) {

                // 現在位置を取得する
                navigator.geolocation.getCurrentPosition( this.success, this.failure, this.options );

            } else {

                // 現在位置を取得できない場合の処理
                alert("あなたの端末では、現在位置を取得できません。");

            }

        },

        // 成功した時
        success: function(position)
        {

            if(position != null) {

                var latitude          = position.coords.latitude;         // 緯度
                var longitude         = position.coords.longitude;        // 経度
                var altitude          = position.coords.altitude;         // 高度
                var accuracy          = position.coords.accuracy;         // 座標取得の精度
                var altitude_accuracy = position.coords.altitudeAccuracy; // 高度取得の精度
                var heading           = position.coords.heading;          // 方角（0:北, 90:東, 180:南, 270:西）
                var speed             = position.coords.speed;            // 速度（m/秒）

                if(latitude != null && longitude != null) {

                    searchByLocation(latitude, longitude);

                } else {

                    this.failure(0);

                }

            } else {

                this.failure(0);

            }

        },

        // 失敗した時
        failure: function(error)
        {
            // エラーメッセージの定義
            var error_message = {
                0: "原因不明のエラーが発生しました。" ,
                1: "位置情報の取得が許可されていません。" ,
                2: "電波状況などで位置情報が取得できませんでした。" ,
                3: "位置情報の取得に時間がかかり過ぎてタイムアウトしました。" ,
            };

            // エラー内容を表示
            document.getElementById(myGeoLocation.error_element_id).innerText = error_message[error.code];
        },

    }
//}

