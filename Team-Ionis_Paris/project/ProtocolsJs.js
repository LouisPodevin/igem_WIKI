const files = {
    "General protocols": {
        "Absorbance reading with a spectrophotometer":
            "https://2020.igem.org/wiki/images/4/4c/T--Ionis_Paris--Absorbance_reading.pdf",
        "Preparation of calcium competent Escherichia coli and heat-shock transformation":
            "https://2020.igem.org/wiki/images/2/2e/T--Ionis_Paris--Preparation_of_calcium.pdf",
        "Resuspension of dry gBlocks Gene Fragments":
            "https://2020.igem.org/wiki/images/4/43/T--Ionis_Paris--Resuspension_dry_gBlocks.pdf",
        "LB agar preparation and plating":
            "https://2020.igem.org/wiki/images/4/47/T--Ionis_Paris--LB_agar_preparation.pdf",
    },
    "Polymer Chain reaction (PCR) protocols": {
        "PCR OneTaq DNA Polymerase": "https://2020.igem.org/wiki/images/5/53/T--Ionis_Paris--PCR_OneTaq_DNA.pdf",
        "Protocol for OneTaq Hot Start Quick-Load 2X Master Mix with Standard Buffer":
            "https://2020.igem.org/wiki/images/0/07/T--Ionis_Paris--Protocol_for_OneTaq.pdf",
        "Protocol for Q5 High-Fidelity 2X Master Mix":
            "https://2020.igem.org/wiki/images/9/98/T--Ionis_Paris--Protocol_for_Q5.pdf",
        "Colony PCR": "https://2020.igem.org/wiki/images/d/d1/T--Ionis_Paris--Colony_PCR.pdf",
        "Gel Migration": "https://2020.igem.org/wiki/images/6/61/T--Ionis_Paris--Gel_Migration.pdf",
        "Q5 hotsart": "https://2020.igem.org/wiki/images/9/9b/T--Ionis_Paris--PCR_Q5_Hot_Start.pdf",
    },

    "Purification protocols": {
        "DNA Gel Extraction Kit": "https://2020.igem.org/wiki/images/0/08/T--Ionis_Paris--DNA_Gel_Extraction.pdf",
        "Monarch DNA PCR &DNA extraction Kit":
            "https://2020.igem.org/wiki/images/3/37/T--Ionis_Paris--PCR_DNA_Cleanup.pdf",
        "DNA Miniprep Kit": "https://2020.igem.org/wiki/images/2/24/T--Ionis_Paris--DNA_Miniprep.pdf",
    },

    "Optimization protocols": {
        DpnI: "https://2020.igem.org/wiki/images/6/6a/T--Ionis_Paris--DpnI.pdf",
        "Shrimp Alkaline Phosphatase (rSAP)":
            "https://2020.igem.org/wiki/images/7/78/T--Ionis_Paris--Shrimp_Alkaline_Phosphatase.pdf",
    },

    "Cloning protocols": {
        "Hifi DNA Assembly Protocol":
            "https://2020.igem.org/wiki/images/a/a6/T--Ionis_Paris--Hifi_DNA_Assembly_protocol.pdf",
        "HiFi DNA Assembly Chemical Transformation Protocol":
            "https://2020.igem.org/wiki/images/7/76/T--Ionis_Paris--HiFi_DNA_Assembly_Chemical.pdf",
        "Restriction enzyme digestion":
            "https://2020.igem.org/wiki/images/e/e8/T--Ionis_Paris--Restriction_enzyme_digestion.pdf",
        "Ligation protocol with Hi-T4 DNA Ligase":
            "https://2020.igem.org/wiki/images/a/a2/T--Ionis_Paris--Ligation_protocol.pdf",
        "Ligation Transformation Protocol":
            "https://2020.igem.org/wiki/images/0/00/T--Ionis_Paris--Ligation_Transformation.pdf",
    },

    "Verification protocols": {
        "Extraction, purification (Ni-TED 150 Packed Columns) and validation (SDS) of McpM production":
            "https://2020.igem.org/wiki/images/7/77/T--Ionis_Paris--Extraction.pdf",
        "Bacterial Immunofluorescence protocol":
            "https://2020.igem.org/wiki/images/f/fe/T--Ionis_Paris--Bacterial_Immunofluorescence.pdf",
        "Agar diffusion assay": "https://2020.igem.org/wiki/images/a/a6/T--Ionis_Paris--Agar_diffusion.pdf",
        "Cleavage with TEV protease": "https://2020.igem.org/wiki/images/f/f8/T--Ionis_Paris--Cleavage_with_TEV.pdf",
    },

    "Shelf Life Determination": {
        Lyophilization: "https://2020.igem.org/wiki/images/a/ac/T--Ionis_Paris--Lyophilization.pdf",
        "CFU Determination": "https://2020.igem.org/wiki/images/3/3d/T--Ionis_Paris--CFU_Determination.pdf",
        "Accelerated Shelf Life Testing Method":
            "https://2020.igem.org/wiki/images/1/10/T--Ionis_Paris--Accelerated_Shelf-Life.pdf",
    },
}

function initViewer() {
    const isFile = data => {
        return typeof data === "string"
    }

    return {
        allData: files,
        currentPath: [],
        getList() {
            let finalPath = this.allData

            for (const path of this.currentPath) {
                finalPath = finalPath[path]
            }

            return finalPath
        },
        isFile,
        back() {
            if (this.currentPath.length !== 0) {
                const newArray = [...this.currentPath]

                newArray.pop()

                this.currentPath = newArray
            }
        },
        isRoot() {
            return this.currentPath.length === 0
        },
        cd(path) {
            this.currentPath = [...this.currentPath, path]
        },
        handleRefreshFeather() {
            this.$nextTick(() => feather.replace())
        },
    }
}
