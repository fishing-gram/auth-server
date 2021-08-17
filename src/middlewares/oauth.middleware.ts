import passport from 'passport';

export default {
  kakao() {
    passport
      .authenticate('kakao', {
        scope: ['email', 'userid'],
      })
      .success(function (user, info) {
        console.log(user);
      })
      .failure(function (err) {
        console.log(err);
      });
  },
  naver() {
    passport
      .authenticate('naver', {
        scope: ['email', 'userid'],
      })
      .success(function (user, info) {
        console.log(user);
      })
      .failure(function (err) {
        console.log(err);
      });
  },
};
