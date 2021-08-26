export const getAreNotFollowingBack = (following, followers) => {
    const result = []
    following && following.map(account => !followers.includes(account) && result.push(account))
    return result;
}

export const getINotFollowingBack = (following, followers) => {
    const result = []
    followers && followers.map(account => !following.includes(account) && result.push(account))
    return result;
}

export const getMutualFollows = (following, followers) => {
    const result = []
    following && following.map(account => followers.includes(account) && result.push(account))
    return result;
}

export const getMyMostCommented = (posts) => {
    let topList = posts
    for (let i = 0; i < topList.length; i++) {
        let min = i;
        for (let j = i + 1; j < topList.length; j++) {
            if (topList[j][2] < topList[min][2]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = topList[i];
            topList[i] = topList[min];
            topList[min] = temp;
        }
    }
    return topList;
}



export const getMyMostLiked = (posts) => {
    let topList = posts
    for (let i = 0; i < topList.length; i++) {
        let min = i;
        for (let j = i + 1; j < topList.length; j++) {
            if (topList[j][1] < topList[min][1]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = topList[i];
            topList[i] = topList[min];
            topList[min] = temp;
        }
    }
    return topList;
}

export const getMyMostPopluar = (posts) => {
    let topList = posts
    for (let i = 0; i < topList.length; i++) {
        let min = i;
        for (let j = i + 1; j < topList.length; j++) {
            // like is 1 point and comment is 2.5 point  
            if ( (topList[j][1] + (topList[j][2] * 2.5)) < (topList[min][1] + (topList[min][2] * 2.5)) ){
                min = j;
            }
        }
        if (min !== i) {
            let temp = topList[i];
            topList[i] = topList[min];
            topList[min] = temp;
        }
    }
    return topList;
}