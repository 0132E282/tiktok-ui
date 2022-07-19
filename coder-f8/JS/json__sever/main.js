// kiến thức
// crud hành động chín của api server
// create : tao mới -post
// read : lấy dữ liệu-get 
// update : cập nhập chỉnh sửa - put/patch
// delete : xóa ->delete
var courseApi = 'http://localhost:3000/courses'
function start(){
     getCourses(renderCourse)
     handleCreateFrom()
}
start();
// function 
// ham lay ra api gia tri chuyen vao la call back
function getCourses(callback){
    fetch(courseApi)
                .then(function(response){
                    return response.json()
                })
                .then(callback)
}
function createCourse(data,callback){
    var options ={
        method : 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    };
    fetch(courseApi,options)
                           .then(function(response){
                               response.json()
                           })
                           .then(callback)
}
function handleDeleteCourse(id){
    var options ={
        method : 'DELETE',
        headers : {
            'Content-Type':'application/json'
        },
    }
    fetch(courseApi + '/'+id,options)
         .then(function(response){
             response.json()
         })
         .then(function(){
            var courseItem= document.querySelector(".course-item-"+id);
            courseItem.remove();
         });
}
function handlePatchCourse(id){
    var patchCourseBtn = document.querySelector('input[name="description-item"]').value;
    console.log(patchCourseBtn)
    var data ={
        description : patchCourseBtn
    }
    var options = {
        method : 'PATCH',
        headers :{
            'Content-Type':'application/json'
        },
        body :JSON.stringify(data)
    }
    fetch(courseApi+'/'+id,options)
         .then(function(response){
             response.json()
         })
         .then(function(){
            getCourses(renderCourse);
         })    
}
// nhan gia tri  trong ham renderCourse
function renderCourse(courses){
    var listCourses = document.querySelector(".list-courses");
    // dung map thay doi 
    var htmls = courses.map(function(course){
        return `
         <li class="course-item-${course.id}"> 
          <h4>${course.name} </h4>
          <p>${course.description}</p>
          <button class="delete" onclick=" handleDeleteCourse(${course.id})">xóa</button>
          <div>
          <input type="text" name="description-item">
          <button class="delete" onclick=" handlePatchCourse(${course.id})">sửa</button>
          </div>
         </li>
        `
    })
    listCourses.innerHTML = htmls
}
function handleCreateFrom(){
    var createBtn = document.querySelector("#create");
    createBtn.onclick = function(){
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
         var fromData ={
             name : name,
             description : description
         }
        createCourse(fromData,function(){
            getCourses(renderCourse);
        })      
    }
}
