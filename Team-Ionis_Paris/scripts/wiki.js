import {
    loadScript,
    loadTriggerAction,
    loadFont,
    loadGlobalCss,
    loadBootstrap,
    loadFooter,
} from "./tools.js"
import { initNavigation } from "./wiki-nav.js"
import "./gen/feather.js"

window.ROOT_URL = "/Team-Ionis_Paris"

const init = async () => {
    await Promise.all([
        initNavigation(),
        loadFont(),
        loadGlobalCss(),
        loadBootstrap(),
        loadFooter(),
    ])
    feather.replace()

    await loadScript(window.ROOT_URL + "/scripts/gen/rxjs.js", false, () => !!window.rxjs)

    await Promise.all([loadTriggerAction()])
}

init()
