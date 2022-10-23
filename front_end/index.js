import { html, render } from 'https://unpkg.com/htm/preact/standalone.module.js'

const intro = () => {
    return html`
        <ul class="nameList">
            <${link} name="Sean" />
            <${link} name="Gina" />
            <${link} name="Shannon" />
        </ul>
        <${intro_sec}/>
        <${edu_sec}/>
        <${exp_sec}/>
        <${skill_sec}/>
    `
}

const link = ({name}) => {
    return html`<li><a href="/">Hello ${name}!</a></li>`
}

/// create sections for my webpage
const intro_sec = () => html`
    <div class="introduction">
        <h2>Introduction: </h2>
    </div>
`

const edu_sec = () => html`
    <div class="education">
        <h2>Education: </h2>
    </div>
`

const exp_sec = () => html`
    <div class="experience">
        <h2>Experience: </h2>
    </div>
`

const skill_sec = () => html`
    <div class="skills">
        <h2>Skills: </h2>
    </div>
`

render(html`<${intro}  />`, document.body);