export default class GitHub {
    static options = {
        headers: {
            'Authorization': 'Bearer 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'
        }
    };

    static getRepos () {
        const getReposURL = `https://api.github.com/users/nikidzawa/repos`
        return fetch(getReposURL, this.options).then(response => response.json())
    }

    static async getImage(repoName) {
        const defaultImageName = "logo.png";
        const getImagesURL = `https://api.github.com/repos/nikidzawa/${repoName}/contents`;
        const files = await fetch(getImagesURL, this.options).then(response => response.json());
        const image = files.find(file => file.name === defaultImageName);
        return image.download_url;
    }
}