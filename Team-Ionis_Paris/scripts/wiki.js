const isProd = false

if (isProd) {
    window.ROOT_URL = "/Team:Ionis_Paris"
    window.ASSETS_ROOT_URL = "/Template:Ionis_Paris"
} else {
    window.ROOT_URL = "/Team-Ionis_Paris"
    window.ASSETS_ROOT_URL = "/Team-Ionis_Paris"
}

const links = {
    rxjs: {
        ext: "js",
        path: "/scripts/gen/rxjs",
    },
    feather: {
        ext: "js",
        path: "/scripts/gen/feather",
    },
    alpine: {
        ext: "js",
        path: "/scripts/gen/alpine",
    },
    wikiNav: {
        ext: "js",
        path: "/scripts/wiki-nav",
    },
    tools: {
        ext: "js",
        path: "/scripts/tools",
    },
    navigationHtml: {
        ext: "html",
        path: "/navigation/navigationHtml",
    },
    navigationCss: {
        ext: "css",
        path: "/navigation/navigationCss",
    },
    navigationJs: {
        ext: "js",
        path: "/navigation/navigationJs",
    },
    fonts: {
        ext: "css",
        path: "/fonts/fonts",
    },
    globalCss: {
        ext: "css",
        path: "/styles/global",
    },
    bootstrapCss: {
        ext: "css",
        path: "/scripts/gen/bootstrapCss",
    },
    jquery: {
        ext: "js",
        path: "/scripts/gen/jquery",
    },
    popper: {
        ext: "js",
        path: "/scripts/gen/popper",
    },
    bootstrapJs: {
        ext: "js",
        path: "/scripts/gen/bootstrapJs",
    },
    footerHtml: {
        ext: "html",
        path: "/footer/footerHtml",
    },
    footerCss: {
        ext: "css",
        path: "/footer/footerCss",
    },
    vueJs: {
        ext: "js",
        path: "/scripts/gen/vue",
    },
    bodymovin: {
        ext: "js",
        path: "/scripts/Bodymovin",
    },

    logoTeamIonis: {
        ext: "png",
        path: "/pictures/T--Ionis_Paris--Logo_Ionis",
        prod: "https://2020.igem.org/wiki/images/8/87/T--Ionis_Paris--Logo_Ionis.png",
    },

    // HOME
    logoAnimationHome: {
        ext: "json",
        path: "/pictures/logo_animate",
    },
    graphiqueAnimateHome: {
        ext: "json",
        path: "/pictures/graphique_animate",
    },
    pillsHome: {
        ext: "svg",
        path: "/pictures/Pills",
        prod: "https://2020.igem.org/wiki/images/f/f6/T--Ionis_Paris--Pills.svg",
    },
    projectHome: {
        ext: "svg",
        path: "/pictures/project",
        prod: "https://2020.igem.org/wiki/images/6/61/T--Ionis_Paris--Project.svg",
    },
    humanHome: {
        ext: "svg",
        path: "/pictures/human",
        prod: "https://2020.igem.org/wiki/images/7/77/T--Ionis_Paris--Human.svg",
    },
    softwareHome: {
        ext: "svg",
        path: "/pictures/software",
        prod: "https://2020.igem.org/wiki/images/d/dc/T--Ionis_Paris--Software.svg",
    },
    step1Home: {
        ext: "svg",
        path: "/pictures/step1Home",
        prod: "https://2020.igem.org/wiki/images/0/07/T--Ionis_Paris--step1Index.svg",
    },
    step2Home: {
        ext: "svg",
        path: "/pictures/step2Home",
        prod: "https://2020.igem.org/wiki/images/0/07/T--Ionis_Paris--step1Index.svg",
    },
    step3Home: {
        ext: "svg",
        path: "/pictures/step3Home",
        prod: "https://2020.igem.org/wiki/images/0/07/T--Ionis_Paris--step1Index.svg",
    },
    // Sponsors
    benchlingSponsor: {
        ext: "png",
        path: "/pictures/sponsors/benchling_igem",
        prod: "https://2020.igem.org/wiki/images/8/86/T--Ionis_Paris--benchling.png",
    },
    supbiotechSponsor: {
        ext: "png",
        path: "/pictures/sponsors/supbiotech_igem",
        prod: "https://2020.igem.org/wiki/images/7/72/T--Ionis_Paris--supbio.png",
    },
    esmeSudriaSponsor: {
        ext: "png",
        path: "/pictures/sponsors/esme_sudria_igem",
        prod: "https://2020.igem.org/wiki/images/0/02/T--Ionis_Paris--esme.png",
    },
    geneiousSponsor: {
        ext: "png",
        path: "/pictures/sponsors/geneious_igem",
        prod: "https://2020.igem.org/wiki/images/4/4c/T--Ionis_Paris--geneious.png",
    },
    idtSponsor: {
        ext: "png",
        path: "/pictures/sponsors/idt_igem",
        prod: "https://2020.igem.org/wiki/images/4/4b/T--Ionis_Paris--idt.png",
    },
    mathworksSponsor: {
        ext: "png",
        path: "/pictures/sponsors/mathworks_igem",
        prod: "https://2020.igem.org/wiki/images/1/11/T--Ionis_Paris--mathworks.png",
    },
    snapgeneSponsor: {
        ext: "png",
        path: "/pictures/sponsors/snapgene_igem",
        prod: "https://2020.igem.org/wiki/images/4/45/T--Ionis_Paris--snapgene_igem.png",
    },
    phagesSponsor: {
        ext: "png",
        path: "/pictures/sponsors/phages_igem",
        prod: "https://2020.igem.org/wiki/images/a/a0/T--Ionis_Paris--phages.png",
    },
    labiotechSponsor: {
        ext: "png",
        path: "/pictures/sponsors/labiotech_igem",
        prod: "https://2020.igem.org/wiki/images/8/8a/T--Ionis_Paris--labiotech.png",
    },

    // Description
    descriptionLogo: {
        ext: "png",
        path: "/project/hexagonal-description",
        prod:
            "https://2020.igem.org/wiki/images/a/ab/T--Ionis_Paris--descriptionlogo.svg",
    },
    inspirationPlanet: {
        ext: "svg",
        path: "/pictures/inspirationPlanet",
        prod:
            "https://2020.igem.org/wiki/images/a/ac/T--Ionis_Paris--descriptionPlanet.svg",
    },
    inspirationDialog: {
        ext: "svg",
        path: "/pictures/inspirationDialog",
        prod: "https://2020.igem.org/wiki/images/c/cd/T--Ionis_Paris--Dialog.svg",
    },
    dialogAnimateDescription: {
        ext: "json",
        path: "/pictures/dialogDescription_animate",
    },
    circleAnimateDescription: {
        ext: "json",
        path: "/pictures/circleDescription_animate",
    },
    glassDescription: {
        ext: "svg",
        path: "/pictures/glass",
        prod: "",
    },
}

for (let link in links) {
    if (isProd) {
        let realUrl

        switch (links[link].ext) {
            case "js":
                realUrl = `${window.ASSETS_ROOT_URL}${links[link].path}?action=raw&ctype=text/javascript`
                break
            case "html":
                realUrl = `${window.ASSETS_ROOT_URL}${links[link].path}?action=raw&ctype=text/html`
                break
            case "css":
                realUrl = `${window.ASSETS_ROOT_URL}${links[link].path}?action=raw&ctype=text/css`
                break
            case "json":
                realUrl = `${window.ASSETS_ROOT_URL}${links[link].path}?action=raw&ctype=text/json`
                break
            case "svg":
            case "png":
                realUrl = links[link].prod
                break
            default:
                console.warn("Invalid extension for " + link)
                realUrl = `${window.ASSETS_ROOT_URL}${links[link]}`
        }

        links[link].url = realUrl
    } else {
        links[
            link
        ].url = `${window.ASSETS_ROOT_URL}${links[link].path}.${links[link].ext}`
    }
}

window.LINKS = links

const init = async () => {
    await import(links.feather.url)
    const { initNavigation } = await import(links.wikiNav.url)

    const {
        loadScript,
        loadTriggerAction,
        loadFont,
        loadGlobalCss,
        loadBootstrap,
        loadFooter,
    } = await import(links.tools.url)

    await Promise.all([
        initNavigation(),
        loadFont(),
        loadGlobalCss(),
        loadBootstrap(),
        loadFooter(),
    ])
    feather.replace()

    await loadScript(links.rxjs.url, false, () => !!window.rxjs)
    await import(links.alpine.url)

    await Promise.all([loadTriggerAction()])
    await import(links.bodymovin.url)
}

init()
