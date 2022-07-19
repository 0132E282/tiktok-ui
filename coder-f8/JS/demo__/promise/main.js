/*call back hell :
    call back lòng call back trông cái call back oracle function  lại có thực thi lòng call back được gội là call back hell
 */
/* promise là một khái miện sinh ra để sử lý thao tác bất đồng bộ (async) trươc khi có
promise chung ta sử dụng call back nhưng nó sinh ra vấn đề được gội là call back hell thì 
promise để giải quết vấn đề đấy  */
/*promise khai báo */
var promise = new Promise(
    // chuyền vào function (executor)
    function(resolve,reject){
        // nhận 2 đôi số  resolve(được giải quyết) , reject(không được giả quyết)
        /*logic
            nếu logic thành công sẻ gội resolve ngược lại
            * phải 1 trong 2 đối số không được bỏ trống nếu để trống bị treo (memory leak)
            tạm hiểu lảng phí bộ nhớ
        */
            reject('thất bại ')
    }

)
// promise có 3 trạng thái 
// Pendding đang chời thành công hây thất bại
// fulfilled trạng thái thành công được gọi
// rejected trạn thái thất bại
promise
      .then(function(value){
          console.log(value)
      }) // thực thi sâu khi ngội resolve
      .catch(function(){

      }) // thực thi khi ngội reject
      .finally(function(){
          console.log("done")
      });// 1 trong 2 resolve ,reject được gọi