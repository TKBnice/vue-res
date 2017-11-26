import reqwest from 'reqwest';
// reqwest,一个封装了promise的异步请求插件
// 需要cnpm install reqwest --save]

export const funUserData = ({ commit },userData) => {
    console.log(userData);
    reqwest({
      url:'https://www.easy-mock.com/mock/5a1a81c89840a812456659c6/example/test',
      method: 'post',
      contentType: 'application/json',
      crossOrigin: true,
      data: JSON.stringify(userData),
      dataType: 'json',
    }).then(res => {  
        commit('getUserData', // 这个type很重要，vue会自动去找mutations.js中名为getMsg的方法
            res, // 成功后把得到的数据通过commit传入mutations
        );
    })
};
export const fun = ({commit})=>{
    commit({
        type: 'getMsg', // 这个type很重要，vue会自动去找mutations.js中名为getMsg的方法
        msg:'提交的数据1111', // 成功后把得到的数据通过commit传入mutations});}

    });
}
