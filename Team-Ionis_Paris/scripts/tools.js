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
