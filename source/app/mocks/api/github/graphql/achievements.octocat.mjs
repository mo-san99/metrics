/**Mocked data */
  export default function({faker, query, login = faker.internet.userName()}) {
    console.debug("metrics/compute/mocks > mocking graphql api result > achievements/octocat")
    return ({
      user:{viewerIsFollowing:faker.random.boolean()},
      viewer:{login},
    })
  }
