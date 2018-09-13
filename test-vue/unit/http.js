export default {
  get (url) {
      return new Promise(function (resolve, reject) {
          var XHR = new XMLHttpRequest();
          XHR.open('GET', url, true);//这里改一下就是POST了
          XHR.send();
          XHR.onreadystatechange = function () {
              if (XHR.readyState === 4) {
                  if (XHR.status === 200) {
                      try {
                          let response = JSON.parse(XHR.responseText)
                          resolve(response);
                      } catch (e) {
                          reject(e);
                      }
                  } else {
                      reject(new Error(XHR.statusText));
                  }
              }
          }
      })

  }
}