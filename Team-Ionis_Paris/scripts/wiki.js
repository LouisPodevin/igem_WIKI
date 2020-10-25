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

    logoBactails: {
        ext: "png",
        path: "/pictures/T--Ionis_Paris--Logo_Bactail",
        prod: "https://2020.igem.org/wiki/images/3/39/T--Ionis_Paris--Logo_Bactail.png",
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
        prod: "https://2020.igem.org/wiki/images/e/eb/T--Ionis_Paris--step2Home.svg",
    },
    step3Home: {
        ext: "svg",
        path: "/pictures/step3Home",
        prod: "https://2020.igem.org/wiki/images/7/7c/T--Ionis_Paris--step3Index.svg",
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
        path: "/pictures/LogoIntro/Description-logo",
        prod: "https://2020.igem.org/wiki/images/a/a3/T--Ionis_Paris--Description-logo.png",
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
        prod: "https://2020.igem.org/wiki/images/8/82/T--Ionis_Paris--glass.svg",
    },
    microscopeDescription: {
        ext: "png",
        path: "/pictures/description/microscope",
        prod: "https://2020.igem.org/wiki/images/6/64/T--Ionis_Paris--Description-microscope.png",
    },

    // Project Design

    designLogo: {
        ext: "png",
        path: "/pictures/LogoIntro/Design-logo",
        prod: "https://2020.igem.org/wiki/images/b/ba/T--Ionis_Paris--design-logo.png",
    },
    designProjectIntesting: {
        ext: "png",
        path: "/pictures/project/design/intestin",
        prod: "https://2020.igem.org/wiki/images/a/a9/T--Ionis_Paris--Intestin.png",
    },
    designProjectPhase1: {
        ext: "svg",
        path: "/pictures/project/design/phase1",
        prod: "https://2020.igem.org/wiki/images/8/83/T--Ionis_Paris--Design-phase1-11.svg",
    },
    designProjectPhase2: {
        ext: "svg",
        path: "/pictures/project/design/phase2",
        prod: "https://2020.igem.org/wiki/images/2/23/T--Ionis_Paris--Design-phase-22.svg",
    },
    designProjectPhase3: {
        ext: "svg",
        path: "/pictures/project/design/phase3",
        prod: "https://2020.igem.org/wiki/images/1/19/T--Ionis_Paris--Design-phase-33.svg",
    },
    designProjectPhase4: {
        ext: "svg",
        path: "/pictures/project/design/phase4",
        prod: "https://2020.igem.org/wiki/images/5/51/T--Ionis_Paris--Design-Phase-4.svg",
    },

    // Phase 1
    phase1Logo:{
        ext: "png",
        path: "/pictures/LogoIntro/Phase1-logo",
        prod: "https://2020.igem.org/wiki/images/c/ce/T--Ionis_Paris--Phase1-logo.png",
    },
    phase1Bacteriophage: {
        ext: "png",
        path: "/pictures/phases/phase1/phase1Bacteriophage",
        prod: "https://2020.igem.org/wiki/images/c/cf/T--Ionis_Paris--BAC1.png",
    },
    phase1Board: {
        ext: "svg",
        path: "/pictures/phases/phase1/phase1Board",
        prod: "https://2020.igem.org/wiki/images/3/39/T--Ionis_Paris--phase1Board.svg",
    },
    phase1LongTailFiber: {
        ext: "png",
        path: "/pictures/phases/phase1/phase1LongTailFiberGp",
        prod: "https://2020.igem.org/wiki/images/c/c1/T--Ionis_Paris--phase1LongTailFiberGp.png",
    },
    phase1Chassis: {
        ext: "png",
        path: "/pictures/phases/phase1/phase1SurfaceChassis",
        prod: "https://2020.igem.org/wiki/images/f/fe/T--Ionis_Paris--phase1Chassis.png",
    },
    phase1BioBrick: {
        ext: "png",
        path: "/pictures/phases/phase1/phase1BioBrick1",
        prod: "https://2020.igem.org/wiki/images/b/b0/T--Ionis_Paris--phase1BioBrick.png",
    },
    phase1Animate: {
        ext: "json",
        path: "/pictures/animate1/phase1Animate",
    },
    phase1PromoterStrong: {
        ext: "png",
        path: "/pictures/phases/phase1/phase1PromoterStrong",
        prod: "https://2020.igem.org/wiki/images/9/97/T--Ionis_Paris--Promoter.png",
    },
    phase1Immunoflurescence: {
        ext: "png",
        path: "/pictures/phases/phase1/phase1Immunoflurescence",
        prod: "https://2020.igem.org/wiki/images/0/05/T--Ionis_Paris--Immuno.png",
    },

    //Phase 2
    phase2Logo:{
        ext: "png",
        path: "/pictures/LogoIntro/Phase2-logo",
        prod: "https://2020.igem.org/wiki/images/7/79/T--Ionis_Paris--Phase2-logo.png",
    },
    phase2BioBrick: {
        ext: "png",
        path: "/pictures/phases/phase2/phase2BioBrick",
        prod: "https://2020.igem.org/wiki/images/6/6d/T--Ionis_Paris--phase2BioBrick.png",
    },
    phase2Board: {
        ext: "png",
        path: "/pictures/phases/phase2/phase2Board",
        prod: "https://2020.igem.org/wiki/images/6/66/T--Ionis_Paris--phase2Board.png",
    },
    phase2BioBrick2: {
        ext: "png",
        path: "/pictures/phases/phase2/phase2BioBrick2",
        prod: "https://2020.igem.org/wiki/images/d/dd/T--Ionis_Paris--phase2BioBrick2.png",
    },
    phase2Animate: {
        ext: "json",
        path: "/pictures/animate2/phase2Animate",
    },
    phase2AgarDiffusion: {
        ext: "png",
        path: "/pictures/phases/phase2/AgarDiffusion",
        prod: "https://2020.igem.org/wiki/images/2/21/T--Ionis_Paris--phase2Agar.png",
    },

    // Phase 3
    phase3Logo:{
        ext: "png",
        path: "/pictures/LogoIntro/Phase3-logo",
        prod: "https://2020.igem.org/wiki/images/5/51/T--Ionis_Paris--Phase3-logo.png",
    },
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
        ext: "jpg",
        path: "/pictures/phases/phase3/schema2",
        prod: "https://2020.igem.org/wiki/images/c/c5/T--Ionis_Paris--phase3-schema2.jpg",
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
    phase3Animate: {
        ext: "json",
        path: "/pictures/animate3/phase3Animate",
    },

    // Collaboration
    collaborationLogo:{
        ext: "png",
        path: "/pictures/LogoIntro/Contribution-logo",
        prod: "https://2020.igem.org/wiki/images/6/6a/T--Ionis_Paris--Collaboration-logo.png",
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
        ext: "jpg",
        path: "/pictures/collaborations/collaboration4",
        prod: "https://2020.igem.org/wiki/images/c/c9/T--Ionis_Paris--collaboration4.jpg",
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

    // PARTNERSHIP
    partnershipLogo:{
        ext: "png",
        path: "/pictures/LogoIntro/Partnership-logo",
        prod: "https://2020.igem.org/wiki/images/8/82/T--Ionis_Paris--Partnership.png",
    },
    partnershipIgem: {
        ext: "png",
        path: "/pictures/T--Ionis_Paris--Logo_Ionis",
        prod: "https://2020.igem.org/wiki/images/8/87/T--Ionis_Paris--Logo_Ionis.png",
    },
    partnershipIonis: {
        ext: "png",
        path: "/pictures/T--Ionis_Paris--Logo_Bactail",
        prod: "https://2020.igem.org/wiki/images/3/39/T--Ionis_Paris--Logo_Bactail.png",
    },
    partnershipIISER: {
        ext: "png",
        path: "/pictures/partnership/iGem_IISER_TIRUPATI",
        prod: "https://2020.igem.org/wiki/images/3/3b/T--Ionis_Paris--IISER_TIRUPATI.png",
    },
    partnershipColiKaze: {
        ext: "png",
        path: "/pictures/partnership/ColiKazeLogo",
        prod: "https://2020.igem.org/wiki/images/1/13/T--Ionis_Paris--ColiKaze.png",
    },
    partnership1: {
        ext: "png",
        path: "/pictures/partnership/partnership_1",
        prod: "https://2020.igem.org/wiki/images/9/9b/T--Ionis_Paris--partnership_1.png",
    },
    partnership2: {
        ext: "png",
        path: "/pictures/partnership/partnership_2",
        prod: "https://2020.igem.org/wiki/images/e/e7/T--Ionis_Paris--partnership_2.png",
    },
    partnership3: {
        ext: "png",
        path: "/pictures/partnership/partnership_3",
        prod: "https://2020.igem.org/wiki/images/7/7b/T--Ionis_Paris--partnership_3.png",
    },
    partnership4: {
        ext: "png",
        path: "/pictures/partnership/partnership_4",
        prod: "https://2020.igem.org/wiki/images/c/c9/T--Ionis_Paris--partnership_4.png",
    },
    partnership5: {
        ext: "png",
        path: "/pictures/partnership/partnership_5",
        prod: "https://2020.igem.org/wiki/images/9/9f/T--Ionis_Paris--partnership5.png",
    },

    // Attributions
    attributionsLogo:{
        ext: "png",
        path: "/pictures/LogoIntro/Attributions-logo",
        prod: "https://2020.igem.org/wiki/images/a/a9/T--Ionis_Paris--Attributions-logo.png",
    },
    attributionsSponsor1: {
        ext: "png",
        path: "/pictures/attributions/LOGO-SUPBIOTECH-2019-VERT",
        prod: "https://2020.igem.org/wiki/images/1/11/T--Ionis_Paris--LOGO-SUPBIOTECH-2019-VERT.png",
    },
    attributionsSponsor2: {
        ext: "jpg",
        path: "/pictures/attributions/esme",
        prod: "https://2020.igem.org/wiki/images/0/02/T--Ionis_Paris--esme.png",
    },
    attributionsSponsor3: {
        ext: "png",
        path: "/pictures/attributions/biorender-logo",
        prod: "https://2020.igem.org/wiki/images/2/2c/T--Ionis_Paris--biorender-logo.png",
    },
    attributionsSponsor4: {
        ext: "png",
        path: "/pictures/attributions/Integrated-DNA-Technologies-logo-1100x319",
        prod: "https://2020.igem.org/wiki/images/6/64/T--Ionis_Paris--Integrated-DNA-Technologies-logo-1100x319.png",
    },
    attributionsSponsor5: {
        ext: "png",
        path: "/pictures/attributions/labiotech_eu_square",
        prod: "https://2020.igem.org/wiki/images/8/8c/T--Ionis_Paris--labiotech_eu_square.png",
    },
    attributionsSponsor6: {
        ext: "png",
        path: "/pictures/attributions/Logo_Benchling",
        prod: "https://2020.igem.org/wiki/images/5/59/T--Ionis_Paris--Logo_Benchling.png",
    },
    attributionsSponsor7: {
        ext: "png",
        path: "/pictures/attributions/Logo_Geneious",
        prod: "https://2020.igem.org/wiki/images/b/ba/T--Ionis_Paris--Logo_Geneious.png",
    },
    attributionsSponsor8: {
        ext: "png",
        path: "/pictures/attributions/Logo_Mathworks",
        prod: "https://2020.igem.org/wiki/images/d/d0/T--Ionis_Paris--Logo_Mathworks.png",
    },
    attributionsSponsor9: {
        ext: "jpg",
        path: "/pictures/attributions/Logo_Phage_T4",
        prod: "https://2020.igem.org/wiki/images/8/87/T--Ionis_Paris--Logo_Phage_T4.jpg",
    },
    attributionsSponsor10: {
        ext: "png",
        path: "/pictures/attributions/Logo_SnapGene",
        prod: "https://2020.igem.org/wiki/images/8/88/T--Ionis_Paris--Logo_SnapGene.png",
    },
    attributionsSponsor11: {
        ext: "png",
        path: "/pictures/attributions/Logo-Gembloux-Agro-Bio-Tech-ULg",
        prod: "https://2020.igem.org/wiki/images/b/b7/T--Ionis_Paris--Logo-Gembloux-Agro-Bio-Tech-ULg.png",
    },
    attributionsSponsor12: {
        ext: "png",
        path: "/pictures/attributions/Sarstedt",
        prod: "https://2020.igem.org/wiki/images/2/21/T--Ionis_Paris--Sarstedt.png",
    },
    attributionsSponsor13: {
        ext: "png",
        path: "/pictures/attributions/Socorex",
        prod: "https://2020.igem.org/wiki/images/8/8b/T--Ionis_Paris--Socorex.png",
    },
    attributionsSponsor14: {
        ext: "svg",
        path: "/pictures/attributions/Sponsor_twist",
        prod: "https://2020.igem.org/wiki/images/5/52/T--Ionis_Paris--Sponsor_twist.svg",
    },
    attributionsSponsor15: {
        ext: "png",
        path: "/pictures/attributions/Tebu-bio",
        prod: "https://2020.igem.org/wiki/images/2/20/T--Ionis_Paris--Tebu-bio.png",
    },
    attributionsSponsor16: {
        ext: "png",
        path: "/pictures/attributions/Thermo_Fisher_Scientific",
        prod: "https://2020.igem.org/wiki/images/7/7d/T--Ionis_Paris--Thermo_Fisher_Scientific.png",
    },
    attributionsSponsor17: {
        ext: "png",
        path: "/pictures/attributions/walker_logo",
        prod: "https://2020.igem.org/wiki/images/b/bd/T--Ionis_Paris--walker_logo.png",
    },
    attributionsSponsor18: {
        ext: "png",
        path: "/pictures/attributions/wsu-logo",
        prod: "https://2020.igem.org/wiki/images/8/85/T--Ionis_Paris--wsu-logo.png",
    },
    attributionsSponsor19: {
        ext: "png",
        path: "/pictures/attributions/esme-sudria-association-aiesme-logo",
        prod: "https://2020.igem.org/wiki/images/a/aa/T--Ionis_Paris--esme-sudria-association-aiesme-logo.png",
    },
    attributionsSponsor20: {
        ext: "jpg",
        path: "/pictures/attributions/EPITA_LOGO",
        prod: "https://2020.igem.org/wiki/images/2/2b/T--Ionis_Paris--EPITA-logo.jpg",
    },

    // SAFETY
    safetyHexa1: {
        ext: "svg",
        path: "/pictures/safety/Safety1",
        prod: "https://2020.igem.org/wiki/images/a/a8/T--Ionis_Paris--Safety-1.svg",
    },
    safetyHexa2: {
        ext: "svg",
        path: "/pictures/safety/Safety2",
        prod: "https://2020.igem.org/wiki/images/3/34/T--Ionis_Paris--Safety-2.svg",
    },
    safetyHexa3: {
        ext: "svg",
        path: "/pictures/safety/Safety3",
        prod: "https://2020.igem.org/wiki/images/3/3f/T--Ionis_Paris--Safety-3.svg",
    },

    // HUMAN PRACTICES
    HPLogo:{
        ext: "png",
        path: "/pictures/LogoIntro/HP-logo",
        prod: "https://2020.igem.org/wiki/images/1/1e/T--Ionis_Paris--HP-logo.png",
    },
    humanPratices1: {
        ext: "svg",
        path: "/pictures/humanPratices/HP1",
        prod: "https://2020.igem.org/wiki/images/5/5b/T--Ionis_Paris--HP1.svg",
    },
    humanPratices2: {
        ext: "svg",
        path: "/pictures/humanPratices/HP2",
        prod: "https://2020.igem.org/wiki/images/a/a7/T--Ionis_Paris--HP2.svg",
    },
    humanPratices3: {
        ext: "svg",
        path: "/pictures/humanPratices/HP3",
        prod: "https://2020.igem.org/wiki/images/4/4f/T--Ionis_Paris--HP3.svg",
    },
    humanPratices4: {
        ext: "svg",
        path: "/pictures/humanPratices/HP4",
        prod: "https://2020.igem.org/wiki/images/a/ac/T--Ionis_Paris--HP4.svg",
    },
    humanPratices5: {
        ext: "svg",
        path: "/pictures/humanPratices/HP5",
        prod: "https://2020.igem.org/wiki/images/9/9d/T--Ionis_Paris--HP5.svg",
    },
    humanPratices6: {
        ext: "svg",
        path: "/pictures/humanPratices/HP6",
        prod: "https://2020.igem.org/wiki/images/c/c5/T--Ionis_Paris--HP6.svg",
    },
    humanPratices7: {
        ext: "png",
        path: "/pictures/humanPratices/HP7",
        prod: "https://2020.igem.org/wiki/images/4/40/T--Ionis_Paris--HP7.png",
    },
    humanPratices8: {
        ext: "png",
        path: "/pictures/humanPratices/HP8",
        prod: "https://2020.igem.org/wiki/images/0/00/T--Ionis_Paris--HP8.png",
    },
    humanPratices9: {
        ext: "png",
        path: "/pictures/humanPratices/HP9",
        prod: "https://2020.igem.org/wiki/images/0/04/T--Ionis_Paris--HP9.png",
    },
    humanPratices10: {
        ext: "png",
        path: "/pictures/humanPratices/HP10",
        prod: "https://2020.igem.org/wiki/images/b/b4/T--Ionis_Paris--HP10.png",
    },
    humanPratices11: {
        ext: "png",
        path: "/pictures/humanPratices/HP11",
        prod: "https://2020.igem.org/wiki/images/a/aa/T--Ionis_Paris--HP11.png",
    },
    humanPratices12: {
        ext: "png",
        path: "/pictures/humanPratices/HP12",
        prod: "https://2020.igem.org/wiki/images/c/ce/T--Ionis_Paris--HP12.png",
    },
    humanPratices13: {
        ext: "png",
        path: "/pictures/humanPratices/HP13",
        prod: "https://2020.igem.org/wiki/images/a/a6/T--Ionis_Paris--HP13.png",
    },
    humanPratices14: {
        ext: "png",
        path: "/pictures/humanPratices/HP14",
        prod: "https://2020.igem.org/wiki/images/a/ae/T--Ionis_Paris--HP14.png",
    },
    humanPratices15: {
        ext: "png",
        path: "/pictures/humanPratices/HP15",
        prod: "https://2020.igem.org/wiki/images/a/a6/T--Ionis_Paris--HP15.png",
    },
    humanPratices16: {
        ext: "png",
        path: "/pictures/humanPratices/HP16",
        prod: "https://2020.igem.org/wiki/images/4/42/T--Ionis_Paris--HP16.png",
    },
    humanPratices17: {
        ext: "png",
        path: "/pictures/humanPratices/HP17",
        prod: "https://2020.igem.org/wiki/images/d/d6/T--Ionis_Paris--HP17.png",
    },
    humanPratices18: {
        ext: "png",
        path: "/pictures/humanPratices/HP18",
        prod: "https://2020.igem.org/wiki/images/a/ab/T--Ionis_Paris--HP18.png",
    },
    humanPratices19: {
        ext: "png",
        path: "/pictures/humanPratices/HP19",
        prod: "https://2020.igem.org/wiki/images/5/52/T--Ionis_Paris--HP19.png",
    },
    humanPratices20: {
        ext: "png",
        path: "/pictures/humanPratices/HP20",
        prod: "https://2020.igem.org/wiki/images/c/c7/T--Ionis_Paris--HP20.png",
    },
    humanPratices21: {
        ext: "png",
        path: "/pictures/humanPratices/HP21",
        prod: "https://2020.igem.org/wiki/images/6/61/T--Ionis_Paris--HP21.png",
    },
    humanPratices22: {
        ext: "png",
        path: "/pictures/humanPratices/HP22",
        prod: "https://2020.igem.org/wiki/images/4/4b/T--Ionis_Paris--HP22.png",
    },
    humanPratices23: {
        ext: "png",
        path: "/pictures/humanPratices/HP23",
        prod: "https://2020.igem.org/wiki/images/2/2f/T--Ionis_Paris--HP23.png",
    },
    humanPratices24: {
        ext: "png",
        path: "/pictures/humanPratices/HP24",
        prod: "https://2020.igem.org/wiki/images/4/4d/T--Ionis_Paris--HP24.png",
    },

    // IMPLEMENTATION
    implementationLogo:{
        ext: "png",
        path: "/pictures/LogoIntro/Implementation-logo",
        prod: "https://2020.igem.org/wiki/images/f/ff/T--Ionis_Paris--Implementation-logo.png",
    },
    implementation1: {
        ext: "svg",
        path: "/pictures/implementation/implementation1",
        prod: "https://2020.igem.org/wiki/images/f/f6/T--Ionis_Paris--Implementation1.svg",
    },
    implementation2: {
        ext: "png",
        path: "/pictures/implementation/implementation2",
        prod: "https://2020.igem.org/wiki/images/2/27/T--Ionis_Paris--Implementation2.png",
    },
    implementation3: {
        ext: "png",
        path: "/pictures/implementation/implementation3",
        prod: "https://2020.igem.org/wiki/images/7/7f/T--Ionis_Paris--Implementation3.png",
    },
    implementation4: {
        ext: "png",
        path: "/pictures/implementation/implementation4",
        prod: "https://2020.igem.org/wiki/images/0/02/T--Ionis_Paris--Implementation4.png",
    },

    // PART OVERVIEW
    overviewLogo:{
        ext: "png",
        path: "/pictures/LogoIntro/Overview-logo",
        prod: "https://2020.igem.org/wiki/images/b/b2/T--Ionis_Paris--Overview-logo.png",
    },
    partOverview1: {
        ext: "png",
        path: "/pictures/project/partOverview/part-overview1",
        prod: "https://2020.igem.org/wiki/images/1/1a/T--Ionis_Paris--part-overview1.png",
    },
    partOverview2: {
        ext: "png",
        path: "/pictures/project/partOverview/part-overview2",
        prod: "https://2020.igem.org/wiki/images/a/ab/T--Ionis_Paris--part-overview2.png",
    },
    partOverview3: {
        ext: "png",
        path: "/pictures/project/partOverview/part-overview3",
        prod: "https://2020.igem.org/wiki/images/c/c9/T--Ionis_Paris--part-overview3.png",
    },
    partOverview4: {
        ext: "png",
        path: "/pictures/project/partOverview/part-overview4",
        prod: "https://2020.igem.org/wiki/images/2/25/T--Ionis_Paris--part-overview4.png",
    },
    partOverview5: {
        ext: "png",
        path: "/pictures/project/partOverview/part-overview5",
        prod: "https://2020.igem.org/wiki/images/d/d1/T--Ionis_Paris--part-overview5.png",
    },
    partOverview6: {
        ext: "png",
        path: "/pictures/project/partOverview/part-overview6",
        prod: "https://2020.igem.org/wiki/images/1/12/T--Ionis_Paris--part-overview6.png",
    },
    partOverview7: {
        ext: "png",
        path: "/pictures/project/partOverview/part-overview7",
        prod: "https://2020.igem.org/wiki/images/7/70/T--Ionis_Paris--part-overview7.png",
    },

    //SOFTWARE
    softwareLogo:{
        ext: "png",
        path: "/pictures/LogoIntro/Software-logo",
        prod: "https://2020.igem.org/wiki/images/7/74/T--Ionis_Paris--Software-logo.png",
    },
    softwareIonis: {
        ext: "png",
        path: "/pictures/software/logoIonis",
        prod: "https://2020.igem.org/wiki/images/8/87/T--Ionis_Paris--Logo_Ionis.png",
    },
    softwareTool: {
        ext: "png",
        path: "/pictures/software/tool",
        prod: "https://2020.igem.org/wiki/images/e/ef/T--Ionis_Paris--tool.png",
    },
    softwareCss: {
        ext: "png",
        path: "/pictures/software/css",
        prod: "https://2020.igem.org/wiki/images/d/d1/T--Ionis_Paris--css.png",
    },
    softwareCss2: {
        ext: "png",
        path: "/pictures/software/css2",
        prod: "https://2020.igem.org/wiki/images/7/7c/T--Ionis_Paris--css2.png",
    },
    softwareCss3: {
        ext: "png",
        path: "/pictures/software/css3",
        prod: "https://2020.igem.org/wiki/images/6/6b/T--Ionis_Paris--css3.png",
    },
    softwareCss4: {
        ext: "png",
        path: "/pictures/software/css4",
        prod: "https://2020.igem.org/wiki/images/5/58/T--Ionis_Paris--css4.png",
    },
    softwareCss5: {
        ext: "png",
        path: "/pictures/software/css5",
        prod: "https://2020.igem.org/wiki/images/d/d2/T--Ionis_Paris--css5.png",
    },
    softwareCss6: {
        ext: "png",
        path: "/pictures/software/css6",
        prod: "https://2020.igem.org/wiki/images/4/46/T--Ionis_Paris--css6.png",
    },

    // TEAM MEMBERS
    teamLogo:{
        ext: "png",
        path: "/pictures/LogoIntro/Team-logo",
        prod: "https://2020.igem.org/wiki/images/2/2e/T--Ionis_Paris--Team-logo.png",
    },
    teamMembers1: {
        ext: "png",
        path: "/pictures/team/teamMembers/teamMembers1",
        prod: "https://2020.igem.org/wiki/images/1/1d/T--Ionis_Paris--teamMembers1.png",
    },
    teamMembersAlbane: {
        ext: "jpeg",
        path: "/pictures/team/teamMembers/Albane",
        prod: "https://2020.igem.org/wiki/images/3/3e/T--Ionis_Paris--teamMembersAlbane.jpeg",
    },
    teamMembersCharlotte: {
        ext: "jpeg",
        path: "/pictures/team/teamMembers/Charlotte",
        prod: "https://2020.igem.org/wiki/images/2/2a/T--Ionis_Paris--teamMembersCharlotte.jpeg",
    },
    teamMembersDavid: {
        ext: "jpeg",
        path: "/pictures/team/teamMembers/David",
        prod: "https://2020.igem.org/wiki/images/d/d5/T--Ionis_Paris--teamMembersDavid.jpeg",
    },
    teamMembersElliot: {
        ext: "jpeg",
        path: "/pictures/team/teamMembers/Elliot",
        prod: "https://2020.igem.org/wiki/images/6/6b/T--Ionis_Paris--teamMembersElliot.jpeg",
    },
    teamMembersGiulia: {
        ext: "jpeg",
        path: "/pictures/team/teamMembers/Giulia",
        prod: "https://2020.igem.org/wiki/images/3/37/T--Ionis_Paris--teamMembersGiulia.jpeg",
    },
    teamMembersLouis: {
        ext: "jpeg",
        path: "/pictures/team/teamMembers/Louis",
        prod: "https://2020.igem.org/wiki/images/6/6c/T--Ionis_Paris--teamMembersLouis.jpeg",
    },
    teamMembersLucie: {
        ext: "jpeg",
        path: "/pictures/team/teamMembers/Lucie",
        prod: "https://2020.igem.org/wiki/images/c/ca/T--Ionis_Paris--teamMembersLucie.jpeg",
    },
    teamMembersRenaud: {
        ext: "jpeg",
        path: "/pictures/team/teamMembers/Renaud",
        prod: "https://2020.igem.org/wiki/images/c/c0/T--Ionis_Paris--teamMembersRenaud.jpeg",
    },
    teamMembersTam: {
        ext: "jpeg",
        path: "/pictures/team/teamMembers/Tam",
        prod: "https://2020.igem.org/wiki/images/b/b3/T--Ionis_Paris--teamMembersTam.jpeg",
    },
    teamMembersThomas: {
        ext: "jpeg",
        path: "/pictures/team/teamMembers/Thomas",
        prod: "https://2020.igem.org/wiki/images/e/ef/T--Ionis_Paris--teamMembersThomas.jpeg",
    },

    // PHASE 4
    phase4Logo:{
        ext: "png",
        path: "/pictures/LogoIntro/Phase4-logo",
        prod: "https://2020.igem.org/wiki/images/c/c2/T--Ionis_Paris--Phase4-logo.png",
    },
    phase4Img1: {
        ext: "svg",
        path: "/pictures/phases/phase4/phase4-1",
        prod: "https://2020.igem.org/wiki/images/4/4d/T--Ionis_Paris--phase4-1.svg",
    },
    phase4Img2: {
        ext: "svg",
        path: "/pictures/phases/phase4/phase4-2",
        prod: "https://2020.igem.org/wiki/images/f/f7/T--Ionis_Paris--phase4-2.svg",
    },
    phase4Img3: {
        ext: "svg",
        path: "/pictures/phases/phase4/phase4-3",
        prod: "https://2020.igem.org/wiki/images/3/36/T--Ionis_Paris--phase4-3.svg",
    },
    phase4Img4: {
        ext: "svg",
        path: "/pictures/phases/phase4/phase4-4",
        prod: "https://2020.igem.org/wiki/images/7/72/T--Ionis_Paris--phase4-4.svg",
    },
    phase4Img5: {
        ext: "svg",
        path: "/pictures/phases/phase4/phase4-5",
        prod: "https://2020.igem.org/wiki/images/9/94/T--Ionis_Paris--phase4-5.svg",
    },
    phase4Img6: {
        ext: "svg",
        path: "/pictures/phases/phase4/phase4-6",
        prod: "https://2020.igem.org/wiki/images/0/0e/T--Ionis_Paris--phase4-6.svg",
    },
    phase4Img7: {
        ext: "png",
        path: "/pictures/phases/phase4/phase4-7",
        prod: "https://2020.igem.org/wiki/images/8/80/T--Ionis_Paris--phase4-7.png",
    },
    phase4Img8: {
        ext: "png",
        path: "/pictures/phases/phase4/phase4-8",
        prod: "https://2020.igem.org/wiki/images/3/33/T--Ionis_Paris--phase4-8.png",
    },
    phase4Img9: {
        ext: "svg",
        path: "/pictures/phases/phase4/phase4-9",
        prod: "https://2020.igem.org/wiki/images/b/be/T--Ionis_Paris--phase4-9.svg",
    },
    phase4Img10: {
        ext: "png",
        path: "/pictures/phases/phase4/phase4-10",
        prod: "https://2020.igem.org/wiki/images/d/d4/T--Ionis_Paris--phase4-10.png",
    },
    phase4Img11: {
        ext: "svg",
        path: "/pictures/phases/phase4/phase4-11",
        prod: "https://2020.igem.org/wiki/images/8/80/T--Ionis_Paris--phase4-11.svg",
    },
    phase4Img12: {
        ext: "png",
        path: "/pictures/phases/phase4/phase4-12",
        prod: "https://2020.igem.org/wiki/images/7/75/T--Ionis_Paris--phase4-12.png",
    },
    phase4Img13: {
        ext: "svg",
        path: "/pictures/phases/phase4/phase4-13",
        prod: "https://2020.igem.org/wiki/images/8/82/T--Ionis_Paris--phase4-13.svg",
    },
    phase4Img14: {
        ext: "svg",
        path: "/pictures/phases/phase4/phase4-14",
        prod: "https://2020.igem.org/wiki/images/9/90/T--Ionis_Paris--phase4-14.svg",
    },
    phase4Img15: {
        ext: "svg",
        path: "/pictures/phases/phase4/phase4-15",
        prod: "https://2020.igem.org/wiki/images/8/80/T--Ionis_Paris--phase4-15.svg",
    },
    phase4Img16: {
        ext: "svg",
        path: "/pictures/phases/phase4/phase4-16",
        prod: "https://2020.igem.org/wiki/images/d/d3/T--Ionis_Paris--phase4-16.svg",
    },
    phase4Img17: {
        ext: "png",
        path: "/pictures/phases/phase4/phase4-17",
        prod: "https://2020.igem.org/wiki/images/5/57/T--Ionis_Paris--phase4-17.png",
    },
    phase4Img18: {
        ext: "svg",
        path: "/pictures/phases/phase4/phase4-18",
        prod: "https://2020.igem.org/wiki/images/9/98/T--Ionis_Paris--phase4-18.svg",
    },
    phase4Img19: {
        ext: "svg",
        path: "/pictures/phases/phase4/phase4-19",
        prod: "https://2020.igem.org/wiki/images/3/35/T--Ionis_Paris--phase4-19.svg",
    },
    phase4Img20: {
        ext: "png",
        path: "/pictures/phases/phase4/phase4-20",
        prod: "https://2020.igem.org/wiki/images/3/3b/T--Ionis_Paris--phase4-20.png",
    },

    // ENGINEERING
    engineering1: {
        ext: "svg",
        path: "/pictures/project/engineering/engineering1",
        prod: "https://2020.igem.org/wiki/images/3/3d/T--Ionis_Paris--engineering1.svg",
    },
    engineering2: {
        ext: "svg",
        path: "/pictures/project/engineering/engineering2",
        prod: "https://2020.igem.org/wiki/images/f/fb/T--Ionis_Paris--engineering2.svg",
    },
    engineering3: {
        ext: "svg",
        path: "/pictures/project/engineering/engineering3",
        prod: "https://2020.igem.org/wiki/images/d/d9/T--Ionis_Paris--engineering3.svg",
    },
    engineering4: {
        ext: "svg",
        path: "/pictures/project/engineering/engineering4",
        prod: "https://2020.igem.org/wiki/images/4/49/T--Ionis_Paris--engineering4.svg",
    },
    engineering5: {
        ext: "svg",
        path: "/pictures/project/engineering/engineering5",
        prod: "https://2020.igem.org/wiki/images/c/c8/T--Ionis_Paris--engineering5.svg",
    },
    engineering6: {
        ext: "svg",
        path: "/pictures/project/engineering/engineering6",
        prod: "https://2020.igem.org/wiki/images/b/b8/T--Ionis_Paris--engineering6.svg",
    },
    engineering7: {
        ext: "png",
        path: "/pictures/project/engineering/engineering7",
        prod: "https://2020.igem.org/wiki/images/5/5d/T--Ionis_Paris--engineering7.png",
    },
    engineering8: {
        ext: "png",
        path: "/pictures/project/engineering/engineering8",
        prod: "https://2020.igem.org/wiki/images/4/47/T--Ionis_Paris--engineering8.png",
    },
    engineering9: {
        ext: "png",
        path: "/pictures/project/engineering/engineering9",
        prod: "https://2020.igem.org/wiki/images/1/16/T--Ionis_Paris--engineering9.png",
    },
    engineering10: {
        ext: "png",
        path: "/pictures/project/engineering/engineering10",
        prod: "https://2020.igem.org/wiki/images/9/92/T--Ionis_Paris--engineering10.png",
    },
    engineering11: {
        ext: "png",
        path: "/pictures/project/engineering/engineering11",
        prod: "https://2020.igem.org/wiki/images/4/4d/T--Ionis_Paris--engineering11.png",
    },
    engineering12: {
        ext: "png",
        path: "/pictures/project/engineering/engineering12",
        prod: "https://2020.igem.org/wiki/images/7/75/T--Ionis_Paris--engineering12.png",
    },
    engineering13: {
        ext: "png",
        path: "/pictures/project/engineering/engineering13",
        prod: "https://2020.igem.org/wiki/images/0/0e/T--Ionis_Paris--engineering13.png",
    },
    engineering14: {
        ext: "png",
        path: "/pictures/project/engineering/engineering14",
        prod: "https://2020.igem.org/wiki/images/4/4f/T--Ionis_Paris--engineering14.png",
    },
    engineering15: {
        ext: "png",
        path: "/pictures/project/engineering/engineering15",
        prod: "https://2020.igem.org/wiki/images/2/26/T--Ionis_Paris--engineering15.png",
    },
    engineering16: {
        ext: "png",
        path: "/pictures/project/engineering/engineering16",
        prod: "https://2020.igem.org/wiki/images/2/20/T--Ionis_Paris--engineering16.png",
    },
    engineering17: {
        ext: "png",
        path: "/pictures/project/engineering/engineering17",
        prod: "https://2020.igem.org/wiki/images/3/37/T--Ionis_Paris--engineering17.png",
    },
    engineering18: {
        ext: "png",
        path: "/pictures/project/engineering/engineering18",
        prod: "https://2020.igem.org/wiki/images/f/f6/T--Ionis_Paris--engineering18.png",
    },
    engineering19: {
        ext: "png",
        path: "/pictures/project/engineering/engineering19",
        prod: "https://2020.igem.org/wiki/images/1/18/T--Ionis_Paris--engineering19.png",
    },
    engineering20: {
        ext: "png",
        path: "/pictures/project/engineering/engineering20",
        prod: "https://2020.igem.org/wiki/images/4/40/T--Ionis_Paris--engineering20.png",
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
            case "jpeg":
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

window.isDOMLoaded = false

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

    const { Subject } = rxjs

    const domLoadedSource = new Subject()
    window.domLoadedSource = domLoadedSource

    const sendEventLoaded = () => {
        window.isDOMLoaded = true
        domLoadedSource.next()
    }

    if (document.readyState === "complete" || document.readyState === "interactive") {
        sendEventLoaded()
    } else {
        window.addEventListener("DOMContentLoaded", () => {
            console.debug("Send DOM loaded event")
            sendEventLoaded()
        })
    }

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
