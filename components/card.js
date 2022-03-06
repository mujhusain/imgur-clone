export function tagcard(tagname, color){
    return `
    <div class="tag-card">
                        <img src="https://via.placeholder.com/180X70" alt="">
                        <div class="tag-name" style="background-color: ${color}">
                            <span>${tagname}</span>
                            <br>
                            <span>tsgname : views</span>
                        </div>
                    </div>`
}

export function imgcard(title,link, type,height,ups, downs, views){
    switch(type){
        case "image/png":
            return `<div class="imgcard">
                        <img src="${link}" width="100%" height=${height} alt="">
                            <div class="img-title">
                            <p>${title}</p>
                            <span>${ups}</span>
                            <span>${downs}</span>
                            <span>${views}</span>
                        </div>
                    </div>`
                    break;
        case "image/jpg":
            return `<div class="imgcard">
                        <img src="${link}" width="100%" height=${height}alt="">
                            <div class="img-title">
                            <p>${title}</p>
                            <span><i class="fa-duotone fa-up"></i>${ups}</span>
                            <span><i class="fa-duotone fa-down"></i>${downs}</span>
                            <span><i class="fa-duotone fa-eye">hare</i>${views}</span>
                        </div>
                    </div>`
                    break;
        case "video/mp4":
            return `<div class="imgcard">
                        <video controls height=${height} width="100%">
                            <source src=${link} type="video/mp4">
                        </video>
                            <div class="img-title">
                            <p>${title}</p>
                            <span>${ups}</span>
                            <span>${downs}</span>
                            <span>${views}</span>
                        </div>
                    </div>`
                    break;
        default:
            return `<div class="imgcard">
                        <img src="${link}" width="100%" height=${height} alt="">
                            <div class="img-title">
                            <p>${title}</p>
                            <span>${ups}</span>
                            <span>${downs}</span>
                            <span>${views}</span>
                        </div>
                    </div>`
    }   
}