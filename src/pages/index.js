import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {Link} from "gatsby";
import mergeImage from '../images/merge-2.png';
import validateImage from '../images/validate-2.png';
import reuseImage from '../images/reuse-2.png';
import PlaygroundComponent from "../components/playground-clientside";
import modes from "../components/playground/modes";
import {Command} from "react-bootstrap-icons";

const codeExample = `let conf = {
  name = "NiCl",
  version  = "0.0.1$",
  description = "My cool app!"
} in

let SemanticVersion = std.contract.from_validator (fun value =>
  let pattern = "^\\\\d{1,2}\\\\.\\\\d{1,2}(\\\\.\\\\d{1,2})?$" in
  if std.string.is_match pattern value then
    'Ok
  else
    'Error { message = "invalid version number" })
  in

let AppSchema = {
  name | String,
  version | SemanticVersion,
  description | String,
} in

conf | AppSchema`;

const IndexPage = () => {
  return (
      <Layout>
        <main className="landing">
          <section className="landing-section hero">
            <h1 className="hero-title">Better configuration for less</h1>
            <p className="hero-lead">
              Manage complex configurations. Modular, correct and boilerplate-free.
            </p>
            <div className="hero-actions">
              <Link to="/getting-started" className="btn btn-primary btn-hero">Get started</Link>
              <Link to="/playground" className="btn btn-outline-hero btn-hero">Try the playground</Link>
            </div>
          </section>

          <section className="landing-section challenge d-none d-md-block">
            <h2 className="section-title">Try it out. Find the <span className={'landingpage-error'}>error</span>!</h2>
            <p className="section-lead">
              This configuration contains an error. Fix it and press <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (or <kbd>Cmd <Command/>
            </kbd>+<kbd>Enter</kbd>) or click <span className={'btn btn-primary btn-sm disabled'}>Run</span> to try your solution.
            </p>
            <div className={'text-start landingpage-playground-wrapper'}>
              <PlaygroundComponent value={codeExample} fit={'code'} mode={modes.JSON}/>
            </div>
          </section>

          <section className="landing-section features">
            <div className="feature-card">
              <div className="feature-illustration"><img src={mergeImage} alt={""}/></div>
              <div className="feature-body">
                <h3>Merge</h3>
                <p>Write simple, modular blocks. Merge them into a complex configuration.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-illustration"><img src={validateImage} alt={""}/></div>
              <div className="feature-body">
                <h3>Verify & Validate</h3>
                <p>Use (opt-in) static typing to verify functions, if you need to. Let
                type inference do the boring work.</p>

                <p>Use contracts
                  to validate your data and ensure they conform to a given schema.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-illustration"><img src={reuseImage} alt={""}/></div>
              <div className="feature-body">
                <h3>Reuse</h3>
                <p>Don't use hacks, don't reinvent the wheel: Nickel is a
                programming language. Factorize. Reuse the generic parts. Import external libraries.</p>
              </div>
            </div>
          </section>
        </main>
      </Layout>
  )
};

export const Head = () => <Seo />

export default IndexPage
