/**
 * Load js file
 * @param {string} url The url
 * @param {boolean} isModule Should load it as a module
 * @param {() => boolean} Function to check if the module is loaded
 */
export const loadScript = async (url, isModule = false, isModuleLoaded = undefined) => {
    const scriptElm = document.createElement("script")
    scriptElm.setAttribute("src", url)

    if (isModule) {
        scriptElm.setAttribute("type", "module")
    }

    document.body.append(scriptElm)

    if (isModuleLoaded) {
        while (!isModuleLoaded()) {
            await new Promise(res => setTimeout(res, 20))
        }
    }
}

/**
 * Function use to trigger something on screen, when the element become present in the viewport
 */
export const loadTriggerAction = async () => {
    const { Subject, interval } = rxjs

    const { throttle } = rxjs.operators

    const sourceScroll = new Subject()

    window.addEventListener("scroll", () => {
        sourceScroll.next()
    })

    const eventsScroll = sourceScroll.pipe(
        throttle(() => interval(300), { leading: true, trailing: true }),
    )
    eventsScroll.subscribe(() => {
        const elementsMiddle = document.querySelectorAll(".triggerMiddle:not(.active)")
        const elementsBottom = document.querySelectorAll(".triggerBottom:not(.active)")

        const windowHeight = window.innerHeight

        for (let elementMiddle of elementsMiddle) {
            const positionFromTop = elementMiddle.getBoundingClientRect().top
            const positionFromMiddle = positionFromTop - windowHeight / 2
            if (positionFromMiddle < 0) {
                elementMiddle.classList.add("active")
            }
        }

        for (let elementBottom of elementsBottom) {
            const positionFromTop = elementBottom.getBoundingClientRect().top
            const positionFromBottom = positionFromTop - windowHeight
            if (positionFromBottom < 0) {
                elementBottom.classList.add("active")
            }
        }
    })
}

export const loadFont = async () => {
    const cssFont = await (await fetch(window.ROOT_URL + "/fonts/fonts.css")).text()
    const mappedCss = cssFont
        .split("__ROOT_LOCATION__")
        .join(window.location.origin + window.ROOT_URL)
    const cssBlob = new Blob([mappedCss], { type: "text/css" })
    const cssUrl = URL.createObjectURL(cssBlob)
    const cssElm = document.createElement("link")
    cssElm.setAttribute("rel", "stylesheet")
    cssElm.setAttribute("href", cssUrl)
    document.head.append(cssElm)
}

export const loadGlobalCss = async () => {
    const cssElm = document.createElement("link")
    cssElm.setAttribute("rel", "stylesheet")
    cssElm.setAttribute("href", window.ROOT_URL + "/styles/global.css")
    cssElm.setAttribute("type", "text/css")
    document.head.append(cssElm)
}
