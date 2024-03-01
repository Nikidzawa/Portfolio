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