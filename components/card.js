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

export function imgcard(url="#"){

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