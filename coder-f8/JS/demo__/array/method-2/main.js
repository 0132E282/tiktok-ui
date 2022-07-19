var courses = [
    {
        id : 1,
        name :'javascript',
        coin : 0
    },
    {
        id : 2,
        name :'java',
        coin :2
    },
    {
        id : 3,
        name :'ruby',
        coin :2
    },
    {
        id : 4,
        name :'ruby',
        coin :2
    }
];
// forEach duyet qua phan tu cua mang
function demoForEach(){
    courses.forEach(function(course,index){
        console.log('stt :'+index);
        console.log(course);
    
    });
}
// every kiem tra tat ca phan tu phai thuoc dieu kien gi day 
//tra ve kieu boolean
function demoEvery(){
    var check = courses.every(function(course,index){
        console.log('stt :'+index);
        console.log(course);
        return course.coin === 0;
    });
    console.log(check)
};
// some kiem tra tung phan tu chi can 1 phan tu thoa  mang
//  tra ve kieu boolean
function demoSome(){
    var check = courses.some(function(course,index){
        console.log('stt :'+index);
        console.log(course);
        return course.coin === 0;
    });
    console.log(check);
};
// find loc qua tung phan va tra ve 1 phan tu tim kiem
//  tra ve kieu phan tu bang true
// neu khong co phan tu tim thay tra ve undefined
function demoFind (){
    var check = courses.find(function(course,index){
        return course.name === 'ruby';
    });
    console.log(check);
};
// filter loc qua tung phan va tra ve  nhieu phan tu tim kiem
//  tra ve kieu phan tu bang true
// neu khong co phan tu tim thay tra ve undefined
function demoFilter(){
    var check = courses.filter(function(course,index){
        return course.name === 'ruby';
    });
    console.log(check);
}
// map chinh su element cua mot array 
// return mot mang moi
function demoMap(){
    var newCourses = courses.map(function(course,index){
        return {
            id : course.id,
            name :'khoc hoc :'+course.name
        }
    });
    console.log(newCourses)
}
// reduce : tinh tong tat ca phan tu mang
function demoReduce(){
    var totalCoin = courses.reduce(function(previousValue,currentValue){
        return previousValue + currentValue.coin;
    },0)
    console.log(totalCoin)
}
// flat - 'lam phang mang tu depth array-"mang sau"'
function demoFlat(){
    var depArray = [1,2,[2,3],3,1,2,[2,4,6]];
    var flatArray = depArray.reduce(function(previousValue,currentValue){
        return previousValue.concat(currentValue)
    },[]);
    console.log(flatArray);
};
// lay ra cac element vao mang moi
function demoFlat2(){
    var topics = [
        {
            topic:'Font-end',
            courses:[
                {
                    id:1,
                    title : 'html,css'
                },
                {
                    id:2,
                    title: 'javascript'
                }
            ]
        },
        {
            topic:'Back-end',
            courses:[
                {
                    id:1,
                    title : 'php'
                },
                {
                    id:2,
                    title: 'notJS'
                }
            ]
        }
    ] 
    var newCourses = topics.reduce(function(previousValue,currentValue){
        return previousValue.concat(currentValue.courses)
    },[]);
    console.log(newCourses)
}


// includes method co sang trong array va string
function demoIncludes(){
    // su dung trong tring kiem tra chong chuoi co hay khong tra ve boolean
    var title = 'nguyen hoang phuc';
    console.log(title.includes('nguyen',1));
    var courses = ['php','js','ruby'];
    console.log ('php');
}