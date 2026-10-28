import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PlaygroundComponent from "../components/playground-clientside";

const PlaygroundPage = () => {
    return (
        <Layout>
                <div className={"container-fluid playground-main-container d-flex flex-column"}>
                    <section className={"row"}>
                        <div className={"col-12 text-center"}>
                            <h1 className="main-title">Playground</h1>
                            Experiment with the Nickel REPL online!
                        </div>
                    </section>
                    <PlaygroundComponent/>
                </div>
        </Layout>
    )
};

export const Head = () => <Seo />

export default PlaygroundPage
