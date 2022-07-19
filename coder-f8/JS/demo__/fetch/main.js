/** api application programing interface 
 * công giao giao tiếp giữa các phầm mền
*/
/** phước thức giao tiếp
 *  backend -> api(url) -> fetch -> json/xml 
 * json.parse -> javascript types
 * render ra giao diện html
 */
var urlAPI ='https://jsonplaceholder.typicode.com/posts';
fetch(urlAPI)
            .then(function(response){
                return response.json()
                // json.parse -> javascript types
            })
            .then(function(posts){
                console.log(posts)
            })