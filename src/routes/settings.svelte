<script context="module">
  import { client } from "../graphql";

  // Github Bot configuration
  const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
  const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
  const GITHUB_REDIRECT_URI = process.env.GITHUB_REDIRECT_URI;

  // Discord App configuration
  const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;
  const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;
  const DISCORD_REDIRECT_URI = process.env.DISCORD_REDIRECT_URI;

  export async function preload(page, session) {
    if (!session) {
      return this.redirect(401, "/signIn");
    }

    if (page.query && page.query.auth && page.query.code) {
      if (page.query.auth === "discord") {
        const response = await this.fetch(
          "https://discord.com/api/v6/oauth2/token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: Object.entries({
              client_id: DISCORD_CLIENT_ID,
              client_secret: DISCORD_CLIENT_SECRET,
              grant_type: "authorization_code",
              code: page.query.code,
              redirect_uri: DISCORD_REDIRECT_URI,
              scope: "identify email guilds.join"
            })
              .map(e => `${e[0]}=${encodeURIComponent(e[1])}`)
              .join("&")
          }
        )
          .then(resp => {
            if (!resp.ok) {
              // TODO: Handle OAuth error
              return null;
            }

            return resp.json();
          })
          .catch(err => {
            // TODO: Handle OAuth error
            return null;
          });

        if (response) {
          await client(this.fetch).request({
            query: `
            mutation connectDiscordAccount(
              $refreshToken: String!
              $accessToken: String!
            ) {
              connectDiscordAccount(
                refreshToken: $refreshToken,
                accessToken: $accessToken
              ) {
                error {
                  code
                  message
                }
              }
            }
          `,
            variables: {
              refreshToken: response.refresh_token,
              accessToken: response.access_token
            }
          });
        }
      } else if (page.query.auth === "github") {
        const response = await this.fetch(
          "https://github.com/login/oauth/access_token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              client_id: GITHUB_CLIENT_ID,
              client_secret: GITHUB_CLIENT_SECRET,
              code: page.query.code,
              redirect_uri: GITHUB_REDIRECT_URI,
              state: "test"
            })
          }
        )
          .then(async resp => {
            if (!resp.ok) {
              // TODO: Handle OAuth error
              return null;
            }

            const params = await resp.text().then(text => {
              return text.split("&").reduce((acc, param) => {
                const parsedParam = param.match(/(.*)=(.*)/);
                acc[parsedParam ? parsedParam[1] : param] = parsedParam
                  ? parsedParam[2]
                  : true;
                return acc;
              }, {});
            });

            if (params.error) {
              return null;
            }

            return params;
          })
          .catch(err => {
            // TODO: Handle OAuth error
            return null;
          });

        if (response) {
          await client(this.fetch).request({
            query: `
            mutation connectGithubAccount(
              $refreshToken: String!
              $accessToken: String!
            ) {
              connectGithubAccount(
                refreshToken: $refreshToken,
                accessToken: $accessToken
              ) {
                error {
                  code
                  message
                }
              }
            }
          `,
            variables: {
              refreshToken: response.refresh_token,
              accessToken: response.access_token
            }
          });
        }
      }
    }

    const response = await client(this.fetch).request({
      query: `
        query settingsQuery {
          countries {
            id
            name
            code
          }

          me {
            id
            firstName
            lastName
            email
            avatarUrl
            gender
            country {
              id
              name
              code
              zones {
                id
                name
              }
            }
            cityName
            timezone {
              id
              name
              abbreviation
              gmtOffset
            }
            discordAccount {
              id
              username
              avatarHash
              email
              discriminator
            }
            githubAccount {
              id
              nodeId
              username
              avatarUrl
              email
            }
            voyagePreferences {
              id
              tier
              role
            }
          }
        }
      `
    });

    return response;
  }
</script>

<script>
  import { onMount } from "svelte";
  import PersonalInformationForm from "../components/PersonalInformationForm.svelte";
  import LinkedAccounts from "../components/LinkedAccounts.svelte";
  import VoyagePreferencesForm from "../components/VoyagePreferencesForm.svelte";
  import Card from "../components/Card.svelte";
  import Button from "../components/Button.svelte";

  export let me;
  export let countries;



  onMount(() => {
    if (me.avatarUrl) {
      localStorage.setItem("av_url", me.avatarUrl);
      localStorage.setItem("av_alt", `${me.firstName} ${me.lastName}`);
    }
  });
</script>

<main class="py-10">
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <PersonalInformationForm {countries} {me} />

    <div class="hidden sm:block">
      <div class="py-10">
        <div class="border-t border-gray-200" />
      </div>
    </div>

    <LinkedAccounts {me} />

    <div class="hidden sm:block">
      <div class="py-10">
        <div class="border-t border-gray-200" />
      </div>
    </div>

    <VoyagePreferencesForm {me} />
  </div>
</main>
