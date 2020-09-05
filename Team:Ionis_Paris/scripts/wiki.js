// @ts-check

import { initNavigation } from "./wiki-nav.js"

const init = async () => {
    await Promise.all([initNavigation()])
}

init()
