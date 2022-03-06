export function tagcard(tagname, color){
    return `
    <div class="tag-card">
                        <img src="https://via.placeholder.com/200X100" alt="">
                        <div class="tag-name" style="background-color: ${color}">
                            <span>${tagname}</span>
                            <br>
                            <span>tsgname : views</span>
                        </div>
                    </div>`
}

export function imgcard(url="#", type){
    switch(type){
        case "image/png":
            return `<div class="imgcard">
                        <img src="${url}" width="200px" height=""alt="">
                            <div class="img-title">
                            <p>Hi this is img title</p>
                            <span>upvotes</span>
                            <span>downvotes</span>
                            <span>views</span>
                        </div>
                    </div>`
                    break;
        case "image/jpg":
            return `<div class="imgcard">
                        <img src="${url}" width="200px" height=""alt="">
                            <div class="img-title">
                            <p>Hi this is img title</p>
                            <span>upvotes</span>
                            <span>downvotes</span>
                            <span>views</span>
                        </div>
                    </div>`
                    break;
        case "video/mp4":
            return `<div class="imgcard">
                        <video autoplay="true" width="250">
                            <source src=${url} type="video/mp4">
                        </video>
                            <div class="img-title">
                            <p>Hi this is img title</p>
                            <span>upvotes</span>
                            <span>downvotes</span>
                            <span>views</span>
                        </div>
                    </div>`
                    break;
        default:
            return `<div class="imgcard">
                        <img src="${url}" width="200px" height=""alt="">
                            <div class="img-title">
                            <p>Hi this is img title</p>
                            <span>upvotes</span>
                            <span>downvotes</span>
                            <span>views</span>
                        </div>
                    </div>`
    }   
}