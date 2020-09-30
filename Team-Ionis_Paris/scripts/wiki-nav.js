const navs = document.getElementsByClassName("navigation")

export const initNavigation = async () => {
    const links = window.LINKS

    if (navs.length === 0) {
        return
    }

    // Load HTML
    const navHtlm = await (await fetch(links.navigationHtml.url)).text()

    for (let itemNav of navs) {
        itemNav.innerHTML = navHtlm
    }

    // Load JS
    const scriptElm = document.createElement("script")
    scriptElm.setAttribute("src", links.navigationJs.url)
    scriptElm.setAttribute("type", "module")
    document.body.append(scriptElm)

    // Load CSS
    const cssElm = document.createElement("link")
    cssElm.setAttribute("rel", "stylesheet")
    cssElm.setAttribute("href", links.navigationCss.url)
    document.head.append(cssElm)
}
