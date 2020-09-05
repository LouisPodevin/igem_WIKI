// @ts-check

const navs = document.getElementsByClassName("navigation")

export const initNavigation = async () => {
    // Load HTML
    const navHtlm = await (
        await fetch("/Team:Ionis_Paris/navigation/navigation.html")
    ).text()

    if (navs.length === 0) {
        return
    }

    for (let itemNav of navs) {
        itemNav.innerHTML = navHtlm
    }

    // Load JS
    const scriptElm = document.createElement("script")
    scriptElm.setAttribute("src", "/Team:Ionis_Paris/navigation/navigation.js")
    scriptElm.setAttribute("type", "module")
    document.body.append(scriptElm)

    // Load CSS
    const cssElm = document.createElement("link")
    cssElm.setAttribute("rel", "stylesheet")
    cssElm.setAttribute("href", "/Team:Ionis_Paris/navigation/navigation.css")
    document.head.append(cssElm)
}
