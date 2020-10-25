const files = {
    January: {
        3: "https://2020.igem.org/wiki/images/4/4c/T--Ionis_Paris--Absorbance_reading.pdf",
        6: "https://2020.igem.org/wiki/images/4/4c/T--Ionis_Paris--Absorbance_reading.pdf",
    },
    February: {
        3: "https://2020.igem.org/wiki/images/4/4c/T--Ionis_Paris--Absorbance_reading.pdf",
        6: "https://2020.igem.org/wiki/images/4/4c/T--Ionis_Paris--Absorbance_reading.pdf",
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
