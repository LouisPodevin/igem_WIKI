import { loadScript, loadTriggerAction } from "./tools.js"
import { initNavigation } from "./wiki-nav.js"
import "./gen/feather.js"

window.ROOT_URL = "/Team-Ionis_Paris"

const init = async () => {
    await Promise.all([initNavigation()])

    await loadScript(window.ROOT_URL + "/scripts/gen/rxjs.js", false, () => !!window.rxjs)

    await Promise.all([loadTriggerAction()])

    feather.replace()
}

init()
