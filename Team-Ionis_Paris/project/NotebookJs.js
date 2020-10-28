const files = {
    "June 2020": {
        "4<sup>th</sup>": "https://2020.igem.org/wiki/images/8/85/T--Ionis_Paris--Week_1.pdf",
    },
    "July 2020": {
        "1<sup>st</sup>": "https://2020.igem.org/wiki/images/a/ad/T--Ionis_Paris--Week_2.pdf",
        "6<sup>th</sup>": "https://2020.igem.org/wiki/images/b/b1/T--Ionis_Paris--Week_3.pdf",
    },
    "August 2020": {
        "17<sup>th</sup>": "https://2020.igem.org/wiki/images/a/a1/T--Ionis_Paris--Week_4.pdf",
        "24<sup>th</sup>": "https://2020.igem.org/wiki/images/e/e4/T--Ionis_Paris--Week_5.pdf",
        "31<sup>th</sup>": "https://2020.igem.org/wiki/images/f/f6/T--Ionis_Paris--Week_6.pdf",
    },
    "September 2020": {
        "7<sup>th</sup>": "https://2020.igem.org/wiki/images/d/d8/T--Ionis_Paris--Week_7.pdf",
        "14<sup>th</sup>": "https://2020.igem.org/wiki/images/e/eb/T--Ionis_Paris--Week_8.pdf",
        "21<sup>th</sup>": "https://2020.igem.org/wiki/images/e/e5/T--Ionis_Paris--Week_9.pdf",
        "28<sup>th</sup>": "https://2020.igem.org/wiki/images/a/a1/T--Ionis_Paris--Week_10.pdf",
    },
    "October 2020": {
        "5<sup>th</sup>": "https://2020.igem.org/wiki/images/b/ba/T--Ionis_Paris--Week_11.pdf",
        "12<sup>th</sup>": "https://2020.igem.org/wiki/images/8/8c/T--Ionis_Paris--Week_12.pdf",
        "19<sup>th</sup>": "https://2020.igem.org/wiki/images/9/98/T--Ionis_Paris--Week_13.pdf",
        "26<sup>th</sup>": "https://2020.igem.org/wiki/images/3/3e/T--Ionis_Paris--week-14.pdf",
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
