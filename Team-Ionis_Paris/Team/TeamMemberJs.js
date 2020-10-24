const members = [
    {
        name: "Albane Mabro",
        nickname: "The Early Bird",
        role: "Project Leader",
        field: "Engineering in Biotechnology",
        best:
            "Popping bubble wrap and shouting at the top of our lungs at the end of every busy day for the last 2 weeks before the wiki freeze (you should try, it's very relieving).",
        memory: "Realizing we forgot Restriction Enzyme sites in our prefix when ordering our first BioBrick.",
        isWorth: true,
        picture: window.LINKS.teamMembersAlbane.url,
    },
    {
        name: "Charlotte Duteil",
        nickname: "The Nervous Giggler",
        role: "Lab Head",
        field: "Engineering in Biotechnology",
        best: "To still be able to laugh with my teammates in the lab when things took an unexpected form.",
        memory: "Not being able to see each other during the lock-down and work really hard",
        isWorth: true,
        picture: window.LINKS.teamMembersCharlotte.url,
    },
    {
        name: "Elliot Coquerel",
        nickname: "The Gel Checker",
        role: "Lab Team",
        field: "Engineering in Biotechnology",
        best:
            "That memorable night when we all went to a comedy show where the humorist made fun of each member of the team.",
        memory:
            "Not meeting Omkar from the IISER TIRUPATI Team with whom I have been talking with every single day for the partnership.",
        isWorth: true,
        picture: window.LINKS.teamMembersElliot.url,
    },
    {
        name: "Lucie Pesenti",
        nickname: "The Axolotl",
        role: "Lab Team",
        field: "Engineering in Biotechnology",
        best: "Tidying up the kitchen after the iGEM IONIS Afterwork at our school.",
        memory: "Making a PCR with CaCl2 instead of water.",
        isWorth: true,
        picture: window.LINKS.teamMembersLucie.url,
    },
    {
        name: "Giulia Criseo",
        nickname: "The Princess",
        role: "Funding & Sponsoring Head",
        field: "Engineering in Biotechnology",
        best:
            "Getting to know each member in the team while playing the game «Two truths, one lie». That night we had the best tears of laughter.",
        memory:
            "The day we received iGEM Headquarters’ email saying the big finale will not be taking place in Boston this year.",
        isWorth: true,
        picture: window.LINKS.teamMembersGiulia.url,
    },
    {
        name: "Renaud Eynard",
        nickname: "The Chill one",
        role: "Human Practices Head",
        field: "Engineering in Biotechnology",
        best: "Meeting people who cheers us continuing BacTail as a start-up.",
        memory: "Not being able to meet in person other teams at the giant jamboree.",
        isWorth: true,
        picture: window.LINKS.teamMembersRenaud.url,
    },
    {
        name: "Louis Podevin",
        nickname: "The Small Bladder",
        role: "Web Designer",
        field: "General Engineering",
        best: "All our Team building and it’s not over !",
        memory: "Make Tam think I broke the wiki every week ! He didn’t laugh too much...",
        isWorth: false,
        picture: window.LINKS.teamMembersLouis.url,
    },
    {
        name: "Tâm-Tanguy Tran",
        nickname: "The Savior",
        role: "Web Designer",
        field: "Computer Intelligence Engineering",
        best: "Meet the team during team building.",
        memory: "iGEM’s wiki servers.",
        isWorth: true,
        picture: window.LINKS.teamMembersTam.url,
    },
    {
        name: "Thomas Kobak",
        nickname: "The Professional Crêpe Maker",
        role: "Software Developer",
        field: "General Engineering",
        best: "The never ending jokes that we made about other team members, especially Louis.",
        memory: "The never ending meetings arguing about small details that ended up useless in the end.",
        isWorth: true,
        picture: window.LINKS.teamMembersThomas.url,
    },
    {
        name: "David Padrino",
        nickname: "The Paella Maker",
        role: "Software Developer",
        field: "General Engineering",
        best: "Partnerships with teams from across the World.",
        memory: "Not being able to interact with people.",
        isWorth: true,
        picture: window.LINKS.teamMembersDavid.url,
    },
]

const initTeam = function () {
    return {
        members,
        focusIndex: -1,
        setFocusIndex(position) {
            this.focusIndex = position
        },
    }
}
