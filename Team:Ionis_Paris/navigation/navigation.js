// @ts-check

import "/Team:Ionis_Paris/scripts/vue.js"

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
        link: "/Team:Ionis_Paris/",
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
    },
})
