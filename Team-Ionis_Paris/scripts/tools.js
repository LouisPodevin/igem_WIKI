/**
 * Load js file
 * @param {string} url The url
 * @param {boolean} isModule Should load it as a module
 */
export const loadScript = async (url, isModule = false) => {
    const scriptElm = document.createElement("script")
    scriptElm.setAttribute("src", url)

    if (isModule) {
        scriptElm.setAttribute("type", "module")
    }

    document.body.append(scriptElm)
}
