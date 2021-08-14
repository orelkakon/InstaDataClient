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