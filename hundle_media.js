async function getMedia(constraints) {
    let stream = null;
  
    try {
      // メディアデバイス（カメラ・マイク）にアクセスし、ストリームを取得
      stream = await navigator.mediaDevices.getUserMedia(constraints);
      /* ストリームを使用（映像を表示、録画、WebRTCで通信など） */
    } catch (err) {
      /* エラーを処理（例: ユーザーがアクセスを拒否した、デバイスがないなど） */
    }
  }
  