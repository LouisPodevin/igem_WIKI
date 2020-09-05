// @ts-check

import { loadScript } from "./tools.js"
import { initNavigation } from "./wiki-nav.js"

const loadFeather = async () => {
    await loadScript("/Team:Ionis_Paris/scripts/gen/feather.js")
}

const init = async () => {
    await Promise.all([initNavigation(), loadFeather()])
    // @ts-ignore

    setTimeout(() => feather.replace(), 200)
}

init()
