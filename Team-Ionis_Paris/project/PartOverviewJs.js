const phase1 = {
    basic: [
        { name: "BBa_J23104", type: "Promoter", description: "Constitutive Promoter region", length: 35 },
        { name: "BBa_B0030", type: "Ribosome Binding Site", description: "RBS region", length: 15 },
        {
            name: "BBa_K1694002",
            type: "Coding",
            description: "Fusion vehicule for bacterial surface display Lpp-OmpA",
            length: 438,
        },
        {
            name: "BBa_K243004",
            type: "Linker ",
            description: "Short linker (Gly-Gly-Ser-Gly) to  fuse the proteins ",
            length: 12,
        },
        { name: "BBa_J18918", type: "Tag", description: "TEV peptide signal (tag)", length: 21 },
        { name: "BBa_K844000", type: "Tag", description: "10xHis-Tag", length: 36 },
        { name: "BBa_E1010", type: "Coding", description: "Fluorescent protein mRFP", length: 706 },
        {
            name: "BBa_K3409000",
            type: "Coding",
            description: "Gp37: T4 Bacteriophage long tail fiber gene product",
            length: 3081,
        },
        {
            name: "BBa_B0015",
            type: "Terminator ",
            description: "Double Terminator region composed of BBa_0010 and BBa_0012",
            length: 129,
        },
        { name: "BBa_J23107", type: "Promoter", description: "Constitutive Promoter region", length: 35 },
        { name: "BBa_B0032", type: "Ribosome Binding Site", description: "RBS region", length: 13 },
        { name: "BBa_K3409001", type: "Coding", description: "Gp38 : T4 Bacteriophage chaperone protein", length: 549 },
        {
            name: "BBa_K3409002",
            type: "Coding",
            description: "Gp57a : T4 Bacteriophage chaperone protein",
            length: 243,
        },
        { name: "BBa_B1005", type: "Basic", description: "Terminator region", length: 34 },
    ],
    composite: [
        {
            name: "BBa_K3409008",
            type: "Composite",
            description: "Expression of gp37 on the outer membrane with mRFP",
            length: 5347,
        },
        {
            name: "BBa_K3409009",
            type: "Composite",
            description: "Expression of gp37 on the outer membrane without mRFP",
            length: 4461,
        },
    ],
}

const phase2 = {
    basic: [
        { name: "BBa_J23111", type: "Promoter", description: "Constitutive Promoter region", length: 35 },
        { name: "BBa_J23118", type: "Promoter", description: "Constitutive Promoter region", length: 35 },
        { name: "BBa_J61127", type: "Ribosome Binding Site", description: "RBS region", length: 12 },
        { name: "BBa_J61130", type: "Ribosome Binding Site", description: "RBS region", length: 12 },
        { name: "BBa_J61118", type: "Ribosome Binding Site", description: "RBS region", length: 12 },
        { name: "BBa_J61109", type: "Ribosome Binding Site", description: "RBS region", length: 12 },
        {
            name: "BBa_K3409003",
            type: "Coding",
            description: "McpM : Precursor protein of microcin PDI with 6x-His Tag",
            length: 381,
        },
        {
            name: "BBa_K3409004",
            type: "Coding",
            description: "McpI: Self immunity protein for Microcin PDI",
            length: 216,
        },
        {
            name: "BBa_K3409005",
            type: "Coding",
            description: "McpA: Putative repressor protein with Caax Protease activity",
            length: 636,
        },
        { name: "BBa_K3409006", type: "Coding", description: "McpD: Export protein", length: 1254 },
        { name: "BBa_K3409007", type: "Coding", description: "McpB : Export protein", length: 2190 },
        {
            name: "BBa_B0015",
            type: "Terminator",
            description: "Double Terminator region composed of BBa_0010 and BBa_0012",
            length: 129,
        },
    ],
    composite: [
        {
            name: "BBa_K3409010",
            type: "Composite",
            description: "Microcin PDI cluster genes for McpM, McpI, McpA",
            length: 1483,
        },
        { name: "BBa_K3409011", type: "Composite", description: "Microcin PDI cluster gene for McpD", length: 1315 },
        { name: "BBa_K3409012", type: "Composite", description: "Microcin PDI cluster gene for McpB", length: 2345 },
        { name: "BBa_K3409013", type: "Composite", description: "Microcin PDI gene cluster", length: 5159 },
    ],
}

const phase3 = {
    basic: [
        { name: "BBa_K2442101", type: "Promoter", description: "Minimagl araBAD promoter", length: 303 },
        { name: "BBa_J23118", type: "Promoter", description: "Promoter medium", length: 35 },
        { name: "BBa_B0034", type: "Ribosome Binding Site", description: "Strong RBS", length: 12 },
        { name: "BBa_K2442103", type: "Coding", description: "E. coli AraC coding region", length: 879 },
        { name: "BBa_E1010", type: "Coding", description: "mRFP", length: 706 },
        { name: "BBa_K3519004", type: "Coding", description: "DNASE I (+ Poly His Tag)", length: 867 },
        { name: "BBa_B0040", type: "Spacer", description: "	Spacer ", length: 70 },
        {
            name: "BBa_B0015",
            type: "Terminator",
            description: "Double Terminator region composed of BBa_0010 and BBa_0012",
            length: 129,
        },
    ],
    composite: [
        { name: "BBa_K3519010", type: "Composite", description: "araC-araBAD promoter", length: 1469 },
        { name: "BBa_K3519011", type: "Composite", description: "araC-araBAD promoter-mRFP", length: 2318 },
        { name: "BBa_K3519012", type: "Composite", description: "araC-araBAD promoter-DNASEI", length: 2479 },
    ],
}

const linksTable = {
    BBa_J23104: "http://parts.igem.org/Part:BBa_J23104",
    BBa_B0030: "http://parts.igem.org/Part:BBa_B0030",
    BBa_K1694002: "http://parts.igem.org/Part:BBa_K1694002",
    BBa_K243004: "http://parts.igem.org/Part:BBa_K243004",
    BBa_J18918: "http://parts.igem.org/Part:BBa_J18918",
    BBa_K844000: "http://parts.igem.org/Part:BBa_K844000",
    BBa_E1010: "http://parts.igem.org/Part:BBa_E1010",
    BBa_K3409000: "http://parts.igem.org/Part:BBa_K3409000",
    BBa_B0015: "http://parts.igem.org/Part:BBa_B0015",
    BBa_J23107: "http://parts.igem.org/Part:BBa_J23107",
    BBa_B0032: "http://parts.igem.org/Part:BBa_B0032",
    BBa_K3409001: "http://parts.igem.org/Part:BBa_K3409001",
    BBa_K3409002: "http://parts.igem.org/Part:BBa_K3409002",
    BBa_B1005: "http://parts.igem.org/Part:BBa_B1005",
    BBa_K3409008: "http://parts.igem.org/Part:BBa_K3409008",
    BBa_K3409009: "http://parts.igem.org/Part:BBa_K3409009",
    BBa_J23111: "http://parts.igem.org/Part:BBa_J23111",
    BBa_J23118: "http://parts.igem.org/Part:BBa_J23118",
    BBa_J61127: "http://parts.igem.org/Part:BBa_J61127",
    BBa_J61130: "http://parts.igem.org/Part:BBa_J61130",
    BBa_J61118: "http://parts.igem.org/Part:BBa_J61118",
    BBa_J61109: "http://parts.igem.org/Part:BBa_J61109",
    BBa_K3409003: "http://parts.igem.org/Part:BBa_K3409003",
    BBa_K3409004: "http://parts.igem.org/Part:BBa_K3409004",
    BBa_K3409005: "http://parts.igem.org/Part:BBa_K3409005",
    BBa_K3409006: "http://parts.igem.org/Part:BBa_K3409006",
    BBa_K3409007: "http://parts.igem.org/Part:BBa_K3409007",
    BBa_B0015: "http://parts.igem.org/Part:BBa_B0015",
    BBa_K3409010: "http://parts.igem.org/Part:BBa_K3409010",
    BBa_K3409011: "http://parts.igem.org/Part:BBa_K3409011",
    BBa_K3409012: "http://parts.igem.org/Part:BBa_K3409012",
    BBa_K2442101: "http://parts.igem.org/Part:BBa_K2442101",
    BBa_J23118: "http://parts.igem.org/Part:BBa_J23118",
    BBa_B0034: "http://parts.igem.org/Part:BBa_B0034",
    BBa_K2442103: "http://parts.igem.org/Part:BBa_K2442103",
    BBa_E1010: "http://parts.igem.org/Part:BBa_E1010",
    BBa_K3519004: "http://parts.igem.org/Part:BBa_K3519004",
    BBa_B0040: "http://parts.igem.org/Part:BBa_B0040",
    BBa_B0015: "http://parts.igem.org/Part:BBa_B0015",
    BBa_K3519010: "http://parts.igem.org/Part:BBa_K3519010",
    BBa_K3519011: "http://parts.igem.org/Part:BBa_K3519011",
    BBa_K3519012: "http://parts.igem.org/Part:BBa_K3519012",
    BBa_K3409013: "http://parts.igem.org/Part:BBa_K3409013",
}

const initTable = sourceNb => {
    let phase = phase3

    switch (sourceNb) {
        case 1:
            phase = phase1
            break
        case 2:
            phase = phase2
            break
        case 3:
            phase = phase3
            break
    }

    return {
        phase,
        links: linksTable,
        mapName: name =>
            linksTable[name]
                ? `<a href="${linksTable[name]}" target="_blank" rel="noopener noreferrer">${name}</a>`
                : name,
    }
}
