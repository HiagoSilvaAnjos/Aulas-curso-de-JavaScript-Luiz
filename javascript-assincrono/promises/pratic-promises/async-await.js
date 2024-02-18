const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = false;
        if (error) return reject(new Error("error in login"));

        setTimeout(() => {
            console.log("User logged")
            return resolve({ email, password });
        }, 1500)

    })
}

const getUserVideos = () => {
    return new Promise((resolve, reject) => {
        const error = false;
        if (error) return reject(new Error("error in get videos"));

        setTimeout(() => {
            return resolve(["videoJS", "videoTS", "videoPy"]);
        }, 1500)
    })
}

const getVideoDetails = (video) => {
    return new Promise((resolve, reject) => {
        const error = false;
        if (error) return reject(new Error("error in videos details"));

        setTimeout(() => {
            return resolve({ title: `title my video is: ${video}` });
        }, 2500)
    })
}

const displayUser = async () => {
    try {

        const user = await loginUser("Hiagosilva@gamil.com", 7777);
        console.log({ user });

        const userVideos = await getUserVideos();
        console.log({ userVideos });

        const detailsVideos = await getVideoDetails(userVideos[1]);
        console.log({ detailsVideos });

    } catch (error) {
        console.log(error.message);
    }
}
displayUser();