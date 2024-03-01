export default class GitHub {

    options = {
        headers: {
            'Authorization': 'Bearer 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'
        }
    };
    static getRepos () {
        const getReposURL = `https://api.github.com/users/nikidzawa/repos`
        const options = {
            headers: {
                'Authorization': 'Bearer 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'
            }
        };
        return fetch(getReposURL, options).then(response => response.json()
        )
    }

    static async getImage(repoName) {
        const defaultImageName = "logo.png";
        const getImagesURL = `https://api.github.com/repos/nikidzawa/${repoName}/contents`;
        const options = {
            headers: {
                'Authorization': 'Bearer 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'
            }
        };
        const files = await fetch(getImagesURL, options).then(response => response.json());
        const image = files.find(file => file.name === defaultImageName);
        return image.download_url;
    }

}