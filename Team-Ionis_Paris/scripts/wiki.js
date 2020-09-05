import { loadScript } from "./tools.js"
import { initNavigation } from "./wiki-nav.js"

window.ROOT_URL = "/Team-Ionis_Paris"

const loadFeather = async () => {
    await loadScript(window.ROOT_URL + "/scripts/gen/feather.js")
}

const init = async () => {
    await Promise.all([initNavigation(), loadFeather()])

    setTimeout(() => feather.replace(), 200)
}

init()
