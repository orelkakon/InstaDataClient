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
    return [...posts].sort(function (a, b) {
        return b[2] - a[2];
    });
}

export const getMyMostLiked = (posts) => {
    return [...posts].sort(function (a, b) {
        return b[1] - a[1];
    });
}

export const getMyMostPopluar = (posts) => {
    // like is 1 point and comment is 2.5 point  
    return [...posts].sort(function (a, b) {
        return ( (b[1] + (b[2] * 2.5)) - (a[1] + (a[2] * 2.5)) );
    });
}

export const getBestFollowers = (dataList, username) => {
    let bestLikeList = {}
    let bestCommentList = {}
    dataList && dataList.forEach(postData => {
        postData[0] && postData[0].forEach(like => { // likes list
            if (like[1] && like[0] !== username) {  // my follower or not
                like[0] in bestLikeList ? bestLikeList[like[0]] = bestLikeList[like[0]] + 1 : bestLikeList[like[0]] = 1
            }
        })
        postData[1] && postData[1].forEach(comment => { // comments list
            if (comment[1] && comment[0] !== username) {  // my follower or not
                comment[0] in bestCommentList ? bestCommentList[comment[0]] = bestCommentList[comment[0]] + 1 : bestCommentList[comment[0]] = 1
            }
        })
    })
    return [bestLikeList, bestCommentList]
}

export const getBestAdmires = (dataList, username) => {
    let bestLikeList = {}
    let bestCommentList = {}
    dataList && dataList.forEach(postData => {
        postData[0].forEach(like => { // likes list
            if (!like[1] && like[0] !== username) {  // my follower or not
                like[0] in bestLikeList ? bestLikeList[like[0]] = bestLikeList[like[0]] + 1 : bestLikeList[like[0]] = 1
            }
        })
        postData[1].forEach(comment => { // comments list
            if (!comment[1] && comment[0] !== username) {  // my follower or not
                comment[0] in bestCommentList ? bestCommentList[comment[0]] = bestCommentList[comment[0]] + 1 : bestCommentList[comment[0]] = 1
            }
        })
    })
    return [bestLikeList, bestCommentList]
}

export const sortDict = (dict, top) => {
    // Create items array
    var items = Object.keys(dict).map(function (key) {
        return [key, dict[key]];
    });

    // Sort the array based on the second element
    items.sort(function (first, second) {
        return second[1] - first[1];
    });

    // Create a new array with only the first 5 items
    return items.slice(0, top);
}