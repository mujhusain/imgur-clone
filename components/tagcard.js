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