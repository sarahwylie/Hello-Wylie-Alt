import React from 'react';

function Resume() {
    return (
        <section className='my-5 resume'>
            <h2 className="p-2 display-inline-block strong">Resume</h2>
            <br/>
            <div>View and download my full resume <a href="https://drive.google.com/file/d/1Nndd9jAHWFPYLSzP0e9cJRwjhwmuJkZy/view?usp=sharing" alt="resume" target="_blank" rel="noreferrer">here</a>. 
            You can also access my specialized Cook Systems resume <a href="https://docs.google.com/document/d/1SItoa6ggW6RoZZoWNIp_nIvbpm38cQRe/edit?usp=sharing&ouid=107479961347007881341&rtpof=true&sd=true" alt="resume" target="_blank" rel="noreferrer">here</a>. 
                In the meantime, see if my skills fit your needs below!</div>
            <br/>
            <br/>
            <div id='technical'>
                <div id='techTitle'>
                <h2 className="p-2 display-inline-block strong">Technical Skills</h2>
                <br />
                </div>
                <div id='techSkills'>
                Faker.js | HTML5 | JavaScript | CSS3 | GitHub | FontAwesome | Node.js | Front-End | Back-End | REACT | SEO(SearchEngineOptimization) | GraphQL | Iconic | ES6 | Markdown | Python | Bootstrap | Sequelize | MongoDB | Mongoose | SQL | NoSQL | Jest | Express.js | JQuery | Webpack | API(RESTful,server-side) | Apollo | AJAX | MVC(ModelViewController) | State | Agile | MERN | Bulma | Mobile-Responsiveness | PWA(ProgressiveWebApp) | DOM(DocumentObjectModel) | Redux | JWT(JSONWebTokens) | Context | Stripe | Java | Spring | SpringBoot | JDBC | Jackson | JPA | Cmder | Eclipse | VSCode | PGAdmin | PostgreSQL | Insomnia | IntelliJ IDEA | Babel | Maven
                </div>
            </div>
        </section>
    )
}

export default Resume;