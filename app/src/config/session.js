const session = {
  // 세션 생성
  createSession: (req, user) => {
    if (req.session.user) {
      // res.redirect("/");
    } else {
      req.session.user = user;
    }
  },
  //   세션 제거
  destroySession: (req) => {
    if (req.session.user) {
      req.session.destroy((err) => {
        if (err) throw err;
        // res.redirect("/");
      });
    } else {
      // 로그인 화면으로 이동
      // res.redirect("/");
    }
  },
};

module.exports = session;

// router.route("/process/login").post(function (req, res) {
//   if (req.session.user) {
//     res.redirect("/public/product.html");
//   } else {
//     // 세션 저장
//     req.session.user = {
//       // 로그인된 유저 정보 저장
//     };
//   }
// });

// // 로그아웃 라우팅 함수 - 로그아웃 후 세션 삭제함
// router.route("/process/logout").get(function (req, res) {
//   if (req.session.user) {
//     req.session.destroy(function (err) {
//       if (err) {
//         throw err;
//       }

//       res.redirect("/public/login2.html");
//     });
//   } else {
//     // 로그인 화면으로 이동
//     res.redirect("/public/login2.html");
//   }
// });
