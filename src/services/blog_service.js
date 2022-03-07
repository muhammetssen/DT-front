import { BlogPost } from "../modal/blog_class";

// export  class BlogService {
//     static instance = null;
//     static get inst() {
//         if (BlogService.instance == null) {
//             BlogService.instance = new BlogService();
//         }
//         return this.instance;
//     }
//     constructor() {
//         // Initialize 
//         this.blogs = [
//             new BlogPost("body", "image", "title", "author"),
//             new BlogPost("body", "image", "title", "author"),
//             new BlogPost("body", "image", "title", "author"),
//             new BlogPost("body", "image", "title", "author"),
//             new BlogPost("body", "image", "title", "author"),
//             new BlogPost("body", "image", "title", "author"),
//         ]
//     }
    
// }


export default class BlogService {

    static myInstance = null;

    static getInstance() {
        if (BlogService.myInstance == null) {
            BlogService.myInstance = new BlogService();
        }
        return this.myInstance;
    }
    constructor(){
        this.posts = this.blogs = [
            new BlogPost("body", "image", "title", "author"),
            new BlogPost("body", "image", "title", "author"),
            new BlogPost("body", "image", "title", "author"),
            new BlogPost("body", "image", "title", "author"),
            new BlogPost("body", "image", "title", "author"),
            new BlogPost("body", "image", "title", "author"),
        ];
        this.count = 1
    }
   
}