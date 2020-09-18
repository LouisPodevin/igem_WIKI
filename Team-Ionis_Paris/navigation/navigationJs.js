// @ts-check

// @ts-ignore
const rootUrl = window.ROOT_URL

/** @type {Array<
 * {
 *  title: string
 * } &
 * (
 *  {
 *  link: string,
 *  match?: string | Array<string>
 * } | {
 *  childrens: Array<{
 *      title: string,
 *      link: string,
 *      match?: string | Array<string>
 *  }>})
 * >} */
const menu = [
    {
        title: "Home",
        link: rootUrl + "/",
        match: [rootUrl, `${rootUrl}/`],
    },
    {
        title: "Team",
        link: rootUrl + "/Team/",
    },
    {
        title: "Project",
        childrens: [
            { title: "Test1", link: "jjj" },
            { title: "sdmlqk", link: "djqisdj" },
        ],
    },
    {
        title: "Lab",
        childrens: [
            { title: "Test1", link: "jjj" },
            { title: "sdmlqk", link: "djqisdj" },
        ],
    },
    {
        title: "Safety",
        childrens: [
            { title: "Test1", link: "jjj" },
            { title: "sdmlqk", link: "djqisdj" },
        ],
    },
    {
        title: "Parts",
        childrens: [
            { title: "Test1", link: "jjj" },
            { title: "sdmlqk", link: "djqisdj" },
        ],
    },
    {
        title: "Software",
        childrens: [
            { title: "Test1", link: "jjj" },
            { title: "sdmlqk", link: "djqisdj" },
        ],
    },
    {
        title: "Human practices",
        childrens: [
            { title: "Test1", link: "jjj" },
            { title: "sdmlqk", link: "djqisdj" },
        ],
    },
    {
        title: "Judging form",
        childrens: [
            { title: "Test1", link: "jjj" },
            { title: "sdmlqk", link: "djqisdj" },
        ],
    },
]

const actualPos = window.location.pathname

/** @param {string | Array<string>} url */
const matchUrl = url => {
    /** @type {(elm: string | Array<string>) => elm is Array<string>} */
    const isArray = elm => {
        return Array.isArray(elm)
    }

    if (isArray(url)) {
        return url.reduce((prev, curr) => {
            if (prev) {
                return true
            }

            const regexElm = new RegExp(curr)
            return actualPos.search(regexElm) !== -1
        }, false)
    }

    const regexElm = new RegExp(url)
    return actualPos.search(regexElm) !== -1
}

/** @type {Array<boolean | Array<boolean>>} */
const active = Array(menu.length)
    .fill(false)
    .map((elm, pos) => {
        /**@type {any} */
        const link = menu[pos]
        if (link.childrens) {
            return link.childrens.map(elm2 => {
                return !!elm2.match && matchUrl(elm2.match)
            })
        } else {
            return !!link.match && matchUrl(link.match)
        }
    })

const initNav = async () => {
    // @ts-ignore
    await import(window.LINKS.vueJs.url)

    // @ts-ignore
    new Vue({
        el: "#navigation",
        data() {
            return {
                menu: menu.map((value, index) => ({ ...value, index })),
                openedMenu: Array(menu.length)
                    .fill(false)
                    .map((_, pos) => {
                        const activeElm = active[pos]
                        if (Array.isArray(activeElm)) {
                            return activeElm.reduce((prev, curr) => {
                                return prev || curr
                            }, false)
                        }
                    }),
                active: active,
            }
        },
        methods: {
            toggleMenu(index) {
                this.openedMenu = this.openedMenu.map((value, i) =>
                    i === index ? !value : value,
                )
            },

            getRotation(index) {
                return { transform: `rotate(${this.openedMenu[index] ? "180" : "0"}deg)` }
                // return { color: `${this.openedMenu[index] ? "blue" : "red"}` }
            },
        },
    })
}

initNav()
