const waitDOMLoaded = async () => {
    if (window.isDOMLoaded) {
        return
    }

    const { first } = rxjs.operators

    await window.domLoadedSource.pipe(first()).toPromise()
}

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

    window.scrollSource = sourceScroll

    window.addEventListener("scroll", () => {
        sourceScroll.next()
    })

    const eventsScroll = sourceScroll.pipe(throttle(() => interval(300), { leading: true, trailing: true }))
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

    sourceScroll.next()
}

export const loadFont = async () => {
    const cssFont = await (await fetch(window.LINKS.fonts.url)).text()
    const cssBlob = new Blob([cssFont], { type: "text/css" })
    const cssUrl = URL.createObjectURL(cssBlob)
    const cssElm = document.createElement("link")
    cssElm.setAttribute("rel", "stylesheet")
    cssElm.setAttribute("href", cssUrl)
    document.head.append(cssElm)
}

export const loadGlobalCss = async () => {
    const cssElm = document.createElement("link")
    cssElm.setAttribute("rel", "stylesheet")
    cssElm.setAttribute("href", window.LINKS.globalCss.url)
    cssElm.setAttribute("type", "text/css")
    document.head.append(cssElm)
}

export const loadTailwind = async () => {
    if (document.querySelector(".tailwind")) {
        const cssTailwind = await (await fetch(window.LINKS.tailwind.url)).text()
        const cssUrl = URL.createObjectURL(new Blob([cssTailwind], { type: "text/css" }))
        const cssElm = document.createElement("link")
        cssElm.setAttribute("rel", "stylesheet")
        cssElm.setAttribute("href", cssUrl)
        cssElm.setAttribute("type", "text/css")
        document.head.append(cssElm)
    } else {
        fetch(window.LINKS.tailwind.url)
    }
}

export const loadBootstrap = async () => {
    const cssElm = document.createElement("link")
    cssElm.setAttribute("rel", "stylesheet")
    cssElm.setAttribute("href", window.LINKS.bootstrapCss.url)
    document.head.append(cssElm)
    await loadScript(window.LINKS.jquery.url, false, () => !!window.$),
        await Promise.all([loadScript(window.LINKS.popper.url), loadScript(window.LINKS.bootstrapJs.url)])
}

export const loadFooter = async () => {
    await waitDOMLoaded()

    const footerElm = document.getElementsByTagName("footer")[0]

    if (!footerElm) {
        return
    }

    const footerHtml = await (await fetch(window.LINKS.footerHtml.url)).text()
    footerElm.innerHTML = footerHtml

    const cssFooter = document.createElement("link")
    cssFooter.setAttribute("rel", "stylesheet")
    cssFooter.setAttribute("href", window.LINKS.footerCss.url)
    document.head.append(cssFooter)
}

export const triggerSeeMore = async () => {
    const seeMoreElms = document.getElementsByClassName("seeMore")

    const handleScroller = (divElm, targetId) => {
        divElm.addEventListener("click", async e => {
            e.preventDefault()

            while (!window.$) {
                await new Promise(res => setTimeout(res, 200))
            }

            const targetElm = document.getElementById(targetId)
            if (!targetElm) {
                return
            }

            $("html, body").animate({
                scrollTop: targetElm.getBoundingClientRect().top + window.pageYOffset - 30,
            })
        })
    }

    await waitDOMLoaded()

    for (const seeMoreElm of seeMoreElms) {
        seeMoreElm.innerHTML = `<button class="container seeMoreContainer">
                                    <div class="seeMoreLogoContainer">
                                        <i class="seeMoreLogo" data-feather="chevron-down"></i>
                                    </div>
                                    <div class="seeMoreText">Click here to see more</div>
                                </button>`
    }

    const handleScrollDivs = document.querySelectorAll("[target-id]")

    for (const handleScrollDiv of handleScrollDivs) {
        const targetId = handleScrollDiv.getAttribute("target-id")

        if (targetId) {
            if (targetId) {
                handleScroller(handleScrollDiv, targetId)
            }
        }
    }
}

export const loadTitles = async () => {
    const realTitle = document.querySelector("body title")?.text

    if (!realTitle) {
        return
    }

    const targetTitle = document.querySelector("title")
    if (targetTitle) {
        targetTitle.text = `Ionis Paris | ${realTitle}`
    }
}
