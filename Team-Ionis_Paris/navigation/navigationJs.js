// @ts-check

/** @type {Array<
 * {
 *  title: string
 * } &
 * (
 *  {
 *  link: string,
 * } | {
 *  childrens: Array<{
 *      title: string,
 *      link: string
 *  }>})
 * >} */

const menu = [
    {
        title: "Home",
        // @ts-ignore
        link: window.ROOT_URL + "/",
    },
    {
        title: "Team",
        childrens: [
            { title: "Test1", link: "jjj" },
            { title: "sdmlqk", link: "djqisdj" },
        ],
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

const initNav = async () => {
    // @ts-ignore
    await import(window.LINKS.vueJs.url)

    // @ts-ignore
    new Vue({
        el: "#navigation",
        data() {
            return {
                menu: menu.map((value, index) => ({ ...value, index })),
                openedMenu: Array(menu.length).fill(false),
                active: 0,
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
