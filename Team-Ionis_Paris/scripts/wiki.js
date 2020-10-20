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
    tailwind: {
        ext: "css",
        path: "/scripts/gen/tailwind",
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
        prod: "https://2020.igem.org/wiki/images/0/07/T--Ionis_Paris--step2Home.svg",
    },
    step3Home: {
        ext: "svg",
        path: "/pictures/step3Home",
        prod: "https://2020.igem.org/wiki/images/0/07/T--Ionis_Paris--step3Index.svg",
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
        prod: "https://2020.igem.org/wiki/images/c/cf/T--Ionis_Paris--descriptionlogo-hexagon.png",
    },
    inspirationPlanet: {
        ext: "svg",
        path: "/pictures/inspirationPlanet",
        prod: "https://2020.igem.org/wiki/images/a/ac/T--Ionis_Paris--descriptionPlanet.svg",
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
    microscopeDescription: {
        ext: "png",
        path: "/pictures/description/microscope",
        prod: "https://2020.igem.org/wiki/images/6/64/T--Ionis_Paris--Description-microscope.png",
    },

    // Project Design

    designProjectLogo: {
        ext: "png",
        path: "/project/hexagonal-description",
        prod: "https://2020.igem.org/wiki/images/c/cf/T--Ionis_Paris--descriptionlogo-hexagon.png",
    },
    designProjectIntesting: {
        ext: "png",
        path: "/pictures/project/design/intestin",
        prod: "https://2020.igem.org/wiki/images/a/a9/T--Ionis_Paris--Intestin.png",
    },
    designProjectPhase1: {
        ext: "svg",
        path: "/pictures/project/design/phase1",
        prod: "https://2020.igem.org/wiki/images/a/ac/T--Ionis_Paris--Design-Phase-1.svg",
    },
    designProjectPhase2: {
        ext: "svg",
        path: "/pictures/project/design/phase2",
        prod: "https://2020.igem.org/wiki/images/2/2d/T--Ionis_Paris--Design-Phase-2.svg",
    },
    designProjectPhase3: {
        ext: "svg",
        path: "/pictures/project/design/phase3",
        prod: "https://2020.igem.org/wiki/images/e/eb/T--Ionis_Paris--Design-Phase-3.svg",
    },
    designProjectPhase4: {
        ext: "svg",
        path: "/pictures/project/design/phase4",
        prod: "https://2020.igem.org/wiki/images/5/51/T--Ionis_Paris--Design-Phase-4.svg",
    },

    // Phase 1
    phase1Bacteriophage: {
        ext: "svg",
        path: "/pictures/phase1Bacteriophage",
        prod: "https://2020.igem.org/wiki/images/8/80/T--Ionis_Paris--phase1Bacteriophage.svg",
    },
    phase1Board: {
        ext: "svg",
        path: "/pictures/phase1Board",
        prod: "https://2020.igem.org/wiki/images/3/39/T--Ionis_Paris--phase1Board.svg",
    },
    phase1Bacteriophage2: {
        ext: "svg",
        path: "/pictures/phase1Bacteriophage2",
        prod: "",
    },
    phase1DNA: {
        ext: "svg",
        path: "/pictures/phase1DNA",
        prod: "",
    },
    phase1DNA2: {
        ext: "svg",
        path: "/pictures/phase1DNA2",
        prod: "",
    },
    phase1Animate: {
        ext: "json",
        path: "/pictures/animate1/phase1Animate",
    },

    //Phase 2
    phase2DNA: {
        ext: "svg",
        path: "/pictures/phase2DNA",
        prod: "",
    },
    phase2Board: {
        ext: "svg",
        path: "/pictures/phase2Board",
        prod: "",
    },
    phase2DNA2: {
        ext: "svg",
        path: "/pictures/phase2DNA2",
        prod: "",
    },
    phase2Animate: {
        ext: "json",
        path: "/pictures/animate2/phase2Animate",
    },

    // Phase 3
    phase3Skull: {
        ext: "svg",
        path: "/pictures/phases/phase3/Skull",
        prod: "https://2020.igem.org/wiki/images/8/8c/T--Ionis_Paris--phase3-skull.svg",
    },
    phase3Schema1: {
        ext: "png",
        path: "/pictures/phases/phase3/schema1",
        prod: "https://2020.igem.org/wiki/images/5/5a/T--Ionis_Paris--phase3-schema1.png",
    },
    phase3Schema2: {
        ext: "png",
        path: "/pictures/phases/phase3/schema2",
        prod: "https://2020.igem.org/wiki/images/5/5b/T--Ionis_Paris--phase3-schema2.png",
    },
    phase3Schema3: {
        ext: "png",
        path: "/pictures/phases/phase3/schema3",
        prod: "https://2020.igem.org/wiki/images/4/40/T--Ionis_Paris--phase3-schema3.png",
    },
    phase3Schema4: {
        ext: "png",
        path: "/pictures/phases/phase3/schema4",
        prod: "https://2020.igem.org/wiki/images/b/b7/T--Ionis_Paris--phase3-schema4.png",
    },
    phase3Schema5: {
        ext: "png",
        path: "/pictures/phases/phase3/schema5",
        prod: "https://2020.igem.org/wiki/images/7/7f/T--Ionis_Paris--phase3-schema5.png",
    },
    phase3Schema6: {
        ext: "png",
        path: "/pictures/phases/phase3/schema6",
        prod: "https://2020.igem.org/wiki/images/a/a3/T--Ionis_Paris--phase3-schema6.png",
    },
    phase3perspective: {
        ext: "svg",
        path: "/pictures/phases/phase3/perspectiveTimeline",
        prod: "https://2020.igem.org/wiki/images/1/19/T--Ionis_Paris--phase3-perspective.svg",
    },

    // Collaboration
    collaboration1Logo: {
        ext: "png",
        path: "/pictures/collaborations/collaboration1",
        prod: "https://2020.igem.org/wiki/images/1/1e/T--Ionis_Paris--collaboration1.png",
    },
    collaboration2Logo: {
        ext: "png",
        path: "/pictures/collaborations/collaboration2",
        prod: "https://2020.igem.org/wiki/images/c/cd/T--Ionis_Paris--collaboration2.png",
    },
    collaboration3Logo: {
        ext: "png",
        path: "/pictures/collaborations/collaboration3",
        prod: "https://2020.igem.org/wiki/images/a/ad/T--Ionis_Paris--collaboration3.png",
    },
    collaboration4Logo: {
        ext: "png",
        path: "/pictures/collaborations/collaboration4",
        prod: "https://2020.igem.org/wiki/images/9/9b/T--Ionis_Paris--collaboration4.png",
    },
    collaboration5Logo: {
        ext: "png",
        path: "/pictures/collaborations/collaboration5",
        prod: "https://2020.igem.org/wiki/images/d/d3/T--Ionis_Paris--collaboration5.png",
    },
    collaboration6Logo: {
        ext: "png",
        path: "/pictures/collaborations/collaboration6",
        prod: "https://2020.igem.org/wiki/images/6/68/T--Ionis_Paris--collaboration6.png",
    },
    collaboration7Logo: {
        ext: "png",
        path: "/pictures/collaborations/collaboration7",
        prod: "https://2020.igem.org/wiki/images/2/29/T--Ionis_Paris--collaboration7.png",
    },
    collaboration8Logo: {
        ext: "png",
        path: "/pictures/collaborations/collaboration8",
        prod: "https://2020.igem.org/wiki/images/1/18/T--Ionis_Paris--collaboration8.png",
    },
    collaboration9Logo: {
        ext: "png",
        path: "/pictures/collaborations/collaboration9",
        prod: "https://2020.igem.org/wiki/images/8/8c/T--Ionis_Paris--collaboration9.png",
    },
    collaboration10Logo: {
        ext: "png",
        path: "/pictures/collaborations/collaboration10",
        prod: "https://2020.igem.org/wiki/images/0/0a/T--Ionis_Paris--collaboration10.png",
    },
    collaboration11Logo: {
        ext: "png",
        path: "/pictures/collaborations/collaboration11",
        prod: "https://2020.igem.org/wiki/images/2/20/T--Ionis_Paris--collaboration11.png",
    },
    collaboration12Logo: {
        ext: "jpg",
        path: "/pictures/collaborations/collaboration12",
        prod: "https://2020.igem.org/wiki/images/d/d8/T--Ionis_Paris--collaboration12.png",
    },
    collaboration13Logo: {
        ext: "png",
        path: "/pictures/collaborations/collaboration13",
        prod: "https://2020.igem.org/wiki/images/6/63/T--Ionis_Paris--collaboration13.png",
    },
    collaboration14Logo: {
        ext: "png",
        path: "/pictures/collaborations/collaboration14",
        prod: "https://2020.igem.org/wiki/images/f/f2/T--Ionis_Paris--collaboration14.png",
    },
    collaboration15Logo: {
        ext: "png",
        path: "/pictures/collaborations/collaboration15",
        prod: "https://2020.igem.org/wiki/images/8/8a/T--Ionis_Paris--collaboration15.png",
    },
    collaboration16Logo: {
        ext: "png",
        path: "/pictures/collaborations/collaboration16",
        prod: "https://2020.igem.org/wiki/images/9/9e/T--Ionis_Paris--collaboration16.png",
    },
    collaboration17Logo: {
        ext: "png",
        path: "/pictures/collaborations/collaboration17",
        prod: "https://2020.igem.org/wiki/images/e/e5/T--Ionis_Paris--collaboration17.png",
    },
    collaboration18Logo: {
        ext: "png",
        path: "/pictures/collaborations/collaboration18",
        prod: "https://2020.igem.org/wiki/images/1/1d/T--Ionis_Paris--collaboration18.png",
    },
    collaboration19Logo: {
        ext: "png",
        path: "/pictures/collaborations/collaboration19",
        prod: "https://2020.igem.org/wiki/images/e/ea/T--Ionis_Paris--collaboration19.png",
    },
    collaboration20Logo: {
        ext: "png",
        path: "/pictures/collaborations/collaboration20",
        prod: "https://2020.igem.org/wiki/images/f/f8/T--Ionis_Paris--collaboration20.png",
    },
    collaboration21Logo: {
        ext: "png",
        path: "/pictures/collaborations/collaboration21",
        prod: "https://2020.igem.org/wiki/images/5/51/T--Ionis_Paris--collaboration21.png",
    },
    collaboration22Logo: {
        ext: "png",
        path: "/pictures/collaborations/collaboration22",
        prod: "https://2020.igem.org/wiki/images/1/1d/T--Ionis_Paris--collaboration22.png",
    },
    collaboration23Logo: {
        ext: "png",
        path: "/pictures/collaborations/collaboration23",
        prod: "https://2020.igem.org/wiki/images/b/b8/T--Ionis_Paris--collaboration23.png",
    },
    collaboration24Logo: {
        ext: "png",
        path: "/pictures/collaborations/collaboration24",
        prod: "https://2020.igem.org/wiki/images/e/e3/T--Ionis_Paris--collaboration24.png",
    },
    collaboration25Logo: {
        ext: "png",
        path: "/pictures/collaborations/collaboration25",
        prod: "https://2020.igem.org/wiki/images/b/b9/T--Ionis_Paris--collaboration25.png",
    },
    collaboration26Logo: {
        ext: "png",
        path: "/pictures/collaborations/collaboration26",
        prod: "https://2020.igem.org/wiki/images/9/92/T--Ionis_Paris--collaboration26.png",
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
            case "jpg":
                realUrl = links[link].prod
                break
            default:
                console.warn("Invalid extension for " + link)
                realUrl = `${window.ASSETS_ROOT_URL}${links[link]}`
        }

        links[link].url = realUrl
    } else {
        links[link].url = `${window.ASSETS_ROOT_URL}${links[link].path}.${links[link].ext}`
    }
}

window.LINKS = links

let loadingLength = 0
let currentLoading = 0

const initLoading = size => {
    loadingLength = size
    const loadingElm = document.createElement("div")
    loadingElm.innerHTML = `<div id="loadingHidder"></div>
    <div id="loading">
        <div class="loadingDot"></div>
        <div class="loadingText">Loading</div>
        <div class="loadingLine"></div>
    </div>`

    document.body.append(loadingElm)

    const stylesLoading = document.createElement("style")
    stylesLoading.innerHTML = `#loading {
        z-index: 7;
        font-family: Poppins, Arial, Helvetica, sans-serif !important;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: #ffffffb8;
        -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.03);
        -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.03);
        box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.03);
        border-radius: 0 0 20px 20px;
        display: flex;
        align-items: center;
        width: 300px;
        overflow: hidden;
        backdrop-filter: blur(8px) saturate(150%);
        transition: top 1s;
    }

    .loadingDot {
        height: 10px;
        width: 10px;
        background-color: #8d1f24;
        border-radius: 999px;
        flex-shrink: 0;
        margin: 30px 15px 10px 20px;
    }

    .loadingText {
        margin: 30px 30px 10px 0;
        font-weight: 800;
        font-size: 15px;
    }

    .loadingLine {
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #8d1f24;
        border-radius: 99px;
        height: 5px;
        width: 0%;
        transition: width 1s;
    }

    #loadingHidder {
        position: fixed;
        height: 100vh;
        width: 100vw;
        background-color: white;
        z-index: 6;
        top: 0;
        left: 0;
        opacity: 1;
        transition: opacity 1s;
    }
`

    document.body.append(stylesLoading)
}

const incrementLoading = () => {
    currentLoading++

    document.querySelector("#loading .loadingLine").style.width = `${(currentLoading * 100) / loadingLength}%`

    if (currentLoading === loadingLength) {
        document.getElementById("loading").style.top = "-100px"
    }
}

const withLoading = async fnToApply => {
    const returnValue = await fnToApply
    incrementLoading()
    return returnValue
}

const setMinimumReady = () => {
    const loadingDiv = document.getElementById("loadingHidder")

    loadingDiv.style.opacity = "0"
    setTimeout(() => {
        loadingDiv.style.display = "none"
    }, 1000)
}

const init = async () => {
    initLoading(15)
    const { initNavigation } = await withLoading(import(links.wikiNav.url))

    const {
        loadScript,
        loadTriggerAction,
        loadFont,
        loadGlobalCss,
        loadBootstrap,
        loadFooter,
        triggerSeeMore,
        loadTitles,
        loadTailwind,
    } = await withLoading(import(links.tools.url))

    const minimumPromise = Promise.all([
        withLoading(import(links.feather.url)),
        withLoading(loadGlobalCss()),
        withLoading(initNavigation()),
        withLoading(loadBootstrap()),
        withLoading(import(links.alpine.url)),
        withLoading(loadScript(links.rxjs.url, false, () => !!window.rxjs)),
    ])

    await minimumPromise

    setMinimumReady()
    feather.replace()

    const backgroundPromise = Promise.all([
        withLoading(loadFont()),
        withLoading(loadFooter()),
        withLoading(loadTriggerAction()),
        withLoading(loadTailwind()),
        withLoading(loadTitles()),
        withLoading(triggerSeeMore()),
        withLoading(import(links.bodymovin.url)),
    ])

    await backgroundPromise

    feather.replace()
}

init()
