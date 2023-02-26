import React from 'react'
import "./aboutus.css"

function AboutUs() {
  return (
    <div>
        <div className='about-us'>
            <h1>About us</h1>
        </div>
            <div className='headline-area'>
                <div className='headline'>
                    <h1>Our story</h1>
                </div>
            </div>
            <div className='about-us-box'>
                <div className='about-us-text'>
                    <p>
                    Die Gründung unserer Website geht auf eine enge Zusammenarbeit zwischen Sebastian Battlogg und Andreas Binder zurück. 
                    <br/><br/>Vor über fünf Jahren kreuzten sich die Wege von Andreas und Sebastian, als Andreas als IT-Lehrer tätig war und Sebastian zu seinen Schülern zählte. Nachdem Sebastian die Handelsakademie beendet hatte und sein Studium an der Wirtschaftsuniversität Wien begann, entschieden sie sich gemeinsam, ihre Talente zu bündeln und diese Website zu erstellen.
                    <br/><br/>Andreas ist ein ausgebildeter Lehrer mit einer Spezialisierung in IT. Seine Fähigkeiten im Unterrichten und in der Technologie halfen ihm, die besten Lernmethoden und -werkzeuge zu entwickeln, um Schüler als auch Studierende bei ihren akademischen Herausforderungen zu unterstützen.
                    <br/><br/>Sebastian studiert derzeit Wirtschafts- und Sozialwissenschaften. Seine Leidenschaft für das Lernen und die Schaffung von Verbindungen haben ihm geholfen, die Vision dieser Nachhilfewebsite zu entwickeln.
                    <br/><br/>Wir sind stolz darauf, eine freundliche und unterstützende Umgebung zu schaffen, in der alle willkommen sind. Wir sind fest davon überzeugt, dass jeder und jede das Potenzial hat, erfolgreich zu sein und wir sind hier, um zu helfen.
                    </p>
                </div>
            </div>
            <div className='headline-area'>
                <div className='headline'>
                    <h1>Our goal</h1>
                </div>
            </div>
            <div className='about-us-box'>
                <div className='about-us-text'>
                    <p>Unser Ziel ist es, Studenten und Schüler dabei zu helfen, ihre akademischen Ziele zu erreichen und ihr volles Potenzial zu entfalten.</p>
                </div>
            </div>
            <div className='description'>
                <div className='description-box'>
                    <h2>Founded</h2>
                    <p>2022</p>
                </div>
                <div className='description-box'>
                    <h2>Purpose</h2>
                    <p>Support</p>
                </div>
                <div className='description-box'>
                    <h3>Headquater</h3>
                    <p>Vienna</p>
                </div>
            </div>
    </div>
  )
}

export default AboutUs