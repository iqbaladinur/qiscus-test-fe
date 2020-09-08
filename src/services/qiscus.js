import QiscusSDK from 'qiscus-sdk-core'

const qiscus = new QiscusSDK()
qiscus.init({
  AppId: 'sdksample',
  options: {
    loginSuccessCallback: function() {},
    loginErrorCallback(data) {},
    newMessagesCallback(data) {},
    groupRoomCreatedCallback(data) {},
  },
  mode: 'wide', // widget | wide
});

if (localStorage.getItem('authData')) {
  const userData = JSON.parse(localStorage.getItem('authData'));
  qiscus.setUserWithIdentityToken({ user: userData });
}

export default qiscus