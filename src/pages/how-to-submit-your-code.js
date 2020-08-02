import React from "react"
import Layout from "../components/layout";
import {Link} from "gatsby"

const HowToSubmitPage = () => {
    return (
        <Layout>
            <div className="flex-none md:flex">
                <div className="md:w-4/6 md:mr-4">
                    <div className={`pr-4`}>
                        <h1>How to submit your code for review</h1>
                        <p>
                            To submit your code for review create a GitHub repository per challenge and post the GitHub
                            repository link to the coding-challenges channel on the <a
                            href={`https://howtocodewell.net/discord`} target={`_blank`}>HTCW (How To Code Well) Discord
                            server</a>.
                        </p>
                        <p>Each challenge will be reviewed <a href={`https://howtocodewell.net/live`}>live on
                            Twitch</a> at the end of the month
                        </p>
                        <p>Take a look at <Link to={`/`}>this months coding challenge</Link></p>
                        <div className="text-center md:text-left m-1 pt-5 pb-5">
                            <a className="inline-block border rounded py-1 px-3 hover:no-underline"
                               href={"https://howtocodewell.net/discord"}>Submit your challenge now</a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default HowToSubmitPage
