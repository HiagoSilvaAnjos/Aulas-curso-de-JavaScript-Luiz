const loginUser = (email, password, onSuccess, onError) => {
    setTimeout(() => {
        const error = false;

        if (error) return onError(new Error("error in login"));

        return onSuccess({ email, password });
    }, 1500)
}

const getUserVideos = (callback) => {
    setTimeout(() => {
        return callback(["videoJS", "videoTS", "videoPy"]);
    }, 1500);
}

const getVideosDetails = (video, callback) => {
    setTimeout(() => {
        return callback({ title: `title my video is: ${video}` })
    }, 2500)
}

const user = loginUser("hiagosilva@gmail.com", 6666,
    ({ email, password }) => {
        console.log("User logged")
        console.log({ user: { email, password } })
        getUserVideos((arrayVideos) => {
            console.log({ arrayVideos })
            getVideosDetails(arrayVideos[1], (videoDetails) => {
                console.log({ videoDetails })
            })
        })
    },
    (error) => {
        console.log(error.message)
    }
)