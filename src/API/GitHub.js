import ProjectPattern from "../pages/progects/ProjectPattern";

export default class GitHub {
    static getRepos () {
        const getReposURL = `https://api.github.com/users/nikidzawa/repos`
        return fetch(getReposURL).then(response => response.json()
        )
    }

    static async getImage(repoName) {
        const defaultImageName = "logo.png";
        const getImagesURL = `https://api.github.com/repos/nikidzawa/${repoName}/contents`;
        const files = await fetch(getImagesURL).then(response => response.json());
        const image = files.find(file => file.name === defaultImageName);
        return image.download_url;
    }

}