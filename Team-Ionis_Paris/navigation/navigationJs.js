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
        link: rootUrl,
        match: `^${rootUrl}/?$`,
    },
    {
        title: "Team",
        childrens: [
            {
                title: "Team Members",
                link: rootUrl + "/Team",
                match: `^${rootUrl}/Team$`,
            },
            {
                title: "Collaborations",
                link: rootUrl + "/Collaborations",
                match: `^${rootUrl}/Collaborations$`,
            },
            {
                title: "Contribution",
                link: rootUrl + "/Contribution",
                match: `^${rootUrl}/Contribution$`,
            },
            {
                title: "Partnership",
                link: rootUrl + "/Partnership",
                match: `^${rootUrl}/Partnership$`,
            },
            {
                title: "Attributions",
                link: rootUrl + "/Attributions",
                match: `^${rootUrl}/Attributions$`,
            },
            {
                title: "Achievements",
                link: rootUrl + "/Team/Achievements",
                match: `^${rootUrl}/Team/Achievements$`,
            },
        ],
    },
    {
        title: "Project",
        childrens: [
            {
                title: "Description",
                link: rootUrl + "/Description",
                match: `^${rootUrl}/Description$`,
            },
            {
                title: "Design",
                link: rootUrl + "/Design",
                match: `^${rootUrl}/Design$`,
            },
            {
                title: "Part overview",
                link: rootUrl + "/project/PartOverview",
                match: `^${rootUrl}/project/PartOverview$`,
            },
            {
                title: "Notebook",
                link: rootUrl + "/Notebook",
                match: `^${rootUrl}/Notebook$`,
            },
            {
                title: "Protocols",
                link: rootUrl + "/project/Protocols",
                match: `^${rootUrl}/project/Protocols$`,
            },
            {
                title: "Results",
                link: rootUrl + "/Results",
                match: `^${rootUrl}/Results$`,
            },
            {
                title: "Engineering Success",
                link: rootUrl + "/Engineering",
                match: `^${rootUrl}/Engineering$`,
            },
            {
                title: "Proof of Concept",
                link: rootUrl + "/Proof_Of_Concept",
                match: `^${rootUrl}/Proof_Of_Concept`,
            },
        ],
    },
    {
        title: "Phases",
        childrens: [
            {
                title: "Phase 1",
                link: rootUrl + "/Phases/phase1",
                match: `^${rootUrl}/Phases/phase1$`,
            },
            {
                title: "Phase 2",
                link: rootUrl + "/Phases/phase2",
                match: `^${rootUrl}/Phases/phase2$`,
            },
            {
                title: "Phase 3",
                link: rootUrl + "/Phases/phase3",
                match: `^${rootUrl}/Phases/phase3$`,
            },
            {
                title: "Phase 4",
                link: rootUrl + "/Phases/phase4",
                match: `^${rootUrl}/Phases/phase4$`,
            },
            {
                title: "Implementation",
                link: rootUrl + "/Implementation",
                match: `^${rootUrl}/Implementation$`,
            },
        ],
    },
    {
        title: "Software",
        link: rootUrl + "/Software",
        match: `^${rootUrl}/Software$`,
    },
    {
        title: "Human practices",
        childrens: [
            { title: "Human Practices", link: rootUrl + "/Human_Practices", match: `^${rootUrl}/Human_Practices$` },
            { title: "Public Engagement and Education", link: rootUrl + "/Education", match: `^${rootUrl}/Education$` },
        ],
    },
    {
        title: "Safety",
        link: rootUrl + "/Safety",
        match: `^${rootUrl}/Safety$`,
    },
    {
        title: "Judging form",
        link: "https://igem.org/2020_Judging_Form?team=Ionis_Paris",
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
            return regexElm.test(actualPos)
        }, false)
    }

    const regexElm = new RegExp(url)
    return regexElm.test(actualPos)
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

const localstorageMenu = "__OPEN_MENU__"
const shouldOpenMenu = localStorage.getItem(localstorageMenu)

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
                show: shouldOpenMenu !== "false",
            }
        },
        methods: {
            toggleMenu(index) {
                this.openedMenu = this.openedMenu.map((value, i) => (i === index ? !value : value))
            },

            getRotation(index) {
                return { transform: `rotate(${this.openedMenu[index] ? "180" : "0"}deg)` }
                // return { color: `${this.openedMenu[index] ? "blue" : "red"}` }
            },
            showMenu(event) {
                event.stopPropagation()
                this.show = !this.show
            },
            triggerMenuFull() {
                if (!this.show) {
                    this.show = true
                }
            },
        },
        computed: {
            leftPos() {
                return this.show ? "0px" : "-310px"
            },
        },
        watch: {
            show(val) {
                document.body.style.paddingLeft = val ? "350px" : "40px"
                localStorage.setItem(localstorageMenu, val ? "true" : "false")
            },
        },
        mounted() {
            document.body.style.paddingLeft = this.show ? "350px" : "40px"
            document.getElementById("navigation").style.opacity = "1"
        },
    })
}

initNav()
