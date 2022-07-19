export default function html([first,...strings],...values){
    // view tuong tac nguoi dung 
    return values.reduce((acc,cur) => acc.concat(cur , strings.shift()),
    [first])
    .filter(x => x && x !== true || x === 0)
    .join(' ')
} 
// store 
export function createStore(reducer){
    let state = reducer()
    const roots = new  Map()
    function render (){
        for(const [root,component] of roots){
           const output = component()
           root.innerHTML = output
        }
    }
    return {
        /// nhan cai view đẩy ra html
        attach (component,root){
            roots.set(root, component)
            render()
        },
        // kết nối attach với view đảy dự liệu store vao view
        connect ( selector =  state => state){
            return component => (props ,...args)=>
            component(Object.assign({},props,selector(state),...args))
        },
        dispatch (action , ...args){
            state = reducer(state , action , args)
            render()
        }
    }
}