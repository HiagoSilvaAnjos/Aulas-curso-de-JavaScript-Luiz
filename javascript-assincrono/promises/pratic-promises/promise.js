const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = false;
        if (error) return reject(new Error("error in login"));

        setTimeout(() => {
            return resolve({ email, password });
        }, 1500)

    })
}

const getUserVideos = () => {
    return new Promise((resolve, reject) => {
        const error = false;
        if (error) return reject(new Error("error in login"));

        setTimeout(() => {
            return resolve(["videoJS", "videoTS", "videoPy"]);
        }, 1500)
    })
}

const getVideoDetails = (video) => {
    return new Promise((resolve, reject) => {
        const error = false;
        if (error) return reject(new Error("error in login"));

        setTimeout(() => {
            return resolve({ title: `title my video is: ${video}` });
        }, 2500)
    })
}

loginUser("Hiagosilva@gamil.com", 7777)
    .then((dataUser) => {
        console.log("User logged")
        console.log({ dataUser })
        return getUserVideos();
    })
    .then((videos) => {
        console.log({ videos })
        return getVideoDetails(videos[1]);
    })
    .then((videoDetails) => {
        console.log({ videoDetails });
    })
    .catch((err) => {
        console.log(err.message)
    })