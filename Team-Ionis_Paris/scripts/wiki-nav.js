const navs = document.getElementsByClassName("navigation")

export const initNavigation = async () => {
    const rootUrl = window.ROOT_URL

    if (navs.length === 0) {
        return
    }
    document.body.style.paddingLeft = "390px"

    // Load JS
    const scriptElm = document.createElement("script")
    scriptElm.setAttribute("src", rootUrl + "/navigation/navigation.js")
    scriptElm.setAttribute("type", "module")
    document.body.append(scriptElm)

    // Load CSS
    const cssElm = document.createElement("link")
    cssElm.setAttribute("rel", "stylesheet")
    cssElm.setAttribute("href", rootUrl + "/navigation/navigation.css")
    document.head.append(cssElm)

    // Load HTML
    const navHtlm = await (await fetch(rootUrl + "/navigation/navigation.html")).text()

    for (let itemNav of navs) {
        itemNav.innerHTML = navHtlm
    }
}
